export enum ProductCategory {
  // === COMPONENTES DE PC ===
  CPU = 'cpu',
  GPU = 'gpu',
  MOTHERBOARD = 'motherboard',
  RAM = 'ram',
  STORAGE = 'storage',
  PSU = 'psu',
  COOLING = 'cooling',
  CASE = 'case',

  // === PERIFÉRICOS DE PC ===
  MONITOR = 'monitor',
  KEYBOARD = 'keyboard',
  MOUSE = 'mouse',
  HEADPHONES = 'headphones',
  WEBCAM = 'webcam',
  SPEAKERS = 'speakers',
  MICROPHONE = 'microphone',

  // === DISPOSITIVOS MÓVILES ===
  SMARTPHONE = 'smartphone',
  TABLET = 'tablet',
  SMARTWATCH = 'smartwatch',

  // === ACCESORIOS Y OTROS ===
  ACCESSORIES = 'accessories',
  CABLES = 'cables',
  ADAPTERS = 'adapters',
}

export enum Brand {
  // === CPU ===
  INTEL_CPU = 'Intel',
  AMD_CPU = 'AMD',

  // === GPU ===
  NVIDIA_GPU = 'NVIDIA',
  AMD_GPU = 'AMD',
  INTEL_GPU = 'Intel',

  // === MOTHERBOARD ===
  ASUS_MOBO = 'ASUS',
  MSI_MOBO = 'MSI',
  GIGABYTE_MOBO = 'Gigabyte',
  ASROCK_MOBO = 'ASRock',

  // === RAM ===
  CORSAIR_RAM = 'Corsair',
  CRUCIAL_RAM = 'Crucial',
  GSKILL_RAM = 'G.Skill',
  KINGSTON_RAM = 'Kingston',
  TEAMGROUP_RAM = 'Team Group',

  // === STORAGE ===
  SAMSUNG_STORAGE = 'Samsung',
  WD_STORAGE = 'Western Digital',
  SEAGATE_STORAGE = 'Seagate',

  // === PSU ===
  SEASONIC_PSU = 'Seasonic',
  EVGA_PSU = 'EVGA',
  COOLERMASTER_PSU = 'Cooler Master',
  CORSAIR_PSU = 'Corsair',

  // === COOLING ===
  NOCTUA_COOLING = 'Noctua',
  BEQUIET_COOLING = 'be quiet!',
  AIO_COOLING = 'Arctic',
  CORSAIR_COOLING = 'Corsair',
  COOLERMASTER_COOLING = 'Cooler Master',

  // === CASE ===
  FRACTALDESIGN_CASE = 'Fractal Design',
  LIANLI_CASE = 'Lian Li',
  PHANTEKS_CASE = 'Phanteks',

  // === MONITOR ===
  LG_MONITOR = 'LG',
  DELL_MONITOR = 'Dell',
  ACER_MONITOR = 'Acer',
  BENQ_MONITOR = 'BenQ',
  SAMSUNG_MONITOR = 'Samsung',

  // === PERIFÉRICOS ===
  LOGITECH_PERIPHERALS = 'Logitech',
  RAZER_PERIPHERALS = 'Razer',
  STEELSERIES_PERIPHERALS = 'SteelSeries',

  // === MOBILE ===
  APPLE_MOBILE = 'Apple',
  GOOGLE_MOBILE = 'Google',
  ONEPLUS_MOBILE = 'OnePlus',
  SAMSUNG_MOBILE = 'Samsung',

  // === SMARTWATCH ===
  APPLE_WATCH = 'Apple',
  SAMSUNG_WATCH = 'Samsung',
  GARMIN_WATCH = 'Garmin',

  // === TABLET ===
  APPLE_TABLET = 'Apple',
  SAMSUNG_TABLET = 'Samsung',
  GOOGLE_TABLET = 'Google',

  // === HEADPHONES ===
  APPLE_HEADPHONES = 'Apple',
  SONY_HEADPHONES = 'Sony',
  BOSE_HEADPHONES = 'Bose',
  SENNHEISER_HEADPHONES = 'Sennheiser',

