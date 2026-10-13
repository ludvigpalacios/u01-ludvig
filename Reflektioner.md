# u01-ludvig

Netlify: [https://u01-ludvig-portfolio.netlify.app/](https://u01-ludvig-portfolio.netlify.app/)

## Innehåll

- [Från skiss till kod](#från-skiss-till-kod)
- [Semantik](#semantik)
- [Layout](#layout)
- [Tillgänglighet](#tillgänglighet)
- [Användbarhet](#användbarhet)
- [Styrkor och brister](#styrkor-och-brister)
- [AI-verktyg](#ai-verktyg)

---

## Från skiss till kod

> **Från skiss till kod. Hur gick du tillväga? Var det något i skissen som var svårt att översätta till HTML och CSS, och hur löste du det?**

**Svar:**  
Det var inte så mycket i skissen som var svårt att översätta direkt till HTML och CSS. Det som var svårast var istället att få till rätt färger och känsla jämfört med source-designen. Särskilt vanlig text och paragrafer var svåra, eftersom vissa färger såg bra ut visuellt men inte hade tillräckligt hög kontrast mot bakgrunden. Jag behövde därför ändra flera färger för att texten skulle uppfylla WCAG-kraven och bli läsbar för fler användare.

Gradienten var också något jag behövde lära mig mer om. Jag visste först inte riktigt hur man kunde få en gradient att endast synas i texten. Efter att ha googlat och läst förstod jag att man kunde använda `linear-gradient` som bakgrund, kombinera det med `background-clip: text` och göra själva textfärgen transparent. När jag väl förstod hur de tre delarna samarbetade blev det mycket lättare att återanvända samma teknik på flera ställen, till exempel i logotypen och vissa rubriker.

En annan sak som tog tid var att översätta designen till en responsiv layout. Skissen visade hur sidan skulle se ut, men inte exakt hur elementen skulle bete sig när skärmen blev mindre eller större. Jag fick därför testa mig fram med Flexbox, Grid och media queries för att hitta en lösning som fungerade på både mobil och desktop.

---

## Semantik

> **Semantik. Vilka HTML-element valde du för sidans olika delar, och varför just de? Var landade du i ett div för att inget bättre fanns?**

**Svar:**  
I början var jag osäker på vilka HTML-element jag skulle använda för de olika delarna av sidorna. Eftersom ingen av sidorna innehöll innehåll som passade i en `<aside>`, använde jag `<section>` för det mesta. Jag använde också korresponderande element där det var möjligt, till exempel `<a>` för länkar, `<img>` för bilder och `<header>`, `<main>` samt `<footer>` för sidans huvuddelar.

Jag lärde mig att det är bättre att använda semantiska element när de finns, eftersom de gör koden mer begriplig både för andra utvecklare och för hjälpmedel som skärmläsare. En `<header>` signalerar till exempel att det är sidans topp, medan `<main>` visar var huvudinnehållet finns. `<div>` använde jag när jag bara behövde en generell behållare för layout eller styling, till exempel när jag ville gruppera flera element för att kunna styra dem med Flexbox.

Jag märkte också att semantik och tillgänglighet hänger ihop. När jag började fixa W3C-fel förstod jag att felaktig nestning och fel val av element kunde skapa problem för hur sidan tolkas. Därför försökte jag i slutet av projektet vara mer noggrann med att använda rätt element från början istället för att bara tänka på hur det ser ut.

---

## Layout

> **Layout. Var använde du Flexbox, var använde du Grid, och vad avgjorde valet? Hur gjorde du sidan responsiv, och varför lade du brytpunkterna där du gjorde?**

**Svar:**  
Jag tycker att en blandning av Flexbox och Grid fungerar bäst. Jag använde mest Grid för förälderelement, särskilt på sida 3 och 4, eftersom jag ville att innehållet skulle hålla sig i tydliga rader och kolumner. Grid gjorde det också lättare att skapa en mer strukturerad layout när det fanns flera kort, ikoner eller textblock som behövde ligga snyggt i förhållande till varandra.

Inuti griden använde jag ofta Flexbox för barnen, eftersom jag ville att de skulle kunna krympa, flytta sig eller centreras beroende på skärmens bredd. Flexbox var särskilt bra när innehållet skulle ligga på en rad eller kolumn och anpassa sig efter tillgängligt utrymme. På det sättet kunde Grid skapa den större strukturen, medan Flexbox tog hand om detaljerna inuti varje sektion.

På navigationen valde jag Flexbox eftersom den behöver anpassa sig mycket efter skärmens bredd. Jag använde media queries för att ändra flex-riktning, dölja hamburgermenyn på större skärmar och justera mellanrum, storlekar och marginaler. Jag lärde mig också hur `order` kan användas för att ändra den visuella ordningen på flex-items utan att behöva ändra ordningen i HTML.

Brytpunkterna lade jag där layouten började se trasig eller för trång ut, till exempel runt 400px och 730px, istället för att bara följa vanliga standardvärden. Jag testade sidan genom att dra i webbläsarens fönster och kolla när element började hamna fel, överlappa varandra eller bli för små. Det hjälpte mig att förstå att responsiv design inte bara handlar om att göra saker mindre, utan om att ändra hur innehållet är organiserat.

---

## Tillgänglighet

> **Tillgänglighet. Vad har du gjort för att sidan ska gå att använda för fler? Hur testade du det, och vad visade testet? Vad återstår?**

<img width="700" height="182" alt="image" src="https://github.com/user-attachments/assets/bcddb13c-1942-4868-93f8-2ba09873c863" />

**Svar:**  
Jag använde Lighthouse för att testa sidan. Där fick jag tips om att lägga till labels för mina SVG-ikoner. Eftersom SVG-element inte använder `alt` på samma sätt som `<img>`, lärde jag mig att använda `role="img"` och `aria-label`. Det var nytt för mig, men det hjälpte skärmläsare och Read Aloud-verktyg att förstå vad ikonerna föreställer.

Jag använde också WCAG Contrast Checker för att kolla färgkontrasten. Jag anpassade flera färger så att kontrasten blev minst 4.5:1, vilket gjorde texten tydligare och bättre anpassad för personer med nedsatt syn. Det påverkade särskilt mina val av textfärger i dark mode, eftersom det var lätt att välja färger som såg snygga ut men som blev för svaga mot en mörk bakgrund.

<img width="1123" height="640" alt="image" src="https://github.com/user-attachments/assets/e44288c5-8313-42b6-9370-33035d95ae45" />

Den största utmaningen var W3C-validatorn. Jag började med ungefär 130 errors och fick ändra många `<text>`-element till `<span>`, fixa felaktig nestning och byta `alt` till `aria-label` på SVG:er. Jag lärde mig bland annat att ett `<p>`-element inte får innehålla blockelement, och att man behöver tänka på vilka element som får ligga inuti varandra.

Även om det kändes frustrerande i början hjälpte validatorn mig att förstå HTML-reglerna bättre. Jag lyckades bli av med de flesta felen, men processen visade mig hur viktigt det är att skriva korrekt och semantisk HTML från början istället för att försöka fixa allt i efterhand.

Det som återstår är att testa sidan mer med riktiga skärmläsare och att kontrollera att alla interaktiva element fungerar med tangentbord. Jag skulle också vilja förbättra fokusmarkeringen så att det blir tydligt vilket element som är valt när man navigerar med `Tab`.

---

## Användbarhet

> **Användbarhet. Vilka UX- eller UI-principer känner du igen i Pawans design? Är det något du hade gjort annorlunda, och varför?**

**Svar:**  
Jag känner igen flera UX- och UI-principer i Pawans design. Sidan har en tydlig hierarki med stor rubrik, kort introduktion och tydliga sektioner. Besökaren förstår snabbt vad sidan handlar om och var den ska fortsätta läsa. Färgerna och gradienten används för att skapa visuell igenkänning, medan mycket vit yta gör att innehållet inte känns överbelastat.

Navigationen är också enkel och återanvänds på flera sidor, vilket gör det lättare att förstå var man befinner sig och hur man tar sig vidare. Ikoner, rubriker och kort gör att informationen delas upp i mindre delar, vilket gör sidan lättare att skanna igenom.

Om jag hade gjort något annorlunda skulle jag kanske ha gjort navigationen ännu tydligare på mobil, till exempel med en riktig hamburgermeny som öppnar och stänger länkarna. Jag skulle också ha lagt mer fokus på konsekventa marginaler och avstånd mellan sektionerna, eftersom det påverkar hur lätt sidan är att läsa. En tydligare visuell feedback när man klickar på länkar eller knappar hade också kunnat göra upplevelsen bättre.

---

## Styrkor och brister

> **Styrkor och brister. Vad blev bra, och vad skulle du bygga om med mer tid?**

**Svar:**  
Det som blev bra var att sidan blev responsiv, att jag fick till en fungerande dark mode och att jag lärde mig använda både Flexbox och Grid i olika situationer. Jag är också nöjd med att jag fixade många tillgänglighets- och valideringsfel, även om det tog tid. Projektet hjälpte mig att förstå hur HTML, CSS och lite JavaScript hänger ihop i en riktig webbplats.

Om jag hade mer tid skulle jag vilja lägga till mer JavaScript, till exempel en fungerande hamburgermeny och möjligen en knapp för att växla mellan light och dark mode. Just nu följer dark mode användarens systeminställning, men en knapp skulle ge besökaren mer kontroll. Jag skulle också vilja spara användarens val med `localStorage`, så att sidan kommer ihåg vilket tema personen valde.

Jag skulle också vilja optimera koden, särskilt media queries, eftersom de blev ganska röriga mot slutet. Med mer tid skulle jag kunna samla ihop liknande regler, använda CSS-variabler mer konsekvent och skapa en tydligare struktur mellan basstilar, layout och teman. Profilbilden var också för stor i början och påverkade webbsidans prestanda, så den skulle jag optimera mer, till exempel genom att komprimera bilden och välja rätt format.

En annan sak jag skulle göra annorlunda är att vara mer konsekvent med klassnamn. Jag blev förvirrad av att “klass” i CSS betyder class name och inte skolklass, så jag skrev vissa klassnamn på svenska och andra på engelska. Nästa gång skulle jag använda engelska genomgående och följa samma namngivningsstil, till exempel `navigation`, `introduction` och `project-card`.

---

## AI-verktyg

> **AI-verktyg. Om du använt dem: till vad, och vad ändrade du i det som genererades?**

**Svar:**  
Jag har inte använt AI särskilt mycket under projektet, eftersom jag ogillar “vibe coding”. Jag tycker att det ofta tar mycket tid att skriva bra prompts, och när det handlar om grunderna tycker jag att det är bättre att skriva koden själv, testa och felsöka steg för steg. På det sättet lär man sig varför koden fungerar, istället för att bara kopiera en lösning man inte förstår.

Jag har dock använt AI som stöd för att förklara koncept, till exempel hur CSS-variabler, dark mode, `order` och SVG-tillgänglighet fungerar. Jag har också använt det för att hjälpa till att snygga till denna readme och formulera mina reflektioner. Jag ändrade alltid det genererade svaret så att det passade min egen kod, mina egna erfarenheter och min skrivstil. AI använde jag alltså mest som ett sätt att förstå och förklara, inte som ett sätt att låta den skriva hela projektet åt mig.
