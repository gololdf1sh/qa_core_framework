import { test } from "@playwright/test";
import { NavigationPage, UploadAndDownloadPage } from "../../../../src/pages";
import { exercisesMenusNamesData, exercisesNamesData } from "../../../../src/data";

test.describe("'Upload and Download' exercise @Se37ab3dc", () => {
  let navigationPage: NavigationPage;
  let uploadAndDownloadPage: UploadAndDownloadPage;

  const pathToFile = "./src/files/sampleFile.jpeg";

  test.beforeEach(async ({ page }) => {
    navigationPage = new NavigationPage(page);
    uploadAndDownloadPage = new UploadAndDownloadPage(page);

    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.uploadAndDownloadExerciseName;

    await test.step(`Go to ${process.env.BASE_URL!}`, async () => {
      await navigationPage.goToUrl(process.env.BASE_URL!);
    });

    await test.step(`Go to ${exerciseMenuName} - ${exerciseName}`, async () => {
      await navigationPage.openExercise(exerciseMenuName, exerciseName);
    });
  });

  test("Check Download functionality @T567e2b78", async () => {
    await test.step("Click on Download button and check that file was downloaded", async () => {
      await uploadAndDownloadPage.downloadFileMethod();
    });
  });

  test("Check Upload functionality @Td45201b7", async () => {
    await test.step("Upload a file via input", async () => {
      await uploadAndDownloadPage.uploadFileMethod(pathToFile);
    });
  });
});
