import { test } from "@playwright/test";
import { NavigationPage } from "../src/pages";
import { exercisesMenusNamesData, exercisesNamesData } from "../src/data";

test.describe("Check access to every exercise", () => {
  let navigationPage: NavigationPage;

  test.beforeEach(async ({ page }) => {
    navigationPage = new NavigationPage(page);
    await page.goto("https://demoqa.com/");
  });

  // TODO: Implement navigation verification through a parameterized test

  // Elements

  test("Elements - Text Box", async () => {
    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.textBoxExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Text Box exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Elements - Check Box", async () => {
    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.checkBoxExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Check Box exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Elements - Radio Button", async () => {
    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.radioButtonExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Radio Button exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Elements - Web Tables", async () => {
    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.webTablesExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Web Tables exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Elements - Buttons", async () => {
    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.buttonsExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Buttons exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  // TODO: Investigate why Playwright not able to see "locator('li', { hasText: 'Links' })" - Problem: locator resolved to 2 elements
  test.skip("Elements - Links", async () => {
    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.linksExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Links exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Elements - Broken Links - Images", async () => {
    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.brokenLinksImagesExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Broken Links - Images exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Elements - Upload and Download", async () => {
    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.uploadAndDownloadExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Upload and Download exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Elements - Dynamic Properties", async () => {
    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.dynamicPropertiesExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Dynamic Properties exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  // Forms

  test("Forms - Practice Form", async () => {
    const exerciseMenuName = exercisesMenusNamesData.formMenuName;
    const exerciseName = exercisesNamesData.practiceFormExerciseName;

    await test.step("Click on Forms Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Practice Form exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  // Alerts, Frame & Windows

  test("Alerts, Frame & Windows - Browser Windows", async () => {
    const exerciseMenuName = exercisesMenusNamesData.alertsFrameWindowsMenuName;
    const exerciseName = exercisesNamesData.browserWindowsExerciseName;

    await test.step("Click on Alerts, Frame & Windows Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Browser Windows exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Alerts, Frame & Windows - Alerts", async () => {
    const exerciseMenuName = exercisesMenusNamesData.alertsFrameWindowsMenuName;
    const exerciseName = exercisesNamesData.alertsExerciseName;

    await test.step("Click on Alerts, Frame & Windows Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Alerts exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  // TODO: Investigate why Playwright not able to see "locator("li", { hasText: "Frames" })" - Problem: locator resolved to 2 elements
  test.skip("Alerts, Frame & Windows - Frames", async () => {
    const exerciseMenuName = exercisesMenusNamesData.alertsFrameWindowsMenuName;
    const exerciseName = exercisesNamesData.framesExerciseName;

    await test.step("Click on Alerts, Frame & Windows Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Frames exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Alerts, Frame & Windows - Nested Frames", async () => {
    const exerciseMenuName = exercisesMenusNamesData.alertsFrameWindowsMenuName;
    const exerciseName = exercisesNamesData.nestedFramesExerciseName;

    await test.step("Click on Alerts, Frame & Windows Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Nested Frames exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Alerts, Frame & Windows - Modal Dialogs", async () => {
    const exerciseMenuName = exercisesMenusNamesData.alertsFrameWindowsMenuName;
    const exerciseName = exercisesNamesData.modalDialogExerciseName;

    await test.step("Click on Alerts, Frame & Windows Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Modal Dialogs exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  // Widgets

  test("Widgets - Accordian", async () => {
    const exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    const exerciseName = exercisesNamesData.accordianExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Accordian exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Widgets - Auto Complete", async () => {
    const exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    const exerciseName = exercisesNamesData.autoCompleteExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Auto Complete exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Widgets - Date Picker", async () => {
    const exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    const exerciseName = exercisesNamesData.datePickerExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Date Picker exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Widgets - Slider", async () => {
    const exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    const exerciseName = exercisesNamesData.sliderExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Slider exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Widgets - Progress Bar", async () => {
    const exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    const exerciseName = exercisesNamesData.progressBarExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Progress Bar exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Widgets - Tabs", async () => {
    const exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    const exerciseName = exercisesNamesData.tabsExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Tabs exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Widgets - Tool Tips", async () => {
    const exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    const exerciseName = exercisesNamesData.toolTipsExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Tool Tips exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  // TODO: Investigate why Playwright not able to see "locator("li", { hasText: "Menu" })" - Problem: locator resolved to 2 elements
  test.skip("Widgets - Menu", async () => {
    const exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    const exerciseName = exercisesNamesData.menuExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Menu exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Widgets - Select Menu", async () => {
    const exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    const exerciseName = exercisesNamesData.selectMenuExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Select Menu exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  // Interactions

  test("Interactions - Sortable", async () => {
    const exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    const exerciseName = exercisesNamesData.sortableExerciseName;

    await test.step("Click on Interactions Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Sortable exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Interactions - Selectable", async () => {
    const exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    const exerciseName = exercisesNamesData.selectableExerciseName;

    await test.step("Click on Interactions Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Selectable exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Interactions - Resizable", async () => {
    const exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    const exerciseName = exercisesNamesData.resizableExerciseName;

    await test.step("Click on Interactions Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Resizable exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Interactions - Droppable", async () => {
    const exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    const exerciseName = exercisesNamesData.droppableExerciseName;

    await test.step("Click on Interactions Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Droppable exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Interactions - Dragabble", async () => {
    const exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    const exerciseName = exercisesNamesData.dragabbleExerciseName;

    await test.step("Click on Interactions Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Dragabble exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  // Book Store Application

  test("Book Store Application - Login", async () => {
    const exerciseMenuName = exercisesMenusNamesData.bookStoreApplicationMenuName;
    const exerciseName = exercisesNamesData.loginExerciseName;

    await test.step("Click on Book Store Application Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Login exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  // TODO: Investigate why Playwright not able to see "locator("li", { hasText: "Book Store" })" - Problem: locator resolved to 2 elements
  test.skip("Book Store Application - Book Store", async () => {
    const exerciseMenuName = exercisesMenusNamesData.bookStoreApplicationMenuName;
    const exerciseName = exercisesNamesData.bookStoreExerciseName;
    const exerciseSlug = "books";

    await test.step("Click on Book Store Application Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Book Store exercise button", async () => {
      await navigationPage.checkExerciseURL(exerciseSlug);
    });
  });

  test("Book Store Application - Profile", async () => {
    const exerciseMenuName = exercisesMenusNamesData.bookStoreApplicationMenuName;
    const exerciseName = exercisesNamesData.profileExerciseName;
    const exerciseSlug = "profile";

    await test.step("Click on Book Store Application Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Profile exercise button", async () => {
      await navigationPage.checkExerciseURL(exerciseSlug);
    });
  });

  test("Book Store Application - Book Store API", async () => {
    const exerciseMenuName = exercisesMenusNamesData.bookStoreApplicationMenuName;
    const exerciseName = exercisesNamesData.bookStoreAPIExerciseName;
    const exerciseSlug = "swagger/";

    await test.step("Click on Book Store Application Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Book Store API exercise button", async () => {
      await navigationPage.checkExerciseURL(exerciseSlug);
    });
  });
});
