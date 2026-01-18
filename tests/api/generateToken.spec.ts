import { test, expect } from "@playwright/test";
import { ApiController } from "../../src/api-controllers";
import { expectedStatus, generateApiUserData } from "../../src/data";
import { ApiUserDataTypes } from "../../src/types";

test.describe("API Tests - Generate User Token", async () => {
  let apiController: ApiController;

  let userData: ApiUserDataTypes;

  test.beforeEach(async ({}) => {
    apiController = new ApiController();

    userData = await generateApiUserData();
  });

  test("Generate Token", async () => {
    const response = await apiController.signUp(userData.username, userData.password, expectedStatus.signUp);

    expect(response.username).toBe(userData.username);
    expect(response.userID).toBeDefined();

    const tokenResponse = await apiController.generateToken(userData.username, userData.password, expectedStatus.generateToken);

    expect(tokenResponse.token).toBeDefined();
    expect(tokenResponse.expires).toBeDefined();
    expect(tokenResponse.status).toBe("Success");
    expect(tokenResponse.result).toBe("User authorized successfully.");
  });
});
