import { expect, Locator, Page } from "@playwright/test";
import { timeouts } from "../config/timeouts";
import { BasePage } from "../pages";

export class LinksPage extends BasePage {
  readonly simpleLink: Locator = this.page.locator("#simpleLink");
  readonly dynamicLink: Locator = this.page.locator("#dynamicLink");
  readonly createdLink: Locator = this.page.locator("#created");
  readonly noContentLink: Locator = this.page.locator("#no-content");
  readonly movedLink: Locator = this.page.locator("#moved");
  readonly badRequestLink: Locator = this.page.locator("#bad-request");
  readonly unauthorizedLink: Locator = this.page.locator("#unauthorized");
  readonly forbiddenLink: Locator = this.page.locator("#forbidden");
  readonly invalidUrlLink: Locator = this.page.locator("#invalid-url");
  readonly linkResponseResultField: Locator = this.page.locator("#linkResponse");

  private async clickOnLinkButton(linkButtonLocator: Locator) {
    await this.checkThatElementIsVisible(linkButtonLocator, timeouts.shortTimeout);
    await this.clickOnElement(linkButtonLocator, timeouts.superShortTimeout);
  }

  async clickOnLinkButtonAndCheckResponse(linkButtonLocator: Locator, urlPart: string, expectedStatus: number) {
    const [response] = await Promise.all([this.page.waitForResponse((resp) => resp.url().includes(urlPart)), this.clickOnLinkButton(linkButtonLocator)]);
    expect(response.status()).toBe(expectedStatus);
  }

  async checkThatResultFieldContainsExpectedText(expectedText: string) {
    await this.checkThatElementIsVisible(this.linkResponseResultField, timeouts.shortTimeout);
    await this.checkThatElementContainExpectedText(this.linkResponseResultField, expectedText);
  }

  async clickAndOpenNewPage(locator: Locator): Promise<Page> {
    const [newPage] = await Promise.all([this.page.waitForEvent("popup"), locator.click()]);

    await newPage.waitForLoadState();
    return newPage;
  }
}
