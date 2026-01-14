import { test } from "@playwright/test";
import { exercisesMenusNamesData, exercisesNamesData } from "../../../../src/data";
import { Application } from "../../../../src";

test.describe("'Upload and Download' exercise @Se37ab3dc", () => {
  let app: Application;

  const pathToFile = "./src/files/sampleFile.jpeg";

  test.beforeEach(async ({ page }) => {
    app = new Application(page);

    const exerciseMenuName = exercisesMenusNamesData.elementsMenuName;
    const exerciseName = exercisesNamesData.uploadAndDownloadExerciseName;

    await test.step(`Go to ${process.env.BASE_URL!}`, async () => {
      await app.navigation.goToUrl(process.env.BASE_URL!);
    });

    await test.step(`Go to ${exerciseMenuName} - ${exerciseName}`, async () => {
      await app.navigation.openExercise(exerciseMenuName, exerciseName);
    });
  });

  test("Check Download functionality @T567e2b78", async () => {
    await test.step("Click on Download button and check that file was downloaded", async () => {
      await app.uploadAndDownload.downloadFileMethod();
    });
  });

  test("Check Upload functionality @Td45201b7", async () => {
    await test.step("Upload a file via input", async () => {
      await app.uploadAndDownload.uploadFileMethod(pathToFile);
    });
  });
});
