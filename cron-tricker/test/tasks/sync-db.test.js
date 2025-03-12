const { syncDB } = require("../../tasks/sync-db");

describe("Sync-db test", () => {
  test("should execute the process twice times ", () => {
    syncDB();
    const times = syncDB();
    console.log("it call : ", times);
    expect(times).toBe(2);
  });
});
