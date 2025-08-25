export interface Environment {
  readonly production: boolean;
  readonly name: string;
  readonly dataSource: 'local' | 'api';
  readonly apiUrl: string;
  readonly assetsPath: string;
  readonly features: {
    readonly enableComparisons: boolean;
    readonly enableAnalytics: boolean;
    readonly enableBenchmarks: boolean;
    readonly enableAdvancedFilters: boolean;
    readonly enableThemeToggle: boolean;
    readonly enableDebugMode: boolean;
  };
  readonly cache: {
    readonly enabled: boolean;
    readonly timeout: number;
    readonly maxSize: number;
  };
  readonly logging: {
    readonly level: 'error' | 'warn' | 'info' | 'debug';
    readonly enableConsole: boolean;
    readonly enableAnalytics: boolean;
  };
}

export const environment: Environment = {
  production: false,
  name: 'development',
  dataSource: 'local',
  apiUrl: '',
  assetsPath: '/assets',
  features: {
    enableComparisons: true,
    enableAnalytics: true,
    enableBenchmarks: true,
    enableAdvancedFilters: true,
    enableThemeToggle: true,
    enableDebugMode: true,
  },
  cache: {
    enabled: true,
    timeout: 24 * 60 * 60 * 1000,
    maxSize: 50 * 1024 * 1024,
  },
  logging: {
    level: 'debug',
    enableConsole: true,
    enableAnalytics: false,
  },
};