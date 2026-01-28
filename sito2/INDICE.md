## 🏰 IMPERIALCRAFT - SITO UFFICIALE MINECRAFT SERVER

# 📋 INDICE DEI FILE & COME USARLI

---

## 🎯 TU INIZI DA QUI:

### 1️⃣ **PACKAGE_INFO.txt** ← LEGGI PRIMA!
- Riepilogo di tutto il package
- Lista rapida di cosa fare
- Quickstart 5 minuti

### 2️⃣ **START_HERE.md** ← POI LEGGI QUESTO
- Guida di inizio per principianti
- Struttura dei file spiegata
- Come personalizzare in 5 passaggi

### 3️⃣ **GUIDA_VISUALE.md** ← VISUALE & PRATICA
- Mappa del sito (ASCII art)
- Flow diagram interattive
- Checklist visuale pre-launch

---

## 📚 FILE DI RIFERIMENTO:

### 📖 **README.md**
Cosa leggerlo: Quando vuoi capire tutto in dettaglio
Contenuti:
- Feature overview
- Tecnologie utilizzate
- Struttura file
- Customizzazione avanzata
- Deploy guide

### ✅ **CHECKLIST.md**
Cosa leggerlo: Prima di lanciare il sito
Contenuti:
- 10 fasi di setup complete
- Checklist passo-passo
- Errori comuni da evitare
- Timeline consigliata (4 giorni)

### 🔧 **CONFIGURAZIONE.html**
Cosa leggerlo: Quando devi personalizzare
Contenuti:
- Guida visuale HTML
- Sezioni numerate
- Configurazioni spiegate
- Troubleshooting

### 📝 **SNIPPET.html**
Cosa leggerlo: Quando vuoi aggiungere sezioni
Contenuti:
- News section
- Stats live
- Contact form
- Countdown timer
- Testimonials
- Rules section

---

## 💻 FILE TECNICI (Modifica Questi):