  // === KEYBOARD ===
  LOGITECH_KEYBOARD = 'Logitech',
  RAZER_KEYBOARD = 'Razer',
  CORSAIR_KEYBOARD = 'Corsair',
  STEELSERIES_KEYBOARD = 'SteelSeries',

  // === MOUSE ===
  LOGITECH_MOUSE = 'Logitech',
  RAZER_MOUSE = 'Razer',
  CORSAIR_MOUSE = 'Corsair',
  STEELSERIES_MOUSE = 'SteelSeries',

  // === AUDIO ===
  SONY_AUDIO = 'Sony',
  BOSE_AUDIO = 'Bose',
  SENNHEISER_AUDIO = 'Sennheiser',
  AUDIOTECHNICA_AUDIO = 'Audio-Technica',
}

// === ENUMS ESPECÍFICOS POR CATEGORÍA ===

export enum CPUSocket {
  // Intel
  LGA1700 = 'LGA 1700',
  LGA1200 = 'LGA 1200',
  LGA1151 = 'LGA 1151',
  LGA2066 = 'LGA 2066',
  // AMD
  AM5 = 'AM5',
  AM4 = 'AM4',
  sTRX40 = 'sTRX40',
  TRX50 = 'TRX50',
}

export enum MotherboardFormFactor {
  EATX = 'E-ATX',
  ATX = 'ATX',
  MICRO_ATX = 'Micro-ATX',
  MINI_ITX = 'Mini-ITX',
}

export enum MemoryType {
  DDR5 = 'DDR5',
  DDR4 = 'DDR4',
  DDR3 = 'DDR3',
}

export enum StorageInterface {
  NVME_PCIE5 = 'NVMe PCIe 5.0',
  NVME_PCIE4 = 'NVMe PCIe 4.0',
  NVME_PCIE3 = 'NVMe PCIe 3.0',
  SATA3 = 'SATA III',
  SATA2 = 'SATA II',
}

export enum PSUEfficiency {
  TITANIUM = '80+ Titanium',
  PLATINUM = '80+ Platinum',
  GOLD = '80+ Gold',
  SILVER = '80+ Silver',
  BRONZE = '80+ Bronze',
  STANDARD = '80+ Standard',
}

export enum MonitorResolution {
  FHD = '1920x1080',
  QHD = '2560x1440',
  UHD_4K = '3840x2160',
  ULTRAWIDE_QHD = '3440x1440',
  ULTRAWIDE_4K = '3840x1600',
}

export enum KeyboardLayout {
  QWERTY_US = 'QWERTY US',
  QWERTY_ES = 'QWERTY ES',
  AZERTY = 'AZERTY',
  QWERTZ = 'QWERTZ',
}

export enum KeyboardType {
  MECHANICAL = 'Mechanical',
  MEMBRANE = 'Membrane',
  OPTICAL = 'Optical',
  HYBRID = 'Hybrid',
}

// ================================
// INTERFACES COMUNES
// ================================

export interface Price {
  readonly msrp: number;
  readonly current: number;
  readonly currency: 'EUR' | 'USD' | 'MXN';
  readonly lastUpdated: string;
  readonly retailLinks?: readonly RetailLink[];
}

export interface RetailLink {
  readonly retailer: string;
  readonly url: string;
  readonly price: number;
  readonly inStock: boolean;
}

export interface ProductImage {
  readonly thumbnail: string;
  readonly gallery: readonly string[];
  readonly alt: string;
}

export interface ProductRating {
  readonly expert: number;
  readonly users: number;
  readonly totalReviews: number;
  readonly breakdown: {
    readonly performance: number;
    readonly value: number;
    readonly quality: number;
    readonly features: number;
  };
}

export interface Benchmark {
  readonly name: string;
  readonly score: number;
  readonly unit: string;
  readonly higherIsBetter: boolean;
}

