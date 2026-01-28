# ⚜️ CHECKLIST SETUP IMPERIALCRAFT

## 📋 Checklist Rapida di Configurazione

Usa questa lista per assicurarti di aver configurato tutto correttamente il sito.

### ✅ FASE 1: SETUP BASE

- [ ] Ho scaricato/estratto tutti i file nella stessa cartella
- [ ] Tutti i file sono presenti:
  - [ ] index.html
  - [ ] style.css
  - [ ] script.js
  - [ ] README.md
  - [ ] CONFIGURAZIONE.html (guida)
- [ ] Ho aperto il sito con un server HTTP (non file://)
  - [ ] Comando: `python -m http.server 8000`
  - [ ] URL: http://localhost:8000
- [ ] Il sito carica correttamente
- [ ] Non ci sono errori JavaScript (F12 → Console)

### 🎨 FASE 2: PERSONALIZZAZIONE BRAND

**Logo & Titoli:**
- [ ] Ho cambiato il titolo della pagina (in <title>)
- [ ] Ho personalizzato il logo della navbar (emoji o simbolo)
- [ ] Ho verificato che il logo animato funziona

**Colori:**
- [ ] Ho scelto la palette di colori
  - [ ] Mantengo quella imperiale (oro/nero/blu)
  - [ ] Cambio con tema personale
- [ ] Ho aggiornato le variabili CSS in :root
- [ ] Ho testato i colori su diverse sezioni

**IP Server:**
- [ ] Ho sostituito "play.imperialcraft.net" con il mio IP reale
- [ ] Ho testato il pulsante "Copia IP"
- [ ] La notifica di copia appare correttamente

### 👑 FASE 3: CONTENUTI

**Staff:**
- [ ] Ho rimosso lo staff di placeholder
- [ ] Ho aggiunto i veri membri del team
- [ ] Ho assegnato i ruoli corretti (Sovrano, Admin, Moderator, Builder)
- [ ] Ho aggiunto emoji appropriate
- [ ] Ho verificato che le card appaiano bene

**Lore & Descrizioni:**
- [ ] Ho modificato la sezione Lore con la storia reale del server
- [ ] Ho personalizzato i "Pilastri del Regno"
- [ ] Ho aggiornato le descrizioni delle caratteristiche
- [ ] Ho verificato che il testo sia leggibile su mobile

**FAQ:**
- [ ] Ho aggiunto le domande frequenti del mio server
- [ ] Ho controllato che l'accordion funziona (click su domanda)
- [ ] Ho reso le risposte chiare e complete

**Galleria:**
- [ ] Ho scaricato/preparato le immagini del mio server
- [ ] Ho creato la cartella `/images`
- [ ] Ho aggiunto le immagini alla galleria
- [ ] Ho verificato che carichino correttamente
- [ ] Ho ottimizzato le immagini (100KB max consigliato)

### 🔗 FASE 4: LINK E SOCIAL

**Social Media:**
- [ ] Ho aggiunto il link Discord (nel footer)
- [ ] Ho aggiunto il link Twitter (opzionale)
- [ ] Ho aggiunto il link YouTube (opzionale)
- [ ] Ho aggiunto il link Instagram (opzionale)
- [ ] Ho testato che i link si aprono in nuove finestre

**Contatti:**
- [ ] Ho verificato che tutti i link nel footer sono corretti
- [ ] Ho aggiunto email di contatto (se desiderato)
- [ ] Ho collegato il form (se implementato)

### 🧪 FASE 5: TESTING

**Browser:**
- [ ] Ho testato su Chrome
- [ ] Ho testato su Firefox
- [ ] Ho testato su Safari
- [ ] Ho testato su Edge

**Responsive:**
- [ ] Desktop (1920px+)
  - [ ] Navbar funziona
  - [ ] Layout è corretto
  - [ ] Nessun elemento overflow
- [ ] Tablet (768px - 1024px)
  - [ ] Menu hamburger appare
  - [ ] Grid si adatta
  - [ ] Font è leggibile
- [ ] Mobile (320px - 480px)
  - [ ] Hamburger menu funziona
  - [ ] Stack verticale è corretto
  - [ ] Pulsanti sono clickabili
  - [ ] Testo non overflow

**Funzionalità:**
- [ ] Pulsante "Accedi al Regno" scroll smooth a #server
- [ ] Pulsante "Copia IP" copia l'indirizzo
- [ ] Notifica di copia appare
- [ ] Accordion FAQ apre/chiude correttamente
- [ ] Menu mobile hamburger funziona
- [ ] Tutti i link nav scroll smooth

**Performance:**
- [ ] Caricamento pagina < 3 secondi
- [ ] Nessun lag durante scroll
- [ ] Animazioni sono smooth
- [ ] Nessun effetto su performance

### 📱 FASE 6: SEO & META

- [ ] Ho aggiunto descrizione meta (<meta name="description">)
- [ ] Ho aggiunto keywords (nel meta tag)
- [ ] Ho aggiunto Open Graph per social sharing
  - [ ] og:title
  - [ ] og:description
  - [ ] og:image (immagine preview)
- [ ] Ho creato/aggiunto un favicon
- [ ] Ho verificato che il sito appaia bene nei preview social

### 🚀 FASE 7: PRE-DEPLOYMENT

**Pulizia Codice:**
- [ ] Ho rimosso i commenti non necessari
- [ ] Ho controllato per console.log() di debug
- [ ] Ho minificato CSS (opzionale, per performance)
- [ ] Ho minificato JS (opzionale, per performance)
- [ ] Ho tolto asset non utilizzati

**Ottimizzazione:**
- [ ] Ho compresso le immagini (tool: TinyPNG, ImageOptim)
- [ ] Ho ridotto il numero di richieste HTTP
- [ ] Ho verificato il load time (< 3s ideale)
- [ ] Ho controllato il PageSpeed (Google)

**Accessibilità:**
- [ ] Ho testato con screen reader
- [ ] Ho verificato il contrasto colori
- [ ] Ho aggiunto alt text alle immagini
- [ ] Ho testato navigazione da tastiera (Tab)

### 🌐 FASE 8: DEPLOYMENT

**Scelta Piattaforma:**
- [ ] Scelgo tra:
  - [ ] GitHub Pages (gratuito)
  - [ ] Netlify (gratuito + veloce)
  - [ ] Vercel (gratuito + ultra-veloce)
  - [ ] Web Host personale (a pagamento)

**Upload:**
- [ ] Ho caricato tutti i file
- [ ] Ho verificato che i link internal funzionano
- [ ] Ho testato il sito online
- [ ] Ho configurato il dominio personalizzato (opzionale)

**Dominio:**
- [ ] Ho registrato il dominio (Namecheap, GoDaddy, ecc.)
  - [ ] imperialcraft.net
  - [ ] imperialcraft.com
  - [ ] imperialcraft.gg
- [ ] Ho configurato i DNS
- [ ] Ho puntato a Netlify/Vercel/Host
- [ ] Ho verificato che il dominio funziona

**SSL/HTTPS:**
- [ ] Il sito è in HTTPS (automatico su Netlify/Vercel)
- [ ] Nessun errore di certificato
- [ ] Il lucchetto appare nella barra

### 📊 FASE 9: POST-LAUNCH

- [ ] Ho aggiunto Google Analytics
- [ ] Ho impostato Google Search Console
- [ ] Ho sottomesso il sito ai motori di ricerca
- [ ] Ho configurato sitemap.xml
- [ ] Ho aggiunto robots.txt (opzionale)

**Promozione:**
- [ ] Ho postato il link su Discord
- [ ] Ho postato su Twitter/X
- [ ] Ho postato su Instagram
- [ ] Ho postato sul forum Minecraft (se disponibile)
- [ ] Ho aggiunto il link in-game (se possibile)

### 🔧 FASE 10: MANUTENZIONE

- [ ] Monitoraggio errori JavaScript
  - [ ] Sentry.io (gratuito con piano)
  - [ ] Google Analytics
- [ ] Backup dei file (settimanale)
  - [ ] Git commits regolari
  - [ ] Backup su cloud
- [ ] Aggiornamenti contenuti
  - [ ] News mensili
  - [ ] Event updates
  - [ ] Staff changes
- [ ] Feedback utenti
  - [ ] Discord feedback channel
  - [ ] Modulo di contatto (future)

---

## 🎯 Obiettivi Opzionali Avanzati

Dopo il lancio, considera queste espansioni:

- [ ] **Backend/Database:**
  - [ ] News feed dinamico
  - [ ] Sistema login giocatori
  - [ ] Leaderboard
  - [ ] Ticket support

- [ ] **Integrazioni:**
  - [ ] API Minecraft (skin, statistiche)
  - [ ] Discord bot integration
  - [ ] Live server status
  - [ ] Player count display

- [ ] **Funzionalità:**
  - [ ] Sistema di voti per server
  - [ ] Galleria media player
  - [ ] Blog/News section
  - [ ] Store/Shop online

- [ ] **Marketing:**
  - [ ] Email newsletter
  - [ ] Affiliate program
  - [ ] YouTube embeds
  - [ ] Streaming integration (Twitch)

---

## ⚠️ Errori Comuni da Evitare

1. **❌ File non nella stessa cartella**
   - ✅ Metti HTML, CSS, JS insieme

2. **❌ Apri direttamente il file HTML**
   - ✅ Usa server HTTP (localhost:8000)

3. **❌ Dimentichi di aggiornare l'IP**
   - ✅ Usa il VERO IP del tuo server

4. **❌ Immagini di grandi dimensioni**
   - ✅ Comprimi le immagini (< 100KB)

5. **❌ Colori illeggibili**
   - ✅ Testa contrasto su WCAG

6. **❌ Link social non funzionano**
   - ✅ Verifica che gli URL siano corretti

7. **❌ No mobile optimization**
   - ✅ Testa su vari dispositivi

8. **❌ No SSL certificate**
   - ✅ Usa Netlify/Vercel (SSL automatico)

---

## 📞 Risorse Utili

- **Compressione Immagini:** https://tinypng.com
- **Test Responsivo:** https://responsivedesignchecker.com
- **SEO Check:** https://www.seobility.net
- **Pagespeed:** https://pagespeed.web.dev
- **WCAG Contrast:** https://webaim.org/resources/contrastchecker/
- **Domain Registry:** https://www.namecheap.com
- **Deploy Gratis:** https://netlify.com, https://vercel.com
- **Analytics:** https://analytics.google.com

---

## ✨ Quando Sei Pronto!

Una volta completati tutti gli step, il tuo sito ImperialCraft sarà:

✅ Completamente personalizzato
✅ Mobile-friendly
✅ Veloce e ottimizzato
✅ Online e raggiungibile
✅ Indexato dai motori di ricerca
✅ Pronto per la comunità

**Congratulazioni! Il tuo regno digitale è creato! 🏰👑**

---

*Data: Gennaio 2025*
*Versione: 1.0*
*Ultimo aggiornamento: 2025-01-20*
