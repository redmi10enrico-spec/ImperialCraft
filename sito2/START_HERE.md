# 🏰 IMPERIALCRAFT - SITO UFFICIALE DEL SERVER MINECRAFT

## 📦 Package Completo

Questo package contiene tutto ciò che ti serve per lanciare il sito web ufficiale di **ImperialCraft**, un server Minecraft con estetica imperiale, epica e maestosa.

---

## 📁 CONTENUTO DEL PACKAGE

### File Principali
```
📂 sito2/
├── 🌐 index.html              # Pagina principale HTML
├── 🎨 style.css               # Foglio stile completo
├── ⚙️ script.js                # Funzionalità JavaScript
├── 📄 README.md               # Documentazione principale
├── ✅ CHECKLIST.md            # Lista verifiche setup
├── 🔧 CONFIGURAZIONE.html     # Guida personalizzazione
└── 📝 SNIPPET.html            # Sezioni aggiuntive pronti
```

### File Inclusi Spiegati

| File | Descrizione | Azione Necessaria |
|------|-------------|------------------|
| **index.html** | HTML semantico con tutte le sezioni | Modifica IP, staff, testi |
| **style.css** | CSS3 responsive + animazioni | Personalizza colori se vuoi |
| **script.js** | JavaScript vanilla interattivo | Lascia così o espandi |
| **README.md** | Documentazione tecnica completa | Leggi per info avanzate |
| **CHECKLIST.md** | Todo list setup/deployment | Segui prima del lancio |
| **CONFIGURAZIONE.html** | Guida visual passo-passo | Leggi per customizzare |
| **SNIPPET.html** | Codice extra pronto all'uso | Copia/incolla sezioni extra |

---

## 🚀 QUICKSTART (5 MINUTI)

### 1️⃣ Setup Base
```bash
# Scarica i file in una cartella
# Apri terminal nella cartella
python -m http.server 8000

# Apri nel browser
http://localhost:8000
```

### 2️⃣ Personalizza IP
Modifica in `index.html`:
```html
<code id="server-ip">tuoserver.net</code>
```

### 3️⃣ Aggiungi Staff
Modifica nella sezione `#staff` in `index.html`

### 4️⃣ Deploy
Carica i file su:
- **Netlify** (consigliato, gratuitissimo)
- **Vercel** (molto veloce)
- **GitHub Pages** (integrazione git)

---

## 🎨 CARATTERISTICHE PRINCIPALI

### ✨ Design
- **Estetica Imperiale:** Oro, nero, blu notte
- **Completamente Responsive:** Mobile, tablet, desktop
- **Animazioni Smooth:** Fade-in, glow, hover effects
- **Font Eleganti:** Serif per titoli, sans-serif per testo

### 🔧 Funzionalità
- ✅ Pulsante "Copia IP" con notifica
- ✅ Menu hamburger mobile
- ✅ FAQ accordion interattivo
- ✅ Scroll smooth su tutte le nav
- ✅ Easter egg (click 3x logo)
- ✅ Sezioni: Hero, Lore, Features, Staff, Gallery, FAQ, Footer

### 📱 Responsive
- **Desktop (1920px+):** Layout completo
- **Tablet (768-1024px):** Grid adatto
- **Mobile (320-480px):** Stack verticale

### ♿ Accessibilità
- Semantic HTML5
- Contrasto colori verificato
- Keyboard navigation
- Focus states su elementi

---

## 🎯 PRIMI PASSI

### Step 1: Apri Localmente
```bash
cd c:\Users\enryy\Desktop\sito2
python -m http.server 8000
```
Accedi: `http://localhost:8000`

### Step 2: Personalizza
1. Apri `CHECKLIST.md` per lista completa
2. Modifica colori in `style.css` se vuoi
3. Aggiungi il tuo IP in `index.html`
4. Personalizza staff, FAQ, testi
5. Aggiungi immagini nella cartella `/images`

