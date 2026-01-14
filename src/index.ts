import {
  BasePage,
  ButtonsPage,
  CheckBoxPage,
  DynamicPropertiesPage,
  LinksPage,
  NavigationPage,
  RadioButtonPage,
  TextBoxPage,
  UploadAndDownloadPage,
  WebTablesPage,
  WebTablesRegistrationFormModalPage,
} from "./pages";

export class Application extends BasePage {
  navigation = new NavigationPage(this.page);
  textBox = new TextBoxPage(this.page);
  checkBox = new CheckBoxPage(this.page);
  radioButton = new RadioButtonPage(this.page);
  webTables = new WebTablesPage(this.page);
  webTablesRegistrationFormModal = new WebTablesRegistrationFormModalPage(this.page);
  buttons = new ButtonsPage(this.page);
  links = new LinksPage(this.page);
  uploadAndDownload = new UploadAndDownloadPage(this.page);
  dynamicProperties = new DynamicPropertiesPage(this.page);
}
