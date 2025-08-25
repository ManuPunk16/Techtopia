/**
 * @fileoverview Product Model Definitions | Definiciones del Modelo de Productos
 * @description Complete TypeScript interfaces and enums for Techtopia product catalog
 * @description Interfaces y enums completos de TypeScript para el catálogo de productos de Techtopia
 * @version 1.0.0
 * @author Techtopia Development Team
 */

// =============================================================================
// PRODUCT CATEGORIES | CATEGORÍAS DE PRODUCTOS
// =============================================================================

/**
 * Product categories enumeration
 * Enumeración de categorías de productos
 */
export enum ProductCategory {
  // PC Components | Componentes de PC
  CPU = 'cpu',
  GPU = 'gpu',
  MOTHERBOARD = 'motherboard',
  RAM = 'ram',
  STORAGE = 'storage',
  PSU = 'psu',
  COOLING = 'cooling',
  CASE = 'case',

  // PC Peripherals | Periféricos de PC
  MONITOR = 'monitor',
  KEYBOARD = 'keyboard',
  MOUSE = 'mouse',
  HEADPHONES = 'headphones',
  WEBCAM = 'webcam',
  SPEAKERS = 'speakers',
  MICROPHONE = 'microphone',

  // Mobile Devices | Dispositivos Móviles
  SMARTPHONE = 'smartphone',
  TABLET = 'tablet',
  SMARTWATCH = 'smartwatch',

  // Accessories | Accesorios
  ACCESSORIES = 'accessories',
  CABLES = 'cables',
  ADAPTERS = 'adapters',
}

// =============================================================================
// BRAND DEFINITIONS | DEFINICIONES DE MARCAS
// =============================================================================

/**
 * Brand enumeration organized by product category
 * Enumeración de marcas organizadas por categoría de producto
 */
export enum Brand {
  // CPU Brands
  INTEL_CPU = 'Intel',
  AMD_CPU = 'AMD',

  // GPU Brands
  NVIDIA_GPU = 'NVIDIA',
  AMD_GPU = 'AMD',
  INTEL_GPU = 'Intel',

  // Motherboard Brands
  ASUS_MOBO = 'ASUS',
  MSI_MOBO = 'MSI',
  GIGABYTE_MOBO = 'Gigabyte',
  ASROCK_MOBO = 'ASRock',

  // RAM Brands
  CORSAIR_RAM = 'Corsair',
  CRUCIAL_RAM = 'Crucial',
  GSKILL_RAM = 'G.Skill',
  KINGSTON_RAM = 'Kingston',
  TEAMGROUP_RAM = 'Team Group',

  // Storage Brands
  SAMSUNG_STORAGE = 'Samsung',
  WD_STORAGE = 'Western Digital',
  SEAGATE_STORAGE = 'Seagate',
  CRUCIAL_STORAGE = 'Crucial',

  // PSU Brands
  SEASONIC_PSU = 'Seasonic',
  EVGA_PSU = 'EVGA',
  COOLERMASTER_PSU = 'Cooler Master',
  CORSAIR_PSU = 'Corsair',

  // Cooling Brands
  NOCTUA_COOLING = 'Noctua',
  BEQUIET_COOLING = 'be quiet!',
  ARCTIC_COOLING = 'Arctic',
  CORSAIR_COOLING = 'Corsair',
  COOLERMASTER_COOLING = 'Cooler Master',

  // Case Brands
  FRACTALDESIGN_CASE = 'Fractal Design',
  LIANLI_CASE = 'Lian Li',
  PHANTEKS_CASE = 'Phanteks',
  CORSAIR_CASE = 'Corsair',
  NZXT_CASE = 'NZXT',

  // Monitor Brands
  LG_MONITOR = 'LG',
  DELL_MONITOR = 'Dell',
  ACER_MONITOR = 'Acer',
  BENQ_MONITOR = 'BenQ',
  SAMSUNG_MONITOR = 'Samsung',
  ASUS_MONITOR = 'ASUS',

  // Peripheral Brands
  LOGITECH_KEYBOARD = 'Logitech',
  RAZER_KEYBOARD = 'Razer',
  CORSAIR_KEYBOARD = 'Corsair',
  STEELSERIES_KEYBOARD = 'SteelSeries',
  KEYCHRON_KEYBOARD = 'Keychron',

  LOGITECH_MOUSE = 'Logitech',
  RAZER_MOUSE = 'Razer',
  CORSAIR_MOUSE = 'Corsair',
  STEELSERIES_MOUSE = 'SteelSeries',

  // Audio Brands
  APPLE_HEADPHONES = 'Apple',
  SONY_HEADPHONES = 'Sony',
  BOSE_HEADPHONES = 'Bose',
  SENNHEISER_HEADPHONES = 'Sennheiser',

