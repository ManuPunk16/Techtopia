import { ProductCategory, Brand } from './product.model';

export interface CategorySpecification {
  readonly key: string;
  readonly name: string;
  readonly type: 'string' | 'number' | 'boolean' | 'enum' | 'range';
  readonly unit?: string;
  readonly required: boolean;
  readonly filterable: boolean;
  readonly comparable: boolean;
  readonly searchable: boolean;
  readonly options?: readonly string[];
  readonly range?: {
    readonly min: number;
    readonly max: number;
    readonly step: number;
  };
}

export interface ProductCategoryInfo {
  readonly id: ProductCategory;
  readonly name: string;
  readonly description: string;
  readonly icon: string;
  readonly specifications: readonly CategorySpecification[];
  readonly brands: readonly Brand[];
  readonly priceRange: {
    readonly min: number;
    readonly max: number;
    readonly currency: 'EUR';
  };
  readonly popularFilters: readonly string[];
  readonly sortOptions: readonly {
    readonly key: string;
    readonly name: string;
    readonly direction: 'asc' | 'desc';
    readonly default?: boolean;
  }[];
  readonly benchmarkTypes: readonly string[];
}

export interface CategoryTree {
  readonly categories: readonly ProductCategoryInfo[];
  readonly relationships: Record<string, string[]>; // parent -> children
}