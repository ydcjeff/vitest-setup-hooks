import { beforeAll, beforeEach, afterAll, afterEach } from "vitest";

beforeAll(() => {
  console.log('global before all - expected to run before ALL tests')
})

beforeEach(() => {
  console.log('global before each - exptected to run before EACH test file')
})

afterAll(() => {
  console.log('global after all - expected to run after ALL tests')
})

afterEach(() => {
  console.log('global after each - expected to run after EACH test file')
})