  // Mobile Device Brands
  APPLE_MOBILE = 'Apple',
  GOOGLE_MOBILE = 'Google',
  ONEPLUS_MOBILE = 'OnePlus',
  SAMSUNG_MOBILE = 'Samsung',

  APPLE_TABLET = 'Apple',
  SAMSUNG_TABLET = 'Samsung',
  GOOGLE_TABLET = 'Google',

  APPLE_WATCH = 'Apple',
  SAMSUNG_WATCH = 'Samsung',
  GARMIN_WATCH = 'Garmin',
}

// =============================================================================
// HARDWARE SPECIFICATIONS | ESPECIFICACIONES DE HARDWARE
// =============================================================================

/**
 * CPU socket types for motherboard compatibility
 * Tipos de socket de CPU para compatibilidad con placas base
 */
export enum CPUSocket {
  // Intel Sockets
  LGA1700 = 'LGA 1700',
  LGA1200 = 'LGA 1200',
  LGA1151 = 'LGA 1151',
  LGA2066 = 'LGA 2066',
  
  // AMD Sockets
  AM5 = 'AM5',
  AM4 = 'AM4',
  sTRX40 = 'sTRX40',
  TRX50 = 'TRX50',
}

/**
 * Motherboard form factors
 * Factores de forma de placas base
 */
export enum MotherboardFormFactor {
  EATX = 'E-ATX',
  ATX = 'ATX',
  MICRO_ATX = 'Micro-ATX',
  MINI_ITX = 'Mini-ITX',
}

/**
 * Memory types and generations
 * Tipos y generaciones de memoria
 */
export enum MemoryType {
  DDR5 = 'DDR5',
  DDR4 = 'DDR4',
  DDR3 = 'DDR3',
}

/**
 * Storage interface standards
 * Estándares de interfaz de almacenamiento
 */
export enum StorageInterface {
  NVME_PCIE5 = 'NVMe PCIe 5.0',
  NVME_PCIE4 = 'NVMe PCIe 4.0',
  NVME_PCIE3 = 'NVMe PCIe 3.0',
  SATA3 = 'SATA III',
  SATA2 = 'SATA II',
}

/**
 * PSU efficiency certifications
 * Certificaciones de eficiencia de PSU
 */
export enum PSUEfficiency {
  TITANIUM = '80+ Titanium',
  PLATINUM = '80+ Platinum',
  GOLD = '80+ Gold',
  SILVER = '80+ Silver',
  BRONZE = '80+ Bronze',
  STANDARD = '80+ Standard',
  WHITE = '80+ White',
}

/**
 * Monitor resolution standards
 * Estándares de resolución de monitor
 */
export enum MonitorResolution {
  FHD = '1920x1080',
  QHD = '2560x1440',
  UHD_4K = '3840x2160',
  ULTRAWIDE_QHD = '3440x1440',
  ULTRAWIDE_4K = '3840x1600',
  UHD_8K = '7680x4320',
}

/**
 * Keyboard layout standards
 * Estándares de distribución de teclado
 */
export enum KeyboardLayout {
  QWERTY_US = 'QWERTY US',
  QWERTY_ES = 'QWERTY ES',
  AZERTY = 'AZERTY',
  QWERTZ = 'QWERTZ',
  QWERTY_UK = 'QWERTY UK',
}

/**
 * Keyboard switch types
 * Tipos de switches de teclado
 */
export enum KeyboardType {
  MECHANICAL = 'Mechanical',
  MEMBRANE = 'Membrane',
  OPTICAL = 'Optical',
  HYBRID = 'Hybrid',
}

// =============================================================================
// SHARED INTERFACES | INTERFACES COMPARTIDAS
// =============================================================================

/**
 * Price information with multi-currency support
 * Información de precio con soporte multi-moneda
 * 
 * @interface Price
 */
export interface Price {
  /** MSRP price | Precio de lista */
  readonly msrp: number;
  /** Current market price | Precio actual de mercado */
  readonly current: number;
  /** Currency code | Código de moneda */
  readonly currency: 'USD' | 'MXN' | 'EUR';
  /** Last price update timestamp | Marca de tiempo de última actualización */
  readonly lastUpdated: string;
  /** Available retail links | Enlaces de tiendas disponibles */
  readonly retailLinks?: readonly RetailLink[];
  /** Historical price data | Datos históricos de precios */
  readonly historicalPrices?: readonly {
    readonly date: string;
    readonly price: number;
    readonly currency: 'USD' | 'MXN' | 'EUR';
  }[];
}

/**
 * Retail store information
 * Información de tienda minorista
 * 
 * @interface RetailLink
 */