### Step 3: Testa
- Prova su browser diversi
- Testa responsive (F12 + device toolbar)
- Verifica tutti i link
- Prova i pulsanti (Copia IP, FAQ toggle)

### Step 4: Deploy
- Scegli piattaforma (Netlify consigliato)
- Carica i file
- Configura dominio (opzionale)
- Verifica funzionamento online

### Step 5: Promozione
- Condividi su Discord
- Posta su Twitter/social
- Aggiungi su Minecraft server list
- Condividi nel server in-game

---

## 🎨 PERSONALIZZAZIONE VELOCE

### Cambia Colori (5 minuti)
Apri `style.css`, riga 7-18, modifica:
```css
:root {
    --gold: #d4af37;        ← Colore principale
    --dark-blue: #1a2a4a;   ← Colore secondario
    --black: #0a0a0a;       ← Background
}
```

### Cambia IP Server
Apri `index.html`, riga ~260:
```html
<code id="server-ip">tuoserver.net</code>
```

### Aggiungi Staff
Apri `index.html`, sezione `#staff`, aggiungi:
```html
<div class="staff-card moderator">
    <div class="staff-avatar">📜</div>
    <h3>Nome</h3>
    <p class="staff-role">Ruolo</p>
    <p class="staff-desc">Descrizione</p>
</div>
```

---

## 📚 DOCUMENTAZIONE

### 📖 Leggi per...
| File | Contenuto | Quando leggerlo |
|------|-----------|-----------------|
| **README.md** | Documentazione tecnica | Prima di iniziare |
| **CONFIGURAZIONE.html** | Guida visuale setup | Per personalizzare |
| **CHECKLIST.md** | Todo list completa | Prima del deploy |
| **SNIPPET.html** | Sezioni extra pronti | Per aggiungere features |

---

## ⚡ PERFORMANCE

- **Load Time:** < 1 secondo (JavaScript vanilla, zero dipendenze)
- **Size:** ~80KB (HTML + CSS + JS)
- **Animazioni:** GPU-accelerated, smooth 60fps
- **Mobile:** Ottimizzato per dati limitati

---

## 🌟 SEZIONI INCLUSE

### ⚜️ Hero
- Logo animato
- Motto del regno
- CTA "Accedi al Regno"
- Effetti particellari

### 📜 Lore
- Storia server
- Emblem imperiale animato
- Layout responsive

### 🏛️ Pilastri del Regno
- Survival Epico
- Economia Imperiale
- Eventi e Sfide
- Comunità Regale

### 🎫 Entra nel Regno
- IP copiabile
- Notifica di copia
- Design pergamena
- Requisiti accesso

### 👑 Consiglio Imperiale
- Card staff con ruoli
- Sovrani, Admin, Moderatori, Builder
- Hover effects

### 📸 Cronache Visive
- Galleria immagini
- Placeholder pronti
- Effetti shine

### ❓ Archivio Reale (FAQ)
- 6 domande frequenti
- Accordion interattivo
- Smooth animations

### 🔐 Footer
- Sigillo imperiale
- Link social
- Crediti e info

---

## 🔗 OPZIONI DEPLOY

### Netlify (⭐ Consigliato)
```
1. Vai su netlify.com
2. Login con GitHub
3. Import repository
4. Deploy in 30 secondi
```
✅ Gratis, veloce, SSL automatico

### Vercel
```
1. Vai su vercel.com
2. Login con GitHub
3. Import e deploy
```
✅ Ultra-veloce, CDN globale

### GitHub Pages
```
1. Crea repo su GitHub
2. Carica i file
3. Abilita Pages in Settings
```
✅ Gratis, integrazione git

### Web Host Tradizionale
```
1. Registra dominio
2. Scegli hosting
3. Upload via FTP
```
✅ Personalizzabile, a pagamento

---

## 🛠️ TROUBLESHOOTING

