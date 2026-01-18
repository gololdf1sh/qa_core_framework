import { request, expect } from "@playwright/test";

export class ApiController {
  async checkResponseStatusAndLogResponseIfNeeded(actualResponseStatus: number, expectedStatus: number, responseBody: any) {
    let showConsoleLogs = false;

    if (actualResponseStatus != expectedStatus || showConsoleLogs) {
      console.log(`Expected status: ${expectedStatus}, Actual status: ${actualResponseStatus}`);
      console.log(responseBody);
    }

    expect(actualResponseStatus).toBe(expectedStatus);
  }

  async signUp(generatedUsername: string, generatedPassword: string, expectedStatus: number) {
    const apiContext = await request.newContext();

    const response = await apiContext.post("/Account/v1/User", {
      data: {
        userName: generatedUsername,
        password: generatedPassword,
      },
    });

    const responseBody = await response.json();
    const actualResponseStatus = response.status();

    await this.checkResponseStatusAndLogResponseIfNeeded(actualResponseStatus, expectedStatus, responseBody);

    return responseBody;
  }

  async login(generatedUsername: string, generatedPassword: string, expectedStatus: number) {
    const apiContext = await request.newContext();

    const response = await apiContext.post("/Account/v1/Authorized", {
      data: {
        userName: generatedUsername,
        password: generatedPassword,
      },
    });

    const responseBody = await response.json();
    const actualResponseStatus = response.status();

    await this.checkResponseStatusAndLogResponseIfNeeded(actualResponseStatus, expectedStatus, responseBody);

    return responseBody;
  }

  async generateToken(generatedUsername: string, generatedPassword: string, expectedStatus: number) {
    const apiContext = await request.newContext();

    const response = await apiContext.post("/Account/v1/GenerateToken", {
      data: {
        userName: generatedUsername,
        password: generatedPassword,
      },
    });

    const responseBody = await response.json();
    const actualResponseStatus = response.status();

    await this.checkResponseStatusAndLogResponseIfNeeded(actualResponseStatus, expectedStatus, responseBody);

    return responseBody;
  }

  async deleteUser(UUID: string, token: string, expectedStatus: number) {
    const apiContext = await request.newContext();

    const response = await apiContext.delete(`/Account/v1/User/${UUID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const actualResponseStatus = response.status();

    await this.checkResponseStatusAndLogResponseIfNeeded(actualResponseStatus, expectedStatus, response);

    return response;
  }

  async getUserInfo(UUID: string, token: string, expectedStatus: number, expectedUserName: string) {
    const apiContext = await request.newContext();

    const response = await apiContext.get(`/Account/v1/User/${UUID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const responseBody = await response.json();
    const actualResponseStatus = response.status();

    await this.checkResponseStatusAndLogResponseIfNeeded(actualResponseStatus, expectedStatus, responseBody);

    return responseBody;
  }

  async getBooksFromBookStore(expectedStatus: number) {
    const apiContext = await request.newContext();

    const response = await apiContext.get("/BookStore/v1/Books");

    const responseBody = await response.json();
    const actualResponseStatus = response.status();

    await this.checkResponseStatusAndLogResponseIfNeeded(actualResponseStatus, expectedStatus, responseBody);

    return responseBody;
  }
}
