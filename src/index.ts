import {
  userNameSchema,
  userSchema,
  type User,
} from "./validators/user.validator.js";
import { printResult } from "./utils/functions.js";

const userNames = [
  "João de Santo Cristo não tinha medo",
  "Jo",
  "João",
  1,
  { test: true },
  [0, 1, 3],
];

const users: User[] = [
  {
    name: "John",
    email: "john@email.com",
  },
  {
    name: "Riy",
    email: "james",
  },
];

console.log("User Names");
userNames.forEach((i) => {
  printResult(i, userNameSchema);
});

console.log("\n");

console.log("Users");
users.forEach((u) => {
  printResult(u, userSchema);
});

console.log("\n");
