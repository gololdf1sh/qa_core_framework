import { test } from "@playwright/test";
import { NavigationPage, TextBoxPage } from "../../../../src/pages";
import { exercisesMenusNamesData, exercisesNamesData, textBoxData } from "../../../../src/data";

test.describe("'Text Box' exercise @Sa34550bb", () => {
  let navigationPage: NavigationPage;
  let textBoxPage: TextBoxPage;

  test.beforeEach(async ({ page }) => {
    navigationPage = new NavigationPage(page);
    textBoxPage = new TextBoxPage(page);

    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.textBoxExerciseName;

    await navigationPage.goToUrl(process.env.BASE_URL!);
    await navigationPage.openExercise(exerciseMenuName, exerciseName);
  });

  test("Check Text Box positive scenario @T0e4f7d50", async () => {
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

  test("Check Text Box positive scenario - empty fields with valid email @T080c0737", async () => {
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
  test("Check Text Box negative scenario - not valid email - first case (test+user@gmail.com) @T8a6a6607", async () => {
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

  test("Check Text Box negative scenario - not valid email - second case (testusergmail.com) @T5197f68d", async () => {
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

  test("Check Text Box negative scenario - not valid email - third case (testuser@gmailcom) @T1aa4cf15", async () => {
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
