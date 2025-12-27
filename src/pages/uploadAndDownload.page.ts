import { Page, expect, Locator } from "@playwright/test";
import * as fs from "node:fs/promises";
import { timeouts } from "../config/timeouts";
import { BasePage } from "./base.page";

export class UploadAndDownloadPage extends BasePage {
  readonly page: Page;
  readonly downloadButton: Locator;
  readonly uploadFileInput: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.downloadButton = this.page.locator("#downloadButton");
    this.uploadFileInput = this.page.locator("#uploadFile");
  }

  private async clickOnDownloadButton() {
    await this.checkThatElementIsVisible(this.downloadButton, timeouts.shortTimeout);
    await this.clickOnElement(this.downloadButton, timeouts.superShort);
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
