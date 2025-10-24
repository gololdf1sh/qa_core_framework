import { test } from "@playwright/test";
import { exercisesMenusNamesData, exercisesNamesData, generateUserData, webTablesUsersData } from "../src/data";
import { NavigationPage, WebTablesPage } from "../src/pages";

test.describe("Check Web Tables Functionality", () => {
  let webTablesPage: WebTablesPage;
  let navigationPage: NavigationPage;

  test.beforeEach(async ({ page }) => {
    webTablesPage = new WebTablesPage(page);
    navigationPage = new NavigationPage(page);

    const exercisesMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.webTablesExerciseName;

    await navigationPage.goToUrl(process.env.BASE_URL!);
    await navigationPage.openExercise(exercisesMenuName, exerciseName);
  });

  test("Web Tables: Check existing users data", async () => {
    const userNumber = 1;
    const userFirstName = webTablesUsersData.firstUser.firstName;
    const userLastName = webTablesUsersData.firstUser.lastName;
    const userAge = webTablesUsersData.firstUser.age;
    const userEmail = webTablesUsersData.firstUser.email;
    const userSalary = webTablesUsersData.firstUser.salary;
    const userDepartment = webTablesUsersData.firstUser.department;

    await test.step("Check First User Data", async () => {
      await webTablesPage.checkUserData(
        userNumber,
        userFirstName,
        userLastName,
        userAge,
        userEmail,
        userSalary,
        userDepartment,
      );
    });
  });

  test("Web Tables: Check that User is able to add another User via Registration Form", async () => {
    const userNumber = 1;
    const userData = generateUserData();

    await test.step("Delete All Users from Web Table", async () => {
      await webTablesPage.deleteAllUsersFromWebTable();
    });
    await test.step("Add User via Registration Form", async () => {
      await webTablesPage.addUserViaRegistrationForm(userData);
    });
    await test.step("Check Added User Data", async () => {
      await webTablesPage.checkUserData(
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
