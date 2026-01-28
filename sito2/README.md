# 🏰 ImperialCraft - Sito Ufficiale del Regno

## 📌 Panoramica

Questo è il sito web ufficiale di **ImperialCraft**, un server Minecraft con estetica imperiale, epica e maestosa. Il sito è stato progettato per trasmettere potere, grandezza e identità regale del brand.

## 🎨 Caratteristiche Principali

### Design & Estetica
- **Palette Imperiale**: Oro (#d4af37), Nero (#0a0a0a), Blu Notte (#1a2a4a), Dettagli Luminosi
- **Font Eleganti**: Serif (Georgia) per titoli, Sans-serif moderno (Segoe UI) per testi
- **Animazioni Leggere**: Fade-in, glow, hover dorati, effetti parallax
- **Responsive**: Completamente adattabile a desktop, tablet e mobile

### Sezioni Incluse

1. **Hero Imperiale** ⚜️
   - Logo animato
   - Motto del regno
   - Pulsante CTA "Accedi al Regno"
   - Effetti particellari animati

2. **Sezione Lore** 📜
   - Storia e identità di ImperialCraft
   - Emblem imperiale animato (rotazione)
   - Layout grid responsive

3. **Pilastri del Regno** 🏛️
   - Survival Epico
   - Economia Imperiale
   - Eventi e Sfide
   - Comunità Regale
   - Hover effects con glow effect

4. **Entra nel Regno** 🎫
   - IP del server copiabile
   - Pulsante "Copia Indirizzo" con notifica
   - Design stile pergamena
   - Requisiti di accesso

5. **Consiglio Imperiale** 👑
   - Card dei membri dello staff
   - Ruoli: Sovrano, Amministratori, Moderatori, Builder
   - Effetti hover eleganti

6. **Cronache Visive** 📸
   - Galleria con placeholder per immagini
   - Effetti shine e hover

7. **Archivio Reale (FAQ)** ❓
   - Accordion interattivo
   - 6 domande frequenti
   - Smooth open/close animation

8. **Footer Imperiale** 🔐
   - Sigillo imperiale animato
   - Link social
   - Crediti

## 🛠️ Tecnologie Utilizzate

- **HTML5**: Struttura semantica e accessibile
- **CSS3**: 
  - Flexbox & Grid per layout
  - Variabili CSS per tema
  - Animazioni e transizioni
  - Media queries responsive
  - Gradients e effetti visivi
  
- **JavaScript Vanilla**:
  - Funzione copia IP
  - Menu hamburger per mobile
  - Accordion FAQ
  - Scroll animations
  - Easter egg
  - Sound feedback

## 📁 Struttura dei File

```
sito2/
├── index.html      # HTML principale
├── style.css       # Foglio di stile
├── script.js       # Funzionalità JavaScript
└── README.md       # Questo file
```

## 🚀 Come Utilizzare

### Apertura Base
1. Scarica i file
2. Apri `index.html` in un browser moderno
3. Naviga attraverso le sezioni

### Personalizzazione

#### Cambio Colori (Palette)
Modifica le variabili CSS nel file `style.css`:
```css
:root {
    --gold: #d4af37;              /* Colore oro principale */
    --dark-blue: #1a2a4a;         /* Blu notte */
    --black: #0a0a0a;             /* Nero background */
    --white: #f5f5f5;             /* Bianco testo */
    /* ... altre variabili ... */
}
```

#### Cambio Logo
Modifica il logo nella navbar:
```html
<div class="logo">
    <span class="logo-icon">⚜</span>  <!-- Cambia l'emoji -->
    <span class="logo-text">ImperialCraft</span>
</div>
```

#### Cambio IP Server
Nel file `index.html`, cerca:
```html
<code id="server-ip">play.imperialcraft.net</code>
```
E sostituisci con il tuo IP.

#### Aggiunta Staff
Nel file `index.html`, aggiungi nuove card nella sezione staff:
```html
<div class="staff-card moderator">
    <div class="staff-avatar">🔣</div>
    <h3>Nome Staff</h3>
    <p class="staff-role">Ruolo</p>
    <p class="staff-desc">Descrizione.</p>
</div>
```

#### Aggiunta Immagini Galleria
Sostituisci i placeholder con immagini reali:
```html
<div class="gallery-item">
    <img src="path/to/image.jpg" alt="Descrizione">
</div>
```

## 🎮 Funzionalità JavaScript

### Copia IP
```javascript
function copyServerIP()
```
- Copia l'IP del server negli appunti
- Mostra notifica di conferma
- Fallback per browser meno recenti

### Menu Mobile
- Hamburger menu automatico su schermi piccoli
- Toggle menu con animazione
- Chiusura automatica al click su link

### FAQ Accordion
```javascript
function toggleFAQ(header)
```
- Apertura/chiusura smooth
- Una sola FAQ aperta alla volta
- Toggle icon animata

### Scroll Animations
- Fade-in e translate animati
- Intersection Observer per performance
- Triggerate al raggiungimento elemento

### Easter Egg
- Click 3 volte sul logo
- Messaggio inspirazionale
- Effetto hue-rotate temporaneo

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 768px - Layout completo
- **Tablet**: 480px - 768px - Grid adapts
- **Mobile**: < 480px - Stack verticale

Tutte le sezioni sono completamente responsive:
- Hero: Ridimensionamento font
- Grid: Da 3+ colonne a 1 colonna
- Images: Aspect ratio mantengono proporzion
- Font: Scalatura progressiva

## ⚡ Prestazioni

- Lightweight e veloce
- No framework dependencies
- Animations GPU-accelerated
- Lazy loading ready per immagini
- Optimized media queries

## ♿ Accessibilità

- Semantic HTML5 tags
- ARIA labels dove necessario
- Keyboard navigation (ESC per chiudere menu)
- Color contrast verificato
- Focus states su elementi interattivi

## 🔗 Link Utili

### Social Media (da aggiornare)
- [Discord](#) - Community
- [Twitter](#) - News
- [YouTube](#) - Video
- [Instagram](#) - Galery

### Modifica Link Footer
Nel file `index.html`, sezione footer:
```html
<a href="https://discord.gg/tuo-link" target="_blank">Discord</a>
```

## 🎨 Palette Imperiale Completa

```
Primario:    #d4af37 (Oro)
Primario Chiaro: #f0e68c (Oro Chiaro)
Primario Scuro: #b8941a (Oro Scuro)
Background:  #0a0a0a (Nero Puro)
Secondario:  #1a2a4a (Blu Notte)
Secondario Light: #2d3e5f (Blu Notte Chiaro)
Testo:       #f5f5f5 (Bianco)
Accent:      #ff6b35 (Arancio)
```

## 🧪 Browser Support

- Chrome/Edge: ✅ Completo
- Firefox: ✅ Completo
- Safari: ✅ Completo
- IE 11: ⚠️ Compatibilità parziale (graceful degradation)

## 📝 Codice Commentato

Tutto il codice è ben commentato e organizzato:
- Sezioni HTML chiaramente marcate
- CSS organizzato per componenti
- JavaScript con funzioni documentate

## 🔒 Privacy & Crediti

- Sito autogestito e personalizzabile
- Nessuna dipendenza esterna obbligatoria
- Favicon e branding customizzabili
- Crediti Minecraft rispettati nel footer

## 🚀 Deploy

### Opzioni Deploy Gratuite
1. **GitHub Pages**
   - Sposta file su repository
   - Abilita GitHub Pages
   - Deploy automatico

2. **Netlify**
   - Drag & drop dei file
   - Deploy in 1 minuto
   - CDN globale

3. **Vercel**
   - Git integration
   - Preview immediato
   - Performance ottimale

4. **Web Host**
   - Upload via FTP
   - Setup domini personalizzati
   - Email hosting

## 📞 Supporto & Customization

Per modifiche più avanzate:
- Cambia colori variabili CSS
- Modifica breakpoints responsive
- Aggiungi sezioni custom
- Integra database/backend

## 🎯 Checklist Prima del Deploy

- [ ] Aggiorna colori e branding
- [ ] Cambia IP server reale
- [ ] Aggiungi informazioni staff reali
- [ ] Configura link social
- [ ] Carica immagini galleria
- [ ] Test responsive su device reali
- [ ] Verifica link e form
- [ ] Ottimizza immagini
- [ ] Configura favicon
- [ ] Setup analytics

## 🌟 Funzionalità Aggiuntive Possibili

Pronto per future espansioni:
- [ ] Backend per news feed dinamico
- [ ] Statistiche server live
- [ ] Sistema login giocatori
- [ ] Ticket support system
- [ ] Store/marketplace
- [ ] Leaderboard
- [ ] Map viewer interattiva
- [ ] Blog

---

**Creato con ❤️ per ImperialCraft**

*Un regno, una visione, una comunità.*

**Versione**: 1.0.0
**Ultima modifica**: Gennaio 2025
