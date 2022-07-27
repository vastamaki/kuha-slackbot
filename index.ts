const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.TOKEN,
  appToken: process.env.APP_TOKEN,
  socketMode: true,
});

(async () => {
  await app.start();
  console.log("⚡️ Bolt app started");
})();

app.event("message", async ({ event, _, client }) => {
  try {
    if (event.text.includes("kuha")) {
      await client.reactions.add({
        name: "kuha",
        timestamp: event.ts,
        channel: event.channel,
      });
    }
  } catch (error) {
    console.error(error);
  }
});
