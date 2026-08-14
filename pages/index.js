import Head from 'next/head';
import Link from 'next/link';
import recipesLib from '../lib/recipes';

export async function getStaticProps() {
  const recipes = recipesLib.getAllRecipes();
  return { props: { recipes } };
}

export default function Home({ recipes }) {
  return (
    <>
      <Head>
        <title>The Recipe Box</title>
      </Head>

      <div className="site-shell">
        <header className="site-header">
          <Link href="/">
            <h1>The Recipe Box</h1>
          </Link>
          <p>Home-cooked recipes worth making again</p>
        </header>

        {recipes.length === 0 ? (
          <p className="empty-state">No recipes yet — add a .json file to /content/recipes to get started.</p>
        ) : (
          <div className="recipe-grid">
            {recipes.map((recipe) => (
              <Link key={recipe.slug} href={`/recipes/${recipe.slug}`} className="recipe-card">
                <img
                  className="recipe-card-image"
                  src={recipe.coverImage}
                  alt={recipe.title}
                />
                <h2 className="recipe-card-title">{recipe.title}</h2>
                <p className="recipe-card-subtitle">{recipe.subtitle}</p>
              </Link>
            ))}
          </div>
        )}

        <footer className="site-footer">
          <p>Made with love, one pan at a time.</p>
        </footer>
      </div>
    </>
  );
}
