import { test } from "@playwright/test";
import { exercisesMenusNamesData, exercisesNamesData } from "../../../../src/data";
import { Application } from "../../../../src";

test.describe("'Dynamic Properties' exercise @Sff7f21df", () => {
  let app: Application;

  test.beforeEach(async ({ page }) => {
    app = new Application(page);

    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.dynamicPropertiesExerciseName;

    await test.step(`Go to ${process.env.BASE_URL!}`, async () => {
      await app.navigation.goToUrl(process.env.BASE_URL!);
    });

    await test.step(`Go to ${exerciseMenuName} - ${exerciseName}`, async () => {
      await app.navigation.openExercise(exerciseMenuName, exerciseName);
    });
  });

  test("Check 'This text has random Id' element @T29965385", async () => {
    await test.step("Check that 'This text has random Id' element is visible", async () => {
      await app.dynamicProperties.checkThatThisTextHasRandomIdIsVisible();
    });
  });

  test("Check 'Will enable 5 seconds' element @T08dedd44", async () => {
    await test.step("Check that 'Will enable 5 seconds' element is visible", async () => {
      await app.dynamicProperties.checkThatWillEnableFiveSecondsButtonIsVisible();
    });

    await test.step("Check that 'Will enable 5 seconds' element is disabled", async () => {
      await app.dynamicProperties.checkThatWillEnableFiveSecondsButtonIsDisabled();
    });

    await test.step("Check that 'Will enable 5 seconds' element is enable after 5 seconds", async () => {
      await app.dynamicProperties.checkThatWillEnableFiveSecondsButtonIsNotDisabled();
    });
  });

  test("Check 'Color Change' element @T4c5bc69d", async () => {
    await test.step("Check that 'Color Change' element is visible", async () => {
      await app.dynamicProperties.checkThatColorChangeButtonIsVisible();
    });

    await test.step("Check that 'Color Change' element changes color after period of time", async () => {
      await app.dynamicProperties.takeColorOfColorChangeButtonAndCheckThatColorIsChangedAfterFiveSeconds();
    });
  });

  test("Check 'Visible After 5 Seconds' element @Tff87c31e", async () => {
    await test.step("Check that 'Visible After 5 Seconds' element is not visible", async () => {
      await app.dynamicProperties.checkThatVisibleAfterFiveSecondsButtonIsNotVisible();
    });

    await test.step("Check that 'Visible After 5 Seconds' element is visible after 5 seconds", async () => {
      await app.dynamicProperties.checkThatVisibleAfterFiveSecondsButtonIsVisible();
    });
  });
});