export interface RetailLink {
  /** Store name | Nombre de la tienda */
  readonly retailer: string;
  /** Product URL | URL del producto */
  readonly url: string;
  /** Store price | Precio en la tienda */
  readonly price: number;
  /** Store currency | Moneda de la tienda */
  readonly currency: 'USD' | 'MXN' | 'EUR';
  /** Stock availability | Disponibilidad en stock */
  readonly inStock: boolean;
  /** Last stock check | Última verificación de stock */
  readonly lastChecked: string;
}

/**
 * Product image assets
 * Recursos de imágenes del producto
 * 
 * @interface ProductImage
 */
export interface ProductImage {
  /** Thumbnail image URL | URL de imagen miniatura */
  readonly thumbnail: string;
  /** Gallery image URLs | URLs de galería de imágenes */
  readonly gallery: readonly string[];
  /** Alt text for accessibility | Texto alternativo para accesibilidad */
  readonly alt: string;
  /** Fallback image URL | URL de imagen de respaldo */
  readonly fallback?: string;
}

/**
 * Product rating and review data
 * Datos de calificación y reseñas del producto
 * 
 * @interface ProductRating
 */
export interface ProductRating {
  /** Expert review score | Puntuación de reseñas de expertos */
  readonly expert: number;
  /** User review score | Puntuación de reseñas de usuarios */
  readonly users: number;
  /** Total number of reviews | Número total de reseñas */
  readonly totalReviews: number;
  /** Rating breakdown by category | Desglose de calificaciones por categoría */
  readonly breakdown: {
    readonly performance: number;
    readonly value: number;
    readonly quality: number;
    readonly features: number;
  };
  /** Last rating update | Última actualización de calificación */
  readonly lastUpdated: string;
}

/**
 * Benchmark test result
 * Resultado de prueba de rendimiento
 * 
 * @interface Benchmark
 */
export interface Benchmark {
  /** Benchmark name | Nombre del benchmark */
  readonly name: string;
  /** Benchmark score | Puntuación del benchmark */
  readonly score: number;
  /** Score unit | Unidad de puntuación */
  readonly unit: string;
  /** Score interpretation | Interpretación de puntuación */
  readonly higherIsBetter: boolean;
  /** Test execution date | Fecha de ejecución de la prueba */
  readonly testDate: string;
  /** Benchmark version | Versión del benchmark */
  readonly version?: string;
}

// =============================================================================
// BASE PRODUCT INTERFACE | INTERFAZ DE PRODUCTO BASE
// =============================================================================

/**
 * Base product interface with common properties
 * Interfaz base del producto con propiedades comunes
 * 
 * @interface BaseProduct
 */
export interface BaseProduct {
  /** Unique product identifier | Identificador único del producto */
  readonly id: string;
  /** Product display name | Nombre de visualización del producto */
  readonly name: string;
  /** Product brand | Marca del producto */
  readonly brand: Brand;
  /** Product model | Modelo del producto */
  readonly model: string;
  /** Product category | Categoría del producto */
  readonly category: ProductCategory;
  /** Price information | Información de precio */
  readonly price: Price;
  /** Availability information | Información de disponibilidad */
  readonly availability: {
    readonly inStock: boolean;
    readonly releaseDate: string;
    readonly discontinuedDate?: string;
    readonly stockLevel: 'high' | 'medium' | 'low' | 'out-of-stock';
    readonly expectedRestockDate?: string;
  };
  /** Product images | Imágenes del producto */
  readonly images: ProductImage;
  /** Product rating | Calificación del producto */
  readonly rating: ProductRating;
  /** Product description | Descripción del producto */
  readonly description: string;
  /** Key product features | Características clave del producto */
  readonly keyFeatures: readonly string[];
  /** Product tags for filtering | Etiquetas del producto para filtrado */
  readonly tags: readonly string[];
  /** Product weight in grams | Peso del producto en gramos */
  readonly weight?: number;
  /** Product physical dimensions | Dimensiones físicas del producto */
  readonly dimensions?: {
    readonly length: number;
    readonly width: number;
    readonly height: number;
    readonly unit: 'mm' | 'cm';
  };
  /** Warranty information | Información de garantía */
  readonly warranty?: {
    readonly years: number;
    readonly type: 'Manufacturer' | 'Retailer' | 'Extended';
    readonly coverage: string;
  };
  /** Creation timestamp | Marca de tiempo de creación */
  readonly createdAt: string;
  /** Last update timestamp | Marca de tiempo de última actualización */
  readonly updatedAt: string;
}

// =============================================================================
// SPECIALIZED PRODUCT INTERFACES | INTERFACES ESPECIALIZADAS DE PRODUCTOS
// =============================================================================

/**
 * CPU Product specifications
 * Especificaciones de producto CPU
 * 
 * @interface CPUProduct
 * @extends BaseProduct
 */
