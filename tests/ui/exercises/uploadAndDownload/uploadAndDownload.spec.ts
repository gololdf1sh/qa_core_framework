import { test } from "@playwright/test";
import { exercisesData } from "../../../../src/data";
import { Application } from "../../../../src";

test.describe("'Upload and Download' exercise @Se37ab3dc", () => {
  let app: Application;

  const pathToFile = "./src/files/sampleFile.jpeg";

  test.beforeEach(async ({ page }) => {
    app = new Application(page);

    const exerciseUrl = process.env.BASE_URL! + exercisesData.uploadAndDownload.slug;

    await test.step(`Go to ${exerciseUrl!}`, async () => {
      await app.navigation.goToUrl(exerciseUrl);
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
