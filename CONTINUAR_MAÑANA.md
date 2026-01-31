# CONTINUAR MAÑANA - Proyecto AltFinca

---

## SECCIÓN 1: RESUMEN DE LO COMPLETADO HOY

### Investigación de infraestructura:
- **Hosting:** Cloudflare Pages (gratis, recomendado)
- **Email profesional:** Google Workspace (~7€/mes)
- **Dominios:** Porkbun (altfinca.com + altfinca.es ~20€/año)
- **Email marketing:** Brevo Free (300 emails/día)
- **Coste total estimado:** ~8.50€/mes

### Naming:
- **Marca elegida:** AltFinca
- **Dominios a comprar:** altfinca.com + altfinca.es
- Ambos verificados como disponibles

### Desarrollo completado:
- Proyecto Next.js 14 con TypeScript, Tailwind, Framer Motion
- Todas las páginas creadas (Home, Subastas, Fincas, Campings, Hoteles, Contacto, Legal)
- Componentes reutilizables (Header, Footer, Hero, Forms, etc.)
- Formularios conectados a webhook (pendiente URL real)
- WhatsApp flotante
- Cookie banner RGPD
- Build exitoso

---

## SECCIÓN 2: LO QUE FALTA POR HACER

### Inmediato (hoy o mañana):
1. **Comprar dominios en Porkbun:**
   - https://porkbun.com
   - altfinca.com (~$11/año)
   - altfinca.es (~$9/año)

2. **Configurar variables en .env.local:**
   - `NEXT_PUBLIC_WEBHOOK_URL` (webhook de n8n)
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` (número real)
   - `NEXT_PUBLIC_GA_ID` (Google Analytics)

### Esta semana:
3. Crear cuenta Cloudflare Pages y hacer deploy
4. Conectar dominio a Cloudflare
5. Crear cuenta Google Workspace para email profesional
6. Configurar registros DNS (MX para email)
7. Crear cuenta Brevo para email marketing
8. Configurar webhook en n8n para recibir leads

### Pendiente revisar:
- Contenido de páginas legales (completar con datos reales)
- Textos y copy (ajustar si es necesario)
- Imágenes/logos (actualmente placeholders)
- Teléfono y email real de contacto

---

## SECCIÓN 3: INSTRUCCIONES TÉCNICAS

### Arrancar en local:
```bash
cd "C:\Users\José María\Documentos\Proyectos\klovix\inmobiliaria_ia\altfinca"
npm run dev
# Abrir http://localhost:3000
```

### Deploy en Cloudflare Pages:
1. Subir proyecto a GitHub (crear repo altfinca)
2. Ir a https://dash.cloudflare.com → Pages → Create project
3. Conectar repositorio de GitHub
4. Build settings: Framework preset = Next.js
5. Deploy

### Configurar dominio:
1. En Porkbun: cambiar nameservers a Cloudflare
2. En Cloudflare: añadir dominio → copiar nameservers
3. Esperar propagación DNS (hasta 24h)

---

## SECCIÓN 4: DATOS DE REFERENCIA

| Servicio | URL | Coste |
|----------|-----|-------|
| Dominios | porkbun.com | ~20€/año |
| Hosting | cloudflare.com/pages | Gratis |
| Email | workspace.google.com | ~7€/mes |
| Marketing | brevo.com | Gratis (300/día) |

### Archivos importantes del proyecto:
- `src/lib/constants.ts` → Todo el contenido/textos
- `.env.local` → Variables de entorno
- `src/components/` → Todos los componentes reutilizables

---

## ESTRUCTURA DEL PROYECTO

```
altfinca/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home
│   │   ├── layout.tsx            # Layout principal
│   │   ├── globals.css           # Estilos globales
│   │   ├── subastas/page.tsx     # Landing Subastas
│   │   ├── fincas/page.tsx       # Landing Fincas
│   │   ├── campings/page.tsx     # Landing Campings
│   │   ├── hoteles/page.tsx      # Landing Hoteles
│   │   ├── contacto/page.tsx     # Página Contacto
│   │   └── legal/
│   │       ├── layout.tsx
│   │       ├── aviso-legal/page.tsx
│   │       ├── privacidad/page.tsx
│   │       └── cookies/page.tsx
│   ├── components/
│   │   ├── ui/                   # Button, Card, Input, Badge
│   │   ├── layout/               # Header, Footer, CookieBanner
│   │   ├── sections/             # Hero, Process, Testimonials, etc.
│   │   ├── forms/                # LeadForm
│   │   └── WhatsAppFloat.tsx
│   └── lib/
│       ├── constants.ts          # Todo el contenido
│       └── utils.ts              # Utilidades
└── .env.local                    # Variables de entorno
```
