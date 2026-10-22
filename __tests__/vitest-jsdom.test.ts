/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from 'vitest'

describe('Vitest', () => {
	it('runs with jest-environment-jsdom', () => {
		expect(window).not.toBeUndefined()
	})
})
