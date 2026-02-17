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

1. Add the powerup to a board.
2. Check if the card back section is showing 0.
3. Open the modal with the powerup button. 
4. Click on the button on the modal. 
5. Check if the counter is increased on the card back section.
6. Close the modal. 
7. Open the modal again. 
8. Click on the button on the modal - the counter will not be increased.