export interface CPUProduct extends BaseProduct {
  readonly category: ProductCategory.CPU;
  readonly brand: Brand.INTEL_CPU | Brand.AMD_CPU;
  readonly specifications: {
    readonly architecture: string;
    readonly socket: CPUSocket;
    readonly process: string;
    readonly cores: number;
    readonly threads: number;
    readonly baseClock: number;
    readonly boostClock: number;
    readonly cache: {
      readonly l1: string;
      readonly l2: string;
      readonly l3: string;
    };
    readonly tdp: number;
    readonly integratedGraphics?: string;
    readonly memorySupport: {
      readonly type: MemoryType[];
      readonly maxCapacity: number;
      readonly maxSpeed: number;
      readonly channels: number;
    };
    readonly pcieLanes: number;
    readonly unlocked: boolean;
    readonly stepping?: string;
  };
  readonly performance: {
    readonly benchmarks: readonly Benchmark[];
    readonly thermals: {
      readonly tdp: number;
      readonly maxTemp: number;
      readonly idleTemp?: number;
    };
    readonly powerConsumption: {
      readonly idle: number;
      readonly load: number;
      readonly peak?: number;
    };
  };
  readonly compatibility: {
    readonly motherboards: readonly string[];
    readonly coolers: readonly string[];
    readonly ramKits: readonly string[];
  };
}

/**
 * GPU Product specifications
 * Especificaciones de producto GPU
 * 
 * @interface GPUProduct
 * @extends BaseProduct
 */
export interface GPUProduct extends BaseProduct {
  readonly category: ProductCategory.GPU;
  readonly brand: Brand.NVIDIA_GPU | Brand.AMD_GPU | Brand.INTEL_GPU;
  readonly specifications: {
    readonly architecture: string;
    readonly process: string;
    readonly baseClock: number;
    readonly boostClock: number;
    readonly memorySize: number;
    readonly memoryType: string;
    readonly memoryBus: number;
    readonly memoryBandwidth: number;
    readonly cudaCores?: number;
    readonly rtCores?: number;
    readonly tensorCores?: number;
    readonly computeUnits?: number;
    readonly rayAccelerators?: number;
    readonly infinityCacheSize?: number;
    readonly tdp: number;
    readonly pciInterface: string;
    readonly outputs: readonly string[];
    readonly powerConnectors: readonly string[];
    readonly length: number;
    readonly slots: number;
    readonly recommendedPSU: number;
  };
  readonly performance: {
    readonly benchmarks: readonly Benchmark[];
    readonly thermals: {
      readonly tdp: number;
      readonly maxTemp: number;
      readonly targetTemp?: number;
    };
    readonly gamePerformance: readonly {
      readonly game: string;
      readonly resolution: string;
      readonly settings: string;
      readonly fps: number;
      readonly minimumFps?: number;
      readonly maximumFps?: number;
    }[];
  };
  readonly features: {
    readonly dlss?: string;
    readonly fsr?: string;
    readonly rayTracing: boolean;
    readonly nvenc?: boolean;
    readonly avEncode?: boolean;
    readonly hdmi21: boolean;
    readonly displayport14: boolean;
  };
}

/**
 * Motherboard Product specifications
 * Especificaciones de producto Placa Base
 * 
 * @interface MotherboardProduct
 * @extends BaseProduct
 */
export interface MotherboardProduct extends BaseProduct {
  readonly category: ProductCategory.MOTHERBOARD;
  readonly brand: Brand.ASUS_MOBO | Brand.MSI_MOBO | Brand.GIGABYTE_MOBO | Brand.ASROCK_MOBO;
  readonly specifications: {
    readonly socket: CPUSocket;
    readonly formFactor: MotherboardFormFactor;
    readonly chipset: string;
    readonly memorySlots: number;
    readonly maxMemory: number;
    readonly memoryType: MemoryType[];
    readonly memorySpeed: number[];
    readonly expansionSlots: {
      readonly pciex16: number;
      readonly pciex8: number;
      readonly pciex4: number;
      readonly pciex1: number;
      readonly m2Slots: number;
    };
    readonly storageConnectors: {
      readonly sata3: number;
      readonly sata2: number;
      readonly m2_2280: number;
      readonly m2_2242: number;
    };
    readonly rearIO: readonly string[];
    readonly networking: {
      readonly ethernet: string;
      readonly wifi?: string;
      readonly bluetooth?: string;
    };
    readonly audio: {
      readonly codec: string;
      readonly channels: string;
      readonly impedanceSupport?: number;
    };
    readonly rgb: boolean;
    readonly overclockingSupport: boolean;
    readonly multiGpuSupport?: readonly string[];
  };
  readonly features: {
    readonly bios: string;
    readonly biosFeatures: readonly string[];
    readonly cooling: readonly string[];
    readonly builtin: readonly string[];
    readonly debugLed?: boolean;
    readonly clearCmos?: boolean;
  };
  readonly compatibility: {
    readonly cpus: readonly string[];
    readonly ramKits: readonly string[];
    readonly gpus: readonly string[];
  };
}

