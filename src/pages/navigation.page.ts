import { expect, type Page } from "@playwright/test";

export class NavigationPage {
  readonly page: Page;
  constructor(page: Page) {
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
    await expect(menuButton).toBeVisible({ timeout: 3000 });
    await menuButton.click();
    await this.page.waitForTimeout(500);
  }

  async clickOnExerciseButton(exerciseName: string) {
    const exerciseButton = await this.generateExerciseButtonLocator(exerciseName);
    await expect(exerciseButton).toBeVisible({ timeout: 3000 });
    await exerciseButton.click();
    await this.page.waitForTimeout(500);
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
