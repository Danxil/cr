import * as React from 'react';
import {Link} from 'react-router';
import {CartWidgetContainer} from '../containers/CartWidgetContainer';

class App extends React.Component<void, void> {
  static preload = CartWidgetContainer['preload']

  constructor(public props) {
    super();
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link> <Link to="/products">Products</Link> <Link to="/cart">Cart</Link>
        <CartWidgetContainer />
        <hr/>
        Welcome!
        {this.props.children}
      </div>
    )
  }
}

export default App
