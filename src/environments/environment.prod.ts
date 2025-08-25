import { Environment } from './environment';

export const environment: Environment = {
  production: true,
  name: 'production',
  dataSource: 'local',
  apiUrl: 'https://api.techtopia.com',
  assetsPath: 'https://cdn.techtopia.com/assets',
  features: {
    enableComparisons: true,
    enableAnalytics: true,
    enableBenchmarks: true,
    enableAdvancedFilters: true,
    enableThemeToggle: true,
    enableDebugMode: false,
  },
  cache: {
    enabled: true,
    timeout: 48 * 60 * 60 * 1000,
    maxSize: 100 * 1024 * 1024,
  },
  logging: {
    level: 'warn',
    enableConsole: false,
    enableAnalytics: true,
  },
};