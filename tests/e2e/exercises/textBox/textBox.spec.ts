import { test } from "@playwright/test";
import { exercisesData, textBoxData } from "../../../../src/data";
import { Application } from "../../../../src";

test.describe("'Text Box' exercise @Sa34550bb", () => {
  let app: Application;

  test.beforeEach(async ({ page }) => {
    app = new Application(page);

    const exerciseUrl = process.env.BASE_URL! + exercisesData.textBox.slug;

    await test.step(`Go to ${exerciseUrl!}`, async () => {
      await app.navigation.goToUrl(exerciseUrl);
    });
  });

  test("Check Text Box positive scenario @T0e4f7d50", async () => {
    await test.step("Fill Text Box Inputs", async () => {
      await app.textBox.fillTextBoxInputs({
        fullName: textBoxData.userFullName.validUserFullName,
        email: textBoxData.userEmail.validUserEmail,
        currentAddress: textBoxData.currentAddress.validCurrentAddress,
        permanentAddress: textBoxData.permanentAddress.validPermanentAddress,
      });
    });

    await test.step("Click Submit Button", async () => {
      await app.textBox.clickSubmitButton();
    });

    await test.step("Check Result Field", async () => {
      await app.textBox.checkResultField({
        fullName: textBoxData.userFullName.validUserFullName,
        email: textBoxData.userEmail.validUserEmail,
        currentAddress: textBoxData.currentAddress.validCurrentAddress,
        permanentAddress: textBoxData.permanentAddress.validPermanentAddress,
      });
    });
  });

  test("Check Text Box positive scenario - empty fields with valid email @T080c0737", async () => {
    await test.step("Fill Text Box Inputs", async () => {
      await app.textBox.fillTextBoxInputs({
        fullName: textBoxData.userFullName.emptyUserFullName,
        email: textBoxData.userEmail.validUserEmail,
        currentAddress: textBoxData.currentAddress.emptyCurrentAddress,
        permanentAddress: textBoxData.permanentAddress.emptyPermanentAddress,
      });
    });

    await test.step("Click Submit Button", async () => {
      await app.textBox.clickSubmitButton();
    });

    await test.step("Check Result Field", async () => {
      await app.textBox.checkResultField({
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
      await app.textBox.fillTextBoxInputs({
        fullName: textBoxData.userFullName.validUserFullName,
        email: textBoxData.userEmail.notValidUserEmail.firstCase,
        currentAddress: textBoxData.currentAddress.validCurrentAddress,
        permanentAddress: textBoxData.permanentAddress.validPermanentAddress,
      });
    });

    await test.step("Click Submit Button", async () => {
      await app.textBox.clickSubmitButton();
    });

    await test.step("Check Result Field", async () => {
      await app.textBox.checkResultField(
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
      await app.textBox.fillTextBoxInputs({
        fullName: textBoxData.userFullName.validUserFullName,
        email: textBoxData.userEmail.notValidUserEmail.secondCase,
        currentAddress: textBoxData.currentAddress.validCurrentAddress,
        permanentAddress: textBoxData.permanentAddress.validPermanentAddress,
      });
    });

    await test.step("Click Submit Button", async () => {
      await app.textBox.clickSubmitButton();
    });

    await test.step("Check Result Field", async () => {
      await app.textBox.checkResultField(
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
      await app.textBox.fillTextBoxInputs({
        fullName: textBoxData.userFullName.validUserFullName,
        email: textBoxData.userEmail.notValidUserEmail.thirdCase,
        currentAddress: textBoxData.currentAddress.validCurrentAddress,
        permanentAddress: textBoxData.permanentAddress.validPermanentAddress,
      });
    });

    await test.step("Click Submit Button", async () => {
      await app.textBox.clickSubmitButton();
    });

    await test.step("Check Result Field", async () => {
      await app.textBox.checkResultField(
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
