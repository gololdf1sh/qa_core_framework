import { test, expect } from "@playwright/test";
import { ApiController } from "../../src/api-controllers";
import { expectedStatus, generateApiUserData } from "../../src/data";
import { ApiUserDataTypes } from "../../src/types";

test.describe("API Tests - Sign Up", async () => {
  let apiController: ApiController;

  let userData: ApiUserDataTypes;

  test.beforeEach(async ({}) => {
    apiController = new ApiController();

    userData = await generateApiUserData();
  });

  test("Sign Up", async () => {
    const response = await apiController.signUp(userData.username, userData.password, expectedStatus.signUp);

    expect(response.username).toBe(userData.username);
    expect(response.userID).toBeDefined();
  });
});
