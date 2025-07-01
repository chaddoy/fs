export default {
  displayName: 'core-ui',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: 'test-output/jest/coverage',
  moduleNameMapper: {
    '^@shadcn-ui': '<rootDir>/../shadcn-ui/src/index.ts',
    '^@shadcn-ui/(.*)$': '<rootDir>/../shadcn-ui/src/$1',
    '^@core-ui/(.*)$': '<rootDir>/src/$1',
    '^@fs/intl': '<rootDir>/../shared/intl/src/index.ts',
  },
};
