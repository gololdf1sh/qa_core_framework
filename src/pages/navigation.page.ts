import { expect, type Page } from "@playwright/test";
import { CommonMethodsPage } from "./commonMethods.page";

export class NavigationPage extends CommonMethodsPage {
  constructor(page: Page) {
    super(page);
  }

  async generateExerciseButtonLocator(exerciseName: string) {
    return this.page.getByText(exerciseName, { exact: true });
  }

  async generateExerciseMenuButtonLocator(exerciseMenuName: string) {
    return this.page.locator('[class="card mt-4 top-card"]', { hasText: `${exerciseMenuName}` });
  }

  async openExerciseMenu(exerciseMenuName: string) {
    const menuButton = await this.generateExerciseMenuButtonLocator(exerciseMenuName);
    await this.checkThatElementIsVisible(menuButton);
    await menuButton.click();
  }

  async clickOnExerciseButton(exerciseName: string) {
    const exerciseButton = await this.generateExerciseButtonLocator(exerciseName);
    await this.checkThatElementIsVisible(exerciseButton);
    await exerciseButton.click();
  }

  async openExercise(exerciseMenuName: string, exerciseName: string) {
    await this.openExerciseMenu(exerciseMenuName);
    await this.clickOnExerciseButton(exerciseName);
  }

  async checkExerciseHeader(exerciseName: string) {
    await this.checkThatElementIsVisible(this.page.locator('[class="text-center"]', { hasText: `${exerciseName}` }));
  }

  generateExerciseURL(exerciseSlug: string) {
    return "https://demoqa.com/" + exerciseSlug;
  }

  async checkExerciseURL(exerciseSlug: string) {
    const exerciseURL = this.generateExerciseURL(exerciseSlug);
    await expect(this.page).toHaveURL(exerciseURL);
  }
}
