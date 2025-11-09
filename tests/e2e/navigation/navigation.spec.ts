import { test } from "@playwright/test";
import { NavigationPage } from "../../../src/pages";
import { exercisesMenusNamesData, exercisesNamesData } from "../../../src/data";

test.describe("Navigation to exercises @Sbfe46638", () => {
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

  test('Check that user is able to navigate to -> "Elements" menu -> "Text Box" exercise @T86f1a909', async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.textBoxExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Text Box exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Elements" menu -> "Check Box" exercise @T73423083', async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.checkBoxExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Check Box exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Elements" menu -> "Radio Button" exercise @T1d28c1a4', async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.radioButtonExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Radio Button exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Elements" menu -> "Web Tables" exercise @Tea903efe', async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.webTablesExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Web Tables exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Elements" menu -> "Buttons" exercise @Tadac2cd7', async () => {
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
  test.skip('Check that user is able to navigate to -> "Elements" menu -> "Links" exercise @T9958871a', async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.linksExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Links exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Elements" menu -> "Broken Links - Images" exercise @Tb8ce5a6c', async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.brokenLinksImagesExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Broken Links - Images exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Elements" menu -> "Upload and Download" exercise @T1fdf6702', async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.uploadAndDownloadExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Upload and Download exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Elements" menu -> "Dynamic Properties" exercise @T43622572', async () => {
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

  test('Check that user is able to navigate to -> "Forms" menu -> "Practice Form" exercise @T7e3285c6', async () => {
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

  test('Check that user is able to navigate to -> "Alerts, Frame & Windows" menu -> "Browser Windows" exercise @T9e895f81', async () => {
    exerciseMenuName = exercisesMenusNamesData.alertsFrameWindowsMenuName;
    exerciseName = exercisesNamesData.browserWindowsExerciseName;

    await test.step("Click on Alerts, Frame & Windows Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Browser Windows exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Alerts, Frame & Windows" menu -> "Alerts" exercise @T0557432b', async () => {
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
  test.skip('Check that user is able to navigate to -> "Alerts, Frame & Windows" menu -> "Frames" exercise @T78a391c4', async () => {
    exerciseMenuName = exercisesMenusNamesData.alertsFrameWindowsMenuName;
    exerciseName = exercisesNamesData.framesExerciseName;

    await test.step("Click on Alerts, Frame & Windows Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Frames exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Alerts, Frame & Windows" menu -> "Nested Frames" exercise @T4f1ea971', async () => {
    exerciseMenuName = exercisesMenusNamesData.alertsFrameWindowsMenuName;
    exerciseName = exercisesNamesData.nestedFramesExerciseName;

    await test.step("Click on Alerts, Frame & Windows Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Nested Frames exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Alerts, Frame & Windows" menu -> "Modal Dialogs" exercise @Tcdd5a99c', async () => {
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

  test('Check that user is able to navigate to -> "Widgets" menu -> "Accordian" exercise @Ta543c269', async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.accordianExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Accordian exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Widgets" menu -> "Auto Complete" exercise @T4bfef15f', async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.autoCompleteExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Auto Complete exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Widgets" menu -> "Date Picker" exercise @Tad9e222c', async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.datePickerExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Date Picker exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Widgets" menu -> "Slider" exercise @Ta85ac1d4', async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.sliderExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Slider exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Widgets" menu -> "Progress Bar" exercise @Tf471622e', async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.progressBarExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Progress Bar exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Widgets" menu -> "Tabs" exercise @T9ce1c645', async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.tabsExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Tabs exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Widgets" menu -> "Tool Tips" exercise @Tba54602e', async () => {
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
  test.skip('Check that user is able to navigate to -> "Widgets" menu -> "Menu" exercise @T7cd60bca', async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.menuExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Menu exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Widgets" menu -> "Select Menu" exercise @Tb494a984', async () => {
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

  test('Check that user is able to navigate to -> "Interactions" menu -> "Sortable" exercise @T2adf1bdb', async () => {
    exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    exerciseName = exercisesNamesData.sortableExerciseName;

    await test.step("Click on Interactions Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Sortable exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Interactions" menu -> "Selectable" exercise @T59f618cf', async () => {
    exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    exerciseName = exercisesNamesData.selectableExerciseName;

    await test.step("Click on Interactions Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Selectable exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Interactions" menu -> "Resizable" exercise @T56c3e322', async () => {
    exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    exerciseName = exercisesNamesData.resizableExerciseName;

    await test.step("Click on Interactions Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Resizable exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Interactions" menu -> "Droppable" exercise @T841add60', async () => {
    exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    exerciseName = exercisesNamesData.droppableExerciseName;

    await test.step("Click on Interactions Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Droppable exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Interactions" menu -> "Dragabble" exercise @Tf01b841c', async () => {
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

  test('Check that user is able to navigate to -> "Book Store Application" menu -> "Login" exercise @Tf2f52116', async () => {
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
  test.skip('Check that user is able to navigate to -> "Book Store Application" menu -> "Book Store" exercise @T2f301c0c', async () => {
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

  test('Check that user is able to navigate to -> "Book Store Application" menu -> "Profile" exercise @T08641b20', async () => {
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

  test('Check that user is able to navigate to -> "Book Store Application" menu -> "Book Store API" exercise @T9c57ef12', async () => {
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
