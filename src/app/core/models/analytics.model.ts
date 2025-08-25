export interface PerformanceMetric {
  readonly name: string;
  readonly value: number;
  readonly unit: string;
  readonly category: 'cpu' | 'gpu' | 'memory' | 'storage' | 'system';
  readonly higherIsBetter: boolean;
}

export interface BenchmarkScore {
  readonly benchmarkName: string;
  readonly score: number;
  readonly percentile: number;
  readonly category: string;
  readonly testDate: string;
}

export interface ProductAnalytics {
  readonly productId: string;
  readonly metrics: readonly PerformanceMetric[];
  readonly benchmarks: readonly BenchmarkScore[];
  readonly overallRating: number;
  readonly categoryRank: number;
  readonly pricePerformanceRatio: number;
  readonly popularity: number;
  readonly lastUpdated: string;
}

export interface MarketTrend {
  readonly category: string;
  readonly period: 'daily' | 'weekly' | 'monthly' | 'quarterly';
  readonly data: readonly {
    readonly date: string;
    readonly value: number;
    readonly metric: string;
  }[];
}

export interface UsageStatistics {
  readonly mostViewedProducts: readonly string[];
  readonly mostComparedProducts: readonly string[];
  readonly popularCategories: readonly string[];
  readonly searchTrends: readonly {
    readonly query: string;
    readonly frequency: number;
  }[];
}