import { expect, Locator, type Page } from "@playwright/test";
import { CommonMethodsPage, WebTablesRegistrationFormModalPage } from "../pages";
import { generateUserDataTypes } from "../types";

export class WebTablesPage extends CommonMethodsPage {
  readonly webTablesRegistrationFormModalPage: WebTablesRegistrationFormModalPage;
  readonly addButton: Locator;
  readonly searchInput: Locator;
  readonly rowsPerPageDropdown: Locator;
  readonly deleteUserButton: Locator;

  constructor(page: Page) {
    super(page);
    this.webTablesRegistrationFormModalPage = new WebTablesRegistrationFormModalPage(page);
    this.addButton = this.page.locator("#addNewRecordButton");
    this.searchInput = this.page.locator("#searchBox");
    this.rowsPerPageDropdown = this.page.getByLabel("rows per page");
    this.deleteUserButton = this.page.getByTitle("Delete");
  }

  async generateFirstNameCellLocator(stringNumber: number) {
    const indexedStringNumber = stringNumber - 1;
    return this.page.locator('[role="gridcell"]').nth(indexedStringNumber * 7);
  }

  async generateLastNameCellLocator(stringNumber: number) {
    const indexedStringNumber = stringNumber - 1;
    return this.page.locator('[role="gridcell"]').nth(indexedStringNumber * 7 + 1);
  }

  async generateAgeCellLocator(stringNumber: number) {
    const indexedStringNumber = stringNumber - 1;
    return this.page.locator('[role="gridcell"]').nth(indexedStringNumber * 7 + 2);
  }

  async generateEmailCellLocator(stringNumber: number) {
    const indexedStringNumber = stringNumber - 1;
    return this.page.locator('[role="gridcell"]').nth(indexedStringNumber * 7 + 3);
  }

  async generateSalaryCellLocator(stringNumber: number) {
    const indexedStringNumber = stringNumber - 1;
    return this.page.locator('[role="gridcell"]').nth(indexedStringNumber * 7 + 4);
  }

  async generateDepartmentCellLocator(stringNumber: number) {
    const indexedStringNumber = stringNumber - 1;
    return this.page.locator('[role="gridcell"]').nth(indexedStringNumber * 7 + 5);
  }

  async checkFirstNameCell(stringNumber: number, firstName: string) {
    let firstNameCellLocator = await this.generateFirstNameCellLocator(stringNumber);
    await expect(firstNameCellLocator).toContainText(firstName);
  }

  async checkLastNameCell(stringNumber: number, lastName: string) {
    let lastNameCellLocator = await this.generateLastNameCellLocator(stringNumber);
    await expect(lastNameCellLocator).toContainText(lastName);
  }

  async checkAgeCell(stringNumber: number, age: string) {
    let ageCellLocator = await this.generateAgeCellLocator(stringNumber);
    await expect(ageCellLocator).toContainText(age);
  }

  async checkEmailCell(stringNumber: number, email: string) {
    let emailCellLocator = await this.generateEmailCellLocator(stringNumber);
    await expect(emailCellLocator).toContainText(email);
  }

  async checkSalaryCell(stringNumber: number, salary: string) {
    let salaryCellLocator = await this.generateSalaryCellLocator(stringNumber);
    await expect(salaryCellLocator).toContainText(salary);
  }

  async checkDepartmentCell(stringNumber: number, department: string) {
    let departmentCellLocator = await this.generateDepartmentCellLocator(stringNumber);
    await expect(departmentCellLocator).toContainText(department);
  }

  async checkUserData(
    userNumber: number,
    firstName: string,
    lastName: string,
    age: string,
    email: string,
    salary: string,
    department: string,
  ) {
    let stringNumber = userNumber;

    await this.checkFirstNameCell(stringNumber, firstName);
    await this.checkLastNameCell(stringNumber, lastName);
    await this.checkAgeCell(stringNumber, age);
    await this.checkEmailCell(stringNumber, email);
    await this.checkSalaryCell(stringNumber, salary);
    await this.checkDepartmentCell(stringNumber, department);
  }

  async clickOnFirstDeleteUserButton() {
    await this.checkThatElementIsVisible(this.deleteUserButton.first());
    await this.deleteUserButton.first().click();
  }

  async deleteAllUsersFromWebTable() {
    let countedDeleteButtons = await this.deleteUserButton.count();
    for (let i = 0; i < countedDeleteButtons; i++) {
      await this.clickOnFirstDeleteUserButton();
    }
  }

  async clickOnAddButton() {
    await this.checkThatElementIsVisible(this.addButton);
    await this.addButton.click();
  }

  async addUserViaRegistrationForm(userData: generateUserDataTypes) {
    await this.clickOnAddButton();
    await this.webTablesRegistrationFormModalPage.fillUserInfoAndClickSubmitButton(userData);
  }
}
