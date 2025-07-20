import { Page, expect, Locator } from "@playwright/test";
import { TextBoxInputFieldsDataType } from "../types";

export class TextBoxPage {
  page: Page;
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly currentAddressInput: Locator;
  readonly permanentAddressInput: Locator;
  readonly submitButton: Locator;
  readonly resultField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fullNameInput = this.page.locator("#userName");
    this.emailInput = this.page.locator("#userEmail");
    this.currentAddressInput = this.page.locator("#currentAddress");
    this.permanentAddressInput = this.page.locator("#permanentAddress");
    this.submitButton = this.page.locator("#submit");
    this.resultField = this.page.locator("#output");
  }

  async fillFullNameInput(userFullName: string) {
    await this.fullNameInput.fill(userFullName);
  }

  async fillEmailInput(userEmail: string) {
    await this.emailInput.fill(userEmail);
  }

  async fillCurrentAddressInput(userCurrentAddress: string) {
    await this.currentAddressInput.fill(userCurrentAddress);
  }

  async fillPermanentAddressInput(userPermanentAddress: string) {
    await this.permanentAddressInput.fill(userPermanentAddress);
  }

  async clickSubmitButton() {
    await this.submitButton.click();
  }

  async fillTextBoxInputs(data: TextBoxInputFieldsDataType) {
    await this.fillFullNameInput(data.fullName);
    await this.fillEmailInput(data.email);
    await this.fillCurrentAddressInput(data.currentAddress);
    await this.fillPermanentAddressInput(data.permanentAddress);
  }

  async checkResultField(data: TextBoxInputFieldsDataType, validCase: boolean = true) {
    if (!validCase) {
      await expect(this.resultField).not.toContainText(data.fullName);
    } else {
      await expect(this.resultField).toContainText(data.fullName);
    }
    if (!validCase) {
      await expect(this.resultField).not.toContainText(data.email);
    } else {
      await expect(this.resultField).toContainText(data.email);
    }
    if (!validCase) {
      await expect(this.resultField).not.toContainText(data.currentAddress);
    } else {
      await expect(this.resultField).toContainText(data.currentAddress);
    }
    if (!validCase) {
      await expect(this.resultField).not.toContainText(data.permanentAddress);
    } else {
      await expect(this.resultField).toContainText(data.permanentAddress);
    }
  }
}
