import { test } from "@playwright/test";
import { NavigationPage } from "../src/pages";
import { exercisesMenusNamesData, exercisesNamesData } from "../src/data";

test.describe("Check access to every exercise", () => {
  let navigationPage: NavigationPage;

  test.beforeEach(async ({ page }) => {
    navigationPage = new NavigationPage(page);
    await page.goto("https://demoqa.com/");
  });

  // Elements

  test("Elements - Text Box", async () => {
    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.textBoxExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Elements - Check Box", async () => {
    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.checkBoxExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Elements - Radio Button", async () => {
    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.radioButtonExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Elements - Web Tables", async () => {
    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.webTablesExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Elements - Buttons", async () => {
    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.buttonsExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  // TODO: Investigate why Playwright not able to see "locator('li', { hasText: 'Links' })" - Problem: locator resolved to 2 elements
  test.skip("Elements - Links", async () => {
    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.linksExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Elements - Broken Links - Images", async () => {
    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.brokenLinksImagesExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Elements - Upload and Download", async () => {
    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.uploadAndDownloadExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Elements - Dynamic Properties", async () => {
    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.dynamicPropertiesExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  // Forms

  test("Forms - Practice Form", async () => {
    const exerciseMenuName = exercisesMenusNamesData.formMenuName;
    const exerciseName = exercisesNamesData.practiceFormExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  // Alerts, Frame & Windows

  test("Alerts, Frame & Windows - Browser Windows", async () => {
    const exerciseMenuName = exercisesMenusNamesData.alertsFrameWindowsMenuName;
    const exerciseName = exercisesNamesData.browserWindowsExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Alerts, Frame & Windows - Alerts", async () => {
    const exerciseMenuName = exercisesMenusNamesData.alertsFrameWindowsMenuName;
    const exerciseName = exercisesNamesData.alertsExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  // TODO: Investigate why Playwright not able to see "locator("li", { hasText: "Frames" })" - Problem: locator resolved to 2 elements
  test.skip("Alerts, Frame & Windows - Frames", async () => {
    const exerciseMenuName = exercisesMenusNamesData.alertsFrameWindowsMenuName;
    const exerciseName = exercisesNamesData.framesExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Alerts, Frame & Windows - Nested Frames", async () => {
    const exerciseMenuName = exercisesMenusNamesData.alertsFrameWindowsMenuName;
    const exerciseName = exercisesNamesData.nestedFramesExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Alerts, Frame & Windows - Modal Dialogs", async () => {
    const exerciseMenuName = exercisesMenusNamesData.alertsFrameWindowsMenuName;
    const exerciseName = exercisesNamesData.modalDialogExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  // Widgets

  test("Widgets - Accordian", async () => {
    const exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    const exerciseName = exercisesNamesData.accordianExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Widgets - Auto Complete", async () => {
    const exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    const exerciseName = exercisesNamesData.autoCompleteExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Widgets - Date Picker", async () => {
    const exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    const exerciseName = exercisesNamesData.datePickerExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Widgets - Slider", async () => {
    const exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    const exerciseName = exercisesNamesData.sliderExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Widgets - Progress Bar", async () => {
    const exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    const exerciseName = exercisesNamesData.progressBarExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Widgets - Tabs", async () => {
    const exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    const exerciseName = exercisesNamesData.tabsExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Widgets - Tool Tips", async () => {
    const exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    const exerciseName = exercisesNamesData.toolTipsExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  // TODO: Investigate why Playwright not able to see "locator("li", { hasText: "Menu" })" - Problem: locator resolved to 2 elements
  test.skip("Widgets - Menu", async () => {
    const exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    const exerciseName = exercisesNamesData.menuExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Widgets - Select Menu", async () => {
    const exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    const exerciseName = exercisesNamesData.selectMenuExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  // Interactions

  test("Interactions - Sortable", async () => {
    const exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    const exerciseName = exercisesNamesData.sortableExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Interactions - Selectable", async () => {
    const exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    const exerciseName = exercisesNamesData.selectableExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Interactions - Resizable", async () => {
    const exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    const exerciseName = exercisesNamesData.resizableExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Interactions - Droppable", async () => {
    const exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    const exerciseName = exercisesNamesData.droppableExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Interactions - Dragabble", async () => {
    const exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    const exerciseName = exercisesNamesData.dragabbleExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  // Book Store Application

  test("Book Store Application - Login", async () => {
    const exerciseMenuName = exercisesMenusNamesData.bookStoreApplicationMenuName;
    const exerciseName = exercisesNamesData.loginExerciseName;

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  // TODO: Investigate why Playwright not able to see "locator("li", { hasText: "Book Store" })" - Problem: locator resolved to 2 elements
  test.skip("Book Store Application - Book Store", async () => {
    const exerciseMenuName = exercisesMenusNamesData.bookStoreApplicationMenuName;
    const exerciseName = exercisesNamesData.bookStoreExerciseName;
    const exerciseSlug = "books";

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseURL(exerciseSlug);
  });

  test("Book Store Application - Profile", async () => {
    const exerciseMenuName = exercisesMenusNamesData.bookStoreApplicationMenuName;
    const exerciseName = exercisesNamesData.profileExerciseName;
    const exerciseSlug = "profile";

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseURL(exerciseSlug);
  });

  test("Book Store Application - Book Store API", async () => {
    const exerciseMenuName = exercisesMenusNamesData.bookStoreApplicationMenuName;
    const exerciseName = exercisesNamesData.bookStoreAPIExerciseName;
    const exerciseSlug = "swagger/";

    await navigationPage.openExercise(exerciseMenuName, exerciseName);
    await navigationPage.checkExerciseURL(exerciseSlug);
  });
});
