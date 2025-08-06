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

    await page.goto("https://demoqa.com/");
    await page.waitForLoadState("domcontentloaded");
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
    await test.step("Add User via Registration Form", async () => {
      const userData = generateUserData();
      await webTablesPage.addUserViaRegistrationForm(userData);

      await test.step("Check Added User Data", async () => {});
    });
  });
});
