import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { AddCustomerPage } from '../../../src/pages/manager/AddCustomerPage';
import { CustomersListPage } from '../../../src/pages/manager/CustomersListPage'

let firstName;
let lastName;
let postCode;

test.beforeEach(async ({ page }) => {
  const addCustomerPage = new AddCustomerPage(page);
  firstName = faker.person.firstName();
  lastName = faker.person.lastName();
  postCode = faker.location.zipCode();
  await addCustomerPage.open();
  await addCustomerPage.fillCustomerFirstName(firstName);
  await addCustomerPage.fillCustomerLastName(lastName);
  await addCustomerPage.fillPostalCodeField(postCode);
  await addCustomerPage.clickCustomerButton();
});

test('Assert manager can delete customer', async ({ page }) => {
  const customerListPage = new CustomersListPage(page)
  await customerListPage.open();
  await customerListPage.clickDeleteButtonByUsername(firstName);
  await customerListPage.assertDeletedUserIsNotVisible(firstName);
  await customerListPage.reloadPage()
  await customerListPage.assertDeletedUserIsNotVisible(firstName);
});
