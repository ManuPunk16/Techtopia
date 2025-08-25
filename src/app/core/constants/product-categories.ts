import { ProductCategory, Brand } from '@core/models';

export const PRODUCT_CATEGORIES = {
  // === COMPONENTES PC ===
  [ProductCategory.CPU]: {
    name: 'Procesadores',
    icon: 'cpu',
    group: 'components',
    brands: [Brand.INTEL_CPU, Brand.AMD_CPU], // ✅ Corregido
    filters: ['socket', 'cores', 'threads', 'tdp', 'price'],
    benchmarks: ['Cinebench R23', 'Geekbench 5', 'PassMark CPU']
  },
  [ProductCategory.GPU]: {
    name: 'Tarjetas Gráficas',
    icon: 'gpu',
    group: 'components',
    brands: [Brand.NVIDIA_GPU, Brand.AMD_GPU, Brand.INTEL_GPU], // ✅ Corregido
    filters: ['memory', 'tdp', 'rayTracing', 'price'],
    benchmarks: ['3DMark Time Spy', 'Port Royal', 'Games 1440p']
  },
  [ProductCategory.MOTHERBOARD]: {
    name: 'Placas Base',
    icon: 'motherboard',
    group: 'components',
    brands: [Brand.ASUS_MOBO, Brand.MSI_MOBO, Brand.GIGABYTE_MOBO, Brand.ASROCK_MOBO], // ✅ Corregido
    filters: ['socket', 'formFactor', 'chipset', 'price'],
    benchmarks: ['Feature Score', 'VRM Analysis', 'I/O Score']
  },
  [ProductCategory.RAM]: {
    name: 'Memoria RAM',
    icon: 'memory',
    group: 'components',
    brands: [Brand.CORSAIR_RAM, Brand.CRUCIAL_RAM, Brand.GSKILL_RAM, Brand.KINGSTON_RAM, Brand.TEAMGROUP_RAM], // ✅ Corregido
    filters: ['type', 'capacity', 'speed', 'latency', 'price'],
    benchmarks: ['AIDA64 Memory', 'MaxxMEM2']
  },
  [ProductCategory.STORAGE]: {
    name: 'Almacenamiento',
    icon: 'storage',
    group: 'components',
    brands: [Brand.SAMSUNG_STORAGE, Brand.WD_STORAGE, Brand.SEAGATE_STORAGE], // ✅ Corregido
    filters: ['interface', 'capacity', 'readSpeed', 'writeSpeed', 'price'],
    benchmarks: ['CrystalDiskMark', 'AS SSD', 'ATTO']
  },
  [ProductCategory.PSU]: {
    name: 'Fuentes de Alimentación',
    icon: 'psu',
    group: 'components',
    brands: [Brand.SEASONIC_PSU, Brand.EVGA_PSU, Brand.CORSAIR_PSU, Brand.COOLERMASTER_PSU], // ✅ Corregido
    filters: ['wattage', 'efficiency', 'modular', 'price'],
    benchmarks: ['Efficiency Test', 'Ripple Test', 'Load Regulation']
  },
  [ProductCategory.COOLING]: {
    name: 'Refrigeración',
    icon: 'cooling',
    group: 'components',
    brands: [Brand.NOCTUA_COOLING, Brand.BEQUIET_COOLING, Brand.CORSAIR_COOLING, Brand.COOLERMASTER_COOLING], // ✅ Corregido
    filters: ['type', 'tdpRating', 'noiseLevel', 'price'],
    benchmarks: ['Cooling Performance', 'Noise Level', 'Installation Ease']
  },
  [ProductCategory.CASE]: {
    name: 'Cajas/Chasis',
    icon: 'case',
    group: 'components',
    brands: [Brand.FRACTALDESIGN_CASE, Brand.LIANLI_CASE, Brand.PHANTEKS_CASE], // ✅ Agregado
    filters: ['formFactor', 'size', 'material', 'price'],
    benchmarks: ['Build Quality', 'Airflow', 'Cable Management']
  },

  // === PERIFÉRICOS ===
  [ProductCategory.MONITOR]: {
    name: 'Monitores',
    icon: 'monitor',
    group: 'peripherals',
    brands: [Brand.LG_MONITOR, Brand.DELL_MONITOR, Brand.SAMSUNG_MONITOR, Brand.ACER_MONITOR, Brand.BENQ_MONITOR], // ✅ Corregido
    filters: ['size', 'resolution', 'refreshRate', 'panelType', 'price'],
    benchmarks: ['Color Accuracy', 'Input Lag', 'Response Time']
  },
  [ProductCategory.KEYBOARD]: {
    name: 'Teclados',
    icon: 'keyboard',
    group: 'peripherals',
    brands: [Brand.LOGITECH_KEYBOARD, Brand.RAZER_KEYBOARD, Brand.CORSAIR_KEYBOARD, Brand.STEELSERIES_KEYBOARD], // ✅ Corregido
    filters: ['type', 'layout', 'switches', 'connectivity', 'price'],
    benchmarks: ['Typing Test', 'Latency', 'Build Quality']
  },
  [ProductCategory.MOUSE]: {
    name: 'Ratones',
    icon: 'mouse',
    group: 'peripherals',
    brands: [Brand.LOGITECH_MOUSE, Brand.RAZER_MOUSE, Brand.CORSAIR_MOUSE, Brand.STEELSERIES_MOUSE], // ✅ Corregido
    filters: ['type', 'dpi', 'connectivity', 'ergonomics', 'price'],
    benchmarks: ['Precision Test', 'Click Latency', 'Battery Life']
  },
  [ProductCategory.HEADPHONES]: {
    name: 'Auriculares',
    icon: 'headphones',
    group: 'peripherals',
    brands: [Brand.SONY_HEADPHONES, Brand.BOSE_HEADPHONES, Brand.APPLE_HEADPHONES, Brand.SENNHEISER_HEADPHONES], // ✅ Corregido
    filters: ['type', 'connectivity', 'anc', 'battery', 'price'],
    benchmarks: ['Audio Quality', 'ANC Performance', 'Battery Life']
  },
  [ProductCategory.WEBCAM]: {
    name: 'Cámaras Web',
    icon: 'webcam',
    group: 'peripherals',
    brands: [Brand.LOGITECH_PERIPHERALS, Brand.RAZER_PERIPHERALS], // ✅ Agregado
    filters: ['resolution', 'fps', 'microphone', 'autofocus', 'price'],
    benchmarks: ['Image Quality', 'Low Light Performance', 'Audio Quality']
  },
  [ProductCategory.SPEAKERS]: {
    name: 'Altavoces',
    icon: 'speakers',
    group: 'peripherals',
    brands: [Brand.SONY_AUDIO, Brand.BOSE_AUDIO, Brand.LOGITECH_PERIPHERALS], // ✅ Agregado
    filters: ['power', 'connectivity', 'size', 'price'],
    benchmarks: ['Audio Quality', 'Bass Response', 'Volume Range']
  },
  [ProductCategory.MICROPHONE]: {
    name: 'Micrófonos',
    icon: 'microphone',
    group: 'peripherals',
    brands: [Brand.SONY_AUDIO, Brand.AUDIOTECHNICA_AUDIO, Brand.RAZER_PERIPHERALS], // ✅ Agregado
    filters: ['type', 'connectivity', 'pattern', 'price'],
    benchmarks: ['Audio Quality', 'Noise Rejection', 'Sensitivity']
  },

  // === MOBILE ===
  [ProductCategory.SMARTPHONE]: {
    name: 'Smartphones',
    icon: 'smartphone',
    group: 'mobile',
    brands: [Brand.APPLE_MOBILE, Brand.SAMSUNG_MOBILE, Brand.GOOGLE_MOBILE, Brand.ONEPLUS_MOBILE], // ✅ Corregido
    filters: ['os', 'ram', 'storage', 'camera', 'price'],
    benchmarks: ['Geekbench 5', 'AnTuTu', '3DMark Wild Life']
  },
  [ProductCategory.TABLET]: {
    name: 'Tablets',
    icon: 'tablet',
    group: 'mobile',
    brands: [Brand.APPLE_TABLET, Brand.SAMSUNG_TABLET, Brand.GOOGLE_TABLET], // ✅ Corregido
    filters: ['os', 'size', 'storage', 'stylus', 'price'],
    benchmarks: ['Performance Score', 'Display Quality', 'Battery Life']
  },
  [ProductCategory.SMARTWATCH]: {
    name: 'Smartwatches',
    icon: 'watch',
    group: 'mobile',
    brands: [Brand.APPLE_WATCH, Brand.SAMSUNG_WATCH, Brand.GARMIN_WATCH], // ✅ Corregido
    filters: ['compatibility', 'battery', 'features', 'price'],
    benchmarks: ['Battery Life', 'GPS Accuracy', 'Health Features']
  },

  // === ACCESORIOS ===
  [ProductCategory.ACCESSORIES]: {
    name: 'Accesorios',
    icon: 'accessories',
    group: 'accessories',
    brands: [Brand.LOGITECH_PERIPHERALS, Brand.RAZER_PERIPHERALS, Brand.STEELSERIES_PERIPHERALS], // ✅ Agregado
    filters: ['type', 'compatibility', 'material', 'price'],
    benchmarks: ['Build Quality', 'Functionality', 'Value']
  },
  [ProductCategory.CABLES]: {
    name: 'Cables',
    icon: 'cables',
    group: 'accessories',
    brands: [Brand.SAMSUNG_STORAGE, Brand.WD_STORAGE, Brand.CORSAIR_PSU], // ✅ Agregado (reutilizando marcas apropiadas)
    filters: ['type', 'length', 'speed', 'price'],
    benchmarks: ['Data Speed', 'Build Quality', 'Durability']
  },
  [ProductCategory.ADAPTERS]: {
    name: 'Adaptadores',
    icon: 'adapters',
    group: 'accessories',
    brands: [Brand.APPLE_MOBILE, Brand.SAMSUNG_MOBILE, Brand.LOGITECH_PERIPHERALS], // ✅ Agregado
    filters: ['type', 'compatibility', 'power', 'price'],
    benchmarks: ['Compatibility', 'Power Delivery', 'Build Quality']
  }
} as const;

