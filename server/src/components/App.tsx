import * as React from 'react';

class App extends React.Component<any, any> {
  showAlert() {
    alert(11)
  }

  render() {
    return (
      <div>
        <strong>11wdadw</strong>
        <button onClick={this.showAlert}>Alert</button>
      </div>
    )
  }
}

export default App
