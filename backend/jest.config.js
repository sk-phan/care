const jestConfig = {
  testEnvironment: 'node', // Keep 'node' for server-side tests
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^next/dist/server/web/spec-extension/request.js$': '<rootDir>/__mocks__/next-request.js', // Mock Next.js server module
  },
  setupFilesAfterEnv: ['<rootDir>/support/setupTests.js'],
};