// ================================
// PRODUCTO BASE
// ================================

export interface BaseProduct {
  readonly id: string;
  readonly name: string;
  readonly brand: Brand;
  readonly model: string;
  readonly category: ProductCategory;
  readonly price: Price;
  readonly availability: {
    readonly inStock: boolean;
    readonly releaseDate: string;
    readonly discontinuedDate?: string;
    readonly stockLevel: 'high' | 'medium' | 'low' | 'out-of-stock';
  };
  readonly images: ProductImage;
  readonly rating: ProductRating;
  readonly description: string;
  readonly keyFeatures: readonly string[];
  readonly tags: readonly string[];
  readonly weight?: number; // gramos
  readonly dimensions?: {
    readonly length: number;
    readonly width: number;
    readonly height: number;
  };
}

// ================================
// INTERFACES DE PRODUCTOS ACTUALIZADAS
// ================================

export interface CPUProduct extends BaseProduct {
  readonly category: ProductCategory.CPU;
  readonly brand: Brand.INTEL_CPU | Brand.AMD_CPU; // ✅ Corregido
  readonly specifications: {
    readonly architecture: string;
    readonly socket: CPUSocket;
    readonly process: string;
    readonly cores: number;
    readonly threads: number;
    readonly baseClock: number; // GHz
    readonly boostClock: number; // GHz
    readonly cache: {
      readonly l1: string;
      readonly l2: string;
      readonly l3: string;
    };
    readonly tdp: number; // Watts
    readonly integratedGraphics?: string;
    readonly memorySupport: {
      readonly type: MemoryType[];
      readonly maxCapacity: number; // GB
      readonly maxSpeed: number; // MHz
    };
    readonly pcieLanes: number;
    readonly unlocked: boolean;
  };
  readonly performance: {
    readonly benchmarks: readonly Benchmark[];
    readonly thermals: {
      readonly tdp: number;
      readonly maxTemp: number;
    };
    readonly powerConsumption: {
      readonly idle: number;
      readonly load: number;
    };
  };
  readonly compatibility: {
    readonly motherboards: readonly string[];
    readonly coolers: readonly string[];
  };
}

export interface GPUProduct extends BaseProduct {
  readonly category: ProductCategory.GPU;
  readonly brand: Brand.NVIDIA_GPU | Brand.AMD_GPU | Brand.INTEL_GPU; // ✅ Corregido
  readonly specifications: {
    readonly architecture: string;
    readonly process: string;
    readonly baseClock: number; // MHz
    readonly boostClock: number; // MHz
    readonly memorySize: number; // GB
    readonly memoryType: string;
    readonly memoryBus: number; // bits
    readonly memoryBandwidth: number; // GB/s
    readonly cudaCores?: number; // NVIDIA
    readonly rtCores?: number; // NVIDIA
    readonly tensorCores?: number; // NVIDIA
    readonly computeUnits?: number; // AMD
    readonly rayAccelerators?: number; // AMD
    readonly tdp: number;
    readonly pciInterface: string;
    readonly outputs: readonly string[];
    readonly powerConnectors: readonly string[];
    readonly length: number; // mm
    readonly slots: number;
  };
  readonly performance: {
    readonly benchmarks: readonly Benchmark[];
    readonly thermals: {
      readonly tdp: number;
      readonly maxTemp: number;
    };
    readonly gamePerformance: readonly {
      readonly game: string;
      readonly resolution: string;
      readonly settings: string;
      readonly fps: number;
    }[];
  };
  readonly features: {
    readonly dlss?: string; // NVIDIA
    readonly fsr?: string; // AMD
    readonly rayTracing: boolean;
    readonly nvenc?: boolean; // NVIDIA
    readonly avEncode?: boolean; // AMD
  };
}

