import { Locator, type Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { timeouts } from "../config/timeouts";

export class WebTablesRegistrationFormModalPage extends BasePage {
  readonly page: Page;

  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly ageInput: Locator;
  readonly salaryInput: Locator;
  readonly departmentInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
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
    await this.checkThatElementIsVisible(this.firstNameInput, timeouts.shortTimeout);
    await this.firstNameInput.fill(userFirstName);
  }

  async fillLastNameInput(userLastName: string) {
    await this.checkThatElementIsVisible(this.lastNameInput, timeouts.shortTimeout);
    await this.lastNameInput.fill(userLastName);
  }

  async fillEmailInput(userEmail: string) {
    await this.checkThatElementIsVisible(this.emailInput, timeouts.shortTimeout);
    await this.emailInput.fill(userEmail);
  }

  async fillAgeInput(userAge: string) {
    await this.checkThatElementIsVisible(this.ageInput, timeouts.shortTimeout);
    await this.ageInput.fill(userAge);
  }

  async fillSalaryInput(userSalary: string) {
    await this.checkThatElementIsVisible(this.salaryInput, timeouts.shortTimeout);
    await this.salaryInput.fill(userSalary);
  }

  async fillDepartmentInput(userDepartment: string) {
    await this.checkThatElementIsVisible(this.departmentInput, timeouts.shortTimeout);
    await this.departmentInput.fill(userDepartment);
  }

  async clickSubmitButton() {
    await this.checkThatElementIsVisible(this.submitButton, timeouts.shortTimeout);
    await this.submitButton.click();
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