/**
 * RAM Product specifications
 * Especificaciones de producto RAM
 * 
 * @interface RAMProduct
 * @extends BaseProduct
 */
export interface RAMProduct extends BaseProduct {
  readonly category: ProductCategory.RAM;
  readonly brand: Brand.CORSAIR_RAM | Brand.CRUCIAL_RAM | Brand.GSKILL_RAM | Brand.KINGSTON_RAM | Brand.TEAMGROUP_RAM;
  readonly specifications: {
    readonly type: MemoryType;
    readonly capacity: number;
    readonly totalCapacity: number;
    readonly speed: number;
    readonly latency: {
      readonly cl: number;
      readonly trcd: number;
      readonly trp: number;
      readonly tras: number;
    };
    readonly voltage: number;
    readonly modules: number;
    readonly formFactor: 'DIMM' | 'SO-DIMM';
    readonly heatspreader: boolean;
    readonly rgb: boolean;
    readonly ecc: boolean;
    readonly xmpProfile?: string;
    readonly docp?: string;
  };
  readonly performance: {
    readonly benchmarks: readonly Benchmark[];
    readonly overclockingPotential: 'low' | 'medium' | 'high';
    readonly recommendedFor: readonly string[];
  };
}

/**
 * Storage Product specifications
 * Especificaciones de producto Almacenamiento
 * 
 * @interface StorageProduct
 * @extends BaseProduct
 */
export interface StorageProduct extends BaseProduct {
  readonly category: ProductCategory.STORAGE;
  readonly brand: Brand.SAMSUNG_STORAGE | Brand.WD_STORAGE | Brand.SEAGATE_STORAGE | Brand.CRUCIAL_STORAGE;
  readonly specifications: {
    readonly type: 'SSD' | 'HDD';
    readonly interface: StorageInterface;
    readonly capacity: number;
    readonly formFactor: 'M.2 2280' | 'M.2 2242' | '2.5"' | '3.5"';
    readonly controller: string;
    readonly nandType: string;
    readonly dram: boolean;
    readonly slc: boolean;
    readonly readSpeed: number;
    readonly writeSpeed: number;
    readonly iops: {
      readonly read: number;
      readonly write: number;
    };
    readonly tbw: number;
    readonly mtbf: number;
    readonly encryption?: string;
  };
  readonly performance: {
    readonly benchmarks: readonly Benchmark[];
    readonly realWorldTests: readonly {
      readonly test: string;
      readonly result: number;
      readonly unit: string;
    }[];
    readonly gameLoadingTimes?: readonly {
      readonly game: string;
      readonly loadTime: number;
    }[];
  };
}

/**
 * PSU Product specifications
 * Especificaciones de producto PSU
 * 
 * @interface PSUProduct
 * @extends BaseProduct
 */
export interface PSUProduct extends BaseProduct {
  readonly category: ProductCategory.PSU;
  readonly brand: Brand.SEASONIC_PSU | Brand.EVGA_PSU | Brand.CORSAIR_PSU | Brand.COOLERMASTER_PSU;
  readonly specifications: {
    readonly wattage: number;
    readonly efficiency: PSUEfficiency;
    readonly modular: 'Non-Modular' | 'Semi-Modular' | 'Fully Modular';
    readonly formFactor: 'ATX' | 'SFX' | 'SFX-L';
    readonly connectors: {
      readonly motherboard: string;
      readonly cpu: readonly string[];
      readonly pcie: readonly string[];
      readonly sata: number;
      readonly molex: number;
      readonly floppy?: number;
    };
    readonly protections: readonly string[];
    readonly fanSize: number;
    readonly fanBearing: string;
    readonly zeroFanMode?: boolean;
    readonly cables: {
      readonly sleeved: boolean;
      readonly length: Record<string, number>;
    };
  };
  readonly performance: {
    readonly efficiencyAt20: number;
    readonly efficiencyAt50: number;
    readonly efficiencyAt100: number;
    readonly ripple: number;
    readonly regulation: number;
    readonly holdupTime: number;
    readonly noiseLevel?: number;
  };
  readonly warranty: {
    readonly years: number;
    readonly type: 'Manufacturer' | 'Retailer' | 'Extended';
    readonly coverage: string;
  };
}

/**
 * Cooling Product specifications
 * Especificaciones de producto Refrigeración
 * 
 * @interface CoolingProduct
 * @extends BaseProduct
 */
