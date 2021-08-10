const Employee = require("../lib/Employee");

test("Can build Employee object", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Name defined with constructor arguments", () => {
  const name = "Adriano";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("ID defined with constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Adriano", testValue);
  expect(e.id).toBe(testValue);
});

test("Email defined with constructor argument", () => {
  const testValue = "adriano@email.com";
  const e = new Employee("Adriano", 10, testValue);
  expect(e.email).toBe(testValue);
});

test("getName() method to get Employee's name", () => {
  const testValue = "Adriano";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("getId() method to get Employee's ID", () => {
  const testValue = 10;
  const e = new Employee("Adriano", testValue);
  expect(e.getId()).toBe(testValue);
});

test("getEmail() method to get Employee's email", () => {
  const testValue = "adriano@email.com";
  const e = new Employee("Adriano", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Adriano", 10, "adriano@email.com");
  expect(e.getRole()).toBe(testValue);
});
