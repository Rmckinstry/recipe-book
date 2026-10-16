import type { Recipe } from '../../../models/recipe';

interface RecipeItemProps {
  recipe: Recipe;
}

export function RecipeItem({ recipe }: RecipeItemProps) {
  return (
    <a href="#" className="list-group-item clearfix">
      <div className="pull-left">
        <h4 className="list-group-item-heading">{recipe.name}</h4>
        <p className="list-group-item-text">{recipe.description}</p>
      </div>
      <span className="pull-right">
        <img
          src={recipe.imagePath}
          alt={recipe.name}
          className="img-responsive"
          style={{ maxHeight: 50 }}
        />
      </span>
    </a>
  );
}
