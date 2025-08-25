import {
  Product,
  CPUProduct,
  GPUProduct,
  RAMProduct,
  StorageProduct,
  SmartphoneProduct,
  SmartWatchProduct,
  HeadphonesProduct,
} from './product.model';

// Base models
export * from './product.model';
export * from './category.model';
export * from './filter.model';
export * from './comparison.model';

// Analytics mantener solo si está implementado
export * from './analytics.model';
export * from './benchmark.model';

// Type guards
export function isCPUProduct(product: Product): product is CPUProduct {
  return product.category === 'cpu';
}

export function isGPUProduct(product: Product): product is GPUProduct {
  return product.category === 'gpu';
}

export function isRAMProduct(product: Product): product is RAMProduct {
  return product.category === 'ram';
}

export function isStorageProduct(product: Product): product is StorageProduct {
  return product.category === 'storage';
}

export function isSmartphoneProduct(product: Product): product is SmartphoneProduct {
  return product.category === 'smartphone';
}

export function isSmartWatchProduct(product: Product): product is SmartWatchProduct {
  return product.category === 'smartwatch';
}

export function isHeadphonesProduct(product: Product): product is HeadphonesProduct {
  return product.category === 'headphones';
}
