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
Set up the board buttons and card ack section capabilities.
