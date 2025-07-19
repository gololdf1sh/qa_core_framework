import { expect, test } from "@playwright/test";
import { NavigationPage } from "../src/pages";

test.describe("Check access to every exercise", () => {
  let navigationPage: NavigationPage;

  test.beforeEach(async ({ page }) => {
    navigationPage = new NavigationPage(page);
    await page.goto("https://demoqa.com/");
  });

  // Main Page

  test("Check Main Page", async ({ page }) => {
    await expect(page.locator('a[href="https://demoqa.com"] img')).toBeVisible();
  });

  // Elements

  test("Elements - Text Box", async () => {
    const exerciseMenuName = "Elements";
    const exerciseName = "Text Box";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Elements - Check Box", async () => {
    const exerciseMenuName = "Elements";
    const exerciseName = "Check Box";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Elements - Radio Button", async () => {
    const exerciseMenuName = "Elements";
    const exerciseName = "Radio Button";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Elements - Web Tables", async () => {
    const exerciseMenuName = "Elements";
    const exerciseName = "Web Tables";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Elements - Buttons", async () => {
    const exerciseMenuName = "Elements";
    const exerciseName = "Buttons";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  // TODO: Investigate why Playwright not able to see "locator('li', { hasText: 'Links' })" - Problem: locator resolved to 2 elements
  test.skip("Elements - Links", async () => {
    const exerciseMenuName = "Elements";
    const exerciseName = "Links";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Elements - Broken Links - Images", async () => {
    const exerciseMenuName = "Elements";
    const exerciseName = "Broken Links - Images";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Elements - Upload and Download", async () => {
    const exerciseMenuName = "Elements";
    const exerciseName = "Upload and Download";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Elements - Dynamic Properties", async () => {
    const exerciseMenuName = "Elements";
    const exerciseName = "Dynamic Properties";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  // Forms

  test("Forms - Practice Form", async () => {
    const exerciseMenuName = "Forms";
    const exerciseName = "Practice Form";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  // Alerts, Frame & Windows

  test("Alerts, Frame & Windows - Browser Windows", async () => {
    const exerciseMenuName = "Alerts, Frame & Windows";
    const exerciseName = "Browser Windows";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Alerts, Frame & Windows - Alerts", async () => {
    const exerciseMenuName = "Alerts, Frame & Windows";
    const exerciseName = "Alerts";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  // TODO: Investigate why Playwright not able to see "locator("li", { hasText: "Frames" })" - Problem: locator resolved to 2 elements
  test.skip("Alerts, Frame & Windows - Frames", async () => {
    const exerciseMenuName = "Alerts, Frame & Windows";
    const exerciseName = "Frames";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Alerts, Frame & Windows - Nested Frames", async () => {
    const exerciseMenuName = "Alerts, Frame & Windows";
    const exerciseName = "Nested Frames";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Alerts, Frame & Windows - Modal Dialogs", async () => {
    const exerciseMenuName = "Alerts, Frame & Windows";
    const exerciseName = "Modal Dialogs";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  // Widgets

  test("Widgets - Accordian", async () => {
    const exerciseMenuName = "Widgets";
    const exerciseName = "Accordian";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Widgets - Auto Complete", async () => {
    const exerciseMenuName = "Widgets";
    const exerciseName = "Auto Complete";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Widgets - Date Picker", async () => {
    const exerciseMenuName = "Widgets";
    const exerciseName = "Date Picker";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Widgets - Slider", async () => {
    const exerciseMenuName = "Widgets";
    const exerciseName = "Slider";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Widgets - Progress Bar", async () => {
    const exerciseMenuName = "Widgets";
    const exerciseName = "Progress Bar";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Widgets - Tabs", async () => {
    const exerciseMenuName = "Widgets";
    const exerciseName = "Tabs";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Widgets - Tool Tips", async () => {
    const exerciseMenuName = "Widgets";
    const exerciseName = "Tool Tips";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  // TODO: Investigate why Playwright not able to see "locator("li", { hasText: "Menu" })" - Problem: locator resolved to 2 elements
  test.skip("Widgets - Menu", async () => {
    const exerciseMenuName = "Widgets";
    const exerciseName = "Menu";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Widgets - Select Menu", async () => {
    const exerciseMenuName = "Widgets";
    const exerciseName = "Select Menu";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  // Interactions

  test("Interactions - Sortable", async () => {
    const exerciseMenuName = "Interactions";
    const exerciseName = "Sortable";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Interactions - Selectable", async () => {
    const exerciseMenuName = "Interactions";
    const exerciseName = "Selectable";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Interactions - Resizable", async () => {
    const exerciseMenuName = "Interactions";
    const exerciseName = "Resizable";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Interactions - Droppable", async () => {
    const exerciseMenuName = "Interactions";
    const exerciseName = "Droppable";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  test("Interactions - Dragabble", async () => {
    const exerciseMenuName = "Interactions";
    const exerciseName = "Dragabble";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  // Book Store Application

  test("Book Store Application - Login", async () => {
    const exerciseMenuName = "Book Store Application";
    const exerciseName = "Login";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseHeader(exerciseName);
  });

  // TODO: Investigate why Playwright not able to see "locator("li", { hasText: "Book Store" })" - Problem: locator resolved to 2 elements
  test.skip("Book Store Application - Book Store", async () => {
    const exerciseMenuName = "Book Store Application";
    const exerciseName = "Book Store";
    const exerciseSlug = "books";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseURL(exerciseSlug);
  });

  test("Book Store Application - Profile", async () => {
    const exerciseMenuName = "Book Store Application";
    const exerciseName = "Profile";
    const exerciseSlug = "profile";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseURL(exerciseSlug);
  });

  test("Book Store Application - Book Store API", async () => {
    const exerciseMenuName = "Book Store Application";
    const exerciseName = "Book Store API";
    const exerciseSlug = "swagger/";

    await navigationPage.openExerciseMenu(exerciseMenuName);
    await navigationPage.openExercise(exerciseName);
    await navigationPage.checkExerciseURL(exerciseSlug);
  });
});
