import { ProductCategory, Brand } from '@core/models';

export const PRODUCT_CATEGORIES = {
  // === COMPONENTES PC ===
  [ProductCategory.CPU]: {
    name: 'Procesadores',
    icon: 'cpu',
    group: 'components',
    brands: [Brand.INTEL_CPU, Brand.AMD_CPU],
    filters: ['socket', 'cores', 'threads', 'tdp', 'price'],
    benchmarks: ['Cinebench R23', 'Geekbench 5', 'PassMark CPU']
  },
  [ProductCategory.GPU]: {
    name: 'Tarjetas Gráficas',
    icon: 'gpu',
    group: 'components',
    brands: [Brand.NVIDIA_GPU, Brand.AMD_GPU, Brand.INTEL_GPU],
    filters: ['memory', 'tdp', 'rayTracing', 'price'],
    benchmarks: ['3DMark Time Spy', 'Port Royal', 'Games 1440p']
  },
  [ProductCategory.MOTHERBOARD]: {
    name: 'Placas Base',
    icon: 'motherboard',
    group: 'components',
    brands: [Brand.ASUS_MOBO, Brand.MSI_MOBO, Brand.GIGABYTE_MOBO, Brand.ASROCK_MOBO],
    filters: ['socket', 'formFactor', 'chipset', 'price'],
    benchmarks: ['Feature Score', 'VRM Analysis', 'I/O Score']
  },
  [ProductCategory.RAM]: {
    name: 'Memoria RAM',
    icon: 'memory',
    group: 'components',
    brands: [Brand.CORSAIR_RAM, Brand.CRUCIAL_RAM, Brand.GSKILL_RAM, Brand.KINGSTON_RAM, Brand.TEAMGROUP_RAM],
    filters: ['type', 'capacity', 'speed', 'latency', 'price'],
    benchmarks: ['AIDA64 Memory', 'MaxxMEM2']
  },
  [ProductCategory.STORAGE]: {
    name: 'Almacenamiento',
    icon: 'storage',
    group: 'components',
    brands: [Brand.SAMSUNG_STORAGE, Brand.WD_STORAGE, Brand.SEAGATE_STORAGE, Brand.CRUCIAL_STORAGE], // ✅ Agregado CRUCIAL_STORAGE
    filters: ['interface', 'capacity', 'readSpeed', 'writeSpeed', 'price'],
    benchmarks: ['CrystalDiskMark', 'AS SSD', 'ATTO']
  },
  [ProductCategory.PSU]: {
    name: 'Fuentes de Alimentación',
    icon: 'psu',
    group: 'components',
    brands: [Brand.SEASONIC_PSU, Brand.EVGA_PSU, Brand.CORSAIR_PSU, Brand.COOLERMASTER_PSU],
    filters: ['wattage', 'efficiency', 'modular', 'price'],
    benchmarks: ['Efficiency Test', 'Ripple Test', 'Load Regulation']
  },
  [ProductCategory.COOLING]: {
    name: 'Refrigeración',
    icon: 'cooling',
    group: 'components',
    brands: [Brand.NOCTUA_COOLING, Brand.BEQUIET_COOLING, Brand.ARCTIC_COOLING, Brand.CORSAIR_COOLING, Brand.COOLERMASTER_COOLING], // ✅ Agregado ARCTIC_COOLING
    filters: ['type', 'tdpRating', 'noiseLevel', 'price'],
    benchmarks: ['Cooling Performance', 'Noise Level', 'Installation Ease']
  },
  [ProductCategory.CASE]: {
    name: 'Cajas/Chasis',
    icon: 'case',
    group: 'components',
    brands: [Brand.FRACTALDESIGN_CASE, Brand.LIANLI_CASE, Brand.PHANTEKS_CASE, Brand.CORSAIR_CASE, Brand.NZXT_CASE], // ✅ Agregado CORSAIR_CASE y NZXT_CASE
    filters: ['formFactor', 'size', 'material', 'price'],
    benchmarks: ['Build Quality', 'Airflow', 'Cable Management']
  },

  // === PERIFÉRICOS ===
  [ProductCategory.MONITOR]: {
    name: 'Monitores',
    icon: 'monitor',
    group: 'peripherals',
    brands: [Brand.LG_MONITOR, Brand.DELL_MONITOR, Brand.SAMSUNG_MONITOR, Brand.ACER_MONITOR, Brand.BENQ_MONITOR, Brand.ASUS_MONITOR], // ✅ Agregado ASUS_MONITOR
    filters: ['size', 'resolution', 'refreshRate', 'panelType', 'price'],
    benchmarks: ['Color Accuracy', 'Input Lag', 'Response Time']
  },
  [ProductCategory.KEYBOARD]: {
    name: 'Teclados',
    icon: 'keyboard',
    group: 'peripherals',
    brands: [Brand.LOGITECH_KEYBOARD, Brand.RAZER_KEYBOARD, Brand.CORSAIR_KEYBOARD, Brand.STEELSERIES_KEYBOARD, Brand.KEYCHRON_KEYBOARD], // ✅ Agregado KEYCHRON_KEYBOARD
    filters: ['type', 'layout', 'switches', 'connectivity', 'price'],
    benchmarks: ['Typing Test', 'Latency', 'Build Quality']
  },
  [ProductCategory.MOUSE]: {
    name: 'Ratones',
    icon: 'mouse',
    group: 'peripherals',
    brands: [Brand.LOGITECH_MOUSE, Brand.RAZER_MOUSE, Brand.CORSAIR_MOUSE, Brand.STEELSERIES_MOUSE],
    filters: ['type', 'dpi', 'connectivity', 'ergonomics', 'price'],
    benchmarks: ['Precision Test', 'Click Latency', 'Battery Life']
  },
  [ProductCategory.HEADPHONES]: {
    name: 'Auriculares',
    icon: 'headphones',
    group: 'peripherals',
    brands: [Brand.APPLE_HEADPHONES, Brand.SONY_HEADPHONES, Brand.BOSE_HEADPHONES, Brand.SENNHEISER_HEADPHONES], // ✅ Reordenado según model
    filters: ['type', 'connectivity', 'anc', 'battery', 'price'],
    benchmarks: ['Audio Quality', 'ANC Performance', 'Battery Life']
  },
  
  // ✅ NUEVAS CATEGORÍAS - FALTABAN EN EL ARCHIVO ORIGINAL
  [ProductCategory.WEBCAM]: {
    name: 'Cámaras Web',
    icon: 'webcam',
    group: 'peripherals',
    brands: [], // ✅ No hay brands específicos definidos aún en el model
    filters: ['resolution', 'fps', 'microphone', 'autofocus', 'price'],
    benchmarks: ['Image Quality', 'Low Light Performance', 'Audio Quality']
  },
  [ProductCategory.SPEAKERS]: {
    name: 'Altavoces',
    icon: 'speakers',
    group: 'peripherals',
    brands: [], // ✅ No hay brands específicos definidos aún en el model
    filters: ['power', 'connectivity', 'size', 'price'],
    benchmarks: ['Audio Quality', 'Bass Response', 'Volume Range']
  },
  [ProductCategory.MICROPHONE]: {
    name: 'Micrófonos',
    icon: 'microphone',
    group: 'peripherals',
    brands: [], // ✅ No hay brands específicos definidos aún en el model
    filters: ['type', 'connectivity', 'pattern', 'price'],
    benchmarks: ['Audio Quality', 'Noise Rejection', 'Sensitivity']
  },

  // === MOBILE ===
  [ProductCategory.SMARTPHONE]: {
    name: 'Smartphones',
    icon: 'smartphone',
    group: 'mobile',
    brands: [Brand.APPLE_MOBILE, Brand.SAMSUNG_MOBILE, Brand.GOOGLE_MOBILE, Brand.ONEPLUS_MOBILE], // ✅ Reordenado según model
    filters: ['os', 'ram', 'storage', 'camera', 'price'],
    benchmarks: ['Geekbench 5', 'AnTuTu', '3DMark Wild Life']
  },
  [ProductCategory.TABLET]: {
    name: 'Tablets',
    icon: 'tablet',
    group: 'mobile',
    brands: [Brand.APPLE_TABLET, Brand.SAMSUNG_TABLET, Brand.GOOGLE_TABLET],
    filters: ['os', 'size', 'storage', 'stylus', 'price'],
    benchmarks: ['Performance Score', 'Display Quality', 'Battery Life']
  },
  [ProductCategory.SMARTWATCH]: {
    name: 'Smartwatches',
    icon: 'watch',
    group: 'mobile',
    brands: [Brand.APPLE_WATCH, Brand.SAMSUNG_WATCH, Brand.GARMIN_WATCH],
    filters: ['compatibility', 'battery', 'features', 'price'],
    benchmarks: ['Battery Life', 'GPS Accuracy', 'Health Features']
  },

  // === ACCESORIOS - NUEVAS CATEGORÍAS ===
  [ProductCategory.ACCESSORIES]: {
    name: 'Accesorios',
    icon: 'accessories',
    group: 'accessories',
    brands: [], // ✅ No hay brands específicos definidos aún
    filters: ['type', 'compatibility', 'material', 'price'],
    benchmarks: ['Build Quality', 'Functionality', 'Value']
  },
  [ProductCategory.CABLES]: {
    name: 'Cables',
    icon: 'cables',
    group: 'accessories',
    brands: [], // ✅ No hay brands específicos definidos aún
    filters: ['type', 'length', 'speed', 'price'],
    benchmarks: ['Data Speed', 'Build Quality', 'Durability']
  },
  [ProductCategory.ADAPTERS]: {
    name: 'Adaptadores',
    icon: 'adapters',
    group: 'accessories',
    brands: [], // ✅ No hay brands específicos definidos aún
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
      ProductCategory.CASE
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
      ProductCategory.WEBCAM,
      ProductCategory.SPEAKERS,
      ProductCategory.MICROPHONE
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

// ✅ MATRIZ DE COMPATIBILIDAD - EXACTA AL PRODUCT MODEL
export const COMPATIBILITY_MATRIX = {
  [ProductCategory.CPU]: [
    ProductCategory.MOTHERBOARD, 
    ProductCategory.RAM, 
    ProductCategory.COOLING,
    ProductCategory.PSU
  ],
  [ProductCategory.GPU]: [
    ProductCategory.MOTHERBOARD,
    ProductCategory.PSU,
    ProductCategory.CASE
  ],
  [ProductCategory.MOTHERBOARD]: [
    ProductCategory.CPU,
    ProductCategory.RAM,
    ProductCategory.STORAGE,
    ProductCategory.CASE,
    ProductCategory.PSU
  ],
  [ProductCategory.RAM]: [
    ProductCategory.CPU,
    ProductCategory.MOTHERBOARD
  ],
  [ProductCategory.STORAGE]: [
    ProductCategory.MOTHERBOARD,
    ProductCategory.PSU
  ],
  [ProductCategory.PSU]: [
    ProductCategory.MOTHERBOARD,
    ProductCategory.GPU,
    ProductCategory.CPU,
    ProductCategory.CASE
  ],
  [ProductCategory.COOLING]: [
    ProductCategory.CPU,
    ProductCategory.CASE,
    ProductCategory.MOTHERBOARD
  ],
  [ProductCategory.CASE]: [
    ProductCategory.MOTHERBOARD,
    ProductCategory.GPU,
    ProductCategory.COOLING,
    ProductCategory.PSU
  ],
  // Periféricos - Sin compatibilidad específica
  [ProductCategory.MONITOR]: [ProductCategory.GPU],
  [ProductCategory.KEYBOARD]: [],
  [ProductCategory.MOUSE]: [],
  [ProductCategory.HEADPHONES]: [],
  [ProductCategory.WEBCAM]: [],
  [ProductCategory.SPEAKERS]: [],
  [ProductCategory.MICROPHONE]: [],
  // Mobile - Sin compatibilidad específica
  [ProductCategory.SMARTPHONE]: [],
  [ProductCategory.TABLET]: [],
  [ProductCategory.SMARTWATCH]: [],
  // Accesorios - Sin compatibilidad específica
  [ProductCategory.ACCESSORIES]: [],
  [ProductCategory.CABLES]: [],
  [ProductCategory.ADAPTERS]: []
} as const;

// ✅ ESPECIFICACIONES REQUERIDAS - ALINEADAS CON INTERFACES
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
  [ProductCategory.CASE]: [
    'formFactor', 'dimensions', 'material'
  ],
  [ProductCategory.MONITOR]: [
    'screenSize', 'resolution', 'refreshRate', 'panelType'
  ],
  [ProductCategory.KEYBOARD]: [
    'type', 'layout', 'switches', 'connectivity'
  ],
  [ProductCategory.MOUSE]: [
    'type', 'sensor', 'connectivity', 'ergonomics'
  ],
  [ProductCategory.SMARTPHONE]: [
    'os', 'chipset', 'ram', 'storage', 'display', 'camera', 'battery'
  ],
  [ProductCategory.TABLET]: [
    'os', 'chipset', 'ram', 'storage', 'display'
  ],
  [ProductCategory.SMARTWATCH]: [
    'os', 'compatibility', 'display', 'battery', 'sensors'
  ],
  [ProductCategory.HEADPHONES]: [
    'type', 'drivers', 'connectivity', 'anc'
  ]
} as const;

// ✅ FILTROS AVANZADOS - EXPANDIDOS PARA TODAS LAS CATEGORÍAS
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
  [ProductCategory.MOTHERBOARD]: {
    performance: ['chipset', 'memorySpeed', 'expansionSlots'],
    features: ['wifi', 'rgb', 'overclockingSupport'],
    compatibility: ['socket', 'formFactor']
  },
  [ProductCategory.RAM]: {
    performance: ['speed', 'latency', 'capacity'],
    features: ['heatspreader', 'rgb', 'ecc'],
    physical: ['formFactor', 'modules']
  },
  [ProductCategory.STORAGE]: {
    performance: ['readSpeed', 'writeSpeed', 'iops'],
    features: ['encryption', 'dram', 'slc'],
    physical: ['formFactor', 'capacity']
  },
  [ProductCategory.PSU]: {
    performance: ['wattage', 'efficiency'],
    features: ['modular', 'zeroFanMode'],
    physical: ['formFactor', 'cables']
  },
  [ProductCategory.COOLING]: {
    performance: ['tdpRating', 'airflow', 'noiseLevel'],
    features: ['rgb', 'pwmControl'],
    physical: ['dimensions', 'socketCompatibility']
  },
  [ProductCategory.MONITOR]: {
    performance: ['resolution', 'refreshRate', 'responseTime'],
    features: ['hdr', 'gsync', 'freesync'],
    physical: ['screenSize', 'curvature']
  },
  [ProductCategory.KEYBOARD]: {
    performance: ['polling', 'latency'],
    features: ['rgb', 'macro', 'wireless'],
    physical: ['size', 'switches']
  },
  [ProductCategory.MOUSE]: {
    performance: ['dpi', 'polling', 'clickLatency'],
    features: ['rgb', 'wireless', 'weights'],
    physical: ['size', 'ergonomics']
  },
  [ProductCategory.SMARTPHONE]: {
    performance: ['chipset', 'ram', 'storage'],
    features: ['camera', 'battery', 'waterResistance'],
    design: ['colors', 'dimensions', 'weight']
  },
  [ProductCategory.TABLET]: {
    performance: ['chipset', 'ram', 'storage'],
    features: ['stylus', 'keyboard', 'cellular'],
    design: ['size', 'colors']
  },
  [ProductCategory.SMARTWATCH]: {
    performance: ['battery', 'gps'],
    features: ['healthFeatures', 'cellular'],
    design: ['materials', 'size']
  },
  [ProductCategory.HEADPHONES]: {
    performance: ['audioQuality', 'ancEffectiveness'],
    features: ['anc', 'wireless', 'battery'],
    physical: ['type', 'drivers']
  }
} as const;