export interface CoolingProduct extends BaseProduct {
  readonly category: ProductCategory.COOLING;
  readonly brand: Brand.NOCTUA_COOLING | Brand.BEQUIET_COOLING | Brand.ARCTIC_COOLING | Brand.CORSAIR_COOLING | Brand.COOLERMASTER_COOLING;
  readonly specifications: {
    readonly type: 'Air Cooler' | 'AIO Liquid' | 'Custom Loop' | 'Case Fan';
    readonly socketCompatibility: readonly CPUSocket[];
    readonly dimensions: {
      readonly height: number;
      readonly radiatorSize?: number;
      readonly fanSize: number;
      readonly thickness?: number;
    };
    readonly performance: {
      readonly tdpRating: number;
      readonly airflow: number;
      readonly staticPressure: number;
      readonly noiseLevel: {
        readonly min: number;
        readonly max: number;
      };
      readonly fanSpeed: {
        readonly min: number;
        readonly max: number;
      };
    };
    readonly features: {
      readonly pwmControl: boolean;
      readonly rgb: boolean;
      readonly bearingType: string;
      readonly pumpSpeed?: number;
    };
  };
}

/**
 * Monitor Product specifications
 * Especificaciones de producto Monitor
 * 
 * @interface MonitorProduct
 * @extends BaseProduct
 */
export interface MonitorProduct extends BaseProduct {
  readonly category: ProductCategory.MONITOR;
  readonly brand: Brand.LG_MONITOR | Brand.DELL_MONITOR | Brand.SAMSUNG_MONITOR | Brand.ACER_MONITOR | Brand.BENQ_MONITOR | Brand.ASUS_MONITOR;
  readonly specifications: {
    readonly screenSize: number;
    readonly resolution: MonitorResolution;
    readonly aspectRatio: string;
    readonly panelType: 'IPS' | 'VA' | 'TN' | 'OLED' | 'QD-OLED';
    readonly refreshRate: number[];
    readonly responseTime: number;
    readonly brightness: number;
    readonly contrast: string;
    readonly colorGamut: {
      readonly srgb: number;
      readonly adobergb: number;
      readonly dciP3: number;
      readonly rec2020?: number;
    };
    readonly hdr: {
      readonly supported: boolean;
      readonly standards: readonly string[];
      readonly peakBrightness?: number;
    };
    readonly connectivity: {
      readonly displayport: string[];
      readonly hdmi: string[];
      readonly usbc: boolean;
      readonly other: readonly string[];
    };
    readonly features: {
      readonly gsync: boolean;
      readonly freesync: boolean;
      readonly curvature: string;
      readonly pivotable: boolean;
      readonly heightAdjustable: boolean;
      readonly vesa: string;
      readonly builtInSpeakers?: boolean;
      readonly usbHub?: boolean;
    };
  };
  readonly performance: {
    readonly calibration: {
      readonly deltaE: number;
      readonly uniformity: number;
    };
    readonly inputLag: number;
    readonly powerConsumption: {
      readonly typical: number;
      readonly max: number;
      readonly standby: number;
    };
  };
}

/**
 * Keyboard Product specifications
 * Especificaciones de producto Teclado
 * 
 * @interface KeyboardProduct
 * @extends BaseProduct
 */
export interface KeyboardProduct extends BaseProduct {
  readonly category: ProductCategory.KEYBOARD;
  readonly brand: Brand.LOGITECH_KEYBOARD | Brand.RAZER_KEYBOARD | Brand.CORSAIR_KEYBOARD | Brand.STEELSERIES_KEYBOARD | Brand.KEYCHRON_KEYBOARD;
  readonly specifications: {
    readonly type: KeyboardType;
    readonly layout: KeyboardLayout;
    readonly size: 'Full-Size' | 'TKL' | '75%' | '65%' | '60%';
    readonly switches: {
      readonly brand: string;
      readonly type: string;
      readonly actuationForce: number;
      readonly travelDistance: number;
      readonly hotswappable: boolean;
    };
    readonly keycaps: {
      readonly material: string;
      readonly profile: string;
      readonly printing: string;
    };
    readonly connectivity: {
      readonly wired: boolean;
      readonly wireless: boolean;
      readonly bluetooth: boolean;
      readonly dongle: boolean;
    };
    readonly features: {
      readonly rgb: boolean;
      readonly macro: boolean;
      readonly mediaKeys: boolean;
      readonly nkeyRollover: boolean;
      readonly antiGhosting: boolean;
    };
    readonly battery?: {
      readonly capacity: number;
      readonly life: number;
      readonly chargingTime: number;
    };
  };
  readonly performance: {
    readonly polling: number;
    readonly latency: number;
    readonly durability: number;
  };
}

/**
 * Mouse Product specifications
 * Especificaciones de producto Ratón
 * 
 * @interface MouseProduct
 * @extends BaseProduct
 */
