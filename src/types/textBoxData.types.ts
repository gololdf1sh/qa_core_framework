export type TextBoxDataTypes = {
  userFullName: {
    validUserFullName: string;
    emptyUserFullName: string;
  };
  userEmail: {
    validUserEmail: string;
    notValidUserEmail: {
      firstCase: string;
      secondCase: string;
      thirdCase: string;
    };
  };
  currentAddress: {
    validCurrentAddress: string;
    emptyCurrentAddress: string;
  };
  permanentAddress: {
    validPermanentAddress: string;
    emptyPermanentAddress: string;
  };
};

export type TextBoxInputFieldsDataType = {
  fullName: string;
  email: string;
  currentAddress: string;
  permanentAddress: string;
};
