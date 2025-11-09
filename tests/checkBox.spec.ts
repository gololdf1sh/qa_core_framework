import { test } from "@playwright/test";
import { CheckBoxPage, NavigationPage } from "../src/pages";
import {
  checkBoxFilesNamesData,
  checkBoxResultFilesNamesData,
  exercisesMenusNamesData,
  exercisesNamesData,
} from "../src/data";

test.describe("Check Check Box functionality @S39137ba0", () => {
  let navigationPage: NavigationPage;
  let checkBoxPage: CheckBoxPage;

  test.beforeEach(async ({ page }) => {
    navigationPage = new NavigationPage(page);
    checkBoxPage = new CheckBoxPage(page);

    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.checkBoxExerciseName;

    await navigationPage.goToUrl(process.env.BASE_URL!);
    await navigationPage.openExercise(exerciseMenuName, exerciseName);
  });

  test("Check access to every file in tree @T2c410290", async () => {
    await test.step("Click on Plus Button", async () => {
      await checkBoxPage.clickOnPlusButton();
    });

    await test.step("Check that all Files in tree are visible", async () => {
      await checkBoxPage.checkThatAllFilesInTreeAreVisible(checkBoxFilesNamesData);
    });

    await test.step("Click on every File in tree", async () => {
      await checkBoxPage.clickOnAllFilesInTree(checkBoxFilesNamesData);
    });

    await test.step("Check Result Field", async () => {
      await checkBoxPage.checkResultField(checkBoxResultFilesNamesData);
    });
  });
});