export interface MouseProduct extends BaseProduct {
  readonly category: ProductCategory.MOUSE;
  readonly brand: Brand.LOGITECH_MOUSE | Brand.RAZER_MOUSE | Brand.CORSAIR_MOUSE | Brand.STEELSERIES_MOUSE;
  readonly specifications: {
    readonly type: 'Gaming' | 'Office' | 'Ergonomic' | 'Vertical';
    readonly sensor: {
      readonly type: 'Optical' | 'Laser';
      readonly model: string;
      readonly dpi: {
        readonly min: number;
        readonly max: number;
        readonly steps: number[];
      };
      readonly ips: number;
      readonly acceleration: number;
    };
    readonly buttons: {
      readonly total: number;
      readonly programmable: number;
      readonly sideButtons: number;
    };
    readonly connectivity: {
      readonly wired: boolean;
      readonly wireless: boolean;
      readonly bluetooth: boolean;
      readonly dongle: boolean;
    };
    readonly ergonomics: {
      readonly handedness: 'Right' | 'Left' | 'Ambidextrous';
      readonly grip: readonly string[];
      readonly size: 'Small' | 'Medium' | 'Large';
    };
    readonly features: {
      readonly rgb: boolean;
      readonly profiles: number;
      readonly weights: boolean;
      readonly scroll: string;
    };
    readonly battery?: {
      readonly capacity: number;
      readonly life: number;
      readonly chargingTime: number;
      readonly chargingMethod: string;
    };
  };
  readonly performance: {
    readonly polling: number;
    readonly responseTime: number;
    readonly clickLatency: number;
    readonly durability: number;
  };
}

/**
 * Smartphone Product specifications
 * Especificaciones de producto Smartphone
 * 
 * @interface SmartphoneProduct
 * @extends BaseProduct
 */
export interface SmartphoneProduct extends BaseProduct {
  readonly category: ProductCategory.SMARTPHONE;
  readonly brand: Brand.APPLE_MOBILE | Brand.SAMSUNG_MOBILE | Brand.GOOGLE_MOBILE | Brand.ONEPLUS_MOBILE;
  readonly specifications: {
    readonly os: string;
    readonly chipset: string;
    readonly cpu: string;
    readonly gpu: string;
    readonly ram: number;
    readonly storage: number[];
    readonly display: {
      readonly size: number;
      readonly resolution: string;
      readonly technology: string;
      readonly refreshRate: number;
      readonly brightness: number;
    };
    readonly camera: {
      readonly main: {
        readonly megapixels: number;
        readonly aperture: string;
        readonly features: readonly string[];
      };
      readonly ultrawide?: {
        readonly megapixels: number;
        readonly aperture: string;
      };
      readonly telephoto?: {
        readonly megapixels: number;
        readonly aperture: string;
        readonly zoom: number;
      };
      readonly front: {
        readonly megapixels: number;
        readonly aperture: string;
      };
    };
    readonly battery: {
      readonly capacity: number;
      readonly chargingSpeed: number;
      readonly wirelessCharging?: number;
    };
    readonly connectivity: readonly string[];
    readonly waterResistance?: string;
    readonly colors: readonly string[];
  };
  readonly performance: {
    readonly benchmarks: readonly Benchmark[];
    readonly batteryLife: {
      readonly video: number;
      readonly web: number;
    };
  };
}

/**
 * Tablet Product specifications
 * Especificaciones de producto Tablet
 * 
 * @interface TabletProduct
 * @extends BaseProduct
 */
export interface TabletProduct extends BaseProduct {
  readonly category: ProductCategory.TABLET;
  readonly brand: Brand.APPLE_TABLET | Brand.SAMSUNG_TABLET | Brand.GOOGLE_TABLET;
  readonly specifications: {
    readonly os: string;
    readonly chipset: string;
    readonly cpu: string;
    readonly gpu: string;
    readonly ram: number[];
    readonly storage: number[];
    readonly display: {
      readonly size: number;
      readonly resolution: string;
      readonly technology: string;
      readonly refreshRate: number;
      readonly brightness: number;
      readonly colorAccuracy: string;
    };
    readonly camera: {
      readonly rear: {
        readonly megapixels: number;
        readonly aperture: string;
        readonly features: readonly string[];
      };
      readonly front: {
        readonly megapixels: number;
        readonly aperture: string;
      };
    };
    readonly battery: {
      readonly capacity: number;
      readonly chargingSpeed: number;
      readonly wirelessCharging?: number;
    };
    readonly connectivity: readonly string[];
    readonly accessories: {
      readonly stylusSupport: boolean;
      readonly keyboardSupport: boolean;
      readonly standSupport: boolean;
    };
    readonly colors: readonly string[];
  };
  readonly performance: {
    readonly benchmarks: readonly Benchmark[];
    readonly batteryLife: {
      readonly video: number;
      readonly web: number;
      readonly standby: number;
    };
  };
}

/**
 * SmartWatch Product specifications
 * Especificaciones de producto SmartWatch
 * 
 * @interface SmartWatchProduct
 * @extends BaseProduct
 */
