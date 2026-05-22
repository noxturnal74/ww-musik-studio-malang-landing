export const brandConfig = {
  "slug": "ww-musik-studio",
  "repo": "ww-musik-studio-malang-landing",
  "brandName": "WW Musik Studio",
  "monogram": "WW",
  "category": "Music studio and rehearsal rental",
  "location": "Pisang Candi studio area",
  "address": "Jl. Langsep Bar. No.1, Pisang Candi, Malang",
  "contact": "WhatsApp and email via Linktree",
  "publicLink": "https://linktr.ee/wwmusik.studio",
  "instagram": "https://www.instagram.com/wwmusik.studio",
  "designConcept": "Interactive Storytelling / performance studio landing",
  "conversionGoal": "Guide musicians from rehearsal intent to recording, mixing, mastering, and booking with a bold studio narrative.",
  "proofPoints": [
    "Studio profile lists rehearsal, recording, mixing, mastering, arrangement, music, and jingle production.",
    "Official WW Musik profile says the business has served Malang's music market since 1994.",
    "Dealer and sub-distributor background supports a stronger equipment and expert-consultation section."
  ],
  "sourceLinks": [
    {
      "label": "WW Musik Studio Linktree",
      "url": "https://linktr.ee/wwmusik.studio"
    },
    {
      "label": "WW Musik official profile",
      "url": "https://www.wwmusik.com/?page_id=321"
    },
    {
      "label": "WW Musik Studio Instagram",
      "url": "https://www.instagram.com/wwmusik.studio"
    }
  ],
  "theme": {
    "bg": "#0f1012",
    "accent": "#e33f64",
    "accent2": "#ffd166",
    "paper": "#fff8ee"
  },
  "nav": [
    "Rooms",
    "Gear",
    "Recording",
    "Book"
  ],
  "hero": {
    "eyebrow": "Rehearsal, recording, mixing, mastering",
    "title": "A studio page built for bands, producers, and brand jingles.",
    "body": "A bold performance-focused profile for rehearsal rooms, recording sessions, mixing, mastering, arrangements, and commercial music production.",
    "cta": "Book Studio Time"
  },
  "sections": [
    {
      "id": "rooms",
      "kicker": "Studio Rooms",
      "title": "Practice rooms that are easy to understand before booking.",
      "items": [
        "Band rehearsal",
        "Hourly rental",
        "Session planning"
      ]
    },
    {
      "id": "equipment",
      "kicker": "Equipment",
      "title": "Gear and room details framed for musicians, not casual visitors.",
      "items": [
        "Backline setup",
        "Mic-ready room",
        "Control workflow"
      ]
    },
    {
      "id": "recording",
      "kicker": "Recording and Practice",
      "title": "From demo tracks to commercial jingles.",
      "items": [
        "Recording session",
        "Mixing and mastering",
        "Jingle production"
      ]
    }
  ],
  "layout": "stage"
} as const;

export type BrandConfig = typeof brandConfig;
