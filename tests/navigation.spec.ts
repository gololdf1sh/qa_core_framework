import { test } from "@playwright/test";
import { NavigationPage } from "../src/pages";
import { exercisesMenusNamesData, exercisesNamesData } from "../src/data";

test.describe("Check access to every exercise", () => {
  let navigationPage: NavigationPage;

  let exerciseMenuName: string;
  let exerciseName: string;
  let exerciseSlug: string;

  test.beforeEach(async ({ page }) => {
    navigationPage = new NavigationPage(page);
    await navigationPage.goToUrl(process.env.BASE_URL!);
  });

  // TODO: Implement navigation verification through a parameterized test

  // Elements

  test("Elements - Text Box", async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.textBoxExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Text Box exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Elements - Check Box", async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.checkBoxExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Check Box exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Elements - Radio Button", async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.radioButtonExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Radio Button exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Elements - Web Tables", async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.webTablesExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Web Tables exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Elements - Buttons", async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.buttonsExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Buttons exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  // TODO: Investigate why Playwright not able to see "locator('li', { hasText: 'Links' })" - Problem: locator resolved to 2 elements
  test.skip("Elements - Links", async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.linksExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Links exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Elements - Broken Links - Images", async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.brokenLinksImagesExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Broken Links - Images exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Elements - Upload and Download", async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.uploadAndDownloadExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Upload and Download exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Elements - Dynamic Properties", async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.dynamicPropertiesExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Dynamic Properties exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  // Forms

  test("Forms - Practice Form", async () => {
    exerciseMenuName = exercisesMenusNamesData.formMenuName;
    exerciseName = exercisesNamesData.practiceFormExerciseName;

    await test.step("Click on Forms Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Practice Form exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  // Alerts, Frame & Windows

  test("Alerts, Frame & Windows - Browser Windows", async () => {
    exerciseMenuName = exercisesMenusNamesData.alertsFrameWindowsMenuName;
    exerciseName = exercisesNamesData.browserWindowsExerciseName;

    await test.step("Click on Alerts, Frame & Windows Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Browser Windows exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Alerts, Frame & Windows - Alerts", async () => {
    exerciseMenuName = exercisesMenusNamesData.alertsFrameWindowsMenuName;
    exerciseName = exercisesNamesData.alertsExerciseName;

    await test.step("Click on Alerts, Frame & Windows Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Alerts exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  // TODO: Investigate why Playwright not able to see "locator("li", { hasText: "Frames" })" - Problem: locator resolved to 2 elements
  test.skip("Alerts, Frame & Windows - Frames", async () => {
    exerciseMenuName = exercisesMenusNamesData.alertsFrameWindowsMenuName;
    exerciseName = exercisesNamesData.framesExerciseName;

    await test.step("Click on Alerts, Frame & Windows Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Frames exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Alerts, Frame & Windows - Nested Frames", async () => {
    exerciseMenuName = exercisesMenusNamesData.alertsFrameWindowsMenuName;
    exerciseName = exercisesNamesData.nestedFramesExerciseName;

    await test.step("Click on Alerts, Frame & Windows Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Nested Frames exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Alerts, Frame & Windows - Modal Dialogs", async () => {
    exerciseMenuName = exercisesMenusNamesData.alertsFrameWindowsMenuName;
    exerciseName = exercisesNamesData.modalDialogExerciseName;

    await test.step("Click on Alerts, Frame & Windows Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Modal Dialogs exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  // Widgets

  test("Widgets - Accordian", async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.accordianExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Accordian exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Widgets - Auto Complete", async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.autoCompleteExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Auto Complete exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Widgets - Date Picker", async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.datePickerExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Date Picker exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Widgets - Slider", async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.sliderExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Slider exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Widgets - Progress Bar", async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.progressBarExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Progress Bar exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Widgets - Tabs", async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.tabsExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Tabs exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Widgets - Tool Tips", async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.toolTipsExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Tool Tips exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  // TODO: Investigate why Playwright not able to see "locator("li", { hasText: "Menu" })" - Problem: locator resolved to 2 elements
  test.skip("Widgets - Menu", async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.menuExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Menu exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Widgets - Select Menu", async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.selectMenuExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Select Menu exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  // Interactions

  test("Interactions - Sortable", async () => {
    exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    exerciseName = exercisesNamesData.sortableExerciseName;

    await test.step("Click on Interactions Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Sortable exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Interactions - Selectable", async () => {
    exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    exerciseName = exercisesNamesData.selectableExerciseName;

    await test.step("Click on Interactions Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Selectable exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Interactions - Resizable", async () => {
    exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    exerciseName = exercisesNamesData.resizableExerciseName;

    await test.step("Click on Interactions Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Resizable exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Interactions - Droppable", async () => {
    exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    exerciseName = exercisesNamesData.droppableExerciseName;

    await test.step("Click on Interactions Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Droppable exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test("Interactions - Dragabble", async () => {
    exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    exerciseName = exercisesNamesData.dragabbleExerciseName;

    await test.step("Click on Interactions Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Dragabble exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  // Book Store Application

  test("Book Store Application - Login", async () => {
    exerciseMenuName = exercisesMenusNamesData.bookStoreApplicationMenuName;
    exerciseName = exercisesNamesData.loginExerciseName;

    await test.step("Click on Book Store Application Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Login exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  // TODO: Investigate why Playwright not able to see "locator("li", { hasText: "Book Store" })" - Problem: locator resolved to 2 elements
  test.skip("Book Store Application - Book Store", async () => {
    exerciseMenuName = exercisesMenusNamesData.bookStoreApplicationMenuName;
    exerciseName = exercisesNamesData.bookStoreExerciseName;
    exerciseSlug = "books";

    await test.step("Click on Book Store Application Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Book Store exercise button", async () => {
      await navigationPage.checkExerciseURL(exerciseSlug);
    });
  });

  test("Book Store Application - Profile", async () => {
    exerciseMenuName = exercisesMenusNamesData.bookStoreApplicationMenuName;
    exerciseName = exercisesNamesData.profileExerciseName;
    exerciseSlug = "profile";

    await test.step("Click on Book Store Application Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Profile exercise button", async () => {
      await navigationPage.checkExerciseURL(exerciseSlug);
    });
  });

  test("Book Store Application - Book Store API", async () => {
    exerciseMenuName = exercisesMenusNamesData.bookStoreApplicationMenuName;
    exerciseName = exercisesNamesData.bookStoreAPIExerciseName;
    exerciseSlug = "swagger/";

    await test.step("Click on Book Store Application Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
    await test.step("Click on Book Store API exercise button", async () => {
      await navigationPage.checkExerciseURL(exerciseSlug);
    });
  });
});
