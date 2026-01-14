import { test } from "@playwright/test";
import { exercisesMenusNamesData, exercisesNamesData, radioButtonsNames } from "../../../../src/data";
import { Application } from "../../../../src";

test.describe("'Radio Button' exercise @S45959310", () => {
  let app: Application;

  let radioButtonName: string;

  test.beforeEach(async ({ page }) => {
    app = new Application(page);

    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.radioButtonExerciseName;

    await test.step(`Go to ${process.env.BASE_URL!}`, async () => {
      await app.navigation.goToUrl(process.env.BASE_URL!);
    });

    await test.step(`Go to ${exerciseMenuName} - ${exerciseName}`, async () => {
      await app.navigation.openExercise(exerciseMenuName, exerciseName);
    });
  });

  test("Check that 'Yes' Radio Button is available and Result Field is working correctly @T03d619e3", async () => {
    radioButtonName = radioButtonsNames.yesButtonName;

    await test.step("Click on 'Yes' Radio Button", async () => {
      await app.radioButton.clickOnRadioButton(radioButtonName);
    });

    await test.step("Check that Result Field contain Radio Button Name", async () => {
      await app.radioButton.checkResultField(radioButtonName);
    });
  });

  test("Check that 'Impressive' Radio Button is available and Result Field is working correctly @Tf3beeacf", async () => {
    radioButtonName = radioButtonsNames.impressiveButtonName;

    await test.step("Click on 'Impressive' Radio Button", async () => {
      await app.radioButton.clickOnRadioButton(radioButtonName);
    });

    await test.step("Check that Result Field contain Radio Button Name", async () => {
      await app.radioButton.checkResultField(radioButtonName);
    });
  });

  // TODO: BUG - "No" Radio Button is not available
  test.skip("Check that 'No' Radio Button is available and Result Field is working correctly", async () => {
    radioButtonName = radioButtonsNames.noButtonName;

    await test.step("Click on 'No' Radio Button", async () => {
      await app.radioButton.clickOnRadioButton(radioButtonName);
    });

    await test.step("Check that Result Field contain Radio Button Name", async () => {
      await app.radioButton.checkResultField(radioButtonName);
    });
  });
});
