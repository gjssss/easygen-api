import { describe, expect, it } from 'vitest'
import { one } from '../src/index'

describe('should', () => {
  it('exported', () => {
    expect(one).toEqual(1)
  })
})
