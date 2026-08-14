// Everything in this file runs at BUILD TIME (inside getStaticProps / getStaticPaths).
// To add a new recipe, just drop a new .json file into /content/recipes following
// the same shape as burnt-garlic-ginger-tofu.json — nothing else needs to change.
//
// Note: this is exported as a single default object (rather than several named
// exports) on purpose — Next's build-time bundling of this fs-based module got
// confused and tried to pull it into the browser bundle when multiple named
// functions were imported directly into a page file. A single default export
// sidesteps that.

import fs from 'fs';
import path from 'path';

const RECIPES_DIR = path.join(process.cwd(), 'content', 'recipes');

function getAllRecipes() {
  const files = fs.readdirSync(RECIPES_DIR).filter((f) => f.endsWith('.json'));

  const recipes = files.map((file) => {
    const fullPath = path.join(RECIPES_DIR, file);
    const raw = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(raw);
  });

  recipes.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));

  return recipes;
}

function getRecipeSlugs() {
  return getAllRecipes().map((recipe) => recipe.slug);
}

function getRecipeBySlug(slug) {
  const recipes = getAllRecipes();
  return recipes.find((recipe) => recipe.slug === slug) || null;
}

export default { getAllRecipes, getRecipeSlugs, getRecipeBySlug };