export const CATEGORY_GROUPS = {
  components: {
    name: 'Componentes PC',
    description: 'Hardware interno para construcción de PC',
    categories: [
      ProductCategory.CPU,
      ProductCategory.GPU,
      ProductCategory.MOTHERBOARD,
      ProductCategory.RAM,
      ProductCategory.STORAGE,
      ProductCategory.PSU,
      ProductCategory.COOLING,
      ProductCategory.CASE // ✅ Agregado
    ]
  },
  peripherals: {
    name: 'Periféricos',
    description: 'Dispositivos externos de entrada y salida',
    categories: [
      ProductCategory.MONITOR,
      ProductCategory.KEYBOARD,
      ProductCategory.MOUSE,
      ProductCategory.HEADPHONES,
      ProductCategory.WEBCAM, // ✅ Agregado
      ProductCategory.SPEAKERS, // ✅ Agregado
      ProductCategory.MICROPHONE // ✅ Agregado
    ]
  },
  mobile: {
    name: 'Dispositivos Móviles',
    description: 'Tecnología portátil y wearables',
    categories: [
      ProductCategory.SMARTPHONE,
      ProductCategory.TABLET,
      ProductCategory.SMARTWATCH
    ]
  },
  accessories: {
    name: 'Accesorios',
    description: 'Complementos y accesorios diversos',
    categories: [
      ProductCategory.ACCESSORIES,
      ProductCategory.CABLES,
      ProductCategory.ADAPTERS
    ]
  }
} as const;

