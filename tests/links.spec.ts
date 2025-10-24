import { expect, Page, test } from "@playwright/test";
import { LinksPage, NavigationPage } from "../src/pages";
import { exercisesMenusNamesData, exercisesNamesData } from "../src/data";
import { linksExpectedData } from "../src/data/linksExerciseData";

test.describe("Check Links functionality", () => {
  let navigationPage: NavigationPage;
  let linksPage: LinksPage;

  test.beforeEach(async ({ page }) => {
    navigationPage = new NavigationPage(page);
    linksPage = new LinksPage(page);

    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.linksExerciseName;

    await navigationPage.goToUrl(process.env.BASE_URL!);
    await navigationPage.openExercise(exerciseMenuName, exerciseName);
  });

  test("Check Created Link functionality", async () => {
    const createdLinkLocator = linksPage.createdLink;
    const urlPart = linksExpectedData.createdLink.urlPart;
    const expectedStatus = linksExpectedData.createdLink.expectedStatus;
    const expectedText = linksExpectedData.createdLink.expectedText;

    await test.step("Click on Link and check response status", async () => {
      await linksPage.clickOnLinkButtonAndCheckResponse(createdLinkLocator, urlPart, expectedStatus);
    });
    await test.step("Check that Result field Contains expected text", async () => {
      await linksPage.checkThatResultFieldContainsExpectedText(expectedText);
    });
  });

  test("Check No Content Link functionality", async () => {
    const createdLinkLocator = linksPage.noContentLink;
    const urlPart = linksExpectedData.noContentLink.urlPart;
    const expectedStatus = linksExpectedData.noContentLink.expectedStatus;
    const expectedText = linksExpectedData.noContentLink.expectedText;

    await test.step("Click on Link and check response status", async () => {
      await linksPage.clickOnLinkButtonAndCheckResponse(createdLinkLocator, urlPart, expectedStatus);
    });
    await test.step("Check that Result field Contains expected text", async () => {
      await linksPage.checkThatResultFieldContainsExpectedText(expectedText);
    });
  });

  test("Check Moved Link functionality", async () => {
    const createdLinkLocator = linksPage.movedLink;
    const urlPart = linksExpectedData.movedLink.urlPart;
    const expectedStatus = linksExpectedData.movedLink.expectedStatus;
    const expectedText = linksExpectedData.movedLink.expectedText;

    await test.step("Click on Link and check response status", async () => {
      await linksPage.clickOnLinkButtonAndCheckResponse(createdLinkLocator, urlPart, expectedStatus);
    });
    await test.step("Check that Result field Contains expected text", async () => {
      await linksPage.checkThatResultFieldContainsExpectedText(expectedText);
    });
  });

  test("Check Bad Request Link functionality", async () => {
    const createdLinkLocator = linksPage.badRequestLink;
    const urlPart = linksExpectedData.badRequestLink.urlPart;
    const expectedStatus = linksExpectedData.badRequestLink.expectedStatus;
    const expectedText = linksExpectedData.badRequestLink.expectedText;

    await test.step("Click on Link and check response status", async () => {
      await linksPage.clickOnLinkButtonAndCheckResponse(createdLinkLocator, urlPart, expectedStatus);
    });
    await test.step("Check that Result field Contains expected text", async () => {
      await linksPage.checkThatResultFieldContainsExpectedText(expectedText);
    });
  });

  test("Check Unauthorized Link functionality", async () => {
    const createdLinkLocator = linksPage.unauthorizedLink;
    const urlPart = linksExpectedData.unauthorizedLink.urlPart;
    const expectedStatus = linksExpectedData.unauthorizedLink.expectedStatus;
    const expectedText = linksExpectedData.unauthorizedLink.expectedText;

    await test.step("Click on Link and check response status", async () => {
      await linksPage.clickOnLinkButtonAndCheckResponse(createdLinkLocator, urlPart, expectedStatus);
    });
    await test.step("Check that Result field Contains expected text", async () => {
      await linksPage.checkThatResultFieldContainsExpectedText(expectedText);
    });
  });

  test("Check Forbidden Link functionality", async () => {
    const createdLinkLocator = linksPage.forbiddenLink;
    const urlPart = linksExpectedData.forbiddenLink.urlPart;
    const expectedStatus = linksExpectedData.forbiddenLink.expectedStatus;
    const expectedText = linksExpectedData.forbiddenLink.expectedText;

    await test.step("Click on Link and check response status", async () => {
      await linksPage.clickOnLinkButtonAndCheckResponse(createdLinkLocator, urlPart, expectedStatus);
    });
    await test.step("Check that Result field Contains expected text", async () => {
      await linksPage.checkThatResultFieldContainsExpectedText(expectedText);
    });
  });

  test("Check Not Found Link functionality", async () => {
    const createdLinkLocator = linksPage.invalidUrlLink;
    const urlPart = linksExpectedData.invalidUrlLink.urlPart;
    const expectedStatus = linksExpectedData.invalidUrlLink.expectedStatus;
    const expectedText = linksExpectedData.invalidUrlLink.expectedText;

    await test.step("Click on Link and check response status", async () => {
      await linksPage.clickOnLinkButtonAndCheckResponse(createdLinkLocator, urlPart, expectedStatus);
    });
    await test.step("Check that Result field Contains expected text", async () => {
      await linksPage.checkThatResultFieldContainsExpectedText(expectedText);
    });
  });

  test("Check Simple Link functionality", async () => {
    const createdLinkLocator = linksPage.simpleLink;
    let newPage: Page;

    await test.step("Click on Link", async () => {
      newPage = await linksPage.clickAndOpenNewPage(createdLinkLocator);
    });
    await test.step("Check that user was redirected to Home page", async () => {
      await expect(newPage).toHaveURL("https://demoqa.com/");
    });
  });

  test("Check Dynamic Link functionality", async () => {
    const createdLinkLocator = linksPage.dynamicLink;
    let newPage: Page;

    await test.step("Click on Link", async () => {
      newPage = await linksPage.clickAndOpenNewPage(createdLinkLocator);
    });
    await test.step("Check that user was redirected to Home page", async () => {
      await expect(newPage).toHaveURL("https://demoqa.com/");
    });
  });
});
