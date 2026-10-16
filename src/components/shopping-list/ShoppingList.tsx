import type { Ingredient } from '../../models/ingredient';
import { ShoppingEdit } from './ShoppingEdit/ShoppingEdit';

export const INGREDIENTS: Ingredient[] = [
  { name: 'Apples', amount: 5 },
  { name: 'Tomatoes', amount: 15 },
];

interface ShoppingListProps {
  ingredients?: Ingredient[];
}

export function ShoppingList({ ingredients = INGREDIENTS }: ShoppingListProps) {
  return (
    <div className="row">
      <div className="col-xs-10">
        <ShoppingEdit />
        <hr />
        <ul className="list-group">
          {ingredients.map((ingredient) => (
            <a key={ingredient.name} className="list-group-item" style={{ cursor: 'pointer' }}>
              {ingredient.name} ({ingredient.amount})
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
