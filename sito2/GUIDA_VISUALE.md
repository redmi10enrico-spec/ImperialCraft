# 🏰 IMPERIALCRAFT - GUIDA VISUALE DI SETUP

## Mappa del Sito

```
┌─────────────────────────────────────────┐
│  🏰 IMPERIALCRAFT - IL REGNO SUPREMO    │
│  ═══════════════════════════════════════ │
│                                         │
│  ⚜ NAVBAR FISSA                         │
│  [Logo] [Menu Nav] [Hamburger Mobile]  │
│                                         │
├─────────────────────────────────────────┤
│  HERO IMPERIALE (#hero)                │
│  ⚜ Titolo Gigante                       │
│  👑 Motto del Regno                     │
│  🔘 CTA "Accedi al Regno"               │
├─────────────────────────────────────────┤
│  LORE (#lore)                           │
│  📜 Storia del Regno                    │
│  ⚜ Emblem Imperiale Animato            │
├─────────────────────────────────────────┤
│  PILASTRI DEL REGNO (#features)        │
│  [⛏] [💰] [🏆] [👑]                     │
│  4 Pilastri in Grid Responsive         │
├─────────────────────────────────────────┤
│  ENTRA NEL REGNO (#server)             │
│  [IP Copiabile] [Requisiti] [Info]     │
├─────────────────────────────────────────┤
│  CONSIGLIO IMPERIALE (#staff)          │
│  [👑] [⚔️] [⚔️] [📜] [🌟] [🏗️]          │
│  6 Membri Staff con Card               │
├─────────────────────────────────────────┤
│  CRONACHE VISIVE (#gallery)            │
│  [IMG] [IMG] [IMG]                     │
│  [IMG] [IMG] [IMG]                     │
│  Galleria 6 Immagini Responsiva        │
├─────────────────────────────────────────┤
│  ARCHIVIO REALE (#faq)                 │
│  [+] Domanda 1                         │
│  [+] Domanda 2                         │
│  Accordion 6 FAQ Interattive           │
├─────────────────────────────────────────┤
│  FOOTER (Sigillo Imperiale)            │
│  ⚜ ImperialCraft | Links | Crediti    │
└─────────────────────────────────────────┘
```

---

## 📁 Struttura File Sistema

```
c:\Users\enryy\Desktop\sito2\
│
├─ 🌐 index.html                ← Apri questo nel browser
│  ├─ Header & Navbar
│  ├─ Hero Section
│  ├─ Lore Section
│  ├─ Features Section
│  ├─ Server IP Section
│  ├─ Staff Section
│  ├─ Gallery Section
│  ├─ FAQ Section
│  └─ Footer
│
├─ 🎨 style.css                 ← Personalizza colori qui
│  ├─ CSS Variables (:root)
│  ├─ Global Styles
│  ├─ Navbar Styles
│  ├─ Hero Styles
│  ├─ Lore Styles
│  ├─ Features Styles
│  ├─ Server Styles
│  ├─ Staff Styles
│  ├─ Gallery Styles
│  ├─ FAQ Styles
│  ├─ Footer Styles
│  └─ Responsive Queries (@media)
│
├─ ⚙️ script.js                 ← Funzionalità JavaScript
│  ├─ Navigation Toggle
│  ├─ Copy IP Function
│  ├─ FAQ Toggle
│  ├─ Scroll Animations
│  ├─ Easter Egg
│  └─ Utility Functions
│
├─ 📖 START_HERE.md             ← LEGGI QUESTO PRIMA
│  ├─ Quickstart (5 min)
│  ├─ File Guide
│  └─ First Steps
│
├─ ✅ CHECKLIST.md              ← Todo list setup/deploy
│  ├─ Phase 1-10
│  └─ Launch Checklist
│
├─ 🔧 CONFIGURAZIONE.html       ← Guida personalizzazione
│  ├─ Setup Base
│  ├─ Customization Guide
│  ├─ Deploy Options
│  └─ Troubleshooting
│
├─ 📝 SNIPPET.html              ← Codice extra pronto
│  ├─ News Section
│  ├─ Stats Section
│  ├─ Contact Form
│  ├─ Countdown Timer
│  ├─ Testimonials
│  └─ Rules Section
│
└─ 📄 README.md                 ← Documentazione tecnica
   ├─ Feature Overview
   ├─ Tech Stack
   ├─ Customization
   └─ Deploy Guide

Optional Folders (da creare):
/images                         ← Carica qui le tue immagini
/fonts                          ← Font custom (opzionale)
/assets                         ← Favicon, icon, ecc.
```

---

## 🎯 WORKFLOW SETUP - PASSO DOPO PASSO

### ✅ GIORNO 1: Setup Base (30 minuti)

