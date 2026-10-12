Netlify: https://u01-ludvig-portfolio.netlify.app/

u01-ludvig
Från skiss till kod
Svar:
Det var inte så mycket i skissen som var svårt att översätta till HTML och CSS. Det svåraste var att få till rätt färger jämfört med source-designen, särskilt för vanlig text och paragrafer. Jag behövde ändra några färger för att de skulle uppfylla WCAG-kraven för kontrast. Gradienten var också utmanande i början. Jag fick googla och läsa för att förstå hur linear-gradient, background-clip: text och transparent textfärg fungerade tillsammans.

Semantik
Svar:
I början var jag osäker på vilka HTML-element jag skulle använda för de olika delarna av sidorna. Eftersom ingen av sidorna innehöll innehåll som passade i en <aside>, använde jag <section> för det mesta. Jag använde också korresponderande element där det var möjligt, till exempel <a> för länkar och <header>, <main> och <footer> för sidans huvuddelar. Jag lärde mig att det är bättre att använda semantiska element när de finns, och använda <div> när jag bara behöver en behållare för layout eller styling.

Layout
Svar:
Jag tycker att en blandning av Flexbox och Grid fungerar bäst. Jag använde mest Grid för förälderelement, särskilt på sida 3 och 4, eftersom jag ville att innehållet skulle hålla sig i rader och kolumner. Sedan använde jag Flexbox för barnen inuti griden, eftersom jag ville att de skulle kunna krympa, flytta sig eller centreras beroende på skärmens bredd.

På navigationen valde jag Flexbox eftersom den behöver anpassa sig mycket efter skärmens bredd. Jag använde media queries för att ändra flex-riktning, dölja hamburgermenyn på större skärmar och justera mellanrum och storlekar. Brytpunkterna lade jag där layouten började se trasig eller för trång ut, till exempel runt 400px och 730px, istället för att bara följa vanliga standardvärden.

Tillgänglighet
Svar:
<img width="700" height="182" alt="image" src="https://github.com/user-attachments/assets/bcddb13c-1942-4868-93f8-2ba09873c863" />
Jag använde Lighthouse för att testa sidan. Där fick jag tips om att lägga till labels för mina SVG-ikoner. Eftersom SVG-element inte använder alt på samma sätt som <img>, lärde jag mig att använda role="img" och aria-label. Det var nytt för mig, men det hjälpte skärmläsare och Read Aloud-verktyg att förstå vad ikonerna föreställer.

Jag använde också WCAG Contrast Checker för att kolla färgkontrasten. Jag anpassade flera färger så att kontrasten blev minst 4.5:1, vilket gjorde texten tydligare och bättre anpassad för personer med nedsatt syn.

<img width="1123" height="640" alt="image" src="https://github.com/user-attachments/assets/e44288c5-8313-42b6-9370-33035d95ae45" />

Den största utmaningen var W3C-validatorn. Jag började med ungefär 130 errors och fick ändra många <text>-element till <span>, fixa felaktig nestning och byta alt till aria-label på SVG:er. Jag lyckades bli av med de flesta felen, men det visade mig hur viktigt det är att skriva korrekt och semantisk HTML från början.

Användbarhet
Svar:
Jag känner igen flera UX- och UI-principer i Pawans design. Sidan har en tydlig hierarki med stor rubrik, kort introduktion och tydliga sektioner. Färgerna och gradienten används för att skapa visuell igenkänning, medan mycket vit yta gör att innehållet inte känns överbelastat. Navigationen är också enkel och återanvänds på flera sidor, vilket gör det lättare att förstå var man befinner sig.

Om jag hade gjort något annorlunda skulle jag kanske ha gjort navigationen ännu tydligare på mobil, till exempel med en riktig hamburgermeny som öppnar och stänger länkarna. Jag skulle också ha lagt mer fokus på konsekventa marginaler och avstånd mellan sektionerna, eftersom det påverkar hur lätt sidan är att läsa.

Styrkor och brister
Svar:
Det som blev bra var att sidan blev responsiv, att jag fick till en fungerande dark mode och att jag lärde mig använda både Flexbox och Grid i olika situationer. Jag är också nöjd med att jag fixade många tillgänglighets- och valideringsfel, även om det tog tid.

Om jag hade mer tid skulle jag vilja lägga till mer JavaScript, till exempel en fungerande hamburgermeny och möjligen en knapp för att växla mellan light och dark mode. Jag skulle också vilja optimera koden, särskilt media queries, eftersom de blev ganska röriga mot slutet. Profilbilden var också för stor i början och påverkade webbsidans prestanda, så den skulle jag optimera mer.

En annan sak jag skulle göra annorlunda är att vara mer konsekvent med klassnamn. Jag blev förvirrad av att “klass” i CSS betyder class name och inte skolklass, så jag skrev vissa klassnamn på svenska och andra på engelska. Nästa gång skulle jag använda engelska genomgående och följa samma namngivningsstil.

AI-verktyg
Svar:
Jag har inte använt AI särskilt mycket under projektet, eftersom jag ogillar “vibe coding”. Jag tycker att det ofta tar mycket tid att skriva bra prompts, och när det handlar om grunderna tycker jag att det är bättre att skriva koden själv, testa och felsöka steg för steg. Jag har dock använt AI som stöd för att snygga till denna readme, kunna förklara koncept, till exempel hur CSS-variabler, dark mode, order och SVG-tillgänglighet fungerar. Jag ändrade alltid det genererade svaret så att det passade min egen kod och min egen stil.

