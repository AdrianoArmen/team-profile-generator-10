const Engineer = require("../lib/Engineer");

test("GitHub username defined with constructor", () => {
  const testValue = "GitHubUsername";
  const e = new Engineer("Adriano", 10, "adriano@email.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() is expected to return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Adriano", 10, "adriano@email.com", "GitHubUsername");
  expect(e.getRole()).toBe(testValue);
});

test("getGithub() method to get Engineer's GitHub username", () => {
  const testValue = "GitHubUsername";
  const e = new Engineer("Adriano", 10, "adriano@email.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