export interface RAMProduct extends BaseProduct {
  readonly category: ProductCategory.RAM;
  readonly brand: Brand.CORSAIR_RAM | Brand.CRUCIAL_RAM | Brand.GSKILL_RAM | Brand.KINGSTON_RAM | Brand.TEAMGROUP_RAM; // ✅ Corregido
  readonly specifications: {
    readonly type: MemoryType;
    readonly capacity: number; // GB por módulo
    readonly speed: number; // MHz
    readonly latency: {
      readonly cl: number;
      readonly trcd: number;
      readonly trp: number;
      readonly tras: number;
    };
    readonly voltage: number;
    readonly modules: number; // Kit de 1x, 2x, 4x
    readonly formFactor: 'DIMM' | 'SO-DIMM';
    readonly heatspreader: boolean;
    readonly rgb: boolean;
    readonly ecc: boolean;
  };
  readonly performance: {
    readonly benchmarks: readonly Benchmark[];
    readonly overclockingPotential: 'low' | 'medium' | 'high';
  };
}

export interface StorageProduct extends BaseProduct {
  readonly category: ProductCategory.STORAGE;
  readonly brand: Brand.SAMSUNG_STORAGE | Brand.WD_STORAGE | Brand.SEAGATE_STORAGE; // ✅ Corregido
  readonly specifications: {
    readonly type: 'SSD';
    readonly interface: StorageInterface;
    readonly capacity: number; // GB
    readonly formFactor: 'M.2 2280' | '2.5"';
    readonly controller: string;
    readonly nandType: string;
    readonly dram: boolean;
    readonly slc: boolean;
    readonly readSpeed: number; // MB/s
    readonly writeSpeed: number; // MB/s
    readonly iops: {
      readonly read: number;
      readonly write: number;
    };
    readonly tbw: number; // Terabytes Written
    readonly mtbf: number; // hours
  };
  readonly performance: {
    readonly benchmarks: readonly Benchmark[];
    readonly realWorldTests: readonly {
      readonly test: string;
      readonly result: number;
      readonly unit: string;
    }[];
  };
}

export interface SmartphoneProduct extends BaseProduct {
  readonly category: ProductCategory.SMARTPHONE;
  readonly brand: Brand.APPLE_MOBILE | Brand.SAMSUNG_MOBILE | Brand.GOOGLE_MOBILE | Brand.ONEPLUS_MOBILE; // ✅ Corregido y expandido
  readonly specifications: {
    readonly os: string;
    readonly chipset: string;
    readonly cpu: string;
    readonly gpu: string;
    readonly ram: number; // GB
    readonly storage: number[]; // GB variants
    readonly display: {
      readonly size: number; // inches
      readonly resolution: string;
      readonly technology: string;
      readonly refreshRate: number; // Hz
      readonly brightness: number; // nits
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
      readonly capacity: number; // mAh
      readonly chargingSpeed: number; // W
      readonly wirelessCharging?: number; // W
    };
    readonly connectivity: readonly string[];
    readonly waterResistance?: string;
    readonly colors: readonly string[];
  };
  readonly performance: {
    readonly benchmarks: readonly Benchmark[];
    readonly batteryLife: {
      readonly video: number; // hours
      readonly web: number; // hours
    };
  };
}

export interface SmartWatchProduct extends BaseProduct {
  readonly category: ProductCategory.SMARTWATCH;
  readonly brand: Brand.APPLE_WATCH | Brand.SAMSUNG_WATCH | Brand.GARMIN_WATCH; // ✅ Corregido
  readonly specifications: {
    readonly os: string;
    readonly compatibility: readonly string[];
    readonly display: {
      readonly size: number; // mm
      readonly resolution: string;
      readonly technology: string;
      readonly brightness: number;
      readonly alwaysOn: boolean;
    };
    readonly sensors: readonly string[];
    readonly healthFeatures: readonly string[];
    readonly connectivity: readonly string[];
    readonly battery: {
      readonly life: number; // hours
      readonly chargingTime: number; // hours
      readonly chargingMethod: string;
    };
    readonly materials: {
      readonly case: readonly string[];
      readonly band: readonly string[];
    };
    readonly waterResistance: string;
    readonly storage?: number; // GB
    readonly gps: boolean;
    readonly cellular?: boolean;
  };
}

