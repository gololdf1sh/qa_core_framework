import { expect, type Page } from "@playwright/test";
import { timeouts } from "../config/timeouts";
import { BasePage } from "./base.page";

export class NavigationPage extends BasePage {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async goToUrl(url: string) {
    await this.page.goto(url);
    await this.page.waitForLoadState("domcontentloaded", { timeout: 10000 });
  }

  async generateExerciseButtonLocator(exerciseName: string) {
    return this.page.getByText(exerciseName, { exact: true });
  }

  async generateExerciseMenuButtonLocator(exerciseMenuName: string) {
    return this.page.locator('[class="card mt-4 top-card"]', { hasText: `${exerciseMenuName}` });
  }

  async openExerciseMenu(exerciseMenuName: string) {
    const menuButton = await this.generateExerciseMenuButtonLocator(exerciseMenuName);
    await this.checkThatElementIsVisible(menuButton, timeouts.shortTimeout);
    await menuButton.click({ delay: timeouts.shortTimeout });
  }

  async clickOnExerciseButton(exerciseName: string) {
    const exerciseButton = await this.generateExerciseButtonLocator(exerciseName);
    await this.checkThatElementIsVisible(exerciseButton, timeouts.shortTimeout);
    await exerciseButton.click({ delay: timeouts.shortTimeout });
  }

  async openExercise(exerciseMenuName: string, exerciseName: string) {
    await this.openExerciseMenu(exerciseMenuName);
    await this.clickOnExerciseButton(exerciseName);
  }

  async checkExerciseHeader(exerciseName: string) {
    await expect(this.page.locator('[class="text-center"]', { hasText: `${exerciseName}` })).toBeVisible({
      timeout: 3000,
    });
  }

  generateExerciseURL(exerciseSlug: string) {
    return "https://demoqa.com/" + exerciseSlug;
  }

  async checkExerciseURL(exerciseSlug: string) {
    const exerciseURL = this.generateExerciseURL(exerciseSlug);
    await expect(this.page).toHaveURL(exerciseURL);
  }
}
