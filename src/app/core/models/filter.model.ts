import { ProductCategory, Brand, CPUSocket, MemoryType, StorageInterface } from './product.model';

export interface FilterOption {
  readonly value: string | number | boolean;
  readonly label: string;
  readonly count: number;
  readonly selected: boolean;
}

export interface RangeFilter {
  readonly min: number;
  readonly max: number;
  readonly currentMin: number;
  readonly currentMax: number;
  readonly step: number;
  readonly unit?: string;
}

export interface ProductFilter {
  readonly category?: ProductCategory;
  readonly brand?: Brand[];
  readonly priceRange?: RangeFilter;
  readonly availability?: {
    readonly inStock?: boolean;
    readonly includeDiscontinued?: boolean;
  };
  readonly rating?: {
    readonly minExpert?: number;
    readonly minUser?: number;
    readonly minReviews?: number;
  };
  // Filtros específicos por categoría
  readonly cpuFilters?: {
    readonly socket?: CPUSocket[];
    readonly cores?: RangeFilter;
    readonly threads?: RangeFilter;
    readonly tdp?: RangeFilter;
    readonly unlocked?: boolean;
  };
  readonly gpuFilters?: {
    readonly memorySize?: RangeFilter;
    readonly tdp?: RangeFilter;
    readonly rayTracing?: boolean;
    readonly dlss?: boolean;
    readonly fsr?: boolean;
  };
  readonly ramFilters?: {
    readonly type?: MemoryType[];
    readonly capacity?: number[];
    readonly speed?: RangeFilter;
    readonly rgb?: boolean;
    readonly ecc?: boolean;
  };
  readonly storageFilters?: {
    readonly interface?: StorageInterface[];
    readonly capacity?: number[];
    readonly readSpeed?: RangeFilter;
    readonly writeSpeed?: RangeFilter;
    readonly dram?: boolean;
  };
  readonly search?: {
    readonly query: string;
    readonly fields: readonly string[];
  };
  readonly sort?: {
    readonly field: string;
    readonly direction: 'asc' | 'desc';
  };
  readonly pagination?: {
    readonly page: number;
    readonly size: number;
  };
}

export interface FilterGroup {
  readonly id: string;
  readonly name: string;
  readonly type: 'checkbox' | 'range' | 'select' | 'radio' | 'toggle';
  readonly category?: ProductCategory;
  readonly options?: readonly FilterOption[];
  readonly range?: RangeFilter;
  readonly expanded: boolean;
  readonly order: number;
  readonly essential: boolean; // Para filtros importantes
}

export interface FilterState {
  readonly activeFilters: ProductFilter;
  readonly availableFilters: readonly FilterGroup[];
  readonly resultCount: number;
  readonly isLoading: boolean;
  readonly lastUpdated: string;
}

export interface FilterPreset {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly category: ProductCategory;
  readonly filters: ProductFilter;
  readonly isDefault: boolean;
  readonly popularity: number;
}

// Presets de filtros comunes
export const FILTER_PRESETS = {
  cpu: {
    gaming: 'high-performance-cpu',
    productivity: 'multicore-cpu',
    budget: 'budget-cpu'
  },
  gpu: {
    gaming4k: 'gaming-4k-gpu',
    gaming1440p: 'gaming-1440p-gpu',
    budget: 'budget-gpu'
  },
  ram: {
    gaming: 'gaming-ram',
    productivity: 'high-capacity-ram',
    budget: 'budget-ram'
  }
} as const;