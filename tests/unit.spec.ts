import { describe, it, expect } from 'vitest'

// Example unit test for a utility function
function sum(a: number, b: number) {
  return a + b
}

describe('sum', () => {
  it('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(-1, 1)).toBe(0)
  })
})
