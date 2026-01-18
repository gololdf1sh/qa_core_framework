import { test } from "@playwright/test";
import { exercisesMenusNamesData, exercisesData } from "../../../../src/data";
import { Application } from "../../../../src";

const testCases = [
  { menuName: exercisesMenusNamesData.elementsMenuName, exerciseName: exercisesData.textBox.name, slug: exercisesData.textBox.slug, id: "@T86f1a909" },
  { menuName: exercisesMenusNamesData.elementsMenuName, exerciseName: exercisesData.checkBox.name, slug: exercisesData.checkBox.slug, id: "@T92b3c810" },
  { menuName: exercisesMenusNamesData.elementsMenuName, exerciseName: exercisesData.radioButton.name, slug: exercisesData.radioButton.slug, id: "@T47d5e211" },
  { menuName: exercisesMenusNamesData.elementsMenuName, exerciseName: exercisesData.webTables.name, slug: exercisesData.webTables.slug, id: "@T58f6g312" },
  { menuName: exercisesMenusNamesData.elementsMenuName, exerciseName: exercisesData.buttons.name, slug: exercisesData.buttons.slug, id: "@T69h7i413" },
  { menuName: exercisesMenusNamesData.elementsMenuName, exerciseName: exercisesData.brokenLinksImages.name, slug: exercisesData.brokenLinksImages.slug, id: "@T70j8k514" },
  { menuName: exercisesMenusNamesData.elementsMenuName, exerciseName: exercisesData.uploadAndDownload.name, slug: exercisesData.uploadAndDownload.slug, id: "@T81l9m615" },
  { menuName: exercisesMenusNamesData.elementsMenuName, exerciseName: exercisesData.dynamicProperties.name, slug: exercisesData.dynamicProperties.slug, id: "@T92n0o716" },
  { menuName: exercisesMenusNamesData.formMenuName, exerciseName: exercisesData.practiceForm.name, slug: exercisesData.practiceForm.slug, id: "@T03p1q817" },
  { menuName: exercisesMenusNamesData.alertsFrameWindowsMenuName, exerciseName: exercisesData.browserWindows.name, slug: exercisesData.browserWindows.slug, id: "@T14r2s918" },
  { menuName: exercisesMenusNamesData.alertsFrameWindowsMenuName, exerciseName: exercisesData.alerts.name, slug: exercisesData.alerts.slug, id: "@T25t3u019" },
  { menuName: exercisesMenusNamesData.alertsFrameWindowsMenuName, exerciseName: exercisesData.nestedFrames.name, slug: exercisesData.nestedFrames.slug, id: "@T36v4w120" },
  { menuName: exercisesMenusNamesData.alertsFrameWindowsMenuName, exerciseName: exercisesData.modalDialogs.name, slug: exercisesData.modalDialogs.slug, id: "@T47x5y221" },
  { menuName: exercisesMenusNamesData.windowsMenuName, exerciseName: exercisesData.accordian.name, slug: exercisesData.accordian.slug, id: "@T58z6a322" },
  { menuName: exercisesMenusNamesData.windowsMenuName, exerciseName: exercisesData.autoComplete.name, slug: exercisesData.autoComplete.slug, id: "@T69b7c423" },
  { menuName: exercisesMenusNamesData.windowsMenuName, exerciseName: exercisesData.datePicker.name, slug: exercisesData.datePicker.slug, id: "@T70d8e524" },
  { menuName: exercisesMenusNamesData.windowsMenuName, exerciseName: exercisesData.slider.name, slug: exercisesData.slider.slug, id: "@T81f9g625" },
  { menuName: exercisesMenusNamesData.windowsMenuName, exerciseName: exercisesData.progressBar.name, slug: exercisesData.progressBar.slug, id: "@T92h0i726" },
  { menuName: exercisesMenusNamesData.windowsMenuName, exerciseName: exercisesData.tabs.name, slug: exercisesData.tabs.slug, id: "@T03j1k827" },
  { menuName: exercisesMenusNamesData.windowsMenuName, exerciseName: exercisesData.toolTips.name, slug: exercisesData.toolTips.slug, id: "@T14l2m928" },
  { menuName: exercisesMenusNamesData.windowsMenuName, exerciseName: exercisesData.selectMenu.name, slug: exercisesData.selectMenu.slug, id: "@T25n3o029" },
  { menuName: exercisesMenusNamesData.interactionMenuName, exerciseName: exercisesData.sortable.name, slug: exercisesData.sortable.slug, id: "@T36p4q130" },
  { menuName: exercisesMenusNamesData.interactionMenuName, exerciseName: exercisesData.selectable.name, slug: exercisesData.selectable.slug, id: "@T47r5s231" },
  { menuName: exercisesMenusNamesData.interactionMenuName, exerciseName: exercisesData.resizable.name, slug: exercisesData.resizable.slug, id: "@T58t6u332" },
  { menuName: exercisesMenusNamesData.interactionMenuName, exerciseName: exercisesData.droppable.name, slug: exercisesData.droppable.slug, id: "@T69v7w433" },
  { menuName: exercisesMenusNamesData.interactionMenuName, exerciseName: exercisesData.dragabble.name, slug: exercisesData.dragabble.slug, id: "@T70x8y534" },
];

const bookStoreApplicationMenuTestCases = [
  // TODO: locator for login exercise button resolved to 2 elements - need to create separate test for this case
  // { menuName: exercisesMenusNamesData.bookStoreApplicationMenuName, exerciseName: exercisesData.login.name, slug: exercisesData.login.slug, id: "@Tf2f52116" },
  { menuName: exercisesMenusNamesData.bookStoreApplicationMenuName, exerciseName: exercisesData.bookStore.name, slug: exercisesData.bookStore.slug, id: "@T2f301c0c" },
  { menuName: exercisesMenusNamesData.bookStoreApplicationMenuName, exerciseName: exercisesData.profile.name, slug: exercisesData.profile.slug, id: "@T08641b20" },
  { menuName: exercisesMenusNamesData.bookStoreApplicationMenuName, exerciseName: exercisesData.bookStoreAPI.name, slug: exercisesData.bookStoreAPI.slug, id: "@T9c57ef12" },
];

test.describe("Navigation to exercises @Sbfe46638", () => {
  let app: Application;

  test.beforeEach(async ({ page }) => {
    app = new Application(page);

    await test.step(`Go to ${process.env.BASE_URL!}`, async () => {
      await app.navigation.goToUrl(process.env.BASE_URL!);
    });
  });

  for (const { menuName, exerciseName, slug, id } of testCases) {
    test(`Check that user is able to navigate to -> "${menuName}" menu -> "${exerciseName}" exercise ${id}`, async () => {
      await test.step("Open exercise", async () => {
        await app.navigation.openExercise(menuName, exerciseName);
      });

      await test.step(`Check that user is on ${menuName} - ${exerciseName} exercise page`, async () => {
        await app.navigation.checkExerciseHeader(exerciseName);
        await app.navigation.checkExerciseURL(slug);
      });
    });
  }

  for (const { menuName, exerciseName, slug, id } of bookStoreApplicationMenuTestCases) {
    test(`Check that user is able to navigate to -> "${menuName}" menu -> "${exerciseName}" exercise ${id}`, async () => {
      await test.step("Open exercise", async () => {
        await app.navigation.openExercise(menuName, exerciseName);
      });

      await test.step(`Check that user is on ${menuName} - ${exerciseName} exercise page`, async () => {
        await app.navigation.checkExerciseURL(slug);
      });
    });
  }
});
