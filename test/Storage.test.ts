import { Storage } from '../src'

it('implements all methods of "localStorage"', () => {
  expect(new Storage()).toMatchObject({
    getItem: expect.any(Function),
    setItem: expect.any(Function),
    key: expect.any(Function),
    removeItem: expect.any(Function),
    clear: expect.any(Function),
    length: 0,
  })
})

describe('get()', () => {
  it('returns null given a non-existing key', () => {
    const storage = new Storage()
    expect(storage.getItem('foo')).toBeNull()
  })

  it('returns value given an existing key', () => {
    const storage = new Storage()
    storage.setItem('foo', 'bar')
    expect(storage.getItem('foo')).toBe('bar')
  })
})

describe('set()', () => {
  it('sets the value given a vacant key', () => {
    const storage = new Storage()
    storage.setItem('foo', 'bar')
    expect(storage.getItem('foo')).toBe('bar')
  })

  it('overrides the existing value under the same key', () => {
    const storage = new Storage()
    storage.setItem('foo', 'bar')
    storage.setItem('foo', 'baz')
    expect(storage.getItem('foo')).toBe('baz')
  })
})

describe('remoteItem()', () => {
  it('does nothing given a non-existing key', () => {
    const storage = new Storage()
    expect(storage.getItem('foo')).toBeNull()
    expect(storage.removeItem('foo')).toBeUndefined()
    expect(storage.getItem('foo')).toBeNull()
  })

  it('removes a given existing key', () => {
    const storage = new Storage()
    storage.setItem('foo', 'bar')
    expect(storage.getItem('foo')).toBe('bar')
    expect(storage.removeItem('foo')).toBeUndefined()
    expect(storage.getItem('foo')).toBeNull()
  })
})

describe('key()', () => {
  it('returns null given a non-existing index', () => {
    const storage = new Storage()
    expect(storage.key(123)).toBeNull()
    expect(storage.key(-1)).toBe(null)
  })

  it('returns null if the index equals the number of keys', () => {
    const storage = new Storage()
    storage.setItem('foo', 'bar')
    expect(storage.key(1)).toBeNull()
  })

  it('returns null given an index that exceeds the number of keys', () => {
    const storage = new Storage()
    storage.setItem('foo', 'bar')
    expect(storage.key(5)).toBeNull()
  })

  it('returns value by the given index', () => {
    const storage = new Storage()
    storage.setItem('foo', 'bar')
    storage.setItem('baz', 'qux')
    expect(storage.key(0)).toBe('foo')
    expect(storage.key(1)).toBe('baz')
  })
})

describe('clear()', () => {
  it('does nothing given an empty storage', () => {
    const storage = new Storage()
    expect(storage.length).toBe(0)
    expect(storage.clear()).toBeUndefined()
    expect(storage.length).toBe(0)
  })

  it('clears all the storage keys', () => {
    const storage = new Storage()
    storage.setItem('foo', 'bar')
    storage.setItem('baz', 'qux')
    expect(storage.length).toBe(2)
    storage.clear()
    expect(storage.length).toBe(0)
  })
})

describe('length', () => {
  it('returns 0 given an empty storage', () => {
    const storage = new Storage()
    expect(storage.length).toBe(0)
  })

  it('returns the number of storage keys', () => {
    const storage = new Storage()
    storage.setItem('foo', 'bar')
    storage.setItem('baz', 'qux')
    expect(storage.length).toBe(2)
  })
})
