import * as React from 'react';
import {Link} from 'react-router';

class App extends React.Component<void, void> {
  constructor(public props) {
    super();
  }

  showAlert() {
    alert(112);
  }

  render() {
    return (
      <div>
        <strong>App init</strong>
        <button onClick={this.showAlert}>Alert</button>
        <hr/>
        <Link to="/">Home</Link> <Link to="/cars">Cars</Link> <Link to="/clients">Clients</Link>
        <hr/>
        {this.props.children}
      </div>
    )
  }
}

export default App
