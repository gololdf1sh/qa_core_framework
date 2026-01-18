export interface ApiUserDataTypes {
  username: string;
  password: string;
}

export interface ExpectedStatusTypes {
  signUp: number;
  login: number;
  generateToken: number;
  deleteUser: number;
  getUserInfo: number;
  getBooksFromBookStore: number;
}