### 🌐 **index.html** ← MODIFICANE QUESTO
Il file HTML principale. Modifica qui:
- IP server (cerca "play.imperialcraft.net")
- Staff (sezione #staff)
- FAQ (sezione #faq)
- Testi generali
- Link social

**Modifiche rapide:**
- Linea ~260: Cambia IP
- Sezione #staff: Aggiungi staff
- Sezione #faq: Aggiungi FAQ
- Footer: Aggiungi social links

### 🎨 **style.css** ← PERSONALIZZA COLORI QUI
Foglio di stile CSS. Modifica per:
- Cambio colori palette
- Animazioni
- Layout responsive
- Font

**Modifiche rapide:**
- Linea 7-18: Variabili colori (:root)
- Sezione @media: Responsive queries
- Sezione @keyframes: Animazioni

### ⚙️ **script.js** ← FUNZIONALITÀ JS
JavaScript vanilla. Qui sono:
- copyServerIP() - Copia IP
- toggleFAQ() - Accordion FAQ
- Menu mobile toggle
- Scroll animations
- Easter egg

**Non serve modificare se non esperto.**

---

## 🎬 WORKFLOW CONSIGLIATO:

### GIORNO 1 - SETUP BASE (30 min)
1. Leggi **PACKAGE_INFO.txt** (5 min)
2. Apri terminal: `python -m http.server 8000`
3. Visita: http://localhost:8000
4. Modifica IP in **index.html**
5. Test: Copia IP button funziona? ✓

### GIORNO 2 - PERSONALIZZAZIONE (1 ora)
1. Leggi **CONFIGURAZIONE.html**
2. Aggiungi staff in **index.html**
3. Personalizza Lore
4. Aggiungi FAQ personalizzate
5. (Opzionale) Cambia colori in **style.css**

### GIORNO 3 - MEDIA & TESTING (1 ora)
1. Prepara 6 immagini per galleria
2. Aggiungi immagini in **index.html**
3. Leggi **GUIDA_VISUALE.md**
4. Test responsive (F12)
5. Test funzionalità

### GIORNO 4 - DEPLOY (30 min)
1. Crea account Netlify
2. Drag & drop file
3. Configura dominio (opzionale)
4. Testa sito online
5. Condividi su Discord! 🎉

---

## 🎨 PERSONALIZZAZIONI COMUNI:

### Cambio IP Server
📄 **File:** index.html
🔍 **Riga:** ~260
```html
<code id="server-ip">play.imperialcraft.net</code>
                      ↓ CAMBIA
<code id="server-ip">tuoserver.net</code>
```

### Cambio Colori Tema
📄 **File:** style.css
🔍 **Linea:** 7-18
```css
:root {
    --gold: #d4af37;        ← Colore oro principale
    --dark-blue: #1a2a4a;   ← Colore sfondo secondario
    --black: #0a0a0a;       ← Colore background
}
```

### Aggiungi Membro Staff
📄 **File:** index.html
🔍 **Sezione:** #staff (line ~385)
```html
<div class="staff-card moderator">
    <div class="staff-avatar">📜</div>
    <h3>Nome Membro</h3>
    <p class="staff-role">Titolo</p>
    <p class="staff-desc">Descrizione</p>
</div>
```

### Aggiungi Domanda FAQ
📄 **File:** index.html
🔍 **Sezione:** #faq (line ~475)
```html
<div class="faq-item">
    <div class="faq-header" onclick="toggleFAQ(this)">
        <h3>La tua domanda?</h3>
        <span class="faq-toggle">+</span>
    </div>
    <div class="faq-content">
        <p>La tua risposta qui.</p>
    </div>
</div>
```

### Aggiungi Social Links
📄 **File:** index.html
🔍 **Sezione:** Footer (line ~570)
```html
<a href="https://discord.gg/tuolink" target="_blank">Discord</a>
<a href="https://twitter.com/tuohandle" target="_blank">Twitter</a>
```

---

## 🚀 DEPLOYMENT:

### Opzione 1: Netlify (Consigliato)
```
1. netlify.com → Sign up
2. Crea nuovo site
3. Drag & drop cartella sito
4. Done! Deploy automatico
```

### Opzione 2: Vercel
```
1. vercel.com → Sign up
2. Import progetto
3. Deploy automatico
```

### Opzione 3: GitHub Pages
```
1. Crea repo GitHub
2. Push file
3. Abilita Pages in Settings
4. Deploy automatico
```

---

## 📱 DEVICE TESTING:

### Come testare responsive:
1. Apri sito: http://localhost:8000
2. Premi F12 (Developer Tools)
3. Premi Ctrl+Shift+M (Device Toolbar)
4. Seleziona device:
   - iPhone 12
   - iPad
   - Desktop 1920px

### Cosa controllare:
- ✓ Layout non overflow
- ✓ Testo leggibile
- ✓ Pulsanti clickabili
- ✓ Immagini responsive
- ✓ Menu mobile funziona

---

## ❓ FAQ VELOCI:

**D: Quale file apro?**
A: Apri `index.html` nel browser (tramite server locale)

**D: Quale file modifico per l'IP?**
A: `index.html` linea ~260

**D: Quale file per i colori?**
A: `style.css` linea 7-18 (:root)

**D: Come faccio deploy?**
A: Carica su Netlify (30 secondi, gratis)

**D: Serve un database?**
A: No, ma puoi aggiungere se vuoi (vedi SNIPPET.html)

**D: Serve backend?**
A: No, il sito funziona standalone

**D: Posso cambiare il design?**
A: Sì, personalizza CSS come vuoi

**D: Posso aggiungere sezioni?**
A: Sì, vedi SNIPPET.html per codice pronto

---

## 🔧 TROUBLESHOOTING VELOCE:

**Problema: Copia IP non funziona**
→ Assicurati di usare server HTTP (`localhost:8000`)

**Problema: CSS non si carica**
→ `style.css` deve essere nella stessa cartella

**Problema: Mobile menu non appare**
→ Premi F12, verifica console per errori

**Problema: Immagini non caricate**
→ Verifica percorso `/images` e formato (jpg/png)

---

## 📊 STRUTTURA FILE:

```
sito2/
├─ 🌐 index.html              ← Apri questo nel browser
├─ 🎨 style.css               ← Personalizza colori qui
├─ ⚙️ script.js                ← Funzionalità JS
├─ 📄 PACKAGE_INFO.txt        ← Inizio rapido
├─ 📄 START_HERE.md           ← Guida principianti
├─ 📄 README.md               ← Documentazione tecnica
├─ 📄 GUIDA_VISUALE.md        ← Flow visuale
├─ ✅ CHECKLIST.md            ← Todo list setup
├─ 🔧 CONFIGURAZIONE.html     ← Guida personalizzazione
├─ 📝 SNIPPET.html            ← Codice extra pronto
├─ 📋 INDICE.md               ← Questo file!
└─ /images/                   ← Cartella da creare per foto
```

---

## ✨ FEATURES INCLUSE:

✓ Navbar con logo animato
✓ Hero section imperiale
✓ Lore con emblem animato
✓ 4 Pilastri del Regno
✓ IP server copiabile con notifica
✓ Consiglio Imperiale (staff)
✓ Cronache Visive (galleria)
✓ Archivio Reale (FAQ accordion)
✓ Footer con sigillo
✓ Menu hamburger mobile
✓ Scroll animations smooth
✓ Completamente responsive

---

## 🎯 PROSSIMI STEP:

### Immediato (Oggi):
1. Leggi **PACKAGE_INFO.txt** (5 min)
2. Apri **index.html** nel browser (via localhost:8000)
3. Goditi il design 🎉

### Corto termine (Domani):
1. Modifica IP server
2. Aggiungi staff
3. Personalizza testi

### Medio termine (3-4 giorni):
1. Aggiungi immagini galleria
2. Test responsive
3. Deploy online

### Lungo termine (Dopo launch):
1. Promuovi su Discord
2. Raccogli feedback
3. Aggiungi sezioni extra (SNIPPET.html)
4. Implementa backend (opzionale)

---

## 📞 RISORSE:

**Guida Inizio:** START_HERE.md
**Guida Visuale:** GUIDA_VISUALE.md
**Personalizzazione:** CONFIGURAZIONE.html
**Codice Extra:** SNIPPET.html
**Todo List:** CHECKLIST.md
**Tecnico:** README.md
**Riepilogo:** PACKAGE_INFO.txt ← Sei qui

---

## 🎉 PROSSIMO STEP:

Apri **START_HERE.md** per la guida completa di inizio!

Oppure, se vuoi partire subito:
1. Modifica IP in index.html
2. Carica su Netlify
3. Condividi il link!

---

## 💙 CONCLUSIONE:

Hai un sito **PROFESIONALE**, **RESPONSIVE** e **BELLISSIMO**!

Non ci sono dipendenze esterne.
Nessuna configurazione complicata.
Solo HTML, CSS e JavaScript vanilla.

Il tuo sito ImperialCraft è **PRONTO**! 👑✨

---

**Versione:** 1.0.0
**Data:** Gennaio 2025
**Per:** ImperialCraft Server Minecraft

---

Buona fortuna! Il tuo regno digitale è magnifico! 🏰