### ❌ "Copia IP" non funziona
➜ Apri con server HTTP (non file://), per accesso agli appunti

### ❌ Menu mobile non appare
➜ Controlla console (F12) per errori JS. Reload pagina.

### ❌ CSS non si carica
➜ style.css deve essere nella stessa cartella di index.html

### ❌ Animazioni non smooth
➜ Aggiorna browser (Chrome, Firefox, Edge recenti)

### ❌ Link social non funzionano
➜ Controlla gli URL in footer, devono essere corretti

---

## 📞 SUPPORTO RAPIDO

### Errori comuni:
1. **Percorsi file:** Mantieni tutto nella stessa cartella
2. **Server HTTP:** Usa sempre server locale, non file://
3. **Cache:** Ctrl+Shift+R per refresh forzato
4. **Console:** F12 per vedere errori JavaScript

### Resource Utili:
- **Compressione immagini:** tinypng.com
- **Test responsivo:** responsivedesignchecker.com
- **Performance:** pagespeed.web.dev
- **Validazione HTML:** validator.w3.org

---

## 🎯 ROADMAP ESTENSIONI

Dopo il lancio, puoi aggiungere:

- [ ] **Backend:** News feed, statistiche live
- [ ] **Integrazioni:** API Minecraft, Discord bot
- [ ] **Features:** Sistema voti, blog, store
- [ ] **Marketing:** Newsletter, affiliate, YouTube

(Vedi SNIPPET.html per codice extra pronto)

---

## 📊 CHECKLIST LAUNCH

Prima di lanciare MUST DO:

- [ ] IP server aggiornato
- [ ] Staff personalizzato
- [ ] Immagini galleria aggiunte
- [ ] Link social configurati
- [ ] Test su mobile (F12)
- [ ] Colori personalizzati (opzionale)
- [ ] Deploy su Netlify/Vercel
- [ ] Dominio configurato (opzionale)
- [ ] Condiviso su Discord
- [ ] Monitoraggio analytics (opzionale)

---

## 📝 NOTE IMPORTANTI

### ✅ Fatto Bene
- Codice commentato e organizzato
- Nessuna dipendenza esterna
- Completamente personalizzabile
- Mobile-first responsive
- Accessibile e veloce

### ⚠️ Limitazioni
- No backend/database (puoi aggiungere)
- Immagini da aggiungere manualmente
- Animazioni su browser vecchi potrebbero essere ridotte

### 🚀 Prossimi Passi
1. Personalizza secondo il tuo server
2. Aggiungi immagini reali
3. Deploy online
4. Promuovi nella comunità
5. Raccogli feedback
6. Iterare e migliorare

---

## 💾 BACKUP & VERSIONING

Ti consiglio di:
1. Backup file su cloud (Google Drive, Dropbox)
2. Usa Git per versionamento (GitHub)
3. Backup settimanale
4. Documento changelog (cosa cambia)

---

## 🎓 PROSSIMI LIVELLI (Opzionale)

Vuoi fare più cose? Prova:
- Aggiungere Node.js backend
- Database MongoDB/Firebase
- CMS per news dinamiche
- Bot Discord integrato
- Sistema payment (store)
- Leaderboard live
- Map viewer 3D

---

## ✨ CREDITS

Sito creato per **ImperialCraft**
- Design: Estetica imperiale, epica, maestosa
- Tech: HTML5 + CSS3 + JavaScript vanilla
- License: Libero da usare e modificare
- Version: 1.0.0
- Date: Gennaio 2025

---

## 🎉 CONCLUSIONE

Hai tutto quello che ti serve! Il sito è:
✅ Completo
✅ Personalizzabile
✅ Responsivo
✅ Veloce
✅ Pronto per il deploy

**Prossimo step:** Leggi CHECKLIST.md e inizia a personalizzare!

---

**Buon lavoro! 🏰👑 Il tuo regno digitale è pronto!**

*Per domande o supporto, controlla la documentazione inclusa.*
