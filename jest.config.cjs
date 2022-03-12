module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts', 'mjs', 'mts'],
  testMatch: ['**/*.test.ts', '**/*.test.mts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  verbose: true
}