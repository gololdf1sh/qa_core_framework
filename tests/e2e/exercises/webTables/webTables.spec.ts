import { test } from "@playwright/test";
import { exercisesData, generateUserData, webTablesUsersData } from "../../../../src/data";
import { Application } from "../../../../src";

test.describe("Web Tables exercise @S2113f767", () => {
  let app: Application;

  test.beforeEach(async ({ page }) => {
    app = new Application(page);

    const exerciseUrl = process.env.BASE_URL! + exercisesData.webTables.slug;

    await test.step(`Go to ${exerciseUrl!}`, async () => {
      await app.navigation.goToUrl(exerciseUrl);
    });
  });

  test("Web Tables: Check existing users data @Te8ebf1d6", async () => {
    const userNumber = 1;
    const userFirstName = webTablesUsersData.firstUser.firstName;
    const userLastName = webTablesUsersData.firstUser.lastName;
    const userAge = webTablesUsersData.firstUser.age;
    const userEmail = webTablesUsersData.firstUser.email;
    const userSalary = webTablesUsersData.firstUser.salary;
    const userDepartment = webTablesUsersData.firstUser.department;

    await test.step("Check First User Data", async () => {
      await app.webTables.checkUserData(userNumber, userFirstName, userLastName, userAge, userEmail, userSalary, userDepartment);
    });
  });

  test("Web Tables: Check that User is able to add another User via Registration Form @T6455c8e1", async () => {
    const userNumber = 1;
    const userData = generateUserData();

    await test.step("Delete All Users from Web Table", async () => {
      await app.webTables.deleteAllUsersFromWebTable();
    });

    await test.step("Add User via Registration Form", async () => {
      await app.webTables.addUserViaRegistrationForm(userData);
    });

    await test.step("Check Added User Data", async () => {
      await app.webTables.checkUserData(
        userNumber,
        userData.userFirstName,
        userData.userLastName,
        userData.userAge,
        userData.userEmail,
        userData.userSalary,
        userData.userDepartment,
      );
    });
  });
});
