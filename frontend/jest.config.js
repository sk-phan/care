const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const jestConfig = {
  testEnvironment: 'jsdom', 
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^next/dist/server/web/spec-extension/request.js$': '<rootDir>/__mocks__/next-request.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

module.exports = createJestConfig(jestConfig);