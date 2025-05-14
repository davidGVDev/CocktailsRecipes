# 🍹 Cocktails Recipes

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

Una aplicación web moderna para explorar y descubrir recetas de cócteles deliciosos. Desarrollada con las últimas tecnologías web para ofrecer una experiencia de usuario excepcional.

## ✨ Características

- 🔍 Búsqueda avanzada de cócteles por nombre, ingredientes y categorías
- 📱 Diseño responsivo y adaptable a todos los dispositivos
- 🎨 Interfaz moderna y atractiva con temas claro/oscuro
- ⚡ Rendimiento optimizado con Vite y React 18
- 🎯 Navegación fluida con React Router v6
- 🎭 Animaciones suaves con Framer Motion
- 🎨 Estilos personalizables con Tailwind CSS v3
- 🧩 Componentes UI reutilizables con Shadcn/UI
- 📋 Formularios interactivos con React Hook Form y Zod
- 🌐 Soporte multiidioma (inglés/español) con i18next
- 🛠️ Herramientas de cóctelería interactivas
- 🔒 Autenticación y gestión de usuarios
- 💾 Persistencia de datos con localStorage
- 📊 Estadísticas de uso y favoritos
- 📱 PWA (Progressive Web App) soporte


## 🚀 Tecnologías Utilizadas

- **Frontend**:
  - React 18.2+ con TypeScript 5
  - Vite 5.0 para desarrollo y build
  - TailwindCSS 3.3+ para estilos
  - Shadcn/UI para componentes base
  - Framer Motion 10+ para animaciones
  - React Router 6.4+ para navegación

- **DevOps**:
  - Docker para contenedorización
  - GitHub Actions para CI/CD

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de UI básicos
│   └── magicui/        # Componentes con efectos especiales
├── features/           # Funcionalidades principales
│   ├── auth/          # Autenticación
│   ├── cocktails/     # Gestión de cócteles
│   └── user/          # Perfil de usuario
├── hooks/             # Custom hooks
├── lib/               # Utilidades y helpers
├── router/            # Configuración de enrutamiento
├── styles/            # Estilos globales
└── types/             # Definiciones de tipos
```

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/davidventura/cocktails-recipes.git
```

2. Instala las dependencias:
```bash
cd cocktails-recipes
pnpm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
```

4. Configura la base de datos:
```bash
pnpm prisma migrate dev
```

5. Inicia el servidor de desarrollo:
```bash
pnpm dev
```

## 🛠️ Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo
- `pnpm build`: Construye la aplicación para producción
- `pnpm preview`: Previsualiza la build de producción
- `pnpm test`: Ejecuta las pruebas unitarias
- `pnpm test:e2e`: Ejecuta las pruebas E2E
- `pnpm lint`: Ejecuta el linter
- `pnpm format`: Formatea el código
- `pnpm db:migrate`: Ejecuta las migraciones de la base de datos
- `pnpm db:seed`: Puebla la base de datos con datos de ejemplo

## 🧪 Características de la API de Cócteles

- Búsqueda avanzada por:
  - Nombre del cóctel
  - Ingredientes
  - Categorías
  - Tipo de vaso
  - Método de preparación
- Base de datos completa de:
  - Destilados y licores
  - Ingredientes
  - Técnicas de preparación
  - Equipamiento necesario

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📫 Contacto

David Ventura - [@davidventura](https://twitter.com/davidventura)

Link del proyecto: [https://github.com/davidventura/cocktails-recipes](https://github.com/davidventura/cocktails-recipes)

---

Desarrollado con ❤️ por David Ventura
