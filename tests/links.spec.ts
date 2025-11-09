import { expect, Locator, Page, test } from "@playwright/test";
import { LinksPage, NavigationPage } from "../src/pages";
import { exercisesMenusNamesData, exercisesNamesData } from "../src/data";
import { linksExpectedData } from "../src/data/linksExerciseData";

test.describe("Check Links functionality @Sbad42f3a", () => {
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

    await navigationPage.goToUrl(process.env.BASE_URL!);
    await navigationPage.openExercise(exerciseMenuName, exerciseName);
  });

  test("Check Created Link functionality @Te36829b2", async () => {
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

  test("Check No Content Link functionality @T26362cc5", async () => {
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

  test("Check Moved Link functionality @Tae1e7d66", async () => {
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

  test("Check Bad Request Link functionality @T2790069f", async () => {
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

  test("Check Unauthorized Link functionality @Ta7150343", async () => {
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

  test("Check Forbidden Link functionality @T4545e6d0", async () => {
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

  test("Check Not Found Link functionality @T53ce9499", async () => {
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

  test("Check Simple Link functionality @Tdd99a6a2", async () => {
    createdLinkLocator = linksPage.simpleLink;
    let newPage: Page;

    await test.step("Click on Link", async () => {
      newPage = await linksPage.clickAndOpenNewPage(createdLinkLocator);
    });

    await test.step("Check that user was redirected to Home page", async () => {
      await expect(newPage).toHaveURL(process.env.BASE_URL!);
    });
  });

  test("Check Dynamic Link functionality @T0228e441", async () => {
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
