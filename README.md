# 📦 Sistema de Gestión de Inventario - MVP

Este proyecto es parte del Trabajo Práctico Integrador de la cátedra **Investigación Operativa – 2025**.  
Se trata de un sistema web para gestionar artículos, proveedores, órdenes de compra y ventas, enfocado en lógica de inventario.

---

## 🛠 Tecnologías utilizadas

- [Next.js](https://nextjs.org/) — Framework de React para frontend y backend (API routes)
- [Tailwind CSS](https://tailwindcss.com/) — Estilos utilitarios modernos
- [Prisma ORM](https://www.prisma.io/) — ORM para PostgreSQL
- [PostgreSQL](https://www.postgresql.org/) — Base de datos relacional
- [Lucide React](https://lucide.dev/) — Íconos SVG

---

## ⚙️ Requisitos previos

Antes de comenzar, asegurate de tener instalado:

- [Node.js](https://nodejs.org/) (versión recomendada: LTS 18+)
- [PostgreSQL](https://www.postgresql.org/) (usamos una base llamada `inventario`)
- [Git](https://git-scm.com/)

---

## 🚀 Instrucciones para correr el proyecto

### 1. Cloná el repositorio

```bash
git clone https://github.com/TuteSeta/FullStock.git
cd FullStock
```

### 2. Instala dependencias
```bash
npm i (Cada vez que haces un pull por las dudas)
npx prisma init (Solo la primera vez)
```

### 3. Crea la BD en postgres
Entra a postgres con tu contraseña (el nombre de usuario te aparece apenas lo abres) y haz click derecho sobre la columna Databases, ahi crea una con el nombre inventario.

### 4. Aplica la migracion de tu base de datos
Siempre que hayan cambios en la bd (el archivo schema.prisma) deberas aplicar los cambios con este codigo

```bash
npx prisma migrate dev --name init
```

### 5. En caso de tener codigo de error generate
```bash
npx prisma generate
```

### 6. Inicializa el servidor de desarrollo
```bash
npm run dev
```