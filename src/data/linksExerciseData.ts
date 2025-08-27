export const linksExpectedData = {
  createdLink: {
    expectedText: "Link has responded with staus 201 and status text Created",
    expectedStatus: 201,
    urlPart: "/created",
  },
  noContentLink: {
    expectedText: "Link has responded with staus 204 and status text No Content",
    expectedStatus: 204,
    urlPart: "/no-content",
  },
  movedLink: {
    expectedText: "Link has responded with staus 301 and status text Moved Permanently",
    expectedStatus: 301,
    urlPart: "/moved",
  },
  badRequestLink: {
    expectedText: "Link has responded with staus 400 and status text Bad Request",
    expectedStatus: 400,
    urlPart: "/bad-request",
  },
  unauthorizedLink: {
    expectedText: "Link has responded with staus 401 and status text Unauthorized",
    expectedStatus: 401,
    urlPart: "/unauthorized",
  },
  forbiddenLink: {
    expectedText: "Link has responded with staus 403 and status text Forbidden",
    expectedStatus: 403,
    urlPart: "/forbidden",
  },
  invalidUrlLink: {
    expectedText: "Link has responded with staus 404 and status text Not Found",
    expectedStatus: 404,
    urlPart: "/invalid-url",
  },
};
