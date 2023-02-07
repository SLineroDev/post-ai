import { expect, test } from '@playwright/test';

test('index page has expected main', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('main')).toBeDefined;
});

test('ideas tab is selected', async ({ page }) => {
	await page.goto('/');
	
	const ideasTab = page.getByRole('button', { name: 'Ideas' });
	const ideasTitle = page.getByRole('heading', { name: 'Hey! Start generating your ideas for the next post' });

	await expect(page).toHaveTitle('postai - Ideas Generator');
	await expect(ideasTab).toHaveCSS('color','rgb(100, 85, 168)');
	await expect(ideasTitle).toBeDefined;
});

test('posts tab is not selected', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle('postai - Ideas Generator');
	const postsTab = page.getByRole('button', { name: 'Posts' });
	await expect(postsTab).toHaveCSS('color','rgb(147, 147, 147)');
});

test('posts tab is selected when clicking it', async ({ page }) => {
	await page.goto('/');
	const postsTab = page.getByRole('button', { name: 'Posts' });
	const postsTitle = page.getByRole('heading', { name: 'Now let\'s start generating the next post!' });
	await expect(page).toHaveTitle('postai - Ideas Generator');
	await postsTab.click()
	await expect(postsTitle).toBeDefined;
	await expect(page.title()).toBe('postai - Posts Generator');
	await expect(postsTab).toHaveCSS('color','rgb(100, 85, 168)');
});
