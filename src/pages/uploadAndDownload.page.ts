import { Page, expect, Locator } from "@playwright/test";
import * as fs from "node:fs/promises";

export class UploadAndDownloadPage {
  page: Page;
  readonly downloadButton: Locator;
  readonly uploadFileInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.downloadButton = this.page.locator("#downloadButton");
    this.uploadFileInput = this.page.locator("#uploadFile");
  }

  async clickOnDownloadButton() {
    await this.checkThatDownloadButtonIsVisible();
    await this.downloadButton.click();
  }

  async checkThatDownloadButtonIsVisible() {
    await expect(this.downloadButton).toBeVisible({ timeout: 3000 });
  }

  async downloadFileMethod() {
    const downloadPromise = this.page.waitForEvent("download");
    await this.clickOnDownloadButton();
    const download = await downloadPromise;

    expect(await download.failure()).toBeNull();

    const file = await download.path();
    expect(file).not.toBeNull();

    await fs.unlink(file!);
  }

  async uploadFileMethod(pathToFile: string) {
    await this.uploadFileInput.setInputFiles(pathToFile);
  }
}
