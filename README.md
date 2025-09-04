# 🚀 Techtopia

**Tu guía definitiva para hardware tech** - Plataforma web especializada en comparaciones, análisis y guías de componentes tecnológicos.

![Angular](https://img.shields.io/badge/Angular-20.1.0-red?style=for-the-badge&logo=angular)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.12-blue?style=for-the-badge&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue?style=for-the-badge&logo=typescript)
![Vercel](https://img.shields.io/badge/Vercel-Ready-black?style=for-the-badge&logo=vercel)

## 📋 Descripción del Proyecto

Techtopia es una aplicación web moderna desarrollada en Angular que ofrece información detallada sobre componentes de hardware, comparaciones de rendimiento y guías de compra. El proyecto está diseñado para funcionar con datos estáticos almacenados en archivos JSON, proporcionando una experiencia rápida y eficiente.

## 🎯 Características Principales

### ✅ Implementado
- **Arquitectura Modular**: Estructura organizada con feature modules
- **Sistema de Rutas**: Lazy loading implementado para optimización
- **Gestión de Datos**: Services especializados para diferentes categorías
- **Análisis de Rendimiento**: Calculadoras y analizadores de compatibilidad
- **Sistema de Filtros**: Modelos avanzados para búsqueda y filtrado
- **Comparaciones**: Sistema completo de comparación de productos
- **Analytics**: Módulo de análisis y métricas
- **Guías**: Sistema de guías de compra y compatibilidad
- **Responsive Design**: Diseño adaptativo con TailwindCSS

### 🔄 En Desarrollo
- Componentes UI especializados
- Sistema de benchmarks completo
- Calculadora de cuellos de botella
- Páginas de productos individuales
- Sistema de reviews y ratings

### 🎯 Próximas Características
- PWA (Progressive Web App)
- Sistema de favoritos local
- Modo dark/light theme
- Búsqueda avanzada con filtros
- Export de comparaciones

## 🏗️ Arquitectura del Proyecto

```
src/
├── app/
│   ├── core/                    # Servicios core y utilidades
│   │   ├── constants/          # Configuraciones y constantes
│   │   ├── models/             # Interfaces y tipos TypeScript
│   │   ├── services/           # Servicios de datos y lógica
│   │   └── utils/              # Utilidades y helpers
│   ├── features/               # Módulos por características
│   │   ├── analytics/          # Análisis y métricas
│   │   ├── comparisons/        # Comparación de productos
│   │   ├── guides/             # Guías de compra
│   │   └── products/           # Catálogo de productos
│   ├── pages/                  # Páginas principales
│   ├── shared/                 # Componentes reutilizables
│   └── layouts/                # Layouts de aplicación
├── assets/
│   ├── data/                   # Datos JSON estáticos
│   │   ├── benchmarks/         # Datos de rendimiento
│   │   ├── brands/             # Información de marcas
│   │   ├── categories/         # Categorías de productos
│   │   ├── guides/             # Guías y plantillas
│   │   └── products/           # Datos de productos
│   ├── images/                 # Recursos visuales
│   └── fonts/                  # Tipografías
└── environments/               # Configuraciones por entorno
```

## 🚀 Stack Tecnológico

### Frontend
- **Angular 20.1.0**: Framework principal con standalone components
- **TypeScript 5.8.2**: Tipado estático y funcionalidades avanzadas
- **TailwindCSS 4.1.12**: Framework CSS para diseño responsive
- **RxJS 7.8.0**: Programación reactiva y manejo de streams
- **Vite**: Build tool para desarrollo rápido

### Herramientas de Desarrollo
- **Angular CLI 20.1.6**: Tooling y scaffolding
- **Karma + Jasmine**: Testing unitario
- **Prettier**: Formateo de código
- **ESLint**: Linting y calidad de código

### Deployment
- **Vercel**: Hosting y CDN optimizado
- **Vercel Speed Insights**: Monitoreo de performance

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm 9+
- Angular CLI 20+

### Configuración Inicial

```bash
# Clonar el repositorio
git clone <repository-url>
cd Techtopia

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

El servidor estará disponible en `http://localhost:4200/`

### Scripts Disponibles

```bash
# Desarrollo
npm run start          # Servidor de desarrollo
npm run watch          # Build en modo watch

# Producción
npm run build          # Build para producción
npm run build:prod     # Build optimizado

# Testing
npm run test           # Tests unitarios
npm run test:watch     # Tests en modo watch

# Linting y Formato
npm run lint           # Análisis de código
npm run format         # Formateo con Prettier
```

## 📊 Funcionalidades por Módulo

### 🔍 Products Module
- Catálogo completo de componentes
- Filtros avanzados por especificaciones
- Búsqueda inteligente
- Detalles técnicos completos

### ⚖️ Comparisons Module
- Comparación lado a lado
- Análisis de rendimiento
- Recomendaciones automáticas
- Export de resultados

### 📈 Analytics Module
- Métricas de rendimiento
- Gráficos interactivos
- Análisis de tendencias
- Reportes personalizados

### 📚 Guides Module
- Guías de compra paso a paso
- Plantillas de builds
- Matriz de compatibilidad
- Tips y recomendaciones

## 🎨 Diseño y UX

- **Design System**: Componentes consistentes con TailwindCSS
- **Responsive**: Mobile-first approach
- **Performance**: Lazy loading y optimizaciones
- **Accessibility**: Cumplimiento de estándares WCAG
- **SEO**: Meta tags y structured data

## 📈 Roadmap 2025

### Q1 2025
- [ ] Completar componentes UI básicos
- [ ] Implementar sistema de búsqueda
- [ ] Añadir más categorías de productos
- [ ] Optimizar performance

### Q2 2025
- [ ] PWA implementation
- [ ] Sistema de notificaciones
- [ ] Integración con APIs externas
- [ ] Sistema de usuarios (opcional)

### Q3 2025
- [ ] Machine Learning para recomendaciones
- [ ] API propia para datos dinámicos
- [ ] Marketplace de componentes
- [ ] Móvil app (Ionic/React Native)

## 🤝 Contribución

1. Fork el proyecto
2. Crea una feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Tu Nombre** - [GitHub](https://github.com/tuusuario) - [LinkedIn](https://linkedin.com/in/tuusuario)

---

⭐ **¡Dale una estrella si este proyecto te parece útil!**

🔗 **Live Demo**: [techtopia.vercel.app](https://techtopia.vercel.app)
