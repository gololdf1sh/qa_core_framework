import { Locator, type Page } from "@playwright/test";
import { CommonMethodsPage } from "./commonMethods.page";

export class WebTablesRegistrationFormModalPage extends CommonMethodsPage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly ageInput: Locator;
  readonly salaryInput: Locator;
  readonly departmentInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInput = this.page.locator("#firstName");
    this.lastNameInput = this.page.locator("#lastName");
    this.emailInput = this.page.locator("#userEmail");
    this.ageInput = this.page.locator("#age");
    this.salaryInput = this.page.locator("#salary");
    this.departmentInput = this.page.locator("#department");
    this.submitButton = this.page.locator("#submit");
  }

  async fillFirstNameInput(userFirstName: string) {
    await this.checkThatElementIsVisible(this.firstNameInput);
    await this.firstNameInput.fill(userFirstName);
  }

  async fillLastNameInput(userLastName: string) {
    await this.checkThatElementIsVisible(this.lastNameInput);
    await this.lastNameInput.fill(userLastName);
  }

  async fillEmailInput(userEmail: string) {
    await this.checkThatElementIsVisible(this.emailInput);
    await this.emailInput.fill(userEmail);
  }

  async fillAgeInput(userAge: string) {
    await this.checkThatElementIsVisible(this.ageInput);
    await this.ageInput.fill(userAge);
  }

  async fillSalaryInput(userSalary: string) {
    await this.checkThatElementIsVisible(this.salaryInput);
    await this.salaryInput.fill(userSalary);
  }

  async fillDepartmentInput(userDepartment: string) {
    await this.checkThatElementIsVisible(this.departmentInput);
    await this.departmentInput.fill(userDepartment);
  }

  async clickSubmitButton() {
    await this.checkThatElementIsVisible(this.submitButton);
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
