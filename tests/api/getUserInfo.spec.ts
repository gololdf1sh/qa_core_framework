import { test, expect } from "@playwright/test";
import { ApiController } from "../../src/api-controllers";
import { expectedStatus, generateApiUserData } from "../../src/data";
import { ApiUserDataTypes } from "../../src/types";

test.describe("API Tests - Get User Info", async () => {
  let apiController: ApiController;

  let userData: ApiUserDataTypes;

  test.beforeEach(async ({}) => {
    apiController = new ApiController();

    userData = await generateApiUserData();
  });

  test("Get User Info", async () => {
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

    let getUserresponse = await apiController.getUserInfo(userUuid, userToken, expectedStatus.getUserInfo, userData.username);

    expect(getUserresponse.userId).toBe(userUuid);
    expect(getUserresponse.username).toBe(userData.username);
    expect(getUserresponse.books).toBeDefined();
  });
});
