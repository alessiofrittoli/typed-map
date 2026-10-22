import { describe, expect, it } from 'vitest'

describe('Vitest', () => {
	it('loads .env files correctly', () => {
		// Arrange ...
		const envVar = process.env.VITE_VAR_LOADED

		// Act ...
		const isLoaded = envVar === 'true'

		// Assert ...
		expect(isLoaded).toBe(true)
	})
})
