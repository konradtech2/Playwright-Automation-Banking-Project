import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { AddCustomerPage } from '../../../src/pages/manager/AddCustomerPage';
import { CustomersListPage } from '../../../src/pages/manager/CustomersListPage';

let firstName;
let lastName;
let postalCode;
let addCustomerPage;

test.beforeEach(async ({ page }) => {

  firstName = faker.person.firstName();
  lastName = faker.person.lastName();
  postalCode = faker.location.zipCode();
  addCustomerPage = new AddCustomerPage(page);

  await addCustomerPage.open()
  await addCustomerPage.fillCustomerFirstName(firstName);
  await addCustomerPage.fillCustomerLastName(lastName);
  await addCustomerPage.fillPostalCodeField(postalCode);
  await addCustomerPage.clickCustomerButton();


});

test('Assert manager can search customer by Last Name', async ({ page }) => {
  const customersListPage = new CustomersListPage(page);
  await customersListPage.open();
  await customersListPage.searchCustomerByLastNameFunction(lastName);
  await customersListPage.assertUserIsVisible(lastName);
  await customersListPage.assertNumberOfRows(1);
});
