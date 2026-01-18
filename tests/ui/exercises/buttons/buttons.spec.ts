import { test } from "@playwright/test";
import { buttonNames, clickResultFields, exercisesData } from "../../../../src/data";
import { Application } from "../../../../src";

test.describe("'Buttons' Exercise @S08b052b1", () => {
  let app: Application;

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
    app = new Application(page);

    const exerciseUrl = process.env.BASE_URL! + exercisesData.buttons.slug;

    await test.step(`Go to ${exerciseUrl!}`, async () => {
      await app.navigation.goToUrl(exerciseUrl);
    });
  });

  test("Check that 'Double Click Me' button is working as expected @T8ed6b164", async () => {
    await test.step("Double-click on 'Double Click Me' button", async () => {
      await app.buttons.dblClickOnGeneratedButtonLocator(doubleClickMeButtonName);
    });

    await test.step("Check that Result field contains expected result", async () => {
      await app.buttons.checkResultField(doubleClickMeResultFieldName, doubleClickMeResultFieldText);
    });
  });

  test("Check that 'Right Click Me' button is working as expected @T7f167a71", async () => {
    await test.step("Right-click on 'Right Click Me' button", async () => {
      await app.buttons.rightClickOnGeneratedButtonLocator(rightClickMeButtonName);
    });

    await test.step("Check that Result field contains expected result", async () => {
      await app.buttons.checkResultField(rightClickMeButtonResultFieldName, rightClickMeButtonResultFieldText);
    });
  });

  test("Check that 'Click Me' button is working as expected @T92a16bf2", async () => {
    await test.step("Single-click on 'Click Me' button", async () => {
      await app.buttons.clickOnGeneratedButtonLocator(clickMeButtonName);
    });

    await test.step("Check that Result field contains expected result", async () => {
      await app.buttons.checkResultField(clickMeButtonResultFieldName, clickMeButtonResultFieldText);
    });
  });

  test("Check that Result fields is able to contains all 3 results @T21138c15", async () => {
    await test.step("Double-click on 'Double Click Me' button", async () => {
      await app.buttons.dblClickOnGeneratedButtonLocator(doubleClickMeButtonName);
    });

    await test.step("Right-click on 'Right Click Me' button", async () => {
      await app.buttons.rightClickOnGeneratedButtonLocator(rightClickMeButtonName);
    });

    await test.step("Single-click on 'Click Me' button", async () => {
      await app.buttons.clickOnGeneratedButtonLocator(clickMeButtonName);
    });

    await test.step("Check that Result fields contains all 3 results", async () => {
      await app.buttons.checkResultField(doubleClickMeResultFieldName, doubleClickMeResultFieldText);
      await app.buttons.checkResultField(rightClickMeButtonResultFieldName, rightClickMeButtonResultFieldText);
      await app.buttons.checkResultField(clickMeButtonResultFieldName, clickMeButtonResultFieldText);
    });
  });

  test("Negative: Check that Result fields is not displayed after Single-click on 'Double Click Me' button @Tff95f388", async () => {
    await test.step("Single-click on 'Double Click Me' button", async () => {
      await app.buttons.clickOnGeneratedButtonLocator(doubleClickMeButtonName);
    });

    await test.step("Check that Result field does not displayed", async () => {
      await app.buttons.checkThatResultFieldIsNotDisplayed(doubleClickMeResultFieldName);
    });
  });

  test("Negative: Check that Result fields is not displayed after Right-click on 'Double Click Me' button @T963ce354", async () => {
    await test.step("Right-click on 'Double Click Me' button", async () => {
      await app.buttons.rightClickOnGeneratedButtonLocator(doubleClickMeButtonName);
    });

    await test.step("Check that Result field does not displayed", async () => {
      await app.buttons.checkThatResultFieldIsNotDisplayed(doubleClickMeResultFieldName);
    });
  });

  test("Negative: Check that Result fields is not displayed after Single-click on 'Right Click Me' button @T5848a1de", async () => {
    await test.step("Single-click on 'Right Click Me' button", async () => {
      await app.buttons.clickOnGeneratedButtonLocator(rightClickMeButtonName);
    });

    await test.step("Check that Result field does not displayed", async () => {
      await app.buttons.checkThatResultFieldIsNotDisplayed(rightClickMeButtonResultFieldName);
    });
  });

  test("Negative: Check that Result fields is not displayed after Double-click on 'Right Click Me' button @T7f361655", async () => {
    await test.step("Double-click on 'Right Click Me' button", async () => {
      await app.buttons.dblClickOnGeneratedButtonLocator(rightClickMeButtonName);
    });

    await test.step("Check that Result field does not displayed", async () => {
      await app.buttons.checkThatResultFieldIsNotDisplayed(rightClickMeButtonResultFieldName);
    });
  });

  test("Negative: Check that Result fields is not displayed after Right-click on 'Click Me' button @T0639d02e", async () => {
    await test.step("Right-click on 'Click Me' button", async () => {
      await app.buttons.rightClickOnGeneratedButtonLocator(clickMeButtonName);
    });

    await test.step("Check that Result field does not displayed", async () => {
      await app.buttons.checkThatResultFieldIsNotDisplayed(clickMeButtonResultFieldName);
    });
  });
});
