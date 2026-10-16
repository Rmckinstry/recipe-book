export function RecipeDetail() {
  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <img alt="" className="img-responsive" />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <h1>Recipe Name</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <div className="btn-group">
            <button type="button" className="btn btn-primary dropdown-toggle">
              Manage Recipe <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li><a href="#">To Shopping List</a></li>
              <li><a href="#">Edit Recipe</a></li>
              <li><a href="#">Delete Recipe</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">Description</div>
      </div>
      <div className="row">
        <div className="col-xs-12">Ingredients:</div>
      </div>
    </>
  );
}
