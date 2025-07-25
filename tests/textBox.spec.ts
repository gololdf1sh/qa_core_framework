import { test } from "@playwright/test";
import { NavigationPage, TextBoxPage } from "../src/pages";
import { exercisesMenusNamesData, exercisesNamesData, textBoxData } from "../src/data";

test.describe("Check Text Box functionality", () => {
  let navigationPage: NavigationPage;
  let textBoxPage: TextBoxPage;

  test.beforeEach(async ({ page }) => {
    navigationPage = new NavigationPage(page);
    textBoxPage = new TextBoxPage(page);

    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.textBoxExerciseName;

    await page.goto("https://demoqa.com/");
    await navigationPage.openExercise(exerciseMenuName, exerciseName);
  });

  test("Check Text Box positive scenario", async () => {
    await test.step("Fill Text Box Inputs", async () => {
      await textBoxPage.fillTextBoxInputs({
        fullName: textBoxData.userFullName.validUserFullName,
        email: textBoxData.userEmail.validUserEmail,
        currentAddress: textBoxData.currentAddress.validCurrentAddress,
        permanentAddress: textBoxData.permanentAddress.validPermanentAddress,
      });
    });

    await test.step("Click Submit Button", async () => {
      await textBoxPage.clickSubmitButton();
    });

    await test.step("Check Result Field", async () => {
      await textBoxPage.checkResultField({
        fullName: textBoxData.userFullName.validUserFullName,
        email: textBoxData.userEmail.validUserEmail,
        currentAddress: textBoxData.currentAddress.validCurrentAddress,
        permanentAddress: textBoxData.permanentAddress.validPermanentAddress,
      });
    });
  });

  test("Check Text Box positive scenario - empty fields with valid email", async () => {
    await test.step("Fill Text Box Inputs", async () => {
      await textBoxPage.fillTextBoxInputs({
        fullName: textBoxData.userFullName.emptyUserFullName,
        email: textBoxData.userEmail.validUserEmail,
        currentAddress: textBoxData.currentAddress.emptyCurrentAddress,
        permanentAddress: textBoxData.permanentAddress.emptyPermanentAddress,
      });
    });

    await test.step("Click Submit Button", async () => {
      await textBoxPage.clickSubmitButton();
    });

    await test.step("Check Result Field", async () => {
      await textBoxPage.checkResultField({
        fullName: textBoxData.userFullName.emptyUserFullName,
        email: textBoxData.userEmail.validUserEmail,
        currentAddress: textBoxData.currentAddress.emptyCurrentAddress,
        permanentAddress: textBoxData.permanentAddress.emptyPermanentAddress,
      });
    });
  });

  // BUG
  test("Check Text Box negative scenario - not valid email - first case (test+user@gmail.com)", async () => {
    await test.step("Fill Text Box Inputs", async () => {
      await textBoxPage.fillTextBoxInputs({
        fullName: textBoxData.userFullName.validUserFullName,
        email: textBoxData.userEmail.notValidUserEmail.firstCase,
        currentAddress: textBoxData.currentAddress.validCurrentAddress,
        permanentAddress: textBoxData.permanentAddress.validPermanentAddress,
      });
    });

    await test.step("Click Submit Button", async () => {
      await textBoxPage.clickSubmitButton();
    });

    await test.step("Check Result Field", async () => {
      await textBoxPage.checkResultField(
        {
          fullName: textBoxData.userFullName.validUserFullName,
          email: textBoxData.userEmail.notValidUserEmail.firstCase,
          currentAddress: textBoxData.currentAddress.validCurrentAddress,
          permanentAddress: textBoxData.permanentAddress.validPermanentAddress,
        },
        false,
      );
    });
  });

  test("Check Text Box negative scenario - not valid email - second case (testusergmail.com)", async () => {
    await test.step("Fill Text Box Inputs", async () => {
      await textBoxPage.fillTextBoxInputs({
        fullName: textBoxData.userFullName.validUserFullName,
        email: textBoxData.userEmail.notValidUserEmail.secondCase,
        currentAddress: textBoxData.currentAddress.validCurrentAddress,
        permanentAddress: textBoxData.permanentAddress.validPermanentAddress,
      });
    });

    await test.step("Click Submit Button", async () => {
      await textBoxPage.clickSubmitButton();
    });

    await test.step("Check Result Field", async () => {
      await textBoxPage.checkResultField(
        {
          fullName: textBoxData.userFullName.validUserFullName,
          email: textBoxData.userEmail.notValidUserEmail.secondCase,
          currentAddress: textBoxData.currentAddress.validCurrentAddress,
          permanentAddress: textBoxData.permanentAddress.validPermanentAddress,
        },
        false,
      );
    });
  });

  test("Check Text Box negative scenario - not valid email - third case (testuser@gmailcom)", async () => {
    await test.step("Fill Text Box Inputs", async () => {
      await textBoxPage.fillTextBoxInputs({
        fullName: textBoxData.userFullName.validUserFullName,
        email: textBoxData.userEmail.notValidUserEmail.thirdCase,
        currentAddress: textBoxData.currentAddress.validCurrentAddress,
        permanentAddress: textBoxData.permanentAddress.validPermanentAddress,
      });
    });

    await test.step("Click Submit Button", async () => {
      await textBoxPage.clickSubmitButton();
    });

    await test.step("Check Result Field", async () => {
      await textBoxPage.checkResultField(
        {
          fullName: textBoxData.userFullName.validUserFullName,
          email: textBoxData.userEmail.notValidUserEmail.thirdCase,
          currentAddress: textBoxData.currentAddress.validCurrentAddress,
          permanentAddress: textBoxData.permanentAddress.validPermanentAddress,
        },
        false,
      );
    });
  });
});
