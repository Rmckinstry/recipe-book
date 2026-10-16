import type { FormEvent } from 'react';

export function ShoppingEdit() {
  // The form has no add behavior yet; stop the native submit from reloading the page.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

  return (
    <div className="row">
      <div className="col-xs-12">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-5 form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="form-control" />
            </div>
            <div className="col-sm-2 form-group">
              <label htmlFor="amount">Amount</label>
              <input type="text" id="amount" className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <button className="btn btn-success" type="submit">Add</button>{' '}
              <button className="btn btn-danger" type="button">Delete</button>{' '}
              <button className="btn btn-primary" type="button">Clear</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
