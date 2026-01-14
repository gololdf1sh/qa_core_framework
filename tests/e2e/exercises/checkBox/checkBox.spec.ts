import { test } from "@playwright/test";
import { checkBoxFilesNamesData, checkBoxResultFilesNamesData, exercisesMenusNamesData, exercisesNamesData } from "../../../../src/data";
import { Application } from "../../../../src";

test.describe("'Checkbox' Exercise @S988b1f5f", () => {
  let app: Application;

  test.beforeEach(async ({ page }) => {
    app = new Application(page);

    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.checkBoxExerciseName;

    await test.step(`Go to ${process.env.BASE_URL!}`, async () => {
      await app.navigation.goToUrl(process.env.BASE_URL!);
    });

    await test.step(`Go to ${exerciseMenuName} - ${exerciseName}`, async () => {
      await app.navigation.openExercise(exerciseMenuName, exerciseName);
    });
  });

  test("Check user has access to every file in tree @T65cba0f6", async () => {
    await test.step("Click on Plus Button", async () => {
      await app.checkBox.clickOnPlusButton();
    });

    await test.step("Check that all Files in tree are visible", async () => {
      await app.checkBox.checkThatAllFilesInTreeAreVisible(checkBoxFilesNamesData);
    });

    await test.step("Click on every File in tree", async () => {
      await app.checkBox.clickOnAllFilesInTree(checkBoxFilesNamesData);
    });

    await test.step("Check Result Field", async () => {
      await app.checkBox.checkResultField(checkBoxResultFilesNamesData);
    });
  });
});
