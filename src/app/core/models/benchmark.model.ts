export interface BenchmarkResult {
  readonly id: string;
  readonly name: string;
  readonly score: number;
  readonly unit: string;
  readonly higherIsBetter: boolean;
  readonly category: 'synthetic' | 'real-world' | 'gaming' | 'productivity';
  readonly testDate: string;
  readonly version?: string;
}

export interface BenchmarkSuite {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly description: string;
  readonly tests: readonly BenchmarkResult[];
  readonly version: string;
  readonly lastUpdated: string;
}

export interface ProductBenchmark {
  readonly productId: string;
  readonly productCategory: string;
  readonly benchmarks: readonly BenchmarkResult[];
  readonly overallScore?: number;
  readonly rank?: number;
  readonly percentile?: number;
}

export interface BenchmarkComparison {
  readonly baselineProduct: string;
  readonly comparedProducts: readonly string[];
  readonly benchmarks: readonly {
    readonly name: string;
    readonly results: Record<string, number>;
    readonly winner: string;
    readonly difference: number;
  }[];
  readonly summary: {
    readonly winner: string;
    readonly averageDifference: number;
    readonly significantTests: readonly string[];
  };
}

// Tipos de benchmarks por categoría
export const BENCHMARK_CATEGORIES = {
  cpu: [
    'Cinebench R23 Single-Core',
    'Cinebench R23 Multi-Core', 
    'Geekbench 5 Single-Core',
    'Geekbench 5 Multi-Core',
    'PassMark CPU',
    'Blender Classroom',
    'HandBrake 4K Encode'
  ],
  gpu: [
    '3DMark Time Spy',
    '3DMark Port Royal',
    'Unigine Heaven',
    'Furmark',
    'Cyberpunk 2077 4K RT',
    'Shadow of Tomb Raider 1440p',
    'Control 1440p RT'
  ],
  ram: [
    'AIDA64 Memory Read',
    'AIDA64 Memory Write', 
    'AIDA64 Memory Copy',
    'AIDA64 Memory Latency',
    'MaxxMEM2 Memory',
    'SiSoft Sandra Memory'
  ],
  storage: [
    'CrystalDiskMark Sequential Read',
    'CrystalDiskMark Sequential Write',
    'CrystalDiskMark Random 4K Read',
    'CrystalDiskMark Random 4K Write',
    'AS SSD Benchmark',
    'ATTO Disk Benchmark'
  ],
  smartphone: [
    'Geekbench 5 Single-Core',
    'Geekbench 5 Multi-Core',
    'AnTuTu v9',
    '3DMark Wild Life',
    'GFXBench T-Rex',
    'PCMark Work 3.0'
  ]
} as const;