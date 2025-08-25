import { Product, ProductCategory } from './product.model';

export interface ComparisonItem {
  readonly product: Product;
  readonly addedAt: string;
  readonly notes?: string;
  readonly highlighted: boolean;
}

export interface ComparisonCriteria {
  readonly field: string;
  readonly name: string;
  readonly weight: number; // 0-1
  readonly higherIsBetter: boolean;
  readonly unit?: string;
  readonly category: 'performance' | 'value' | 'features' | 'quality';
  readonly essential: boolean; // Para criterios importantes
}

export interface ComparisonResult {
  readonly productId: string;
  readonly scores: Record<string, number>;
  readonly totalScore: number;
  readonly rank: number;
  readonly strengths: readonly string[];
  readonly weaknesses: readonly string[];
  readonly verdict: string;
}

export interface ProductComparison {
  readonly id: string;
  readonly name: string;
  readonly items: readonly ComparisonItem[];
  readonly criteria: readonly ComparisonCriteria[];
  readonly results: readonly ComparisonResult[];
  readonly winner?: string;
  readonly analysis: {
    readonly performance: string;
    readonly value: string;
    readonly features: string;
    readonly recommendation: string;
    readonly bestFor: readonly string[];
  };
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly category: ProductCategory;
  readonly maxItems: number;
  readonly preset?: string;
}

export interface ComparisonTemplate {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly category: ProductCategory;
  readonly criteria: readonly ComparisonCriteria[];
  readonly isDefault: boolean;
  readonly useCase: string;
  readonly targetAudience: readonly string[];
}

export type ComparisonPreset = Record<ProductCategory, readonly ComparisonTemplate[]>;