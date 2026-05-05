# Blog Liz Moreno

Un blog moderno construido con Astro y Sanity CMS, utilizando una arquitectura de monorepo con pnpm workspaces y Turbo.

## Características

- **Astro** - Framework web rápido y moderno
- **Sanity CMS** - Headless CMS para gestión de contenido
- **Tailwind CSS** - Framework de CSS utilitario
- **TypeScript** - Tipado estático
- **Monorepo** - Arquitectura con pnpm workspaces y Turbo

## Estructura del Proyecto

```
Blog-lizmoreno/
├── apps/
│   ├── web/          # Frontend del blog (Astro)
│   └── studio/       # Sanity Studio (CMS)
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## Scripts Disponibles

- `pnpm dev` - Inicia todos los proyectos en modo desarrollo
- `pnpm build` - Construye todos los proyectos
- `pnpm studio:dev` - Inicia solo Sanity Studio
- `pnpm web:dev` - Inicia solo el frontend web
- `pnpm typegen` - Genera tipos de Sanity

## Requisitos

- Node.js >= 20.0.0
- pnpm 9.15.0

## Instalación

```bash
pnpm install
```

## Desarrollo

```bash
pnpm dev
```

## Tecnologías

- [Astro](https://astro.build)
- [Sanity](https://www.sanity.io)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Turbo](https://turbo.build)
- [pnpm](https://pnpm.io)