```
09:00 - Scarica/estrai i file
       └─ Salva in c:\Users\enryy\Desktop\sito2\

09:05 - Apri terminal e lancia server
       └─ python -m http.server 8000

09:10 - Apri http://localhost:8000
       └─ Verifica che il sito carica

09:15 - Leggi START_HERE.md
       └─ Capire la struttura

09:20 - Modifica IP server
       └─ index.html → cerca "play.imperialcraft.net"
       └─ Cambia con il tuo IP

09:25 - Test pulsante "Copia IP"
       └─ Click sul pulsante
       └─ Verifica notifica

09:30 - FATTO! ✅
```

### ✅ GIORNO 2: Personalizzazione (1 ora)

```
10:00 - Personalizza Colori (opzionale)
       └─ style.css → :root { ... }
       └─ Cambia --gold, --dark-blue, ecc.

10:15 - Aggiungi Staff
       └─ index.html → sezione #staff
       └─ Aggiungi nomi e ruoli reali

10:30 - Personalizza Lore & Descrizioni
       └─ index.html → sezione #lore
       └─ Cambia storia con quella del tuo server

10:45 - Aggiungi FAQ
       └─ index.html → sezione #faq
       └─ Modifica domande e risposte

11:00 - FATTO! ✅
```

### ✅ GIORNO 3: Media & Testing (1 ora)

```
14:00 - Prepara Immagini Galleria
       └─ Salva 6 immagini in /images
       └─ Comprimi con tinypng.com

14:20 - Aggiungi Immagini al HTML
       └─ index.html → sezione #gallery
       └─ Sostituisci placeholder con <img>

14:40 - Test Responsive
       └─ Browser → F12
       └─ Device Toolbar (iPhone, tablet, desktop)
       └─ Verifica layout su tutti i device

15:00 - Test Funzionalità
       └─ Copia IP ✓
       └─ Menu mobile ✓
       └─ FAQ accordion ✓
       └─ Smooth scroll ✓

15:20 - FATTO! ✅
```

### ✅ GIORNO 4: Deploy (30 minuti)

```
16:00 - Scegli piattaforma deploy
       └─ Netlify (⭐ Consigliato)
       └─ Vercel
       └─ GitHub Pages

16:05 - Crea account su piattaforma
       └─ Email di registrazione

16:10 - Upload/Deploy
       └─ Drag & drop su Netlify
       └─ Oppure connetti repository GitHub

16:20 - Configura dominio (opzionale)
       └─ Registra su Namecheap
       └─ Punta DNS a Netlify
       └─ Aspetta propagazione (1-24h)

16:30 - Testa online
       └─ Verifica sito su https://tuosito.com
       └─ Tutti i link funzionano?
       └─ Mobile OK?

16:35 - FATTO! ✅
```

---

## 🎨 FLOW PERSONALIZZAZIONE COLORI

```
PRIMA (Imperiale):
├─ Oro (#d4af37) ← Colore principale
├─ Nero (#0a0a0a) ← Background
└─ Blu Notte (#1a2a4a) ← Accento

DOPO (Personale):
├─ Colore 1: #??????
├─ Colore 2: #??????
└─ Colore 3: #??????

COME CAMBIARLI:
1. Apri style.css
2. Riga 7-18 (sezione :root)
3. Modifica --gold, --dark-blue, ecc.
4. Reload browser (Ctrl+Shift+R)
5. Verifica su mobile (F12)
```

---

## 📱 RESPONSIVE DESIGN FLOWCHART

```
┌─ DESKTOP (1920px+)
│  └─ Layout completo
│  └─ Grid 4 colonne
│  └─ Navbar normale
│
├─ TABLET (768-1024px)
│  └─ Grid 2 colonne
│  └─ Font ridotti
│  └─ Menu hamburger attivo
│
└─ MOBILE (320-480px)
   └─ Grid 1 colonna (stack)
   └─ Font piccoli
   └─ Hamburger menu obbligatorio
   └─ Pulsanti larghi
```

---

## 🔗 LINK NAVIGATION FLOW

```
START (index.html#hero)
    ↓
[Accedi al Regno] ← Scroll a #server
    ↓
#server (IP Section)
    ↓
[Copia IP] ← Copia negli appunti
    ↓
Notifica ← Mostra "Copiato!"

---

Navbar → Click su link
    ↓
Smooth scroll a sezione
    ↓
Animazione fade-in
    ↓
Content visibile
```

---

## 💻 JAVASCRIPT LOGIC FLOW

```
Page Load
    ↓
├─ Initialize Navigation
│  ├─ Hamburger menu setup
│  └─ Nav link click handlers
│
├─ Initialize Scroll Animations
│  ├─ Intersection Observer
│  └─ Fade-in effects
│
├─ Initialize Easter Egg
│  └─ Logo click counter
│
└─ Document Ready ✓

---

User Click "Copia IP"
    ↓
copyServerIP() function
    ↓
Navigator.clipboard.writeText()
    ↓
└─ Notification show ✓
   └─ Hide after 3 sec
```

