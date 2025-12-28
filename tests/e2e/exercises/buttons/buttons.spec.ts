import { test } from "@playwright/test";
import { NavigationPage, ButtonsPage } from "../../../../src/pages";
import { buttonNames, clickResultFields, exercisesMenusNamesData, exercisesNamesData } from "../../../../src/data";

test.describe("'Buttons' Exercise @S08b052b1", () => {
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

    await test.step(`Go to ${process.env.BASE_URL!}`, async () => {
      await navigationPage.goToUrl(process.env.BASE_URL!);
    });

    await test.step(`Go to ${exerciseMenuName} - ${exerciseName}`, async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
  });

  test("Check that 'Double Click Me' button is working as expected @T8ed6b164", async () => {
    await test.step("Double-click on 'Double Click Me' button", async () => {
      await buttonsPage.dblClickOnGeneratedButtonLocator(doubleClickMeButtonName);
    });

    await test.step("Check that Result field contains expected result", async () => {
      await buttonsPage.checkResultField(doubleClickMeResultFieldName, doubleClickMeResultFieldText);
    });
  });

  test("Check that 'Right Click Me' button is working as expected @T7f167a71", async () => {
    await test.step("Right-click on 'Right Click Me' button", async () => {
      await buttonsPage.rightClickOnGeneratedButtonLocator(rightClickMeButtonName);
    });

    await test.step("Check that Result field contains expected result", async () => {
      await buttonsPage.checkResultField(rightClickMeButtonResultFieldName, rightClickMeButtonResultFieldText);
    });
  });

  test("Check that 'Click Me' button is working as expected @T92a16bf2", async () => {
    await test.step("Single-click on 'Click Me' button", async () => {
      await buttonsPage.clickOnGeneratedButtonLocator(clickMeButtonName);
    });

    await test.step("Check that Result field contains expected result", async () => {
      await buttonsPage.checkResultField(clickMeButtonResultFieldName, clickMeButtonResultFieldText);
    });
  });

  test("Check that Result fields is able to contains all 3 results @T21138c15", async () => {
    await test.step("Double-click on 'Double Click Me' button", async () => {
      await buttonsPage.dblClickOnGeneratedButtonLocator(doubleClickMeButtonName);
    });

    await test.step("Right-click on 'Right Click Me' button", async () => {
      await buttonsPage.rightClickOnGeneratedButtonLocator(rightClickMeButtonName);
    });

    await test.step("Single-click on 'Click Me' button", async () => {
      await buttonsPage.clickOnGeneratedButtonLocator(clickMeButtonName);
    });

    await test.step("Check that Result fields contains all 3 results", async () => {
      await buttonsPage.checkResultField(doubleClickMeResultFieldName, doubleClickMeResultFieldText);
      await buttonsPage.checkResultField(rightClickMeButtonResultFieldName, rightClickMeButtonResultFieldText);
      await buttonsPage.checkResultField(clickMeButtonResultFieldName, clickMeButtonResultFieldText);
    });
  });

  test("Negative: Check that Result fields is not displayed after Single-click on 'Double Click Me' button @Tff95f388", async () => {
    await test.step("Single-click on 'Double Click Me' button", async () => {
      await buttonsPage.clickOnGeneratedButtonLocator(doubleClickMeButtonName);
    });

    await test.step("Check that Result field does not displayed", async () => {
      await buttonsPage.checkThatResultFieldIsNotDisplayed(doubleClickMeResultFieldName);
    });
  });

  test("Negative: Check that Result fields is not displayed after Right-click on 'Double Click Me' button @T963ce354", async () => {
    await test.step("Right-click on 'Double Click Me' button", async () => {
      await buttonsPage.rightClickOnGeneratedButtonLocator(doubleClickMeButtonName);
    });

    await test.step("Check that Result field does not displayed", async () => {
      await buttonsPage.checkThatResultFieldIsNotDisplayed(doubleClickMeResultFieldName);
    });
  });

  test("Negative: Check that Result fields is not displayed after Single-click on 'Right Click Me' button @T5848a1de", async () => {
    await test.step("Single-click on 'Right Click Me' button", async () => {
      await buttonsPage.clickOnGeneratedButtonLocator(rightClickMeButtonName);
    });

    await test.step("Check that Result field does not displayed", async () => {
      await buttonsPage.checkThatResultFieldIsNotDisplayed(rightClickMeButtonResultFieldName);
    });
  });

  test("Negative: Check that Result fields is not displayed after Double-click on 'Right Click Me' button @T7f361655", async () => {
    await test.step("Double-click on 'Right Click Me' button", async () => {
      await buttonsPage.dblClickOnGeneratedButtonLocator(rightClickMeButtonName);
    });

    await test.step("Check that Result field does not displayed", async () => {
      await buttonsPage.checkThatResultFieldIsNotDisplayed(rightClickMeButtonResultFieldName);
    });
  });

  test("Negative: Check that Result fields is not displayed after Right-click on 'Click Me' button @T0639d02e", async () => {
    await test.step("Right-click on 'Click Me' button", async () => {
      await buttonsPage.rightClickOnGeneratedButtonLocator(clickMeButtonName);
    });

    await test.step("Check that Result field does not displayed", async () => {
      await buttonsPage.checkThatResultFieldIsNotDisplayed(clickMeButtonResultFieldName);
    });
  });
});
