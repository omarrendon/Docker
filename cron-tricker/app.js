const cron = require("node-cron");
const { syncDB } = require("./tasks/sync-db");

console.log("Application start");

cron.schedule("1-59/5 * * * * *", syncDB);
