// JavaScript Set
//
// // The Array Way (O(n) - Linear)
const bannedArray = Array.from({ length: 10000000 }, (_, i) => i);
console.time("array includes");
const isBanned = bannedArray.includes(999999);
console.timeEnd("array includes");

// The Set Way (O(1) - Constant)
const bannedSet = new Set(bannedArray);
console.time("set has");
const isBannedFast = bannedSet.has(999999);
console.timeEnd("set has");

// method examples
const admins = new Set(["alice", "bob", "charlie"]);
const editors = new Set(["bob", "david", "charlie"]);

// INTERSECTION
// Old Way (Verbose)
const dualRolesOld = [...admins].filter((user) => editors.has(user));

// New Native Way
const dualRoles = admins.intersection(editors);
// Result: Set { 'bob', 'charlie' }

// UNION
const allStaff = admins.union(editors);
// Result: Set { 'alice', 'bob', 'charlie', 'david' }

// DIFFERENCE
const pureAdmins = admins.difference(editors);
// Result: Set { 'alice' } (Bob and Charlie are removed because they are editors)

// SYMMETRIC-DIFFERENCE
const oneRoleOnly = admins.symmetricDifference(editors);
// Result: Set { 'alice', 'david' }
const required = new Set(["read", "write"]);
const userPerms = new Set(["read", "write", "delete"]);

// Does userPerms contain everything in required?
const hasAccess = userPerms.isSupersetOf(required); // true
// Or conversely
const isAuthorized = required.isSubsetOf(userPerms); // true

const teamA = new Set(["Alice"]);
const teamB = new Set(["Bob"]);
// isDisjointFrom
teamA.isDisjointFrom(teamB); // true (No overlap)

teamA.add("july");

console.log(teamA.size);
console.log(teamA.entries());
console.log(teamA.keys());
console.log(teamA.values());
