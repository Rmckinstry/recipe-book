import { RecipeDetail } from './RecipeDetail/RecipeDetail';
import { RecipeList } from './RecipeList/RecipeList';

export function Recipes() {
  return (
    <div className="row">
      <div className="col-md-5">
        <RecipeList />
      </div>
      <div className="col-md-7">
        <RecipeDetail />
      </div>
    </div>
  );
}
