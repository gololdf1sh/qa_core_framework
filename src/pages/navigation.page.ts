import { expect, type Page } from "@playwright/test";

export class NavigationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async generateExerciseButtonLocator(exerciseName: string) {
    return this.page.locator("li", { hasText: `${exerciseName}` });
  }

  async openExercise(exerciseName: string) {
    const exerciseButton = await this.generateExerciseButtonLocator(exerciseName);
    await exerciseButton.click();
  }

  async generateExerciseMenuButtonLocator(exerciseMenuName: string) {
    return this.page.locator('[class="card mt-4 top-card"]', { hasText: `${exerciseMenuName}` });
  }

  async openExerciseMenu(exerciseMenuName: string) {
    const menuButton = await this.generateExerciseMenuButtonLocator(exerciseMenuName);
    await menuButton.click();
  }

  async checkExerciseHeader(exerciseName: string) {
    await expect(this.page.locator('[class="text-center"]', { hasText: `${exerciseName}` })).toBeVisible();
  }

  generateExerciseURL(exerciseSlug: string) {
    return "https://demoqa.com/" + exerciseSlug;
  }

  async checkExerciseURL(exerciseSlug: string) {
    const exerciseURL = this.generateExerciseURL(exerciseSlug);
    await expect(this.page).toHaveURL(exerciseURL);
  }
}
