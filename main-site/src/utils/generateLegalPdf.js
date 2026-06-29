const PAGE_WIDTH = 210
const PAGE_HEIGHT = 297
const MARGIN_X = 18
const CONTENT_WIDTH = PAGE_WIDTH - (MARGIN_X * 2)
const CONTENT_TOP = 43
const CONTENT_BOTTOM = 273

const BLUE = [4, 58, 126]
const GOLD = [223, 164, 8]
const DARK = [15, 23, 42]
const SLATE = [51, 65, 85]
const MUTED = [100, 116, 139]

async function loadImageData(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Unable to load PDF image: ${url}`)

  const blob = await response.blob()
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

function formatGeneratedAt() {
  return new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(new Date())
}

export async function generateLegalPdf(document) {
  const [{ jsPDF }, logoData] = await Promise.all([
    import("jspdf"),
    loadImageData("/logo.png"),
  ])

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: true,
    putOnlyUsedFonts: true,
  })

  const generatedAt = formatGeneratedAt()
  const tocLinks = []
  const sectionPages = new Map()

  pdf.setProperties({
    title: `${document.title} | Zenvik Technologies Ltd`,
    subject: "Legal Center document",
    author: "Zenvik Technologies Ltd",
    creator: "Zenvik Technologies Ltd Legal Center",
  })

  const drawWatermark = () => {
    const opacity = pdf.GState ? new pdf.GState({ opacity: 0.045 }) : null
    if (opacity) pdf.setGState(opacity)
    pdf.setFont("helvetica", "bold")
    pdf.setFontSize(24)
    pdf.setTextColor(...BLUE)
    pdf.text("ZENVIK TECHNOLOGIES LTD", PAGE_WIDTH / 2, PAGE_HEIGHT / 2, {
      align: "center",
      angle: 42,
    })
    if (opacity) pdf.setGState(new pdf.GState({ opacity: 1 }))
  }

  const drawHeader = () => {
    drawWatermark()

    pdf.addImage(logoData, "PNG", MARGIN_X, 12, 31, 12, undefined, "FAST")

    pdf.setTextColor(...BLUE)
    pdf.setFont("helvetica", "bold")
    pdf.setFontSize(9.5)
    pdf.text("Legal Center | Zenvik Technologies Ltd", PAGE_WIDTH / 2, 15, { align: "center" })

    pdf.setTextColor(...DARK)
    pdf.setFontSize(13)
    const titleLines = pdf.splitTextToSize(document.title, 78)
    pdf.text(titleLines, PAGE_WIDTH / 2, 21, { align: "center", lineHeightFactor: 1.1 })

    pdf.setTextColor(...SLATE)
    pdf.setFontSize(7.5)
    pdf.setFont("helvetica", "bold")
    pdf.text("Version 1.0", PAGE_WIDTH - MARGIN_X, 13.5, { align: "right" })
    pdf.text(`Generated: ${generatedAt}`, PAGE_WIDTH - MARGIN_X, 18.5, { align: "right" })
    pdf.text("Last Updated: June 2026", PAGE_WIDTH - MARGIN_X, 23.5, { align: "right" })

    pdf.setDrawColor(...BLUE)
    pdf.setLineWidth(0.45)
    pdf.line(MARGIN_X, 34, PAGE_WIDTH - MARGIN_X, 34)
  }

  const addPage = () => {
    pdf.addPage()
    drawHeader()
    return CONTENT_TOP
  }

  drawHeader()
  let y = CONTENT_TOP

  const ensureSpace = (requiredHeight) => {
    if (y + requiredHeight <= CONTENT_BOTTOM) return
    y = addPage()
  }

  const writeWrappedText = ({
    text,
    x = MARGIN_X,
    width = CONTENT_WIDTH,
    font = "normal",
    fontSize = 9.5,
    color = SLATE,
    lineHeight = 5.2,
    gapAfter = 2.8,
  }) => {
    pdf.setFont("helvetica", font)
    pdf.setFontSize(fontSize)
    pdf.setTextColor(...color)

    const lines = pdf.splitTextToSize(text, width)
    let lineIndex = 0

    while (lineIndex < lines.length) {
      if (CONTENT_BOTTOM - y < lineHeight) {
        y = addPage()
      }

      const availableLines = Math.max(1, Math.floor((CONTENT_BOTTOM - y) / lineHeight))
      const pageLines = lines.slice(lineIndex, lineIndex + availableLines)
      pdf.text(pageLines, x, y, { lineHeightFactor: lineHeight / (fontSize * 0.3528) })
      y += pageLines.length * lineHeight
      lineIndex += pageLines.length

      if (lineIndex < lines.length) y = addPage()
    }

    y += gapAfter
  }

  pdf.setFont("helvetica", "bold")
  pdf.setFontSize(17)
  pdf.setTextColor(...BLUE)
  pdf.text("Table of Contents", MARGIN_X, y)
  y += 9

  pdf.setDrawColor(...GOLD)
  pdf.setLineWidth(0.8)
  pdf.line(MARGIN_X, y - 4, MARGIN_X + 25, y - 4)

  document.sections.forEach((section) => {
    ensureSpace(6)
    pdf.setFont("helvetica", "normal")
    pdf.setFontSize(9)
    pdf.setTextColor(...SLATE)
    const label = section.title
    const labelLines = pdf.splitTextToSize(label, CONTENT_WIDTH)
    const linkY = y
    pdf.text(labelLines, MARGIN_X, y, { lineHeightFactor: 1.25 })
    tocLinks.push({
      page: pdf.getNumberOfPages(),
      x: MARGIN_X,
      y: linkY - 3.5,
      width: CONTENT_WIDTH,
      height: labelLines.length * 4.5,
      sectionId: section.id,
    })
    y += labelLines.length * 4.5 + 1.5
  })

  y = addPage()

  document.sections.forEach((section) => {
    ensureSpace(16)
    sectionPages.set(section.id, pdf.getNumberOfPages())

    const headingLines = pdf.splitTextToSize(section.title, CONTENT_WIDTH - 10)
    const headingBoxHeight = Math.max(11, (headingLines.length * 5.5) + 4)
    pdf.setFillColor(248, 251, 255)
    pdf.setDrawColor(209, 224, 242)
    pdf.roundedRect(MARGIN_X, y - 6, CONTENT_WIDTH, headingBoxHeight, 2, 2, "FD")
    pdf.setFont("helvetica", "bold")
    pdf.setFontSize(13)
    pdf.setTextColor(...BLUE)
    pdf.text(headingLines, MARGIN_X + 5, y, { lineHeightFactor: 1.15 })
    y += headingBoxHeight + 1

    section.blocks.forEach((block) => {
      if (block.type === "heading") {
        ensureSpace(12)
        writeWrappedText({
          text: block.text,
          font: "bold",
          fontSize: 10.5,
          color: BLUE,
          lineHeight: 5.4,
          gapAfter: 2.5,
        })
        return
      }

      if (block.type === "listItem") {
        const indent = Math.min(block.level, 3) * 5
        ensureSpace(7)
        pdf.setFillColor(...GOLD)
        pdf.circle(MARGIN_X + 1.2 + indent, y - 1.2, 0.75, "F")
        writeWrappedText({
          text: block.text,
          x: MARGIN_X + 5 + indent,
          width: CONTENT_WIDTH - 5 - indent,
          lineHeight: 5.1,
          gapAfter: 1.8,
        })
        return
      }

      writeWrappedText({
        text: block.text,
        lineHeight: 5.2,
        gapAfter: 2.8,
      })
    })

    y += 3
  })

  tocLinks.forEach((link) => {
    const destinationPage = sectionPages.get(link.sectionId)
    if (!destinationPage) return
    pdf.setPage(link.page)
    pdf.link(link.x, link.y, link.width, link.height, { pageNumber: destinationPage })
  })

  const totalPages = pdf.getNumberOfPages()
  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber += 1) {
    pdf.setPage(pageNumber)
    pdf.setDrawColor(209, 224, 242)
    pdf.setLineWidth(0.25)
    pdf.line(MARGIN_X, 280, PAGE_WIDTH - MARGIN_X, 280)

    pdf.setFont("helvetica", "normal")
    pdf.setFontSize(7)
    pdf.setTextColor(...MUTED)
    pdf.text("© 2026 Zenvik Technologies Ltd. All Rights Reserved.", MARGIN_X, 285)
    pdf.textWithLink("Website: https://zenviktechnologies.com/", PAGE_WIDTH / 2, 285, {
      align: "center",
      url: "https://zenviktechnologies.com/",
    })
    pdf.text(`Page ${pageNumber} of ${totalPages}`, PAGE_WIDTH - MARGIN_X, 285, { align: "right" })
  }

  pdf.save(`zenvik-technologies-ltd-${document.id}.pdf`)
}
