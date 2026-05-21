# Prompt — Clínica Dental Élite Mérida

## Prompt originale

Crea una landing page completa per una clinica dentale di lusso fittizia chiamata **Clínica Dental Élite Mérida**, con sede a Mérida, Yucatán, Messico.

**Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, React Hook Form, Zod, Nodemailer.

**Design system:**
- Font: Cormorant Garamond (serif) + Montserrat (sans)
- Colori: `#0A0A0F` (night), `#F5F2EB` (ivory), `#C9A84C` (gold), `#1C1C22` (anthracite)
- Architettura Double-Bezel su ogni card
- Spring physics: `cubic-bezier(0.32,0.72,0,1)` su tutte le transizioni
- Animazioni scroll con Framer Motion `useInView`

**Sezioni (13):**
1. Header — navbar floating pill con hamburger morph e overlay staggered
2. Hero — headline cinematica con parallax e CTA doppio
3. TrustNumbers — contatori animati (pazienti, anni, NPS, garanzia)
4. Services — bento grid asimmetrico con 6 trattamenti
5. Technology — split layout immagine + lista tech con 4 voci
6. Process — 3 step con connector line e offset verticale
7. Team — 2 dottori con card Double-Bezel, specialità e premi
8. BeforeAfter — slider drag antes/después su 3 casi clinici
9. Testimonials — masonry grid 5 recensioni con avatar
10. FAQ — accordion animato con AnimatePresence (6 domande)
11. Location — mappa iframe + orari + CTA WhatsApp/telefono
12. ContactForm — React Hook Form + Zod + SMTP/JSON fallback + honeypot anti-spam
13. Footer — link, social SVG custom, JSON-LD LocalBusiness/Dentist schema

**Widget flottante:** DentalQuiz — 4 step che costruisce un URL WhatsApp personalizzato.

**Vincoli:**
- Tutti i dati sono fittizi tranne l'email reale: `sayitlouder.dev@gmail.com`
- `git init` + commit iniziale: `"Initial commit: Clínica Dental Élite Mérida"`
- SEO: JSON-LD schema LocalBusiness + Dentist

---

## Cosa è stato fatto

### Build iniziale
- Progetto Next.js 15 scaffoldato con tutte e 13 le sezioni
- Configurazione Tailwind CSS v4 con custom tokens (gold, night, ivory, anthracite)
- Google Fonts via `next/font/google`: Cormorant Garamond + Montserrat
- API route `/api/contact` con Nodemailer + fallback JSON su disco
- Widget DentalQuiz flottante (4 step → URL WhatsApp)
- JSON-LD schema nel `<head>` via `app/layout.tsx`
- Build pulita: `✓ Compiled successfully`

### Fix durante la build
- **CSS type error (TS2882):** aggiunto `types/css.d.ts` con `declare module '*.css'`
- **Zod v4 API:** rimosso `required_error` / `errorMap` (non esistono in v4), usato `z.enum([...], 'message')`
- **Lucide icons mancanti:** Instagram, Facebook, Youtube non esportati → SVG inline custom nel Footer
- **Tailwind config:** `darkMode: ['class']` → `darkMode: 'class'`
- **Import Star non usato:** rimosso da Team.tsx

### Refactor `/simplify` (3-agent code review)
- **`useInViewSection` hook** — estratto da 9 componenti che avevano `useRef + useInView` identici
- **`EyebrowBadge` component** — sostituiti 9+ badge span inline con il componente condiviso
- **Contact API route** — rimosso pattern TOCTOU (`fs.existsSync`); `mkdirSync({ recursive: true })` è idempotente
- **`AnimatedCounter`** — rimossa variabile morta `startValue`
- **`ContactForm`** — uniti import React separati (`useState` + `useRef` → unico import)

### Commit history
```
9aa0181 Refactor: DRY hook/badge, fix TOCTOU and dead vars
6ba460b Initial commit: Clínica Dental Élite Mérida
072ee90 Initial commit from Create Next App
```

---

## Skills utilizzate

### `/high-end-visual-design`
Attivata **prima della generazione** per calibrare il design system. Impone:
- Double-Bezel architecture su ogni card/container
- Spring physics custom `cubic-bezier(0.32,0.72,0,1)` su tutte le transizioni
- Section padding minimo `py-28 md:py-40`
- Eyebrow badge pill prima di ogni H2
- Button-in-button trailing icon pattern sui CTA
- Scroll entry animations via Framer Motion (no window.scroll listener)
- Nessun font generico (no Inter, Roboto, Arial)

### `/stop-slop`
Attivata **durante la generazione** per eliminare prose AI generica. Regole applicate:
- Zero filler phrases ("innovative", "cutting-edge", "seamlessly")
- Voce attiva con soggetto umano concreto
- Claim specifici e verificabili (dosi radiazione, lux microscopio, micron scanner)
- Nessun contrasto binario ("Not X. But Y.")
- Variazione ritmo frasi — niente tre staccati di fila

### `/simplify`
Attivata **dopo la build** per pulire il codice. Tre agenti paralleli:
- **Code Reuse:** ha identificato `useRef+useInView` duplicato 9×, badge span duplicato 9× → estratti hook e componente
- **Code Quality:** ha trovato TOCTOU in API route, dead var in AnimatedCounter, import duplicati
- **Efficiency:** nessun problema di performance (animazioni su transform/opacity, no layout-triggering props, no backdropblur su elementi scrollanti)
