import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { OpenAccountPage } from '../../../src/pages/manager/OpenAccountPage';

test('Assert manager can choose currencies for account', async ({ page }) => {
  const openAccountPage = new OpenAccountPage(page);
  await openAccountPage.open();
  await openAccountPage.selectCurrencyDollar();
  await openAccountPage.assertDropDownValueDollar();
  await openAccountPage.selectCurrencyPound();
  await openAccountPage.assertDropDownValuePound();
  await openAccountPage.selectCurrencyRupee();
  await openAccountPage.assertDropDownValueRupee();
});