// ✅ MATRIZ DE COMPATIBILIDAD EXPANDIDA
export const COMPATIBILITY_MATRIX = {
  [ProductCategory.CPU]: [
    ProductCategory.MOTHERBOARD, 
    ProductCategory.RAM, 
    ProductCategory.COOLING,
    ProductCategory.PSU // CPU afecta consumo total
  ],
  [ProductCategory.GPU]: [
    ProductCategory.MOTHERBOARD, // Slot PCIe
    ProductCategory.PSU, // Consumo crítico
    ProductCategory.CASE // Tamaño/clearance
  ],
  [ProductCategory.MOTHERBOARD]: [
    ProductCategory.CPU, // Socket
    ProductCategory.RAM, // Slots y velocidades
    ProductCategory.STORAGE, // Conectores M.2/SATA
    ProductCategory.CASE, // Form factor
    ProductCategory.PSU // Conectores
  ],
  [ProductCategory.RAM]: [
    ProductCategory.CPU, // Controlador memoria
    ProductCategory.MOTHERBOARD // Slots y velocidades
  ],
  [ProductCategory.STORAGE]: [
    ProductCategory.MOTHERBOARD, // Conectores
    ProductCategory.PSU // Alimentación SATA
  ],
  [ProductCategory.PSU]: [
    ProductCategory.MOTHERBOARD, // Conectores
    ProductCategory.GPU, // Consumo crítico
    ProductCategory.CPU, // Consumo base
    ProductCategory.CASE // Form factor
  ],
  [ProductCategory.COOLING]: [
    ProductCategory.CPU, // Socket compatibility
    ProductCategory.CASE, // Clearance
    ProductCategory.MOTHERBOARD // Montaje
  ],
  [ProductCategory.CASE]: [
    ProductCategory.MOTHERBOARD, // Form factor
    ProductCategory.GPU, // Longitud máxima
    ProductCategory.COOLING, // Altura CPU cooler
    ProductCategory.PSU // Form factor PSU
  ],
  // Periféricos - Compatibilidad con sistemas
  [ProductCategory.MONITOR]: [ProductCategory.GPU], // Salidas de video
  [ProductCategory.KEYBOARD]: [], // Universal USB
  [ProductCategory.MOUSE]: [], // Universal USB
  [ProductCategory.HEADPHONES]: [], // Universal 3.5mm/USB
  [ProductCategory.WEBCAM]: [], // Universal USB
  [ProductCategory.SPEAKERS]: [], // Universal 3.5mm/USB
  [ProductCategory.MICROPHONE]: [] // Universal 3.5mm/USB
} as const;

