import { ExpectedStatusTypes } from "../types";

export const expectedStatus: ExpectedStatusTypes = {
  signUp: 201,
  login: 200,
  generateToken: 200,
  deleteUser: 204,
  getUserInfo: 200,
  getBooksFromBookStore: 200,
};

export async function generateApiUserData() {
  const username = `TestUser${Date.now()}!`;
  const password = username;

  return { username, password };
}
