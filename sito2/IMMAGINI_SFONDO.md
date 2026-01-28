# 🎨 GUIDA AGGIUNTA IMMAGINI DI SFONDO

## 📁 Struttura Cartelle

Crea questa struttura nella cartella del sito:

```
sito2/
├── index.html
├── style.css
├── script.js
├── assets/                    ← Crea questa cartella
│   ├── hero-bg.jpg           (1920x1080px minimo)
│   ├── lore-bg.jpg           (1920x1080px minimo)
│   ├── features-bg.jpg       (1920x1080px minimo)
│   ├── server-bg.jpg         (1920x1080px minimo)
│   ├── staff-bg.jpg          (1920x1080px minimo)
│   ├── gallery-bg.jpg        (1920x1080px minimo)
│   ├── faq-bg.jpg            (1920x1080px minimo)
│   └── texture.png           (pattern texture, 256x256px)
└── README.md
```

---

## 🖼️ Dove Trovare Immagini

### Siti Gratuiti (Royalty-Free):
- **Unsplash.com** - Paesaggi medievali, castelli, nature
- **Pexels.com** - Foto di alta qualità gratuite
- **Pixabay.com** - Migliaia di immagini royalty-free
- **Pixelated.itch.io** - Texture e pattern per giochi

### Parole Chiave da cercare:
- "Medieval castle"
- "Brown wood texture"
- "Golden landscape"
- "Castle background"
- "Stone texture"

---

## 🎨 NUOVA PALETTE DI COLORI

Il sito è stato aggiornato con:

```css
Colore Principale:   #FFD700 (Giallo dorato)
Colore Chiaro:       #FFED4E (Giallo brillante)
Colore Scuro:        #DAA520 (Goldenrod)
Sfondo Scuro:        #2B1810 (Marrone scuro)
Marrone Medio:       #8B4513 (Saddle Brown)
Marrone Chiaro:      #A0522D (Sienna)
Dettagli:            #DEB887 (Burlywood)
```

---

## 📝 COME AGGIUNGERE LE IMMAGINI

### Metodo 1: Aggiungi Immagine con CSS (Consigliato)

Nel file `style.css`, modifica le sezioni:

#### Hero Section:
```css
.hero {
    background-image: url('assets/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-blend-mode: overlay;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(43, 24, 16, 0.6);
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 10;
}
```

#### Lore Section:
```css
.lore {
    background-image: url('assets/lore-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-blend-mode: multiply;
}
```

#### Features Section:
```css
.features {
    background-image: url('assets/features-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-blend-mode: overlay;
}
```

#### Server Section:
```css
.server-section {
    background-image: url('assets/server-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-blend-mode: multiply;
}
```

#### Staff Section:
```css
.staff-section {
    background-image: url('assets/staff-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-blend-mode: overlay;
}
```

#### Gallery Section:
```css
.gallery-section {
    background-image: url('assets/gallery-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-blend-mode: multiply;
}
```

#### FAQ Section:
```css
.faq-section {
    background-image: url('assets/faq-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-blend-mode: overlay;
}
```

---

## 🎯 BLEND MODE (Sovrapposizione Immagine)

Puoi cambiare come l'immagine si sovrappone al colore:

```css
background-blend-mode: overlay;      /* Default - nitido */
background-blend-mode: multiply;     /* Scurisce l'immagine */
background-blend-mode: screen;       /* Schiarisce l'immagine */
background-blend-mode: darken;       /* Mantiene pixel più scuri */
background-blend-mode: lighten;      /* Mantiene pixel più chiari */
background-blend-mode: color-dodge;  /* Effetto luminoso */
```

---

## 📦 COMPRESSIONE IMMAGINI

Per velocità del sito, comprimi le immagini:

1. Vai a **tinypng.com**
2. Carica le immagini JPG/PNG
3. Scarica versione compressa
4. Salva in `/assets`

**Target:**
- Dimensioni: Max 200KB per immagine
- Risoluzione: 1920x1080px minimo
- Formato: JPG per foto, PNG per texture

---

## ✅ CHECKLIST AGGIUNTA IMMAGINI

- [ ] Ho creato cartella `/assets`
- [ ] Ho scaricato/preparato 7 immagini
- [ ] Ho compresso tutte le immagini (< 200KB)
- [ ] Ho rinominato correttamente:
  - [ ] hero-bg.jpg
  - [ ] lore-bg.jpg
  - [ ] features-bg.jpg
  - [ ] server-bg.jpg
  - [ ] staff-bg.jpg
  - [ ] gallery-bg.jpg
  - [ ] faq-bg.jpg
- [ ] Ho aggiunto il CSS per le immagini
- [ ] Ho testato nel browser
- [ ] Le immagini caricano velocemente
- [ ] Il testo rimane leggibile

---

## 🔥 BONUS: Aggiunta Texture Pattern

Puoi anche aggiungere una texture in tutto il sito:

```css
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('assets/texture.png');
    opacity: 0.05;
    pointer-events: none;
    z-index: -1;
}
```

Scarica texture gratuite da:
- **textures.world**
- **opentextures.org**
- **tartanpatterns.com**

---

## 🎨 ALTERNATIVA: Gradients Più Complessi

Se non vuoi usare immagini, puoi migliorare i gradient:

```css
.hero {
    background: 
        radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 50%, rgba(218, 165, 32, 0.1) 0%, transparent 50%),
        linear-gradient(135deg, #2B1810 0%, #4A2511 50%, #3D1F0F 100%);
    background-attachment: fixed;
}
```

---

## 📱 RESPONSIVE IMAGES

Per mobile, puoi usare immagini diverse:

```css
@media (max-width: 768px) {
    .hero {
        background-image: url('assets/hero-bg-mobile.jpg');
        background-size: 200%;
        background-position: center;
    }
}
```

---

## 🚀 PERFORMANCE TIPS

1. **Lazy Loading:** Le immagini si caricano al scroll
2. **WebP Format:** Usa WebP per compressione ancora migliore
3. **Srcset:** Usa diverse risoluzioni per device diversi
4. **CDN:** Usa un CDN per distribuire immagini più velocemente

---

## 📞 ESEMPI DI SETUP COMPLETO

### Esempio 1: Solo Gradient (Niente Immagini)
```css
.hero {
    background: linear-gradient(135deg, #2B1810 0%, #4A2511 100%);
    background-attachment: fixed;
}
```
✅ Veloce
✅ Nessun caricamento file
❌ Meno visivo

### Esempio 2: Gradient + Immagine
```css
.hero {
    background: 
        linear-gradient(135deg, rgba(43, 24, 16, 0.7), rgba(74, 37, 17, 0.7)),
        url('assets/hero-bg.jpg') center / cover no-repeat fixed;
}
```
✅ Buon equilibrio visivo
✅ Testo ancora leggibile
✅ Veloce

### Esempio 3: Immagine Pura
```css
.hero {
    background-image: url('assets/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}
```
❌ Testo difficile da leggere
❌ Dipende dalla qualità immagine

---

## 💡 CONSIGLIO PERSONALE

Usa l'**Esempio 2**: Gradient + Immagine

- Mantiene la velocità
- Garantisce leggibilità testo
- Aspetto professionale
- Fallback se immagine non carica

---

**I colori sono già stati cambiati! Ora basta aggiungere le immagini e il sito sarà perfetto! 🎨✨**
