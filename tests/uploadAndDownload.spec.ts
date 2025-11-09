import { test } from "@playwright/test";
import { NavigationPage, UploadAndDownloadPage } from "../src/pages";
import { exercisesMenusNamesData, exercisesNamesData } from "../src/data";

test.describe("Check Upload and Download functionality @Sdecf00d0", () => {
  let navigationPage: NavigationPage;
  let uploadAndDownloadPage: UploadAndDownloadPage;

  const pathToFile = "./src/files/sampleFile.jpeg";

  test.beforeEach(async ({ page }) => {
    navigationPage = new NavigationPage(page);
    uploadAndDownloadPage = new UploadAndDownloadPage(page);

    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.uploadAndDownloadExerciseName;

    await navigationPage.goToUrl(process.env.BASE_URL!);
    await navigationPage.openExercise(exerciseMenuName, exerciseName);
  });

  test("Check Download functionality @T4f2d5f7b", async () => {
    await test.step("Click on Download button and check that file was downloaded", async () => {
      await uploadAndDownloadPage.downloadFileMethod();
    });
  });

  test("Check Upload functionality @T8d9fa932", async () => {
    await test.step("Upload a file via input", async () => {
      await uploadAndDownloadPage.uploadFileMethod(pathToFile);
    });
  });
});
