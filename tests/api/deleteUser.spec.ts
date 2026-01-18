import { test, expect } from "@playwright/test";
import { ApiController } from "../../src/api-controllers";
import { expectedStatus, generateApiUserData } from "../../src/data";
import { ApiUserDataTypes } from "../../src/types";

test.describe("API Tests - Delete User", async () => {
  let apiController: ApiController;

  let userData: ApiUserDataTypes;

  test.beforeEach(async ({}) => {
    apiController = new ApiController();

    userData = await generateApiUserData();
  });

  // TODO: Create negative case for noncorrect uuid  (for status = 200 it return { code: '1207', message: 'User Id not correct!'})
  test("Delete user", async () => {
    let signUpResponse = await apiController.signUp(userData.username, userData.password, expectedStatus.signUp);

    expect(signUpResponse.username).toBe(userData.username);
    expect(signUpResponse.userID).toBeDefined();

    let userUuid = signUpResponse.userID;

    let tokenResponse = await apiController.generateToken(userData.username, userData.password, expectedStatus.generateToken);

    expect(tokenResponse.token).toBeDefined();
    expect(tokenResponse.expires).toBeDefined();
    expect(tokenResponse.status).toBe("Success");
    expect(tokenResponse.result).toBe("User authorized successfully.");

    let userToken = tokenResponse.token;

    await apiController.deleteUser(userUuid, userToken, expectedStatus.deleteUser);
  });
});