export interface HeadphonesProduct extends BaseProduct {
  readonly category: ProductCategory.HEADPHONES;
  readonly brand: Brand.SONY_HEADPHONES | Brand.BOSE_HEADPHONES | Brand.APPLE_HEADPHONES | Brand.SENNHEISER_HEADPHONES; // ✅ Corregido
  readonly specifications: {
    readonly type: 'over-ear' | 'on-ear' | 'in-ear' | 'true-wireless';
    readonly drivers: {
      readonly size: number; // mm
      readonly type: string;
    };
    readonly frequencyResponse: string;
    readonly impedance: number; // ohms
    readonly sensitivity: number; // dB
    readonly connectivity: readonly string[];
    readonly bluetooth?: {
      readonly version: string;
      readonly codecs: readonly string[];
      readonly range: number; // meters
    };
    readonly anc: boolean;
    readonly battery?: {
      readonly playback: number; // hours
      readonly talk?: number; // hours
      readonly charging: number; // hours to full
      readonly quickCharge?: string;
    };
    readonly controls: readonly string[];
    readonly colors: readonly string[];
  };
  readonly performance: {
    readonly audioQuality: number; // 1-10
    readonly ancEffectiveness?: number; // 1-10
    readonly microphoneQuality?: number; // 1-10
    readonly comfort: number; // 1-10
  };
}

// ✅ NUEVAS INTERFACES PARA CATEGORÍAS FALTANTES

export interface MotherboardProduct extends BaseProduct {
  readonly category: ProductCategory.MOTHERBOARD;
  readonly brand: Brand.ASUS_MOBO | Brand.MSI_MOBO | Brand.GIGABYTE_MOBO | Brand.ASROCK_MOBO; // ✅ Corregido
  readonly specifications: {
    readonly socket: CPUSocket;
    readonly formFactor: MotherboardFormFactor;
    readonly chipset: string;
    readonly memorySlots: number;
    readonly maxMemory: number; // GB
    readonly memoryType: MemoryType[];
    readonly memorySpeed: number[]; // MHz supported
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
      readonly ethernet: string; // "Gigabit", "2.5GbE"
      readonly wifi?: string;
      readonly bluetooth?: string;
    };
    readonly audio: {
      readonly codec: string;
      readonly channels: string; // "7.1", "5.1"
    };
    readonly rgb: boolean;
    readonly overclockingSupport: boolean;
  };
  readonly features: {
    readonly bios: string; // "UEFI", "Legacy"
    readonly biosFeatures: readonly string[];
    readonly cooling: readonly string[];
    readonly builtin: readonly string[];
  };
  readonly compatibility: {
    readonly cpus: readonly string[];
    readonly ramKits: readonly string[];
    readonly gpus: readonly string[];
  };
}

export interface PSUProduct extends BaseProduct {
  readonly category: ProductCategory.PSU;
  readonly brand: Brand.SEASONIC_PSU | Brand.EVGA_PSU | Brand.CORSAIR_PSU | Brand.COOLERMASTER_PSU; // ✅ Corregido
  readonly specifications: {
    readonly wattage: number;
    readonly efficiency: PSUEfficiency;
    readonly modular: 'Non-Modular' | 'Semi-Modular' | 'Fully Modular';
    readonly formFactor: 'ATX' | 'SFX' | 'SFX-L';
    readonly connectors: {
      readonly motherboard: string; // "24-pin ATX"
      readonly cpu: readonly string[]; // ["8-pin EPS", "4-pin EPS"]
      readonly pcie: readonly string[]; // ["8-pin PCIe", "6-pin PCIe"]
      readonly sata: number;
      readonly molex: number;
    };
    readonly protections: readonly string[]; // ["OCP", "OVP", "UVP", "SCP", "OTP"]
    readonly fanSize: number; // mm
    readonly fanBearing: string;
    readonly cables: {
      readonly sleeved: boolean;
      readonly length: Record<string, number>; // connector -> length in mm
    };
  };
  readonly performance: {
    readonly efficiencyAt20: number; // %
    readonly efficiencyAt50: number; // %
    readonly efficiencyAt100: number; // %
    readonly ripple: number; // mV
    readonly regulation: number; // %
    readonly holdupTime: number; // ms
  };
  readonly warranty: {
    readonly years: number;
    readonly type: string;
  };
}

