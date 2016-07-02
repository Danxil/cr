import * as React from 'react';
import {Link} from 'react-router';

class App extends React.Component<void, void> {
  constructor(public props) {
    super();
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link> <Link to="/products">Products</Link> <Link to="/cart">Cart</Link>
        <hr/>
        {this.props.children}
      </div>
    )
  }
}

export default App
