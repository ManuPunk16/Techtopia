export const APP_CONFIG = {
  name: 'Techtopia',
  version: '1.0.0',
  description: 'Plataforma integral de análisis y comparación tecnológica',
  
  // Configuración de datos
  data: {
    source: 'local' as 'local' | 'api',
    cacheDuration: 24 * 60 * 60 * 1000, // 24 horas en ms
    maxCacheSize: 50 * 1024 * 1024, // 50 MB
  },
  
  // Límites de la aplicación
  limits: {
    maxComparisonItems: 4,
    maxSearchResults: 50,
    maxFilterOptions: 100,
  },
  
  // URLs y rutas
  paths: {
    data: '/assets/data',
    images: '/assets/images',
    api: '/api/v1',
  },
  
  // Configuración de rendimiento
  performance: {
    enableVirtualScrolling: true,
    enableImageLazyLoading: true,
    enableServiceWorker: false,
    debounceSearchMs: 300,
  },
  
  // Features flags
  features: {
    enableComparisons: true,
    enableAnalytics: true,
    enableThemeToggle: true,
    enableAdvancedFilters: true,
    enableBenchmarks: true,
  },
} as const;

export type AppConfig = typeof APP_CONFIG;