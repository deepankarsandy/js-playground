// The Object Way
const cache = {};
cache["user_1"] = "Alice"; // Set
const user = cache["user_1"]; // Get
delete cache["user_1"]; // Delete

// The Map Way
const mapCache = new Map();
mapCache.set("user_1", "Alice"); // Set
const mapUser = mapCache.get("user_1"); // Get
mapCache.delete("user_1"); // Delete

const distinctUsers = {};
const userA = { id: 1 };
const userB = { id: 2 };

// Trying to map metadata to these objects
distinctUsers[userA] = "Admin";
distinctUsers[userB] = "Editor";

console.log(distinctUsers);
// Output: { '[object Object]': 'Editor' }

// Two user objects (imagine they came from a database)
const user1 = { name: "Alice" };
const user2 = { name: "Bob" };

// Create a Map to track login attempts
const loginAttempts = new Map();

// Initialize counts
loginAttempts.set(user1, 0);
loginAttempts.set(user2, 0);

// Function that simulates a login attempt
function attemptLogin(user) {
  const count = loginAttempts.get(user);
  loginAttempts.set(user, count + 1);
  console.log(`${user.name} has attempted login ${count + 1} times`);
}

// Simulate usage
attemptLogin(user1);
attemptLogin(user1);
attemptLogin(user2);

// Show final state
console.log("\nMap contents:");
console.log(loginAttempts);

// map-vs-object.js
// Usage: node map-vs-object.js [size]
// Example: node map-vs-object.js 2,000,000

const SIZE = 2_000_000; // 2 million
console.log(`Running benchmark with SIZE = ${SIZE.toLocaleString()}\n`);

const object = {};
const map = new Map();

// ---------- CREATE ----------

console.time("Create plain object");
for (let i = 0; i < SIZE; i++) {
  object["key" + i] = i;
}
console.timeEnd("Create plain object");

console.time("Create Map");
for (let i = 0; i < SIZE; i++) {
  map.set("key" + i, i);
}
console.timeEnd("Create Map");

console.log("");

// ---------- RANDOM ACCESS ----------

const sampleKeys = [];
for (let i = 0; i < 100; i++) {
  const idx = Math.floor(Math.random() * SIZE);
  sampleKeys.push("key" + idx);
}

// Object access
console.time("Random access (object)");
let sumObj = 0;
for (const key of sampleKeys) {
  sumObj += object[key];
}
console.timeEnd("Random access (object)");

// Map access
console.time("Random access (Map)");
let sumMap = 0;
for (const key of sampleKeys) {
  sumMap += map.get(key);
}
console.timeEnd("Random access (Map)");

console.log("");

// ---------- SIZE CHECK ----------

console.time("Object size via Object.keys().length");
const objectSize = Object.keys(object).length;
console.timeEnd("Object size via Object.keys().length");

console.time("Map size via map.size");
const mapSize = map.size;
console.timeEnd("Map size via map.size");

console.log(`Object size: ${objectSize}`);
console.log(`Map size:    ${mapSize}\n`);

// ---------- ITERATION ----------

// Iterating over all entries in object
console.time("Iterate over object (for...in)");
let totalObj = 0;
for (const key in object) {
  if (Object.prototype.hasOwnProperty.call(object, key)) {
    totalObj += object[key];
  }
}
console.timeEnd("Iterate over object (for...in)");

// Iterating over all entries in Map
console.time("Iterate over Map (for...of)");
let totalMap = 0;
for (const [key, value] of map) {
  totalMap += value;
}
console.timeEnd("Iterate over Map (for...of)");

console.log("\nSanity check:");
console.log("Sum from object:", totalObj);
console.log("Sum from Map:   ", totalMap);

// Simple Object

const simpleObj = {
  userName: "user@example.com",
  id: 123,
  role: "admin",
};

const jsonPayload = JSON.stringify(simpleObj);
