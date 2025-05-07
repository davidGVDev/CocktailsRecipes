# 🍹 Cocktails Recipes

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

Una aplicación web moderna para explorar y descubrir recetas de cócteles deliciosos. Desarrollada con las últimas tecnologías web para ofrecer una experiencia de usuario excepcional.

## ✨ Características

- 🔍 Búsqueda avanzada de cócteles por nombre, ingredientes y categorías
- 📱 Diseño responsivo y adaptable a todos los dispositivos
- 🎨 Interfaz moderna y atractiva con temas claro/oscuro
- ⚡ Rendimiento optimizado con Vite y React 18
- 🎯 Navegación fluida con React Router v6
- 🎭 Animaciones suaves con Framer Motion
- 🎨 Estilos personalizables con Tailwind CSS
- 🧩 Componentes UI reutilizables con Shadcn/UI
- 📋 Formularios interactivos con React Hook Form y Zod
- 🌐 Soporte multiidioma (inglés/español) con i18next
- 🛠️ Herramientas de cóctelería interactivas
- 🔒 Autenticación y gestión de usuarios
- 💾 Persistencia de datos con localStorage
- 📊 Estadísticas de uso y favoritos

## 🚀 Tecnologías Utilizadas

- **Frontend**: React 18 con TypeScript
- **Estilos**: Tailwind CSS + Shadcn/UI
- **Bundler**: Vite
- **Enrutamiento**: React Router v6
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React, Phosphor Icons
- **Formularios**: React Hook Form, Zod
- **Componentes UI**: Radix UI, Shadcn/UI
- **Utilidades**: 
  - class-variance-authority
  - axios

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
git clone https://github.com/tu-usuario/cocktails-recipes.git
```

2. Instala las dependencias:
```bash
cd cocktails-recipes
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 🛠️ Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run lint`: Ejecuta el linter
- `npm run test`: Ejecuta las pruebas
- `npm run preview`: Previsualiza la build de producción
- `npm run format`: Formatea el código con Prettier

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

David Ventura - [@tu_twitter](https://twitter.com/tu_twitter)

Link del proyecto: [https://github.com/tu-usuario/cocktails-recipes](https://github.com/tu-usuario/cocktails-recipes)

---

Desarrollado con ❤️ por David Ventura