---

## 📊 CHECKLIST VISUALE PRE-LAUNCH

```
┌─ DESIGN
│  ☐ Logo personalizzato
│  ☐ Colori scelti
│  ☐ Font leggibili
│  └─ Mobile OK
│
├─ CONTENUTO
│  ☐ IP server corretto
│  ☐ Staff aggiunto
│  ☐ FAQ completate
│  ☐ Immagini galleria
│  ☐ Link social
│  └─ Testi revisionati
│
├─ FUNZIONALITÀ
│  ☐ Copia IP ✓
│  ☐ Menu mobile ✓
│  ☐ FAQ accordion ✓
│  ☐ Smooth scroll ✓
│  ☐ Animazioni smooth
│  └─ No errors (F12)
│
├─ PERFORMANCE
│  ☐ Load time < 3s
│  ☐ No lag scroll
│  ☐ Immagini ottimizzate
│  └─ Score PageSpeed > 80
│
├─ TESTING
│  ☐ Chrome OK
│  ☐ Firefox OK
│  ☐ Safari OK
│  ☐ Mobile (320px) OK
│  ☐ Tablet (768px) OK
│  └─ Desktop (1920px) OK
│
└─ DEPLOY
   ☐ Deploy online
   ☐ Dominio configurato
   ☐ SSL funzionante
   ☐ Analytics setup
   └─ Pronto per share!
```

---

## 🚀 DEPLOY STEP-BY-STEP (NETLIFY)

```
1. REGISTRAZIONE
   └─ netlify.com
   └─ Sign up con email

2. IMPORT PROGETTO
   └─ "Import an existing project"
   └─ Scegli GitHub (se hai repo)
   └─ Oppure "Deploy manually"

3. UPLOAD FILE (manual)
   └─ Zip i file: index.html, style.css, script.js
   └─ Drag & drop in Netlify
   └─ Aspetta upload

4. VERIFICA
   └─ Sito disponibile in https://random.netlify.app
   └─ Test funzionalità
   └─ No errori?

5. DOMINIO PERSONALIZZATO (opzionale)
   └─ "Domain settings"
   └─ "Add custom domain"
   └─ Registra su Namecheap (€3-5/anno)
   └─ Punta DNS a Netlify
   └─ Aspetta propagazione

6. SSL CERTIFICATE
   └─ Automatico ✓
   └─ Gratuito ✓

RISULTATO:
├─ https://imperialcraft.net
├─ Certificato SSL
├─ CDN globale
└─ Deploy instant!
```

---

## 📈 CRESCITA POST-LAUNCH

```
SETTIMANA 1:
├─ Promuovi su Discord
├─ Posta su Twitter
└─ Condividi in server

SETTIMANA 2:
├─ Raccogli feedback
├─ Migliora basato su feedback
└─ Aggiungi news/updates

MESE 1:
├─ Analytics review
├─ SEO basics setup
└─ Condividi su Minecraft server lists

MESE 2-3:
├─ Aggiungi sezioni extra (SNIPPET.html)
├─ Implementa backend (opzionale)
└─ Ottimizza performance
```

---

## 🎯 OBIETTIVI REALIZZABILI

### ✅ Primo Launch
```
⏱️ Tempo: 4 giorni
💰 Costo: 0€ (deploy gratis)
📊 Risultato: Sito online
📱 Responsive: Sì
🚀 Ready: Sì
```

### 🚀 Versione Pro (Futuro)
```
⏱️ Tempo: 2 settimane
💰 Costo: 5-10€ (dominio)
📊 Risultato: Sito pro + backend
📱 Responsive: Sì
🚀 Ready: Sì
```

---

## ✨ QUICK REFERENCE COMMANDS

### Terminal Commands
```bash
# Avvia server locale
python -m http.server 8000

# Apri browser (Windows)
start http://localhost:8000

# Comprimi immagini (Python)
# Usa online: tinypng.com

# Upload su Netlify
# Drag & drop da browser
```

### File Edits
```
IP:      index.html ≈ riga 260
Staff:   index.html ≈ sezione #staff
Colori:  style.css ≈ riga 7-18
JS:      script.js ≈ funzioni varie
```

---

## 🎉 SUMMARY

```
📦 Package: Completo e pronto
🎨 Design: Imperiale ed elegante
📱 Mobile: Fully responsive
⚙️ Code: Vanilla, senza dipendenze
🚀 Deploy: Gratis e veloce
💡 Features: Personalizzabili
📚 Docs: Completissime

PROSSIMO STEP:
└─ Apri START_HERE.md
   └─ Inizia con CHECKLIST.md
      └─ Personalizza tutto
         └─ Lancia il regno! 👑
```

---

**Buona fortuna! Il tuo sito ImperialCraft è bellissimo! 🏰✨**
