import { Locator, type Page } from "@playwright/test";
import { WebTablesRegistrationFormModalPage } from "../pages";
import { generateUserDataTypes } from "../types";
import { BasePage } from "./base.page";
import { timeouts } from "../config/timeouts";

export class WebTablesPage extends BasePage {
  readonly page: Page;

  readonly webTablesRegistrationFormModalPage: WebTablesRegistrationFormModalPage;
  readonly addButton: Locator;
  readonly searchInput: Locator;
  readonly rowsPerPageDropdown: Locator;
  readonly deleteUserButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.webTablesRegistrationFormModalPage = new WebTablesRegistrationFormModalPage(page);
    this.addButton = this.page.locator("#addNewRecordButton");
    this.searchInput = this.page.locator("#searchBox");
    this.rowsPerPageDropdown = this.page.getByLabel("rows per page");
    this.deleteUserButton = this.page.getByTitle("Delete");
  }

  private async generateFirstNameCellLocator(stringNumber: number) {
    const indexedStringNumber = stringNumber - 1;
    return this.page.locator('[role="gridcell"]').nth(indexedStringNumber * 7);
  }

  private async generateLastNameCellLocator(stringNumber: number) {
    const indexedStringNumber = stringNumber - 1;
    return this.page.locator('[role="gridcell"]').nth(indexedStringNumber * 7 + 1);
  }

  private async generateAgeCellLocator(stringNumber: number) {
    const indexedStringNumber = stringNumber - 1;
    return this.page.locator('[role="gridcell"]').nth(indexedStringNumber * 7 + 2);
  }

  private async generateEmailCellLocator(stringNumber: number) {
    const indexedStringNumber = stringNumber - 1;
    return this.page.locator('[role="gridcell"]').nth(indexedStringNumber * 7 + 3);
  }

  private async generateSalaryCellLocator(stringNumber: number) {
    const indexedStringNumber = stringNumber - 1;
    return this.page.locator('[role="gridcell"]').nth(indexedStringNumber * 7 + 4);
  }

  private async generateDepartmentCellLocator(stringNumber: number) {
    const indexedStringNumber = stringNumber - 1;
    return this.page.locator('[role="gridcell"]').nth(indexedStringNumber * 7 + 5);
  }

  private async checkFirstNameCell(stringNumber: number, firstName: string) {
    let firstNameCellLocator = await this.generateFirstNameCellLocator(stringNumber);
    await this.checkThatElementContainExpectedText(firstNameCellLocator, firstName);
  }

  private async checkLastNameCell(stringNumber: number, lastName: string) {
    let lastNameCellLocator = await this.generateLastNameCellLocator(stringNumber);
    await this.checkThatElementContainExpectedText(lastNameCellLocator, lastName);
  }

  private async checkAgeCell(stringNumber: number, age: string) {
    let ageCellLocator = await this.generateAgeCellLocator(stringNumber);
    await this.checkThatElementContainExpectedText(ageCellLocator, age);
  }

  private async checkEmailCell(stringNumber: number, email: string) {
    let emailCellLocator = await this.generateEmailCellLocator(stringNumber);
    await this.checkThatElementContainExpectedText(emailCellLocator, email);
  }

  private async checkSalaryCell(stringNumber: number, salary: string) {
    let salaryCellLocator = await this.generateSalaryCellLocator(stringNumber);
    await this.checkThatElementContainExpectedText(salaryCellLocator, salary);
  }

  private async checkDepartmentCell(stringNumber: number, department: string) {
    let departmentCellLocator = await this.generateDepartmentCellLocator(stringNumber);
    await this.checkThatElementContainExpectedText(departmentCellLocator, department);
  }

  async checkUserData(userNumber: number, firstName: string, lastName: string, age: string, email: string, salary: string, department: string) {
    let stringNumber = userNumber;

    await this.checkFirstNameCell(stringNumber, firstName);
    await this.checkLastNameCell(stringNumber, lastName);
    await this.checkAgeCell(stringNumber, age);
    await this.checkEmailCell(stringNumber, email);
    await this.checkSalaryCell(stringNumber, salary);
    await this.checkDepartmentCell(stringNumber, department);
  }

  private async clickOnFirstDeleteUserButton() {
    await this.checkThatElementIsVisible(this.deleteUserButton.first(), timeouts.shortTimeout);
    await this.clickOnElement(this.deleteUserButton.first(), timeouts.superShort);
  }

  async deleteAllUsersFromWebTable() {
    let countedDeleteButtons = await this.deleteUserButton.count();
    for (let i = 0; i < countedDeleteButtons; i++) {
      await this.clickOnFirstDeleteUserButton();
    }
  }

  private async clickOnAddButton() {
    await this.checkThatElementIsVisible(this.addButton.first(), timeouts.shortTimeout);
    await this.clickOnElement(this.addButton, timeouts.superShort);
  }

  async addUserViaRegistrationForm(userData: generateUserDataTypes) {
    await this.clickOnAddButton();
    await this.webTablesRegistrationFormModalPage.fillUserInfoAndClickSubmitButton(userData);
  }
}