// ✅ ESPECIFICACIONES REQUERIDAS POR CATEGORÍA
export const CATEGORY_REQUIRED_SPECS = {
  [ProductCategory.CPU]: [
    'architecture', 'socket', 'cores', 'threads', 'baseClock', 'boostClock', 'tdp'
  ],
  [ProductCategory.GPU]: [
    'architecture', 'memorySize', 'memoryType', 'baseClock', 'boostClock', 'tdp'
  ],
  [ProductCategory.MOTHERBOARD]: [
    'socket', 'formFactor', 'chipset', 'memorySlots', 'maxMemory'
  ],
  [ProductCategory.RAM]: [
    'type', 'capacity', 'speed', 'latency', 'modules'
  ],
  [ProductCategory.STORAGE]: [
    'type', 'interface', 'capacity', 'readSpeed', 'writeSpeed'
  ],
  [ProductCategory.PSU]: [
    'wattage', 'efficiency', 'modular', 'formFactor'
  ],
  [ProductCategory.COOLING]: [
    'type', 'socketCompatibility', 'tdpRating'
  ],
  [ProductCategory.MONITOR]: [
    'screenSize', 'resolution', 'refreshRate', 'panelType'
  ],
  [ProductCategory.SMARTPHONE]: [
    'os', 'chipset', 'ram', 'storage', 'display', 'camera', 'battery'
  ],
  [ProductCategory.SMARTWATCH]: [
    'os', 'compatibility', 'display', 'battery', 'sensors'
  ]
} as const;