// ✅ RANGOS DE PRECIOS - ACTUALIZADOS CON 3 MONEDAS
export const PRICE_RANGES = {
  [ProductCategory.CPU]: { 
    USD: { min: 60, max: 1800 },
    MXN: { min: 1200, max: 36000 }, 
    EUR: { min: 50, max: 1500 }
  },
  [ProductCategory.GPU]: { 
    USD: { min: 120, max: 2400 },
    MXN: { min: 2400, max: 48000 },
    EUR: { min: 100, max: 2000 }
  },
  [ProductCategory.MOTHERBOARD]: { 
    USD: { min: 70, max: 950 },
    MXN: { min: 1400, max: 19000 },
    EUR: { min: 60, max: 800 }
  },
  [ProductCategory.RAM]: { 
    USD: { min: 35, max: 600 },
    MXN: { min: 700, max: 12000 },
    EUR: { min: 30, max: 500 }
  },
  [ProductCategory.STORAGE]: { 
    USD: { min: 30, max: 480 },
    MXN: { min: 600, max: 9600 },
    EUR: { min: 25, max: 400 }
  },
  [ProductCategory.PSU]: { 
    USD: { min: 50, max: 360 },
    MXN: { min: 1000, max: 7200 },
    EUR: { min: 40, max: 300 }
  },
  [ProductCategory.COOLING]: { 
    USD: { min: 25, max: 240 },
    MXN: { min: 500, max: 4800 },
    EUR: { min: 20, max: 200 }
  },
  [ProductCategory.CASE]: { 
    USD: { min: 40, max: 360 },
    MXN: { min: 800, max: 7200 },
    EUR: { min: 30, max: 300 }
  },
  [ProductCategory.MONITOR]: { 
    USD: { min: 120, max: 2400 },
    MXN: { min: 2400, max: 48000 },
    EUR: { min: 100, max: 2000 }
  },
  [ProductCategory.KEYBOARD]: { 
    USD: { min: 25, max: 360 },
    MXN: { min: 500, max: 7200 },
    EUR: { min: 20, max: 300 }
  },
  [ProductCategory.MOUSE]: { 
    USD: { min: 20, max: 240 },
    MXN: { min: 400, max: 4800 },
    EUR: { min: 15, max: 200 }
  },
  [ProductCategory.HEADPHONES]: { 
    USD: { min: 25, max: 600 },
    MXN: { min: 500, max: 12000 },
    EUR: { min: 20, max: 500 }
  },
  [ProductCategory.SMARTPHONE]: { 
    USD: { min: 180, max: 1800 },
    MXN: { min: 3600, max: 36000 },
    EUR: { min: 150, max: 1500 }
  },
  [ProductCategory.TABLET]: { 
    USD: { min: 120, max: 1440 },
    MXN: { min: 2400, max: 28800 },
    EUR: { min: 100, max: 1200 }
  },
  [ProductCategory.SMARTWATCH]: { 
    USD: { min: 120, max: 960 },
    MXN: { min: 2400, max: 19200 },
    EUR: { min: 100, max: 800 }
  }
} as const;

