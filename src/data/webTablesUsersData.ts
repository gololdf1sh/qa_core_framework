import { webTablesUsersDataTypes } from "../types";
import { faker } from "@faker-js/faker";

export const webTablesUsersData: webTablesUsersDataTypes = {
  firstUser: {
    firstName: "Cierra",
    lastName: "Vega",
    age: "39",
    email: "cierra@example.com",
    salary: "10000",
    department: "Insurance",
  },
  secondUser: {
    firstName: "Alden",
    lastName: "Cantrell",
    age: "45",
    email: "alden@example.com",
    salary: "12000",
    department: "Compliance",
  },
  thirdUser: {
    firstName: "Kierra",
    lastName: "Gentry",
    age: "29",
    email: "kierra@example.com",
    salary: "2000",
    department: "Legal",
  },
};

export function generateUserData() {
  return {
    userFirstName: faker.person.firstName(),
    userLastName: faker.person.lastName(),
    userAge: faker.number.int({ min: 0, max: 99 }).toString(), // BUG - age input validation can accept age = 0
    userEmail: faker.internet.email(),
    userSalary: faker.number.int({ min: 0, max: 9999999999 }).toString(),
    userDepartment: faker.word.sample(),
  };
}
