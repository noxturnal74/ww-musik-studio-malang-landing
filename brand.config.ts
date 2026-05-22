export const brandConfig = {
  "slug": "ww-musik-studio",
  "repo": "ww-musik-studio-malang-landing",
  "brandName": "WW Musik Studio",
  "monogram": "WW",
  "layout": "studio",
  "category": "Music studio and rehearsal rental",
  "address": "Jl. Langsep Bar. No.1, Pisang Candi, Malang",
  "contact": "WhatsApp and email via Linktree",
  "hours": "Daily 10:00-22:00, session slots by confirmation",
  "publicLink": "https://linktr.ee/wwmusik.studio",
  "instagram": "https://www.instagram.com/wwmusik.studio",
  "theme": {
    "bg": "#0b0b0d",
    "ink": "#fff7ea",
    "muted": "#b6aa9a",
    "accent": "#ff3f6c",
    "accent2": "#ffd166",
    "panel": "#17171b"
  },
  "dna": {
    "visual": "Backstage performance system with waveform strips, equipment ledgers, and room-booking boards.",
    "business": "Convert musicians into rehearsal, recording, mixing, mastering, and jingle production sessions.",
    "story": "Visitor hears the studio promise, selects room/session type, checks gear, sees workflow, then books a slot.",
    "emotion": "Creative, loud, technical, credible.",
    "type": "Condensed performance display with clean studio-spec UI.",
    "motion": "Equalizer pulses, horizontal waveform drift, section cuts that feel like track markers.",
    "layout": "Session control board with room specs and production pipeline.",
    "conversion": "Primary route is studio booking; secondary route is production consultation.",
    "photo": "Dim rehearsal rooms, microphones, amps, engineer desk, musicians in session.",
    "unique": "It feels like a studio console, not a generic creative agency landing page."
  },
  "metrics": [
    "Since 1994 WW Musik ecosystem",
    "Recording and mixing",
    "Band rehearsal",
    "Jingle production"
  ],
  "packages": [
    {
      "name": "Room Hour",
      "price": "from Rp60k",
      "note": "band rehearsal slot"
    },
    {
      "name": "Tracking Session",
      "price": "from Rp250k",
      "note": "recording block"
    },
    {
      "name": "Mix + Master",
      "price": "from Rp450k",
      "note": "single-song finishing"
    }
  ],
  "operations": [
    "Room calendar",
    "Equipment list",
    "Engineer briefing",
    "Audio sample deck",
    "Session deposit"
  ],
  "workflow": [
    "Choose room or production",
    "Send band lineup",
    "Confirm slot",
    "Arrive for setup",
    "Receive session recap"
  ],
  "proof": [
    "Linktree lists rehearsal, recording, mixing, mastering, arrangement, music, and jingle production.",
    "Official WW Musik profile states long-running Malang music market presence.",
    "Dealer background supports equipment credibility."
  ],
  "team": [
    "Studio admin",
    "Recording engineer",
    "Session assistant"
  ],
  "testimonials": [
    "Gear list jelas bikin band lebih siap.",
    "Workflow rekaman terasa rapi dari booking sampai output."
  ],
  "faqs": [
    "Can we book hourly rehearsal?",
    "What equipment is included?",
    "Can you handle jingle production?"
  ],
  "policies": [
    "Slots are held after admin confirmation.",
    "Late setup time counts toward session.",
    "Production revisions follow package agreement."
  ],
  "sourceLinks": [
    {
      "label": "WW Musik Studio Linktree",
      "url": "https://linktr.ee/wwmusik.studio"
    },
    {
      "label": "WW Musik profile",
      "url": "https://www.wwmusik.com/?page_id=321"
    },
    {
      "label": "WW Musik Instagram",
      "url": "https://www.instagram.com/wwmusik.studio"
    }
  ]
} as const;

export type BrandConfig = typeof brandConfig;
