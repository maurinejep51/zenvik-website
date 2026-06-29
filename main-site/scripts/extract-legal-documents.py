#!/usr/bin/env python3
"""Convert the approved DOCX legal documents into frontend-ready structured data."""

import json
import re
from pathlib import Path
from zipfile import ZipFile
from xml.etree import ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "legal_documents"
OUTPUT_FILE = ROOT / "src" / "data" / "legalContent.js"
METADATA_FILE = ROOT / "src" / "data" / "legalDocuments.js"

W_NS = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
W = f"{{{W_NS}}}"

DOCUMENTS = [
    {
        "key": "terms",
        "file": "Terms & Conditions.docx",
        "title": "Terms & Conditions",
        "shortTitle": "Terms",
        "slug": "terms-and-conditions",
        "description": "The legal terms governing the use of Zenvik Technologies services.",
    },
    {
        "key": "privacy",
        "file": "Privacy Policy.docx",
        "title": "Privacy Policy",
        "shortTitle": "Privacy",
        "slug": "privacy-policy",
        "description": "How Zenvik Technologies handles personal information and service data.",
    },
    {
        "key": "refund",
        "file": "Refund Policy.docx",
        "title": "Refund Policy",
        "shortTitle": "Refunds",
        "slug": "refund-policy",
        "description": "Refund eligibility, request procedures, timelines, and conditions.",
    },
    {
        "key": "aup",
        "file": "Acceptable Use Policy (AUP).docx",
        "title": "Acceptable Use Policy (AUP)",
        "shortTitle": "Acceptable Use",
        "slug": "acceptable-use-policy",
        "description": "The standards for responsible use of Zenvik services and infrastructure.",
    },
    {
        "key": "sla",
        "file": "Service Level Agreement (SLA).docx",
        "title": "Service Level Agreement (SLA)",
        "shortTitle": "Service Levels",
        "slug": "service-level-agreement",
        "description": "Service availability, support commitments, maintenance, and limitations.",
    },
    {
        "key": "cookies",
        "file": "Cookie Policy.docx",
        "title": "Cookie Policy",
        "shortTitle": "Cookies",
        "slug": "cookie-policy",
        "description": "How cookies and similar technologies are used across Zenvik services.",
    },
    {
        "key": "copyright",
        "file": "Copyright Policy.docx",
        "title": "Copyright Policy",
        "shortTitle": "Copyright",
        "slug": "copyright-policy",
        "description": "Copyright ownership, permitted use, and infringement procedures.",
    },
    {
        "key": "dpa",
        "file": "Data Processing Agreement (DPA).docx",
        "title": "Data Processing Agreement (DPA)",
        "shortTitle": "Data Processing",
        "slug": "data-processing-agreement",
        "description": "The responsibilities governing personal data processing for clients.",
    },
    {
        "key": "accessibility",
        "file": "Accessibility Statement.docx",
        "title": "Accessibility Statement",
        "shortTitle": "Accessibility",
        "slug": "accessibility-statement",
        "description": "Zenvik's commitment to accessible digital services and continuous improvement.",
    },
    {
        "key": "responsibleAi",
        "file": "Responsible AI Policy.docx",
        "title": "Responsible AI Policy",
        "shortTitle": "Responsible AI",
        "slug": "responsible-ai-policy",
        "description": "The principles guiding responsible, secure, and transparent use of AI.",
    },
]


def clean_text(value):
    return re.sub(r"\s+", " ", value or "").strip()


def paragraph_text(paragraph):
    parts = []
    for node in paragraph.iter():
        if node.tag == f"{W}t":
            parts.append(node.text or "")
        elif node.tag in {f"{W}tab", f"{W}br", f"{W}cr"}:
            parts.append(" ")
    return clean_text("".join(parts))


def paragraph_style(paragraph):
    style = paragraph.find(f"./{W}pPr/{W}pStyle")
    return style.get(f"{W}val") if style is not None else "Normal"


def list_level(paragraph):
    level = paragraph.find(f"./{W}pPr/{W}numPr/{W}ilvl")
    if level is None:
        return None
    return int(level.get(f"{W}val", "0"))


def is_primary_section(style, text):
    if re.match(r"^\d+\.\s+", text):
        return True
    return style == "Heading1"


def section_id(document_slug, title, index):
    normalized = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")
    return f"{document_slug}-{normalized or f'section-{index}'}"


def parse_document(config):
    source = SOURCE_DIR / config["file"]
    with ZipFile(source) as archive:
        root = ET.fromstring(archive.read("word/document.xml"))

    body = root.find(f".//{W}body")
    sections = []
    current_section = None
    title_consumed = False

    for element in body:
        if element.tag != f"{W}p":
            continue

        text = paragraph_text(element)
        if not text:
            continue

        style = paragraph_style(element)
        level = list_level(element)

        if not title_consumed and style.startswith("Heading"):
            title_consumed = True
            continue

        if style.startswith("Heading") and is_primary_section(style, text):
            current_section = {
                "title": text,
                "id": section_id(config["slug"], text, len(sections) + 1),
                "blocks": [],
            }
            sections.append(current_section)
            continue

        if current_section is None:
            current_section = {
                "title": "Overview",
                "id": f"{config['slug']}-overview",
                "blocks": [],
            }
            sections.append(current_section)

        if style.startswith("Heading"):
            block = {
                "type": "heading",
                "text": text,
                "level": int(style.replace("Heading", "") or "3"),
            }
        elif level is not None:
            block = {"type": "listItem", "text": text, "level": level}
        else:
            block = {"type": "paragraph", "text": text}

        current_section["blocks"].append(block)

    return {
        "key": config["key"],
        "title": config["title"],
        "shortTitle": config["shortTitle"],
        "href": f"/legal#{config['slug']}",
        "id": config["slug"],
        "description": config["description"],
        "sections": sections,
    }


def main():
    documents = [parse_document(config) for config in DOCUMENTS]
    payload = json.dumps(documents, ensure_ascii=False, indent=2)
    output = (
        "// Generated from main-site/legal_documents/*.docx.\n"
        "// Run `python3 scripts/extract-legal-documents.py` after approved policy updates.\n\n"
        f"export const legalContent = {payload}\n"
    )
    OUTPUT_FILE.write_text(output, encoding="utf-8")

    metadata = [
        {key: document[key] for key in ("key", "title", "shortTitle", "href", "id", "description")}
        for document in documents
    ]
    metadata_payload = json.dumps(metadata, ensure_ascii=False, indent=2)
    metadata_output = (
        "// Generated from the legal document manifest in scripts/extract-legal-documents.py.\n\n"
        f"export const legalDocuments = {metadata_payload}\n"
    )
    METADATA_FILE.write_text(metadata_output, encoding="utf-8")

    print(
        f"Wrote {OUTPUT_FILE.relative_to(ROOT)} and "
        f"{METADATA_FILE.relative_to(ROOT)} with {len(documents)} documents."
    )


if __name__ == "__main__":
    main()
