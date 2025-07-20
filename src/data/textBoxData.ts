import { TextBoxDataTypes } from "../types";

export const textBoxData: TextBoxDataTypes = {
  userFullName: {
    validUserFullName: "testUserFullName",
    emptyUserFullName: "",
  },
  userEmail: {
    validUserEmail: "testuser@gmail.com",
    notValidUserEmail: {
      firstCase: "test+user@gmail.com", // Bug
      secondCase: "testusergmail.com",
      thirdCase: "testuser@gmailcom",
    },
  },
  currentAddress: {
    validCurrentAddress: "Test Valid Current Address",
    emptyCurrentAddress: "",
  },
  permanentAddress: {
    validPermanentAddress: "Test Valid Permanent Address",
    emptyPermanentAddress: "",
  },
};
