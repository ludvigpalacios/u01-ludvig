# u01-ludvig
Från skiss till kod. Hur gick du tillväga? Var det något i skissen som var svårt att översätta till HTML och CSS, och hur löste du det?
Svar: Inte så mycket, det svåra var att fixa färgen som fanns i source för vanligt paragraphs och text, vilket jag ändrade för att följa WCAG. Det med gradient var också utmanande, jag fick googla lite och försöka förstå hur den fungerar. 
Semantik. Vilka HTML-element valde du för sidans olika delar, och varför just de? Var landade du i ett div för att inget bättre fanns?
Svar: Jag visste inte rikgit vilken html element jag skulle använda för varje side då ingen av de hade någon <aside> så jag använde <section> för det mesta, och korresponderande element som <a>
Layout. Var använde du Flexbox, var använde du Grid, och vad avgjorde valet? Hur gjorde du sidan responsiv, och varför lade du brytpunkterna där du gjorde?
Svar: jag tycker att en blandning av de två hjälper mycket, jag vill för det mesta använda grid för its parent, speciellt i sida 3 och 4 då jag vill att de ska hålla sig i linje, sen ville jag använda flex för its children då jag vill att de krypmer eller rör sig beroende på användarens width. På navigationen vill jag gärna använda flex då den behöver anpassas till width.
Tillgänglighet. Vad har du gjort för att sidan ska gå att använda för fler? Hur testade du det, och vad visade testet? Vad återstår?
Svar: Jag använde mig av lighthouse där den bad mig att lägga till labels för mina SVGs, där använde jag mig av ARIA-label vilket var nytt för mig, men det hjälpte read alout verktygen samt AI agents veta vad svg var. Jag använde mig också av WCAG contrast checker där jag anpassade färgerna så att contrast ration var minst 4:51, då såg färgerna bättre ut och mer anpassade för de med synproblem.  Den som gav mig mest utmaning var W3 validator där jag fick 130 errors, jag fick ändra många <text> til <span> samt andra korrigeringar, men jag lyckades bli av med de flesta errors till slut. 
Användbarhet. Vilka UX- eller UI-principer känner du igen i Pawans design? Är det något du hade gjort annorlunda, och varför?
Svar: Jag förstår inte riktigt frågan. 
Styrkor och brister. Vad blev bra, och vad skulle du bygga om med mer tid?
Svar: Om jag skulle få mer tid skulle jag lägga javascript, optimera koden speciellt de med media queries så de inte var så röriga, optimera min profilbild vilket var först stort och minskade webbsidans prestanda. 
AI-verktyg. Om du använt dem: till vad, och vad ändrade du i det som genererades?
Svar: Jag har inte använt mycket AI, då jag ogillar vibe koda, det slösar mycket tid på att prompta och när det handlar om the basics så är det bättre att skriva för hand och testa, steg för steg. 