# EatherDocs Frontend

Una aplicación Vue.js moderna para la gestión y análisis de documentos.

## Características

- **Sistema de Autenticación**: Login y registro con navegación automática al dashboard
- **Sidebar Responsivo**: Navegación lateral que se puede colapsar
- **Dashboard**: Vista principal con estadísticas y bienvenida
- **Gestión de Archivos**: Subida y gestión de documentos
- **Análisis**: Estadísticas y métricas de procesamiento
- **Configuraciones**: Gestión de perfil y preferencias

## Vistas Disponibles

1. **Login** (`/login`): Página de autenticación
2. **Dashboard** (`/dashboard`): Vista principal con estadísticas
3. **Archivos** (`/files`): Gestión de documentos
4. **Análisis** (`/analytics`): Estadísticas y métricas
5. **Configuración** (`/settings`): Configuraciones del usuario

## Navegación

- El sidebar permite navegar entre todas las vistas
- Se puede colapsar para ahorrar espacio
- Botón de logout que regresa al login
- Navegación automática del login al dashboard

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Construcción

```bash
npm run build
```

## Tecnologías

- Vue 3 (Composition API)
- Vue Router
- Boxicons para iconos
- CSS moderno con Flexbox y Grid
