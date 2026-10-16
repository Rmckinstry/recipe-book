# RecipeBook

A recipe book and shopping list app built with React and TypeScript, styled with Bootstrap 3.

## Tech stack

- [React 19](https://react.dev/) + TypeScript
- [Vite](https://vite.dev/) for the dev server and production build
- [Bootstrap 3](https://getbootstrap.com/docs/3.4/) (CSS only)
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit tests

## Getting started

Requires Node.js 22.12 or later.

```sh
npm install
npm run dev
```

Then open `http://localhost:5173/`. The app reloads automatically when you change a source file.

## Scripts

| Command              | Description                                          |
| -------------------- | ---------------------------------------------------- |
| `npm run dev`        | Start the dev server                                 |
| `npm run build`      | Type-check and build for production into `dist/`     |
| `npm run preview`    | Serve the production build locally                   |
| `npm test`           | Run the unit tests once                              |
| `npm run test:watch` | Run the unit tests in watch mode                     |

## Project structure

```
src/
├── main.tsx                  # Entry point; loads Bootstrap and global styles
├── App.tsx                   # Page layout
├── models/                   # Recipe and Ingredient types
└── components/
    ├── Header/               # Navbar with collapsible mobile menu
    ├── recipes/
    │   ├── Recipes.tsx       # Recipe list + detail layout
    │   ├── RecipeList/
    │   ├── RecipeItem/
    │   └── RecipeDetail/
    └── shopping-list/
        ├── ShoppingList.tsx
        └── ShoppingEdit/
```

Each component's tests live next to it as `*.test.tsx`.

## Status

This app was migrated from Angular to React with the same behavior. Recipes and shopping list items are still hard-coded, and the nav links, dropdown menus and shopping list buttons are placeholders that don't do anything yet.
