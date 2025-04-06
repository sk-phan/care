const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const jestConfig = {
  // Use 'node' for server-side tests, or keep 'jsdom' with polyfills
  testEnvironment: 'jsdom', // Switch to 'node' if testing Server Components
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Mock Next.js server modules if needed
    '^next/dist/server/web/spec-extension/request.js$': '<rootDir>/__mocks__/next-request.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

module.exports = createJestConfig(jestConfig);