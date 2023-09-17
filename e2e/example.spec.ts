import { test, expect } from '@playwright/test';

test.describe('index', () => {
  test('has title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/^abekoh's tech note$/);
  });
  test('next page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /^>$/ }).click();
    await expect(page).toHaveURL('/posts/page/2');
  });
  test('previous page', async ({ page }) => {
    await page.goto('/posts/page/2');
    await page.getByRole('link', { name: /^<$/ }).first().click();
    await expect(page).toHaveURL('/posts/page/1');
  });
  test('number page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /^3$/ }).click();
    await expect(page).toHaveURL('/posts/page/3');
  });
});

test.describe('post', () => {
  test('to post link', async ({ page }) => {
    await page.goto('/');
    await page.locator('section a').first().click();
    await expect(page).toHaveURL(/\/posts\/.+/);
  });
  test('post content', async ({ page }) => {
    await page.goto('/posts/start-blog');
    await expect(page).toHaveTitle(/^ブログはじめました - abekoh's tech note$/);
    await page.getByRole('link', { name: /^diary$/ }).click();
    await expect(page).toHaveURL('/tags/diary');
  });
});

test.describe('profile', () => {
  test('to profile page link', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Profile' }).click();
    await expect(page).toHaveURL('/profile');
  });
  test('has title', async ({ page }) => {
    await page.goto('/profile');
    await expect(page).toHaveTitle(/^Profile - abekoh's tech note$/);
  });
  test('has link to abekoh.dev', async ({ page }) => {
    await page.goto('/profile');
    await page.getByRole('link', { name: 'abekoh.dev' }).click();
    await expect(page).toHaveURL('https://abekoh.dev/');
  });
});


test.describe('tags', () => {
  test('to tags page link', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Tags' }).click();
    await expect(page).toHaveURL('/tags');
  });
  test('has title', async ({ page }) => {
    await page.goto('/tags');
    await expect(page).toHaveTitle(/^Tags - abekoh's tech note$/);
  });
  test('has link to Go', async ({ page }) => {
    await page.goto('/tags');
    await page.getByRole('link', {
      name: /^Go$/
    }).click();
    await expect(page).toHaveURL('/tags/golang');
  });
});

test.describe('privacy policy', () => {
  test('to privacy policy link', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Privacy Policy' }).click();
    await expect(page).toHaveURL('/privacy');
  });
  test('has title', async ({ page }) => {
    await page.goto('/privacy');
    await expect(page).toHaveTitle(/^Privacy Policy - abekoh's tech note$/);
  });
});

test.describe('rss', () => {
  test('to rss link', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'RSS' }).click();
    await expect(page).toHaveURL('/rss.xml');
  });
});
