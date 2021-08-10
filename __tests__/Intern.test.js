const Intern = require("../lib/Intern");

test("School name defined with constructor arguments", () => {
  const testValue = "Tec";
  const e = new Intern("Adriano", 10, "adriano@email.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() is expected to return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Adriano", 10, "adriano@email.com", "Tec");
  expect(e.getRole()).toBe(testValue);
});

test("getSchool() method to get Intern's school name", () => {
  const testValue = "Tec";
  const e = new Intern("Adriano", 10, "adriano@email.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
