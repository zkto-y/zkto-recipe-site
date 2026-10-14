import Head from 'next/head';
import Link from 'next/link';
import recipesLib from '../../lib/recipes';
import { ForkKnifeIcon, ClockIcon, DateIcon } from '../../components/icons';
import SocialLinks from '../../components/SocialLinks';

export async function getStaticPaths() {
  const slugs = recipesLib.getRecipeSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const recipe = recipesLib.getRecipeBySlug(params.slug);
  return { props: { recipe } };
}

export default function RecipePage({ recipe }) {
  return (
    <>
      <Head>
        <title>{recipe.title} — The Recipe Box</title>
        <meta name="description" content={recipe.subtitle} />
      </Head>

      <div className="site-shell">
        <header className="site-header">
          <SocialLinks placement="top" />
          <Link href="/">
            <h1>The Recipe Box</h1>
          </Link>
        </header>

        <Link href="/" className="back-link">
          ← All recipes
        </Link>

        <h1 className="recipe-title">{recipe.title}</h1>
        <p className="recipe-subtitle">{recipe.subtitle}</p>

        {recipe.images && recipe.images.length > 0 && (
          <div className="photo-row">
            {recipe.images.map((item, i) =>
              item.type === 'video' ? (
                <iframe key={item.youtubeId}
                  className="photo-row-video"
                  src={`https://www.youtube.com/embed/${item.youtubeId}`}
                  title={`${recipe.title} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />
              ) : (
                <img key={item.src} src={item.src} alt={`${recipe.title} step ${i + 1}`} />
              ))}
          </div>
        )}

        <div className="meta-row">
          <span className="meta-item">
            <ForkKnifeIcon />
            {recipe.servings}
          </span>
          <span className="meta-item">
            <ClockIcon />
            {recipe.time}
          </span>
          <span className="meta-item">
            <DateIcon />
            {recipe.dateAdded}
          </span>
        </div>

        <div className="recipe-content">
          <div className="ingredients">
            <h2>INGREDIENTS</h2>
            {recipe.ingredientGroups.map((group) => (
              <div key={group.heading} className='ingredient-group'>
                <p className="ingredient-group-heading">{group.heading}</p>
                <ul className="ingredients-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="directions">
            <h2>DIRECTIONS</h2>
            <ul className="directions-list">
              {recipe.directions.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
        </div>

        <footer className="site-footer">
          <SocialLinks />
          <div className="footer-credits">
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
