import { expect, type Page } from "@playwright/test";
import { timeouts } from "../config/timeouts";
import { BasePage } from "./base.page";

export class NavigationPage extends BasePage {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  private async generateExerciseButtonLocator(exerciseName: string) {
    return this.page.getByText(exerciseName, { exact: true });
  }

  private async generateExerciseMenuButtonLocator(exerciseMenuName: string) {
    return this.page.locator('[class="card mt-4 top-card"]', { hasText: `${exerciseMenuName}` });
  }

  private async openExerciseMenu(exerciseMenuName: string) {
    const menuButton = await this.generateExerciseMenuButtonLocator(exerciseMenuName);
    await this.checkThatElementIsVisible(menuButton, timeouts.shortTimeout);
    await this.clickOnElement(menuButton, timeouts.superShort);
  }

  private async clickOnExerciseButton(exerciseName: string) {
    const exerciseButton = await this.generateExerciseButtonLocator(exerciseName);
    await this.checkThatElementIsVisible(exerciseButton, timeouts.shortTimeout);
    await this.clickOnElement(exerciseButton, timeouts.superShort);
  }

  async openExercise(exerciseMenuName: string, exerciseName: string) {
    await this.openExerciseMenu(exerciseMenuName);
    await this.clickOnExerciseButton(exerciseName);
  }

  async checkExerciseHeader(exerciseName: string) {
    await this.checkThatElementIsVisible(this.page.locator('[class="text-center"]', { hasText: `${exerciseName}` }), timeouts.shortTimeout);
  }

  async checkExerciseURL(exerciseSlug: string) {
    await expect(this.page).toHaveURL(process.env.BASE_URL + exerciseSlug);
  }
}
