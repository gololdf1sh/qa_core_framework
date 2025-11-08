import { Page, expect, Locator } from "@playwright/test";
import { TextBoxInputFieldsDataType } from "../types";

export class TextBoxPage {
  readonly page: Page;
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
    await expect(this.fullNameInput).toBeVisible({ timeout: 3000 });
    await this.fullNameInput.fill(userFullName);
    await this.page.waitForTimeout(500);
  }

  async fillEmailInput(userEmail: string) {
    await expect(this.emailInput).toBeVisible({ timeout: 3000 });
    await this.emailInput.fill(userEmail);
    await this.page.waitForTimeout(500);
  }

  async fillCurrentAddressInput(userCurrentAddress: string) {
    await expect(this.currentAddressInput).toBeVisible({ timeout: 3000 });
    await this.currentAddressInput.fill(userCurrentAddress);
    await this.page.waitForTimeout(500);
  }

  async fillPermanentAddressInput(userPermanentAddress: string) {
    await expect(this.permanentAddressInput).toBeVisible({ timeout: 3000 });
    await this.permanentAddressInput.fill(userPermanentAddress);
    await this.page.waitForTimeout(500);
  }

  async clickSubmitButton() {
    await expect(this.submitButton).toBeVisible({ timeout: 3000 });
    await this.submitButton.click();
    await this.page.waitForTimeout(500);
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
      await expect(this.resultField).not.toContainText(data.email);
      await expect(this.resultField).not.toContainText(data.currentAddress);
      await expect(this.resultField).not.toContainText(data.permanentAddress);
    } else {
      await expect(this.resultField).toContainText(data.fullName);
      await expect(this.resultField).toContainText(data.email);
      await expect(this.resultField).toContainText(data.currentAddress);
      await expect(this.resultField).toContainText(data.permanentAddress);
    }
  }
}