// ✅ INTERFACES PARA PERIFÉRICOS NUEVOS

export interface KeyboardProduct extends BaseProduct {
  readonly category: ProductCategory.KEYBOARD;
  readonly brand: Brand.LOGITECH_KEYBOARD | Brand.RAZER_KEYBOARD | Brand.CORSAIR_KEYBOARD | Brand.STEELSERIES_KEYBOARD; // ✅ Corregido
  readonly specifications: {
    readonly type: KeyboardType;
    readonly layout: KeyboardLayout;
    readonly size: 'Full-Size' | 'TKL' | '75%' | '65%' | '60%';
    readonly switches: {
      readonly brand: string;
      readonly type: string;
      readonly actuationForce: number; // gf
      readonly travelDistance: number; // mm
      readonly hotswappable: boolean;
    };
    readonly keycaps: {
      readonly material: string; // "ABS", "PBT"
      readonly profile: string; // "OEM", "Cherry"
      readonly printing: string; // "Laser Etched", "Double Shot"
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
      readonly capacity: number; // mAh
      readonly life: number; // hours
      readonly chargingTime: number; // hours
    };
  };
  readonly performance: {
    readonly polling: number; // Hz
    readonly latency: number; // ms
    readonly durability: number; // keystrokes (millions)
  };
}

export interface MouseProduct extends BaseProduct {
  readonly category: ProductCategory.MOUSE;
  readonly brand: Brand.LOGITECH_MOUSE | Brand.RAZER_MOUSE | Brand.CORSAIR_MOUSE | Brand.STEELSERIES_MOUSE; // ✅ Corregido
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
      readonly ips: number; // inches per second
      readonly acceleration: number; // G
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
      readonly grip: readonly string[]; // ["Palm", "Claw", "Fingertip"]
      readonly size: 'Small' | 'Medium' | 'Large';
    };
    readonly features: {
      readonly rgb: boolean;
      readonly profiles: number;
      readonly weights: boolean;
      readonly scroll: string; // "Tactile", "Free-spin", "Hybrid"
    };
    readonly battery?: {
      readonly capacity: number; // mAh
      readonly life: number; // hours
      readonly chargingTime: number; // hours
      readonly chargingMethod: string; // "USB-C", "Wireless"
    };
  };
  readonly performance: {
    readonly polling: number; // Hz
    readonly responseTime: number; // ms
    readonly clickLatency: number; // ms
    readonly durability: number; // clicks (millions)
  };
}

export interface MonitorProduct extends BaseProduct {
  readonly category: ProductCategory.MONITOR;
  readonly brand: Brand.LG_MONITOR | Brand.DELL_MONITOR | Brand.SAMSUNG_MONITOR | Brand.ACER_MONITOR | Brand.BENQ_MONITOR; // ✅ Corregido
  readonly specifications: {
    readonly screenSize: number; // inches
    readonly resolution: MonitorResolution;
    readonly aspectRatio: string; // "16:9", "21:9", "32:9"
    readonly panelType: 'IPS' | 'VA' | 'TN' | 'OLED' | 'QD-OLED';
    readonly refreshRate: number[]; // Hz - multiple supported rates
    readonly responseTime: number; // ms
    readonly brightness: number; // nits
    readonly contrast: string; // "1000:1", "3000:1"
    readonly colorGamut: {
      readonly srgb: number; // %
      readonly adobergb: number; // %
      readonly dciP3: number; // %
    };
    readonly hdr: {
      readonly supported: boolean;
      readonly standards: readonly string[]; // ["HDR10", "HDR400", "HDR600"]
    };
    readonly connectivity: {
      readonly displayport: string[]; // ["DP 1.4", "DP 2.0"]
      readonly hdmi: string[]; // ["HDMI 2.1", "HDMI 2.0"]
      readonly usbc: boolean;
      readonly other: readonly string[]; // ["DVI-D", "VGA"]
    };
    readonly features: {
      readonly gsync: boolean;
      readonly freesync: boolean;
      readonly curvature: string; // "Flat", "1800R", "1000R"
      readonly pivotable: boolean;
      readonly heightAdjustable: boolean;
      readonly vesa: string; // "100x100", "200x200"
    };
  };
  readonly performance: {
    readonly calibration: {
      readonly deltaE: number;
      readonly uniformity: number;
    };
    readonly inputLag: number; // ms
    readonly powerConsumption: {
      readonly typical: number; // W
      readonly max: number; // W
      readonly standby: number; // W
    };
  };
}

