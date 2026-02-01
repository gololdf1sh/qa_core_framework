import { Locator, type Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { timeouts } from "../config/timeouts";

export class WebTablesRegistrationFormModalPage extends BasePage {
  readonly firstNameInput: Locator = this.page.locator("#firstName");
  readonly lastNameInput: Locator = this.page.locator("#lastName");
  readonly emailInput: Locator = this.page.locator("#userEmail");
  readonly ageInput: Locator = this.page.locator("#age");
  readonly salaryInput: Locator = this.page.locator("#salary");
  readonly departmentInput: Locator = this.page.locator("#department");
  readonly submitButton: Locator = this.page.locator("#submit");

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
