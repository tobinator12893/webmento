# Webmento Website

One-Page-Website für Webmento – faire Websites für lokale Betriebe.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (Animationen)
- **Lucide React** (Icons)

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

## Deploy auf Vercel

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

### Option 2: GitHub + Vercel

1. Repository auf GitHub erstellen und Code pushen
2. Auf [vercel.com](https://vercel.com) einloggen
3. "New Project" → GitHub-Repo auswählen
4. Framework: **Next.js** (automatisch erkannt)
5. Deploy klicken

### Option 3: Direkt mit Drag & Drop

```bash
npm run build
# Dann den `out/`-Ordner auf vercel.com/new droppen
```

## Anpassen

### E-Mail-Adresse ändern

In `components/sections/Contact.tsx` die E-Mail-Adresse `hallo@webmento.de` durch deine eigene ersetzen.

### Farben

In `tailwind.config.ts` → `theme.extend.colors`.

### Inhalte

Alle Texte, Preise und Informationen sind direkt in den Section-Komponenten unter `components/sections/` zu finden.

## Struktur

```
webmento-site/
├── app/
│   ├── layout.tsx       # Root-Layout, Meta-Tags
│   ├── page.tsx         # One-Pager (alle Sections)
│   └── globals.css      # Tailwind + Custom Animationen
├── components/
│   ├── sections/        # Alle Page-Sections
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── Process.tsx
│   │   ├── Pricing.tsx
│   │   ├── CTASection.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/
│       └── PastelGradientBackground.tsx
├── lib/
│   └── utils.ts
└── tailwind.config.ts
```
