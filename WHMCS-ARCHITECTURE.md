# WHMCS Architecture Plan

## Goal
Make portal.zenviktechnologies.com visually match zenviktechnologies.com while keeping WHMCS safe and upgrade-friendly.

## WHMCS Rule
Do not edit WHMCS core files.

## Safe Theme Method
Copy:

/templates/six/

To:

/templates/zenvik/

Only customize:

/templates/zenvik/

## Portal Site Repo Structure

portal-site/
│
├── whmcs-theme/
│   └── zenvik/
│
├── shared-assets/
│   ├── css/
│   ├── js/
│   └── images/
│
└── docs/

## WHMCS Areas to Customize
- Header
- Footer
- Login page
- Register page
- Cart pages
- Checkout pages
- Client dashboard
- Product cards
- Domain search
- Invoice/payment pages

## Shared Brand Rules
Use the same:
- Logo
- Primary Blue: #043a7e
- Gold Accent: #7a6200
- CTA Orange: #dfa408
- Button style
- Card style
- SaaS spacing
- Footer structure

## Safety
If theme breaks:
- switch back to Six
- restore backup
- fix locally
- redeploy only after testing
