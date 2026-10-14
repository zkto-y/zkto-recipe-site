import Head from 'next/head';
import Link from 'next/link';
import recipesLib from '../lib/recipes';
import SocialLinks from '../components/SocialLinks';

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
          <SocialLinks placement="top" />
          <Link href="/">
            <h1>The Recipe Box</h1>
          </Link>
          <p>Home-cooked recipes worth sharing</p>
          <nav className="site-nav" aria-label="Main navigation">
            <a className="is-current" href="#recipes">Recipes</a>
            <a href="#about">About</a>
          </nav>
        </header>

        <section className="home-intro" id="recipes">
          <p className="eyebrow">What's for dinner tonight?</p>
          <h2>Simply home cooked.</h2>
          {/* <p>Simple, comforting dishes made for sharing and saving.</p> */}
        </section>

        {recipes.length === 0 ? (
          <p className="empty-state">No recipes yet — add a .json file to /content/recipes to get started.</p>
        ) : (
          <div className="recipe-grid">
            {recipes.map((recipe) => (
              <Link key={recipe.slug} href={`/recipes/${recipe.slug}`} className="recipe-card">
                <div className="recipe-card-image-wrap">
                  <img className="recipe-card-image" src={recipe.coverImage} alt={recipe.title} />
                  <span className="card-arrow" aria-hidden="true">↗</span>
                </div>
                <div className="recipe-card-copy">
                  <p className="card-kicker">From the recipe box</p>
                  <h2 className="recipe-card-title">{recipe.title}</h2>
                  <p className="recipe-card-subtitle">{recipe.subtitle}</p>
                  <span className="read-recipe">View recipe <span aria-hidden="true">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        )}

        <footer className="site-footer">
          <SocialLinks />
          <div className="footer-credits" id="about">
            <div className="footer-credit">
              <h2>Recipes by</h2>
              <p>ZKTO</p>
            </div>
            <div className="footer-credit">
              <h2>Website made by</h2>
              <p>ZKTO</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
