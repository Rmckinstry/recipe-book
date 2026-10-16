import type { Recipe } from '../../../models/recipe';
import { RecipeItem } from '../RecipeItem/RecipeItem';

export const RECIPES: Recipe[] = [
  {
    name: 'A Test Recipe',
    description: 'This is a test',
    imagePath:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
  },
];

interface RecipeListProps {
  recipes?: Recipe[];
}

export function RecipeList({ recipes = RECIPES }: RecipeListProps) {
  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <button className="btn btn-success">New Recipe</button>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-xs-12">
          {recipes.map((recipe) => (
            <RecipeItem key={recipe.name} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
}
