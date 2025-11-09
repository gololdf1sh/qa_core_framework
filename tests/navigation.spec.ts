import { test } from "@playwright/test";
import { NavigationPage } from "../src/pages";
import { exercisesMenusNamesData, exercisesNamesData } from "../src/data";

test.describe("Navigation to exercises @Sbc26030f", () => {
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

  test('Check that user is able to navigate to -> "Elements" menu -> "Text Box" exercise @Ta9b4636e', async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.textBoxExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Text Box exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Elements" menu -> "Check Box" exercise @Tc49faf52', async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.checkBoxExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Check Box exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Elements" menu -> "Radio Button" exercise @T31e40541', async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.radioButtonExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Radio Button exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Elements" menu -> "Web Tables" exercise @T4923316c', async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.webTablesExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Web Tables exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Elements" menu -> "Buttons" exercise @T3f6d27eb', async () => {
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

  test('Check that user is able to navigate to -> "Elements" menu -> "Broken Links - Images" exercise @Tf6e113e6', async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.brokenLinksImagesExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Broken Links - Images exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Elements" menu -> "Upload and Download" exercise @Te6968a56', async () => {
    exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    exerciseName = exercisesNamesData.uploadAndDownloadExerciseName;

    await test.step("Click on Elements Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Upload and Download exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Elements" menu -> "Dynamic Properties" exercise @T6ee41a04', async () => {
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

  test('Check that user is able to navigate to -> "Forms" menu -> "Practice Form" exercise @Tb2720172', async () => {
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

  test('Check that user is able to navigate to -> "Alerts, Frame & Windows" menu -> "Browser Windows" exercise @Tf87ecdba', async () => {
    exerciseMenuName = exercisesMenusNamesData.alertsFrameWindowsMenuName;
    exerciseName = exercisesNamesData.browserWindowsExerciseName;

    await test.step("Click on Alerts, Frame & Windows Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Browser Windows exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Alerts, Frame & Windows" menu -> "Alerts" exercise @T5277fa3f', async () => {
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

  test('Check that user is able to navigate to -> "Alerts, Frame & Windows" menu -> "Nested Frames" exercise @Tba934737', async () => {
    exerciseMenuName = exercisesMenusNamesData.alertsFrameWindowsMenuName;
    exerciseName = exercisesNamesData.nestedFramesExerciseName;

    await test.step("Click on Alerts, Frame & Windows Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Nested Frames exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Alerts, Frame & Windows" menu -> "Modal Dialogs" exercise @Te7e41e0e', async () => {
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

  test('Check that user is able to navigate to -> "Widgets" menu -> "Accordian" exercise @Tf153d214', async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.accordianExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Accordian exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Widgets" menu -> "Auto Complete" exercise @Teec61279', async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.autoCompleteExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Auto Complete exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Widgets" menu -> "Date Picker" exercise @Tca9a0606', async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.datePickerExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Date Picker exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Widgets" menu -> "Slider" exercise @Tfdd949db', async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.sliderExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Slider exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Widgets" menu -> "Progress Bar" exercise @T1ff693a5', async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.progressBarExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Progress Bar exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Widgets" menu -> "Tabs" exercise @T58fa4579', async () => {
    exerciseMenuName = exercisesMenusNamesData.windowsMenuName;
    exerciseName = exercisesNamesData.tabsExerciseName;

    await test.step("Click on Widgets Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Tabs exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Widgets" menu -> "Tool Tips" exercise @Tf28cc9c4', async () => {
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

  test('Check that user is able to navigate to -> "Widgets" menu -> "Select Menu" exercise @T0c601401', async () => {
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

  test('Check that user is able to navigate to -> "Interactions" menu -> "Sortable" exercise @T1abf9600', async () => {
    exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    exerciseName = exercisesNamesData.sortableExerciseName;

    await test.step("Click on Interactions Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Sortable exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Interactions" menu -> "Selectable" exercise @Tce9ef25a', async () => {
    exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    exerciseName = exercisesNamesData.selectableExerciseName;

    await test.step("Click on Interactions Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Selectable exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Interactions" menu -> "Resizable" exercise @Tfc00836d', async () => {
    exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    exerciseName = exercisesNamesData.resizableExerciseName;

    await test.step("Click on Interactions Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Resizable exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Interactions" menu -> "Droppable" exercise @Taa32a080', async () => {
    exerciseMenuName = exercisesMenusNamesData.interactionMenuName;
    exerciseName = exercisesNamesData.droppableExerciseName;

    await test.step("Click on Interactions Menu button", async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });

    await test.step("Click on Droppable exercise button", async () => {
      await navigationPage.checkExerciseHeader(exerciseName);
    });
  });

  test('Check that user is able to navigate to -> "Interactions" menu -> "Dragabble" exercise @T0bbb0bfc', async () => {
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

  test('Check that user is able to navigate to -> "Book Store Application" menu -> "Login" exercise @Te1cd0be7', async () => {
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

  test('Check that user is able to navigate to -> "Book Store Application" menu -> "Profile" exercise @T26cc9908', async () => {
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

  test('Check that user is able to navigate to -> "Book Store Application" menu -> "Book Store API" exercise @Tbcee65d1', async () => {
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
