import { expect, Locator, Page } from "@playwright/test";
import { timeouts } from "../config/timeouts";
import { BasePage } from "../pages";

export class LinksPage extends BasePage {
  readonly page: Page;

  readonly simpleLink: Locator;
  readonly dynamicLink: Locator;
  readonly createdLink: Locator;
  readonly noContentLink: Locator;
  readonly movedLink: Locator;
  readonly badRequestLink: Locator;
  readonly unauthorizedLink: Locator;
  readonly forbiddenLink: Locator;
  readonly invalidUrlLink: Locator;
  readonly linkResponseResultField: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.simpleLink = this.page.locator("#simpleLink");
    this.dynamicLink = this.page.locator("#dynamicLink");
    this.createdLink = this.page.locator("#created");
    this.noContentLink = this.page.locator("#no-content");
    this.movedLink = this.page.locator("#moved");
    this.badRequestLink = this.page.locator("#bad-request");
    this.unauthorizedLink = this.page.locator("#unauthorized");
    this.forbiddenLink = this.page.locator("#forbidden");
    this.invalidUrlLink = this.page.locator("#invalid-url");
    this.linkResponseResultField = this.page.locator("#linkResponse");
  }

  private async clickOnLinkButton(linkButtonLocator: Locator) {
    await this.checkThatElementIsVisible(linkButtonLocator, timeouts.shortTimeout);
    await this.clickOnElement(linkButtonLocator, timeouts.superShortTimeout);
  }

  async clickOnLinkButtonAndCheckResponse(linkButtonLocator: Locator, urlPart: string, expectedStatus: number) {
    const [response] = await Promise.all([
      this.page.waitForResponse((resp) => resp.url().includes(urlPart)),
      this.clickOnLinkButton(linkButtonLocator),
    ]);
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
