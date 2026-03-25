import { expect, test } from '@playwright/test';

test('home page loads', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Stajnia Decyma - jazda konna w Darnawie');
});

test('aktualnosci page shows news listing', async ({ page }) => {
  await page.goto('/aktualnosci');
  await expect(page.locator('h1')).toContainText('Aktualności i wydarzenia w Stajni Decyma');
  await expect(page.getByRole('link', { name: /Czytaj więcej/i }).first()).toBeVisible();
});

test('legacy numeric news url redirects to slug', async ({ page }) => {
  await page.goto('/aktualnosci/71');
  await expect(page).toHaveURL(/\/aktualnosci\/dziecieca-akademia-jezdziecka-71\/?$/);
});
