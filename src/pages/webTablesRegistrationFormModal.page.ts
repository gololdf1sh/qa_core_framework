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

  private async fillFirstNameInput(userFirstName: string) {
    await this.checkThatElementIsVisible(this.firstNameInput, timeouts.shortTimeout);
    await this.fillInputElement(this.firstNameInput, userFirstName);
    await this.checkThatInputHasExpectedValue(this.firstNameInput, userFirstName);
  }

  private async fillLastNameInput(userLastName: string) {
    await this.checkThatElementIsVisible(this.lastNameInput, timeouts.shortTimeout);
    await this.fillInputElement(this.lastNameInput, userLastName);
    await this.checkThatInputHasExpectedValue(this.lastNameInput, userLastName);
  }

  private async fillEmailInput(userEmail: string) {
    await this.checkThatElementIsVisible(this.emailInput, timeouts.shortTimeout);
    await this.fillInputElement(this.emailInput, userEmail);
    await this.checkThatInputHasExpectedValue(this.emailInput, userEmail);
  }

  private async fillAgeInput(userAge: string) {
    await this.checkThatElementIsVisible(this.ageInput, timeouts.shortTimeout);
    await this.fillInputElement(this.ageInput, userAge);
    await this.checkThatInputHasExpectedValue(this.ageInput, userAge);
  }

  private async fillSalaryInput(userSalary: string) {
    await this.checkThatElementIsVisible(this.salaryInput, timeouts.shortTimeout);
    await this.fillInputElement(this.salaryInput, userSalary);
    await this.checkThatInputHasExpectedValue(this.salaryInput, userSalary);
  }

  private async fillDepartmentInput(userDepartment: string) {
    await this.checkThatElementIsVisible(this.departmentInput, timeouts.shortTimeout);
    await this.fillInputElement(this.departmentInput, userDepartment);
    await this.checkThatInputHasExpectedValue(this.departmentInput, userDepartment);
  }

  private async clickSubmitButton() {
    await this.checkThatElementIsVisible(this.submitButton, timeouts.shortTimeout);
    await this.clickOnElement(this.submitButton, timeouts.superShortTimeout);
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
