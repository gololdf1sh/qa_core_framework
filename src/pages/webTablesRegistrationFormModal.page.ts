import { expect, Locator, type Page } from "@playwright/test";

export class WebTablesRegistrationFormModalPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly ageInput: Locator;
  readonly salaryInput: Locator;
  readonly departmentInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = this.page.locator("#firstName");
    this.lastNameInput = this.page.locator("#lastName");
    this.emailInput = this.page.locator("#userEmail");
    this.ageInput = this.page.locator("#age");
    this.salaryInput = this.page.locator("#salary");
    this.departmentInput = this.page.locator("#department");
    this.submitButton = this.page.locator("#submit");
  }

  async fillFirstNameInput(userFirstName: string) {
    await expect(this.firstNameInput).toBeVisible({ timeout: 3000 });
    await this.firstNameInput.fill(userFirstName);
    await this.page.waitForTimeout(500);
  }

  async fillLastNameInput(userLastName: string) {
    await expect(this.lastNameInput).toBeVisible({ timeout: 3000 });
    await this.lastNameInput.fill(userLastName);
    await this.page.waitForTimeout(500);
  }

  async fillEmailInput(userEmail: string) {
    await expect(this.emailInput).toBeVisible({ timeout: 3000 });
    await this.emailInput.fill(userEmail);
    await this.page.waitForTimeout(500);
  }

  async fillAgeInput(userAge: string) {
    await expect(this.ageInput).toBeVisible({ timeout: 3000 });
    await this.ageInput.fill(userAge);
  }

  async fillSalaryInput(userSalary: string) {
    await expect(this.salaryInput).toBeVisible({ timeout: 3000 });
    await this.salaryInput.fill(userSalary);
    await this.page.waitForTimeout(500);
  }

  async fillDepartmentInput(userDepartment: string) {
    await expect(this.departmentInput).toBeVisible({ timeout: 3000 });
    await this.departmentInput.fill(userDepartment);
    await this.page.waitForTimeout(500);
  }

  async clickSubmitButton() {
    await expect(this.submitButton).toBeVisible({ timeout: 3000 });
    await this.submitButton.click();
    await this.page.waitForTimeout(500);
  }

  async fillUserInfoAndClickSubmitButton(userData: {
    userFirstName: string;
    userLastName: string;
    userEmail: string;
    userAge: string;
    userSalary: string;
    userDepartment: string;
  }) {
    await this.fillFirstNameInput(userData.userFirstName);
    await this.fillLastNameInput(userData.userLastName);
    await this.fillEmailInput(userData.userEmail);
    await this.fillAgeInput(userData.userAge);
    await this.fillSalaryInput(userData.userSalary);
    await this.fillDepartmentInput(userData.userDepartment);
    await this.clickSubmitButton();
  }
}