// ✅ FILTROS AVANZADOS POR CATEGORÍA
export const ADVANCED_FILTERS = {
  [ProductCategory.CPU]: {
    performance: ['cores', 'threads', 'boostClock'],
    features: ['unlocked', 'integratedGraphics'],
    compatibility: ['socket', 'memorySupport']
  },
  [ProductCategory.GPU]: {
    performance: ['memorySize', 'boostClock', 'rayTracing'],
    features: ['dlss', 'fsr', 'nvenc'],
    physical: ['length', 'slots', 'powerConnectors']
  },
  [ProductCategory.RAM]: {
    performance: ['speed', 'latency', 'capacity'],
    features: ['heatspreader', 'rgb', 'ecc'],
    physical: ['formFactor', 'modules']
  },
  [ProductCategory.SMARTPHONE]: {
    performance: ['chipset', 'ram', 'storage'],
    features: ['camera', 'battery', 'waterResistance'],
    design: ['colors', 'dimensions', 'weight']
  }
} as const;

// ✅ RANGOS DE PRECIOS POR CATEGORÍA (EUR)
export const PRICE_RANGES = {
  [ProductCategory.CPU]: { min: 50, max: 1500, currency: 'EUR' },
  [ProductCategory.GPU]: { min: 100, max: 2000, currency: 'EUR' },
  [ProductCategory.MOTHERBOARD]: { min: 60, max: 800, currency: 'EUR' },
  [ProductCategory.RAM]: { min: 30, max: 500, currency: 'EUR' },
  [ProductCategory.STORAGE]: { min: 25, max: 400, currency: 'EUR' },
  [ProductCategory.PSU]: { min: 40, max: 300, currency: 'EUR' },
  [ProductCategory.COOLING]: { min: 20, max: 200, currency: 'EUR' },
  [ProductCategory.CASE]: { min: 30, max: 300, currency: 'EUR' },
  [ProductCategory.MONITOR]: { min: 100, max: 2000, currency: 'EUR' },
  [ProductCategory.KEYBOARD]: { min: 20, max: 300, currency: 'EUR' },
  [ProductCategory.MOUSE]: { min: 15, max: 200, currency: 'EUR' },
  [ProductCategory.HEADPHONES]: { min: 20, max: 500, currency: 'EUR' },
  [ProductCategory.SMARTPHONE]: { min: 150, max: 1500, currency: 'EUR' },
  [ProductCategory.TABLET]: { min: 100, max: 1200, currency: 'EUR' },
  [ProductCategory.SMARTWATCH]: { min: 100, max: 800, currency: 'EUR' }
} as const;

// ✅ OPCIONES DE ORDENAMIENTO POR CATEGORÍA
export const SORT_OPTIONS = {
  default: [
    { key: 'price.current', direction: 'asc', name: 'Precio: Menor a Mayor' },
    { key: 'price.current', direction: 'desc', name: 'Precio: Mayor a Menor' },
    { key: 'rating.expert', direction: 'desc', name: 'Mejor Valorados' },
    { key: 'availability.releaseDate', direction: 'desc', name: 'Más Recientes' },
    { key: 'rating.totalReviews', direction: 'desc', name: 'Más Populares' }
  ],
  [ProductCategory.CPU]: [
    { key: 'specifications.cores', direction: 'desc', name: 'Más Núcleos' },
    { key: 'specifications.boostClock', direction: 'desc', name: 'Mayor Frecuencia' },
    { key: 'specifications.tdp', direction: 'asc', name: 'Menor Consumo' }
  ],
  [ProductCategory.GPU]: [
    { key: 'specifications.memorySize', direction: 'desc', name: 'Más VRAM' },
    { key: 'specifications.boostClock', direction: 'desc', name: 'Mayor Frecuencia' },
    { key: 'specifications.tdp', direction: 'asc', name: 'Menor Consumo' }
  ],
  [ProductCategory.SMARTPHONE]: [
    { key: 'specifications.ram', direction: 'desc', name: 'Más RAM' },
    { key: 'specifications.storage', direction: 'desc', name: 'Más Almacenamiento' },
    { key: 'specifications.camera.main.megapixels', direction: 'desc', name: 'Mejor Cámara' }
  ]
} as const;