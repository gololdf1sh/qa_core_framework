import { expect, Locator, Page, test } from "@playwright/test";
import { LinksPage, NavigationPage } from "../../../../src/pages";
import { exercisesMenusNamesData, exercisesNamesData } from "../../../../src/data";
import { linksExpectedData } from "../../../../src/data/linksExerciseData";

test.describe("'Links' exercise @Sca1ab14e", () => {
  let navigationPage: NavigationPage;
  let linksPage: LinksPage;

  let createdLinkLocator: Locator;
  let urlPart: string;
  let expectedStatus: number;
  let expectedText: string;

  test.beforeEach(async ({ page }) => {
    navigationPage = new NavigationPage(page);
    linksPage = new LinksPage(page);

    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.linksExerciseName;

    test(`Go to ${process.env.BASE_URL!}`, async () => {
      await navigationPage.goToUrl(process.env.BASE_URL!);
    });

    test(`Go to ${exerciseMenuName} - ${exerciseName}`, async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
  });

  test("Check 'Created Link' functionality @Tf6f7b48e", async () => {
    createdLinkLocator = linksPage.createdLink;
    urlPart = linksExpectedData.createdLink.urlPart;
    expectedStatus = linksExpectedData.createdLink.expectedStatus;
    expectedText = linksExpectedData.createdLink.expectedText;

    await test.step("Click on Link and check response status", async () => {
      await linksPage.clickOnLinkButtonAndCheckResponse(createdLinkLocator, urlPart, expectedStatus);
    });

    await test.step("Check that Result field Contains expected text", async () => {
      await linksPage.checkThatResultFieldContainsExpectedText(expectedText);
    });
  });

  test("Check 'No Content Link' functionality @T437cd904", async () => {
    createdLinkLocator = linksPage.noContentLink;
    urlPart = linksExpectedData.noContentLink.urlPart;
    expectedStatus = linksExpectedData.noContentLink.expectedStatus;
    expectedText = linksExpectedData.noContentLink.expectedText;

    await test.step("Click on Link and check response status", async () => {
      await linksPage.clickOnLinkButtonAndCheckResponse(createdLinkLocator, urlPart, expectedStatus);
    });

    await test.step("Check that Result field Contains expected text", async () => {
      await linksPage.checkThatResultFieldContainsExpectedText(expectedText);
    });
  });

  test("Check 'Moved Link' functionality @Tcbc17931", async () => {
    createdLinkLocator = linksPage.movedLink;
    urlPart = linksExpectedData.movedLink.urlPart;
    expectedStatus = linksExpectedData.movedLink.expectedStatus;
    expectedText = linksExpectedData.movedLink.expectedText;

    await test.step("Click on Link and check response status", async () => {
      await linksPage.clickOnLinkButtonAndCheckResponse(createdLinkLocator, urlPart, expectedStatus);
    });

    await test.step("Check that Result field Contains expected text", async () => {
      await linksPage.checkThatResultFieldContainsExpectedText(expectedText);
    });
  });

  test("Check 'Bad Request Link' functionality @T142ca143", async () => {
    createdLinkLocator = linksPage.badRequestLink;
    urlPart = linksExpectedData.badRequestLink.urlPart;
    expectedStatus = linksExpectedData.badRequestLink.expectedStatus;
    expectedText = linksExpectedData.badRequestLink.expectedText;

    await test.step("Click on Link and check response status", async () => {
      await linksPage.clickOnLinkButtonAndCheckResponse(createdLinkLocator, urlPart, expectedStatus);
    });

    await test.step("Check that Result field Contains expected text", async () => {
      await linksPage.checkThatResultFieldContainsExpectedText(expectedText);
    });
  });

  test("Check 'Unauthorized Link' functionality @Tfba1ba50", async () => {
    createdLinkLocator = linksPage.unauthorizedLink;
    urlPart = linksExpectedData.unauthorizedLink.urlPart;
    expectedStatus = linksExpectedData.unauthorizedLink.expectedStatus;
    expectedText = linksExpectedData.unauthorizedLink.expectedText;

    await test.step("Click on Link and check response status", async () => {
      await linksPage.clickOnLinkButtonAndCheckResponse(createdLinkLocator, urlPart, expectedStatus);
    });

    await test.step("Check that Result field Contains expected text", async () => {
      await linksPage.checkThatResultFieldContainsExpectedText(expectedText);
    });
  });

  test("Check 'Forbidden Link' functionality @Tfc0e14a8", async () => {
    createdLinkLocator = linksPage.forbiddenLink;
    urlPart = linksExpectedData.forbiddenLink.urlPart;
    expectedStatus = linksExpectedData.forbiddenLink.expectedStatus;
    expectedText = linksExpectedData.forbiddenLink.expectedText;

    await test.step("Click on Link and check response status", async () => {
      await linksPage.clickOnLinkButtonAndCheckResponse(createdLinkLocator, urlPart, expectedStatus);
    });

    await test.step("Check that Result field Contains expected text", async () => {
      await linksPage.checkThatResultFieldContainsExpectedText(expectedText);
    });
  });

  test("Check 'Not Found Link' functionality @T632eb6f2", async () => {
    createdLinkLocator = linksPage.invalidUrlLink;
    urlPart = linksExpectedData.invalidUrlLink.urlPart;
    expectedStatus = linksExpectedData.invalidUrlLink.expectedStatus;
    expectedText = linksExpectedData.invalidUrlLink.expectedText;

    await test.step("Click on Link and check response status", async () => {
      await linksPage.clickOnLinkButtonAndCheckResponse(createdLinkLocator, urlPart, expectedStatus);
    });

    await test.step("Check that Result field Contains expected text", async () => {
      await linksPage.checkThatResultFieldContainsExpectedText(expectedText);
    });
  });

  test("Check 'Simple Link' functionality @T9a74c18b", async () => {
    createdLinkLocator = linksPage.simpleLink;
    let newPage: Page;

    await test.step("Click on Link", async () => {
      newPage = await linksPage.clickAndOpenNewPage(createdLinkLocator);
    });

    await test.step("Check that user was redirected to Home page", async () => {
      await expect(newPage).toHaveURL(process.env.BASE_URL!);
    });
  });

  test("Check 'Dynamic Link' functionality @T673b992b", async () => {
    createdLinkLocator = linksPage.dynamicLink;
    let newPage: Page;

    await test.step("Click on Link", async () => {
      newPage = await linksPage.clickAndOpenNewPage(createdLinkLocator);
    });

    await test.step("Check that user was redirected to Home page", async () => {
      await expect(newPage).toHaveURL(process.env.BASE_URL!);
    });
  });
});
