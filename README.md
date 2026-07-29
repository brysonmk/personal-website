# Personal Site

My personal website built with React + Vite.

## Getting Started

```bash
npm install
npm run dev
```

## Stack

- [React](https://react.dev/) — UI
- [Vite](https://vitejs.dev/) — build tool
- [React Router](https://reactrouter.com/) — routing
- CSS Modules — scoped styles

## Project Structure

```
src/
├── components/   # Shared components (Layout, ScrollToTop)
├── pages/        # Route-level pages (Home, About, Projects, Contact, NotFound)
├── hooks/        # Reusable hooks (usePageTitle)
├── data/         # Static content (projects)
├── styles/       # Global CSS and design tokens
├── App.jsx       # Route definitions
└── main.jsx      # App entry point
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