export interface SmartWatchProduct extends BaseProduct {
  readonly category: ProductCategory.SMARTWATCH;
  readonly brand: Brand.APPLE_WATCH | Brand.SAMSUNG_WATCH | Brand.GARMIN_WATCH;
  readonly specifications: {
    readonly os: string;
    readonly compatibility: readonly string[];
    readonly display: {
      readonly size: number;
      readonly resolution: string;
      readonly technology: string;
      readonly brightness: number;
      readonly alwaysOn: boolean;
    };
    readonly sensors: readonly string[];
    readonly healthFeatures: readonly string[];
    readonly connectivity: readonly string[];
    readonly battery: {
      readonly life: number;
      readonly chargingTime: number;
      readonly chargingMethod: string;
    };
    readonly materials: {
      readonly case: readonly string[];
      readonly band: readonly string[];
    };
    readonly waterResistance: string;
    readonly storage?: number;
    readonly gps: boolean;
    readonly cellular?: boolean;
  };
}

/**
 * Headphones Product specifications
 * Especificaciones de producto Auriculares
 * 
 * @interface HeadphonesProduct
 * @extends BaseProduct
 */
export interface HeadphonesProduct extends BaseProduct {
  readonly category: ProductCategory.HEADPHONES;
  readonly brand: Brand.APPLE_HEADPHONES | Brand.SONY_HEADPHONES | Brand.BOSE_HEADPHONES | Brand.SENNHEISER_HEADPHONES;
  readonly specifications: {
    readonly type: 'over-ear' | 'on-ear' | 'in-ear' | 'true-wireless';
    readonly drivers: {
      readonly size: number;
      readonly type: string;
    };
    readonly frequencyResponse: string;
    readonly impedance: number;
    readonly sensitivity: number;
    readonly connectivity: readonly string[];
    readonly bluetooth?: {
      readonly version: string;
      readonly codecs: readonly string[];
      readonly range: number;
    };
    readonly anc: boolean;
    readonly battery?: {
      readonly playback: number;
      readonly talk?: number;
      readonly charging: number;
      readonly quickCharge?: string;
    };
    readonly controls: readonly string[];
    readonly colors: readonly string[];
  };
  readonly performance: {
    readonly audioQuality: number;
    readonly ancEffectiveness?: number;
    readonly microphoneQuality?: number;
    readonly comfort: number;
  };
}

// =============================================================================
// UNION TYPES AND TYPE GUARDS | TIPOS DE UNIÓN Y TYPE GUARDS
// =============================================================================

/**
 * Union type for all product interfaces
 * Tipo de unión para todas las interfaces de productos
 * 
 * @type Product
 */
export type Product =
  | CPUProduct
  | GPUProduct
  | MotherboardProduct
  | RAMProduct
  | StorageProduct
  | PSUProduct
  | CoolingProduct
  | MonitorProduct
  | KeyboardProduct
  | MouseProduct
  | SmartphoneProduct
  | TabletProduct
  | SmartWatchProduct
  | HeadphonesProduct;

// Type Guards for runtime type checking | Type Guards para verificación de tipos en tiempo de ejecución

export function isCPUProduct(product: Product): product is CPUProduct {
  return product.category === ProductCategory.CPU;
}

export function isGPUProduct(product: Product): product is GPUProduct {
  return product.category === ProductCategory.GPU;
}

export function isMotherboardProduct(product: Product): product is MotherboardProduct {
  return product.category === ProductCategory.MOTHERBOARD;
}

export function isRAMProduct(product: Product): product is RAMProduct {
  return product.category === ProductCategory.RAM;
}

export function isStorageProduct(product: Product): product is StorageProduct {
  return product.category === ProductCategory.STORAGE;
}

export function isPSUProduct(product: Product): product is PSUProduct {
  return product.category === ProductCategory.PSU;
}

export function isCoolingProduct(product: Product): product is CoolingProduct {
  return product.category === ProductCategory.COOLING;
}

export function isMonitorProduct(product: Product): product is MonitorProduct {
  return product.category === ProductCategory.MONITOR;
}

export function isKeyboardProduct(product: Product): product is KeyboardProduct {
  return product.category === ProductCategory.KEYBOARD;
}

export function isMouseProduct(product: Product): product is MouseProduct {
  return product.category === ProductCategory.MOUSE;
}

export function isSmartphoneProduct(product: Product): product is SmartphoneProduct {
  return product.category === ProductCategory.SMARTPHONE;
}

export function isTabletProduct(product: Product): product is TabletProduct {
  return product.category === ProductCategory.TABLET;
}

export function isSmartWatchProduct(product: Product): product is SmartWatchProduct {
  return product.category === ProductCategory.SMARTWATCH;
}

export function isHeadphonesProduct(product: Product): product is HeadphonesProduct {
  return product.category === ProductCategory.HEADPHONES;
}
