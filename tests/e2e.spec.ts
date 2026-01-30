import { describe, it, expect } from 'vitest'
import { chromium } from 'playwright'

// Example e2e test for homepage

describe('E2E: Homepage', () => {
  it('should display the dashboard title', async () => {
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:3000/')
    const title = await page.textContent('h1')
    expect(title).toMatch(/nuxt dashboard/i)
    await browser.close()
  })
})
