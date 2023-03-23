# Excalibur Startproject 2023

![fishes](./src/images/preview.png)

<br>
<br>
<br>

## Setup

- Fork deze repository, zodat dit startproject in je eigen github terecht komt
- Clone de repository van jouw eigen github naar je lokale computer (via `git clone` of door de zip te downloaden)
- Open de map in VSCode en open een terminal. Daar typ je:

```bash
npm install
npm dev
```

Open de browser op de link die verschijnt. Je kan nu je game gaan ontwikkelen. Om te stoppen typ je `ctrl + c` in de terminal.

<br>
<br>
<br>

## Publiceren naar Github Pages

In VS Code kan je `commit` en `push` gebruiken om de code waar je aan gewerkt hebt naar je eigen github te sturen. Met github pages kan je de speelbare game vervolgens publiceren.

In de ***github pages settings*** kies je voor ***publish main > docs***.

![pages](./src/images/page.png)

Je publiceert je project via `npm build`. ⚠️ Je moet in `package.json` het `build` commando aanpassen zodat de naam van jouw project wordt gebruikt:

```json
"scripts": {
  "build": "vite build --outDir=docs --base=/projectnaam/",
},
```
> *Voorbeeld: als je project gaat draaien op `https://jouwnaam.github.io/projectnaam/`, dan vul je `/projectnaam/` in*

<br>
<br>
<br>

### Testen of publiceren werkt

Om te testen of het publiceren werkt kan je een `preview` doen. In `package.json` moet je het pad van je lokale werkmap invullen:

```json
  "scripts": {
    "preview": "vite preview --outDir=docs --base=/~henk/prg4/les1/docs/"
  },
```
> *Voorbeeld: als je werkt in `http://localhost/~henk/prg4/les1/docs/`, dan vul je `/~henk/prg4/les1/docs/` in*

<br>
<br>
<br>

### Tip: clickable npm commando's

Het is super handig om de `npm` commando's aan te kunnen klikken:

- Open "File > Preferences > Settings"
- Search "npm script"
- Toggle "Npm: Enable Script Explorer"