export interface TabletProduct extends BaseProduct {
  readonly category: ProductCategory.TABLET;
  readonly brand: Brand.APPLE_TABLET | Brand.SAMSUNG_TABLET | Brand.GOOGLE_TABLET; // ✅ Corregido
  readonly specifications: {
    readonly os: string;
    readonly chipset: string;
    readonly cpu: string;
    readonly gpu: string;
    readonly ram: number[]; // GB variants
    readonly storage: number[]; // GB variants
    readonly display: {
      readonly size: number; // inches
      readonly resolution: string;
      readonly technology: string; // "LCD", "OLED"
      readonly refreshRate: number; // Hz
      readonly brightness: number; // nits
      readonly colorAccuracy: string; // "P3", "sRGB"
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
      readonly capacity: number; // mAh
      readonly chargingSpeed: number; // W
      readonly wirelessCharging?: number; // W
    };
    readonly connectivity: readonly string[]; // ["Wi-Fi 6", "5G", "Bluetooth 5.2"]
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
      readonly video: number; // hours
      readonly web: number; // hours
      readonly standby: number; // hours
    };
  };
}

export interface CoolingProduct extends BaseProduct {
  readonly category: ProductCategory.COOLING;
  readonly brand: Brand.NOCTUA_COOLING | Brand.BEQUIET_COOLING | Brand.CORSAIR_COOLING | Brand.COOLERMASTER_COOLING; // ✅ Corregido
  readonly specifications: {
    readonly type: 'Air Cooler' | 'AIO Liquid' | 'Custom Loop' | 'Case Fan';
    readonly socketCompatibility: readonly CPUSocket[];
    readonly dimensions: {
      readonly height: number; // mm (for air coolers)
      readonly radiatorSize?: number; // mm (for AIO)
      readonly fanSize: number; // mm
    };
    readonly performance: {
      readonly tdpRating: number; // W
      readonly airflow: number; // CFM
      readonly staticPressure: number; // mmH2O
      readonly noiseLevel: {
        readonly min: number; // dBA
        readonly max: number; // dBA
      };
      readonly fanSpeed: {
        readonly min: number; // RPM
        readonly max: number; // RPM
      };
    };
    readonly features: {
      readonly pwmControl: boolean;
      readonly rgb: boolean;
      readonly bearingType: string; // "SSO2", "FDB", "HydroBearing"
    };
  };
}

// === ACTUALIZAR UNION TYPES ===
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

// === TYPE GUARDS EXPANDIDOS ===
export function isMotherboardProduct(product: Product): product is MotherboardProduct {
  return product.category === ProductCategory.MOTHERBOARD;
}

export function isPSUProduct(product: Product): product is PSUProduct {
  return product.category === ProductCategory.PSU;
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

export function isTabletProduct(product: Product): product is TabletProduct {
  return product.category === ProductCategory.TABLET;
}

export function isCoolingProduct(product: Product): product is CoolingProduct {
  return product.category === ProductCategory.COOLING;
}
