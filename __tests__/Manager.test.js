const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Office number defined with constructor argument", () => {
  const testValue = 10;
  const e = new Manager("Adriano", 10, "adriano@email.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() is expected to return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Adriano", 10, "adriano@email.com", 10);
  expect(e.getRole()).toBe(testValue);
});

test("getOffice() method to get Manager's office number", () => {
  const testValue = 10;
  const e = new Manager("Adriano", 10, "adriano@email.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
