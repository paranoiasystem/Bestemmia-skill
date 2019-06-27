# Alexa Bestemmia Skill :sunglasses:

## Come far bestemmiare alexa

1. Creare un progetto su firebase
2. Caricare bestemmie_mp3 nel hosting di firebase
3. Modificare l'url nel file js/index.js con l'url giusta che punta alla cartella caricata prima
4. Caricare il codice in js/index.js come firebase function, attenti alle dipendenze nel file package.json
5. Creare una skill su developer amazon alexa
6. Copiare il codice json/skill.json dentro l'editor json di alexa, poi cliccare su save e poi su buil model
7. Sulla dashboard di alexa modificare l'endpoint di default region con quello della function
8. Selezionare My development endpoint is a sub-domain ec..., cliccare Save endpoint
11. Testare la skill :sunglasses:
