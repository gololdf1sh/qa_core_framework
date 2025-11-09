import { test } from "@playwright/test";
import { DynamicPropertiesPage, NavigationPage } from "../src/pages";
import { exercisesMenusNamesData, exercisesNamesData } from "../src/data";

test.describe("Check Dynamic Properties functionality @S80941246", () => {
  let navigationPage: NavigationPage;
  let dynamicPropertiesPage: DynamicPropertiesPage;

  test.beforeEach(async ({ page }) => {
    navigationPage = new NavigationPage(page);
    dynamicPropertiesPage = new DynamicPropertiesPage(page);

    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.dynamicPropertiesExerciseName;

    await navigationPage.goToUrl(process.env.BASE_URL!);
    await navigationPage.openExercise(exerciseMenuName, exerciseName);
  });

  test("Check 'This text has random Id' element functionality @T4bb82e70", async () => {
    await test.step("Check that 'This text has random Id' element is visible", async () => {
      await dynamicPropertiesPage.checkThatThisTextHasRandomIdIsVisible();
    });
  });

  test("Check 'Will enable 5 seconds' element functionality @T8b23122e", async () => {
    await test.step("Check that 'Will enable 5 seconds' element is visible", async () => {
      await dynamicPropertiesPage.checkThatWillEnableFiveSecondsButtonIsVisible();
    });

    await test.step("Check that 'Will enable 5 seconds' element is disabled", async () => {
      await dynamicPropertiesPage.checkThatWillEnableFiveSecondsButtonIsDisabled();
    });

    await test.step("Check that 'Will enable 5 seconds' element is not disabled after 5 seconds", async () => {
      await dynamicPropertiesPage.checkThatWillEnableFiveSecondsButtonIsNotDisabled();
    });
  });

  test("Check 'Color Change' element functionality @T2ed4e74c", async () => {
    await test.step("Check that 'Color Change' element is visible", async () => {
      await dynamicPropertiesPage.checkThatColorChangeButtonIsVisible();
    });

    await test.step("Check that 'Color Change' element changes color after period of time", async () => {
      await dynamicPropertiesPage.takeColorOfColorChangeButtonAndCheckThatColorIsChangedAfterFiveSeconds();
    });
  });

  test("Check 'Visible After 5 Seconds' element functionality @T68e1f4bb", async () => {
    await test.step("Check that 'Visible After 5 Seconds' element is not visible", async () => {
      await dynamicPropertiesPage.checkThatVisibleAfterFiveSecondsButtonIsNotVisible();
    });

    await test.step("Check that 'Visible After 5 Seconds' element is visible after 5 seconds", async () => {
      await dynamicPropertiesPage.checkThatVisibleAfterFiveSecondsButtonIsVisible();
    });
  });
});
