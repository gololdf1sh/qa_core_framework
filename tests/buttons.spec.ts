import { test } from "@playwright/test";
import { NavigationPage, ButtonsPage } from "../src/pages";
import { buttonNames, clickResultFields, exercisesMenusNamesData, exercisesNamesData } from "../src/data";

test.describe("Check Buttons functionality", () => {
  let navigationPage: NavigationPage;
  let buttonsPage: ButtonsPage;

  const doubleClickMeButtonName = buttonNames.doubleClickMeButtonName;
  const rightClickMeButtonName = buttonNames.rightClickMeButtonName;
  const clickMeButtonName = buttonNames.clickMeButtonName;

  const doubleClickMeResultFieldName = clickResultFields.doubleClickMeResultField.name;
  const rightClickMeButtonResultFieldName = clickResultFields.rightClickMeButtonResultField.name;
  const clickMeButtonResultFieldName = clickResultFields.clickMeButtonResultField.name;

  const doubleClickMeResultFieldText = clickResultFields.doubleClickMeResultField.expectedText;
  const rightClickMeButtonResultFieldText = clickResultFields.rightClickMeButtonResultField.expectedText;
  const clickMeButtonResultFieldText = clickResultFields.clickMeButtonResultField.expectedText;

  test.beforeEach(async ({ page }) => {
    navigationPage = new NavigationPage(page);
    buttonsPage = new ButtonsPage(page);

    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.buttonsExerciseName;

    await page.goto("https://demoqa.com/");
    await navigationPage.openExercise(exerciseMenuName, exerciseName);
  });

  test("Check that Buttons working as expected", async () => {
    await test.step("Double-click on 'Double Click Me' button", async () => {
      await buttonsPage.dblClickOnButton(doubleClickMeButtonName);
    });
    await test.step("Check that Result field contains expected result", async () => {
      await buttonsPage.checkResultField(doubleClickMeResultFieldName, doubleClickMeResultFieldText);
    });
    await test.step("Right-click on 'Right Click Me' button", async () => {
      await buttonsPage.rightClickOnButton(rightClickMeButtonName);
    });
    await test.step("Check that Result field contains expected result", async () => {
      await buttonsPage.checkResultField(rightClickMeButtonResultFieldName, rightClickMeButtonResultFieldText);
    });
    await test.step("Single-click on 'Click Me' button", async () => {
      await buttonsPage.clickOnButton(clickMeButtonName);
    });
    await test.step("Check that Result field contains expected result", async () => {
      await buttonsPage.checkResultField(clickMeButtonResultFieldName, clickMeButtonResultFieldText);
    });
    await test.step("Check that Result fields contains all 3 results", async () => {
      await buttonsPage.checkResultField(doubleClickMeResultFieldName, doubleClickMeResultFieldText);
      await buttonsPage.checkResultField(rightClickMeButtonResultFieldName, rightClickMeButtonResultFieldText);
      await buttonsPage.checkResultField(clickMeButtonResultFieldName, clickMeButtonResultFieldText);
    });
  });

  test("Negative: Check that Result fields is not displayed if user does not comply with the conditions", async () => {
    await test.step("Single-click on 'Double Click Me' button", async () => {
      await buttonsPage.clickOnButton(doubleClickMeButtonName);
    });
    await test.step("Right-click on 'Double Click Me' button", async () => {
      await buttonsPage.rightClickOnButton(doubleClickMeButtonName);
    });
    await test.step("Check that Result field does not displayed", async () => {
      await buttonsPage.checkThatResultFieldIsNotDisplayed(doubleClickMeResultFieldName);
    });
    await test.step("Single-click on 'Right Click Me' button", async () => {
      await buttonsPage.clickOnButton(rightClickMeButtonName);
    });
    await test.step("Double-click on 'Right Click Me' button", async () => {
      await buttonsPage.dblClickOnButton(rightClickMeButtonName);
    });
    await test.step("Check that Result field does not displayed", async () => {
      await buttonsPage.checkThatResultFieldIsNotDisplayed(rightClickMeButtonResultFieldName);
    });
    await test.step("Right-click on 'Click Me' button", async () => {
      await buttonsPage.rightClickOnButton(clickMeButtonName);
    });
    await test.step("Check that Result field does not displayed", async () => {
      await buttonsPage.checkThatResultFieldIsNotDisplayed(clickMeButtonResultFieldName);
    });
  });
});
