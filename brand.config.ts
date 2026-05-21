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
