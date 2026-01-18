import { expect, Locator, Page, test } from "@playwright/test";
import { exercisesData } from "../../../../src/data";
import { linksExpectedData } from "../../../../src/data/linksExerciseData";
import { Application } from "../../../../src";

test.describe("'Links' exercise @Sca1ab14e", () => {
  let app: Application;
  let createdLinkLocator: Locator;
  let urlPart: string;
  let expectedStatus: number;
  let expectedText: string;

  test.beforeEach(async ({ page }) => {
    app = new Application(page);

    const exerciseUrl = process.env.BASE_URL! + exercisesData.links.slug;

    await test.step(`Go to ${exerciseUrl!}`, async () => {
      await app.navigation.goToUrl(exerciseUrl);
    });
  });

  test("Check 'Created Link' functionality @Tf6f7b48e", async () => {
    createdLinkLocator = app.links.createdLink;
    urlPart = linksExpectedData.createdLink.urlPart;
    expectedStatus = linksExpectedData.createdLink.expectedStatus;
    expectedText = linksExpectedData.createdLink.expectedText;

    await test.step("Click on Link and check response status", async () => {
      await app.links.clickOnLinkButtonAndCheckResponse(createdLinkLocator, urlPart, expectedStatus);
    });

    await test.step("Check that Result field Contains expected text", async () => {
      await app.links.checkThatResultFieldContainsExpectedText(expectedText);
    });
  });

  // TODO: BUG - Received string: "Link has responded with staus 204 and status text No Content" - staus is misspelled
  test.skip("Check 'No Content Link' functionality @T437cd904", async () => {
    createdLinkLocator = app.links.noContentLink;
    urlPart = linksExpectedData.noContentLink.urlPart;
    expectedStatus = linksExpectedData.noContentLink.expectedStatus;
    expectedText = linksExpectedData.noContentLink.expectedText;

    await test.step("Click on Link and check response status", async () => {
      await app.links.clickOnLinkButtonAndCheckResponse(createdLinkLocator, urlPart, expectedStatus);
    });

    await test.step("Check that Result field Contains expected text", async () => {
      await app.links.checkThatResultFieldContainsExpectedText(expectedText);
    });
  });

  test("Check 'Moved Link' functionality @Tcbc17931", async () => {
    createdLinkLocator = app.links.movedLink;
    urlPart = linksExpectedData.movedLink.urlPart;
    expectedStatus = linksExpectedData.movedLink.expectedStatus;
    expectedText = linksExpectedData.movedLink.expectedText;

    await test.step("Click on Link and check response status", async () => {
      await app.links.clickOnLinkButtonAndCheckResponse(createdLinkLocator, urlPart, expectedStatus);
    });

    await test.step("Check that Result field Contains expected text", async () => {
      await app.links.checkThatResultFieldContainsExpectedText(expectedText);
    });
  });

  test("Check 'Bad Request Link' functionality @T142ca143", async () => {
    createdLinkLocator = app.links.badRequestLink;
    urlPart = linksExpectedData.badRequestLink.urlPart;
    expectedStatus = linksExpectedData.badRequestLink.expectedStatus;
    expectedText = linksExpectedData.badRequestLink.expectedText;

    await test.step("Click on Link and check response status", async () => {
      await app.links.clickOnLinkButtonAndCheckResponse(createdLinkLocator, urlPart, expectedStatus);
    });

    await test.step("Check that Result field Contains expected text", async () => {
      await app.links.checkThatResultFieldContainsExpectedText(expectedText);
    });
  });

  test("Check 'Unauthorized Link' functionality @Tfba1ba50", async () => {
    createdLinkLocator = app.links.unauthorizedLink;
    urlPart = linksExpectedData.unauthorizedLink.urlPart;
    expectedStatus = linksExpectedData.unauthorizedLink.expectedStatus;
    expectedText = linksExpectedData.unauthorizedLink.expectedText;

    await test.step("Click on Link and check response status", async () => {
      await app.links.clickOnLinkButtonAndCheckResponse(createdLinkLocator, urlPart, expectedStatus);
    });

    await test.step("Check that Result field Contains expected text", async () => {
      await app.links.checkThatResultFieldContainsExpectedText(expectedText);
    });
  });

  test("Check 'Forbidden Link' functionality @Tfc0e14a8", async () => {
    createdLinkLocator = app.links.forbiddenLink;
    urlPart = linksExpectedData.forbiddenLink.urlPart;
    expectedStatus = linksExpectedData.forbiddenLink.expectedStatus;
    expectedText = linksExpectedData.forbiddenLink.expectedText;

    await test.step("Click on Link and check response status", async () => {
      await app.links.clickOnLinkButtonAndCheckResponse(createdLinkLocator, urlPart, expectedStatus);
    });

    await test.step("Check that Result field Contains expected text", async () => {
      await app.links.checkThatResultFieldContainsExpectedText(expectedText);
    });
  });

  test("Check 'Not Found Link' functionality @T632eb6f2", async () => {
    createdLinkLocator = app.links.invalidUrlLink;
    urlPart = linksExpectedData.invalidUrlLink.urlPart;
    expectedStatus = linksExpectedData.invalidUrlLink.expectedStatus;
    expectedText = linksExpectedData.invalidUrlLink.expectedText;

    await test.step("Click on Link and check response status", async () => {
      await app.links.clickOnLinkButtonAndCheckResponse(createdLinkLocator, urlPart, expectedStatus);
    });

    await test.step("Check that Result field Contains expected text", async () => {
      await app.links.checkThatResultFieldContainsExpectedText(expectedText);
    });
  });

  test("Check 'Simple Link' functionality @T9a74c18b", async () => {
    createdLinkLocator = app.links.simpleLink;
    let newPage: Page;

    await test.step("Click on Link", async () => {
      newPage = await app.links.clickAndOpenNewPage(createdLinkLocator);
    });

    await test.step("Check that user was redirected to Home page", async () => {
      await expect(newPage).toHaveURL(process.env.BASE_URL!);
    });
  });

  test("Check 'Dynamic Link' functionality @T673b992b", async () => {
    createdLinkLocator = app.links.dynamicLink;
    let newPage: Page;

    await test.step("Click on Link", async () => {
      newPage = await app.links.clickAndOpenNewPage(createdLinkLocator);
    });

    await test.step("Check that user was redirected to Home page", async () => {
      await expect(newPage).toHaveURL(process.env.BASE_URL!);
    });
  });
});
