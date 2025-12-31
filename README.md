# SOVN

**The consent layer between human creativity and artificial intelligence.**

---

## Who This Is For

- **Artists** who want sovereignty over how AI uses their music, stems, and vocals
- **Developers** building AI music products who need legally-cleared, consent-verified audio data
- **Labels and industry players** seeking a standard infrastructure for ethical AI licensing

## Who This Is NOT For

- Those looking to scrape or acquire unlicensed training data
- Artists unwilling to engage with AI music licensing at any level
- Developers seeking free or gray-market audio datasets
- Anyone expecting a marketplace, streaming service, or distribution platform

---

## Current State

**Status:** Frontend MVP (UI Complete, Backend Pending)

This version delivers a fully functional frontend prototype demonstrating the complete user experience for both artists and developers. All interfaces are built; backend integration is the next phase.

### What's Been Built

**Landing Experience**
- Manifesto and value proposition
- Dual-path CTAs (Artist Portal / Developer API)
- Animated hero with protocol branding

**Artist Portal** (`/artist/*`)
- **Upload** — Drag-drop interface for tracks, stems, and vocals with metadata forms
- **Library** — Track listing with filtering by type and license status
- **Permissions** — Granular AI permission toggles (training/generation) with tiered pricing
- **Payouts** — Earnings dashboard with transaction history
- **Usage Logs** — Real-time monitoring of API access to your audio

**Developer Portal** (`/developer/*`)
- **Browse** — Searchable catalog with filters (genre, mood, BPM, asset type, permissions)
- **Licenses** — License management dashboard with permission indicators
- **API Keys** — Key generation and management interface
- **Usage Reports** — Request analytics and endpoint breakdown
- **Documentation** — Interactive API docs with copy-to-clipboard code examples

---

## Diagnosis of the Problem

The AI music industry was built on extraction. Billions of songs, voices, and stems were scraped without consent, compensation, or control. Artists discovered their sound inside AI models they never approved. Developers built products on creativity they never paid for.

**The core failure:** There was no consent infrastructure. No system existed where artists could define terms, where developers could verify rights, and where compensation flowed automatically. The relationship between human creativity and AI was never built—it was bypassed entirely.

This creates three cascading problems:
1. **Artists have no agency** — their legacy is used without permission or payment
2. **Developers face legal exposure** — every training dataset is a potential lawsuit
3. **The industry has no standard** — ethical AI music cannot scale without infrastructure

---

## Guiding Policy

**Be the infrastructure, not the product.**

SOVN is not a tool. It is not a marketplace. It is the protocol layer—the single point of consent verification between all artists and all AI systems.

**Core principles:**
- **Artist sovereignty is absolute** — creators set terms (training allowed, generation allowed, or neither), and those terms are permanent and enforceable
- **Developer clarity is non-negotiable** — one API, one licensing path, zero legal ambiguity
- **Scale requires a standard** — SOVN succeeds when it becomes the infrastructure that labels, independents, and AI companies align around

---

## Strategy 1: The Artist Vault

**Objective:** Establish SOVN as the canonical source of consent-verified music assets.

**What this version does:**
- Provides the complete upload flow for tracks, stems, and vocals
- Implements granular permission controls (training/generation toggles)
- Displays library management with license status tracking
- Shows payout projections and usage monitoring interfaces

**Next actions:**
- Connect to backend storage (lossless audio preservation)
- Implement real payment processing and automatic splits
- Partner with independent artists and small labels for initial catalog

---

## Strategy 2: The Developer API

**Objective:** Make SOVN the path of least resistance for ethical AI audio data.

**What this version does:**
- Provides browsable catalog UI with full filtering capabilities
- Shows license management and API key interfaces
- Includes interactive documentation with endpoint examples
- Displays usage analytics and rate limit information

**Next actions:**
- Build REST API endpoints (`/v1/audio/search`, `/v1/audio/download`, `/v1/licenses`)
- Implement authentication and rate limiting
- Create batch licensing for training datasets with audit trails

---

## The Outcome

When both strategies succeed, SOVN becomes the bridge where AI earns the right to human creativity—or doesn't cross.

Artists retain sovereignty. Developers build cleanly. The industry has its standard.

**SOVN.** The protocol for the next century of sound.

---

## Tech Stack

- React 19 + Vite 7
- Tailwind CSS 4
- Framer Motion
- React Router 7
- Lucide Icons

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## License

Proprietary. All rights reserved.
