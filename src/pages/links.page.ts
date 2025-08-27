import { expect, Locator, Page } from "@playwright/test";

export class LinksPage {
  page: Page;
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

  async clickOnLinkButton(linkButtonLocator: Locator) {
    await expect(linkButtonLocator).toBeVisible();
    await linkButtonLocator.click();
  }

  async clickOnLinkButtonAndCheckResponse(linkButtonLocator: Locator, urlPart: string, expectedStatus: number) {
    const [response] = await Promise.all([
      this.page.waitForResponse((resp) => resp.url().includes(urlPart)),
      this.clickOnLinkButton(linkButtonLocator),
    ]);
    expect(response.status()).toBe(expectedStatus);
  }

  async checkThatResultFieldContainsExpectedText(expectedText: string) {
    await expect(this.linkResponseResultField).toBeVisible();
    await expect(this.linkResponseResultField).toContainText(expectedText);
  }

  async clickAndOpenNewPage(locator: Locator): Promise<Page> {
    const [newPage] = await Promise.all([this.page.waitForEvent("popup"), locator.click()]);

    await newPage.waitForLoadState();
    return newPage;
  }
}
