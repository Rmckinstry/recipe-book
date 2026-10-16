import { Header } from './components/Header/Header';
import { Recipes } from './components/recipes/Recipes';
import { ShoppingList } from './components/shopping-list/ShoppingList';

export function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Recipes />
            <ShoppingList />
          </div>
        </div>
      </div>
    </>
  );
}