// ✅ OPCIONES DE ORDENAMIENTO - EXPANDIDAS
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
  [ProductCategory.RAM]: [
    { key: 'specifications.speed', direction: 'desc', name: 'Mayor Velocidad' },
    { key: 'specifications.totalCapacity', direction: 'desc', name: 'Mayor Capacidad' },
    { key: 'specifications.latency.cl', direction: 'asc', name: 'Menor Latencia' }
  ],
  [ProductCategory.STORAGE]: [
    { key: 'specifications.readSpeed', direction: 'desc', name: 'Mayor Velocidad Lectura' },
    { key: 'specifications.capacity', direction: 'desc', name: 'Mayor Capacidad' },
    { key: 'specifications.writeSpeed', direction: 'desc', name: 'Mayor Velocidad Escritura' }
  ],
  [ProductCategory.MONITOR]: [
    { key: 'specifications.screenSize', direction: 'desc', name: 'Mayor Tamaño' },
    { key: 'specifications.refreshRate', direction: 'desc', name: 'Mayor Frecuencia' },
    { key: 'specifications.responseTime', direction: 'asc', name: 'Menor Input Lag' }
  ],
  [ProductCategory.SMARTPHONE]: [
    { key: 'specifications.ram', direction: 'desc', name: 'Más RAM' },
    { key: 'specifications.storage', direction: 'desc', name: 'Más Almacenamiento' },
    { key: 'specifications.camera.main.megapixels', direction: 'desc', name: 'Mejor Cámara' }
  ]
} as const;