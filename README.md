# Clínica Dental Élite Mérida — Landing Page Premium

Landing page de lujo para clínica dental ficticia. Portfolio demo para agencia web.

**Stack:** Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · React Hook Form · Zod · Nodemailer

---

## Instalación

```bash
cd dentista
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

---

## Configuración del formulario de contacto

```bash
cp .env.example .env.local
```

| Variable | Descripción |
|---|---|
| `SMTP_HOST` | Host SMTP (ej. `smtp.gmail.com`) |
| `SMTP_PORT` | Puerto (default: `587`) |
| `SMTP_SECURE` | `true` SSL / `false` TLS |
| `SMTP_USER` | Email de envío |
| `SMTP_PASS` | App Password |
| `CONTACT_EMAIL` | Email destinatario |

Sin SMTP configurado, los envíos se guardan en `/data/contact-submissions.json`.

---

## Comandos

```bash
npm run dev      # Desarrollo → http://localhost:3000
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # ESLint
```

---

## Estructura

```
dentista/
├── app/
│   ├── layout.tsx          # Fonts, metadata, JSON-LD schema
│   ├── page.tsx            # Composición de las 13 secciones
│   ├── globals.css         # Design tokens, scrollbar, animaciones
│   └── api/contact/        # POST — validación Zod + SMTP/JSON fallback
├── components/
│   ├── Header.tsx          # Nav pill flotante, hamburger morphing
│   ├── Hero.tsx            # Full-screen parallax, 2 CTAs
│   ├── TrustNumbers.tsx    # 4 estadísticas animadas
│   ├── Services.tsx        # 6 servicios, bento asimétrico
│   ├── Technology.tsx      # Split layout, 4 tecnologías
│   ├── Process.tsx         # 3 pasos, timeline
│   ├── Team.tsx            # 2 doctores con credenciales
│   ├── BeforeAfter.tsx     # Slider comparativo (3 casos)
│   ├── Testimonials.tsx    # 5 reseñas, masonry grid
│   ├── FAQ.tsx             # 6 preguntas, accordion animado
│   ├── Location.tsx        # Google Maps embed + horarios
│   ├── ContactForm.tsx     # RHF + Zod + honeypot + estados
│   ├── Footer.tsx          # Logo, nav, RRSS, legal
│   ├── DentalQuiz.tsx      # Widget flotante 4-step → WhatsApp
│   ├── AnimatedCounter.tsx # Contador animado
│   └── ui/                 # Button, Input, Textarea
├── lib/utils.ts
├── data/                   # Fallback JSON submissions
├── .env.example
└── README.md
```

---

## Paleta y tipografía

| Token | Valor |
|---|---|
| Gold | `#C9A84C` |
| Ivory | `#FAFAF7` |
| Night | `#0D1F2D` |
| Anthracite | `#2C2C2C` |
| Platinum | `#E8E8E8` |
| Heading font | Cormorant Garamond |
| Body font | Montserrat |

---

*Todos los datos son ficticios excepto `sayitlouder.dev@gmail.com`.*
