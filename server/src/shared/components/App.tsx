import * as React from 'react';
import {Link} from 'react-router';
import {CartWidgetContainer} from '../containers/CartWidgetContainer';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

class App extends React.Component<void, void> {
  static preload = CartWidgetContainer['preload']

  constructor(public props) {
    super();
  }

  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <FlatButton primary={false} label="Products" containerElement={<Link to="/" />}></FlatButton>
            <FlatButton primary={false} label="Cart" containerElement={<Link to="/cart" />}></FlatButton>
          </ToolbarGroup>
          <ToolbarGroup>
            <CartWidgetContainer />
          </ToolbarGroup>
        </Toolbar>
        {this.props.children}
      </div>
    )
  }
}

export default App
