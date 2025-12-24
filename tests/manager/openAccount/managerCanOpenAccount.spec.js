import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { AddCustomerPage } from '../../../src/pages/manager/AddCustomerPage';
import { OpenAccountPage } from '../../../src/pages/manager/OpenAccountPage';
import { CustomersListPage } from '../../../src/pages/manager/CustomersListPage';

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
  await addCustomerPage.reloadPage();
});

test('Assert manager can open new Account', async ({ page }) => {
  const openAccountPage = new OpenAccountPage(page);
  const customersListPage = new CustomersListPage(page);
  await openAccountPage.open();
  await openAccountPage.selectCreatedCustomer();
  await openAccountPage.selectCurrencyDollar();
  await openAccountPage.clickProcessButton();
  await openAccountPage.reloadOpenAccountPage();
  await customersListPage.open();
  await customersListPage.assertAccountNumberIsAvailable();
});
