# TrelloRepro

This project demonstrates an issue with .render().

## Repro

To start the project locally:

```bash
npm i
npm run start
```

Expose it so Trello can reach it:
```bash
ngrok http --host-header=rewrite https://localhost:4200
```

Create a new Power-Up pointing to the ngrok url.
Set up the board buttons and card back section capabilities.

Repro:

Add the powerup to a board.
Check if the card back section is showing 0.

Open the modal with the powerup button. Click on the button on the modal. Check if the counter is increased on the card back section.
Close the modal. Open it again. Click on the button on the modal - the counter will not be increased.