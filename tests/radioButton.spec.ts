import { test } from "@playwright/test";
import { exercisesMenusNamesData, exercisesNamesData, radioButtonsNames } from "../src/data";
import { NavigationPage, RadioButtonPage } from "../src/pages";

test.describe("Check Radio Button Functionality", () => {
  let radioButtonPage: RadioButtonPage;
  let navigationPage: NavigationPage;

  let radioButtonName: string;

  test.beforeEach(async ({ page }) => {
    radioButtonPage = new RadioButtonPage(page);
    navigationPage = new NavigationPage(page);

    const exercisesMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.radioButtonExerciseName;

    await navigationPage.goToUrl(process.env.BASE_URL!);
    await navigationPage.openExercise(exercisesMenuName, exerciseName);
  });

  test("Check that 'Yes' Radio Button is available and Result Field is working correctly", async () => {
    radioButtonName = radioButtonsNames.yesButtonName;

    await test.step("Click on 'Yes' Radio Button", async () => {
      await radioButtonPage.clickOnRadioButton(radioButtonName);
    });
    await test.step("Check that Result Field contain Radio Button Name", async () => {
      await radioButtonPage.checkResultField(radioButtonName);
    });
  });

  test("Check that 'Impressive' Radio Button is available and Result Field is working correctly", async () => {
    radioButtonName = radioButtonsNames.impressiveButtonName;

    await test.step("Click on 'Impressive' Radio Button", async () => {
      await radioButtonPage.clickOnRadioButton(radioButtonName);
    });
    await test.step("Check that Result Field contain Radio Button Name", async () => {
      await radioButtonPage.checkResultField(radioButtonName);
    });
  });

  // TODO: BUG - "No" Radio Button is not available
  test.skip("Check that 'No' Radio Button is available and Result Field is working correctly", async () => {
    radioButtonName = radioButtonsNames.noButtonName;

    await test.step("Click on 'No' Radio Button", async () => {
      await radioButtonPage.clickOnRadioButton(radioButtonName);
    });
    await test.step("Check that Result Field contain Radio Button Name", async () => {
      await radioButtonPage.checkResultField(radioButtonName);
    });
  });
});
