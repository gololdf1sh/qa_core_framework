import { test, expect } from "@playwright/test";
import { ApiController } from "../../src/api-controllers";
import { expectedStatus } from "../../src/data";

test.describe("API Tests - Book Store", async () => {
  let apiController: ApiController;

  test.beforeEach(async ({}) => {
    apiController = new ApiController();
  });

  test("Get Books From Book Store", async () => {
    const response = await apiController.getBooksFromBookStore(expectedStatus.getBooksFromBookStore);

    expect(response.books).toBeDefined();
    expect(response.books.length).toBeGreaterThan(0);

    for (const book of response.books) {
      expect(book.isbn).toBeDefined();
      expect(book.title).toBeDefined();
      expect(book.subTitle).toBeDefined();
      expect(book.author).toBeDefined();
      expect(book.publish_date).toBeDefined();
      expect(book.publisher).toBeDefined();
      expect(book.pages).toBeDefined();
      expect(book.description).toBeDefined();
      expect(book.website).toBeDefined();
    }
  });
});
