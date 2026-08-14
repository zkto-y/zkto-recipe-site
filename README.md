# The Recipe Box

A simple, static recipe blog built with Next.js. The home page shows all recipes
in a 2-column grid (photo, title, subtitle); each recipe gets its own page with
a photo row, servings/time, and a two-column ingredients/directions layout —
styled to match the recipe card you shared.

## Getting started

Requires [Node.js](https://nodejs.org) 18 or later.

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Adding a new recipe

You don't need to touch any page code to add a recipe. Just:

1. Drop your photos into a new folder under `public/images/your-recipe-slug/`.
2. Add a new JSON file to `content/recipes/your-recipe-slug.json` following the
   same shape as `content/recipes/burnt-garlic-ginger-tofu.json`:

```json
{
  "slug": "your-recipe-slug",
  "title": "Recipe Title",
  "subtitle": "A one-line description",
  "servings": "4 servings",
  "time": "30 min",
  "coverImage": "/images/your-recipe-slug/hero.jpg",
  "images": [
    "/images/your-recipe-slug/photo-1.jpg",
    "/images/your-recipe-slug/photo-2.jpg"
  ],
  "ingredientGroups": [
    { "heading": "For the sauce:", "items": ["1 tbsp soy sauce", "..."] }
  ],
  "directions": ["Step one.", "Step two."]
}
```

- `coverImage` is what shows on the home page grid.
- `images` is the row of photos at the top of the recipe page (any number works,
  the reference recipe uses 4).
- `ingredientGroups` can have one group or several (e.g. "Sauce:", "Tofu:") —
  each renders with its own underlined heading.

That's it — the home page and a new page at `/recipes/your-recipe-slug` are
generated automatically the next time you build or run the dev server.

## Building for production (static export)

```bash
npm run build
```

This produces a fully static site in the `out/` folder — plain HTML, CSS, JS,
and images. You can upload that folder to *any* static host: Netlify, Vercel,
GitHub Pages, Cloudflare Pages, S3, or a plain web server. There's no database
and no server process required.

## Notes

- Fonts (Caveat for titles, Lora for body text) are self-hosted via
  `@fontsource`, so the site builds and works fully offline — no calls to
  Google Fonts at build or run time.
- Styling lives in `styles/globals.css`. Colors are defined as CSS variables
  at the top of the file if you want to tweak the palette.
- The fork/knife and clock icons are plain inline SVGs in `components/icons.js`.
