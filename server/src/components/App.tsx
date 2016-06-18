import * as React from 'react';

class App extends React.Component<any, any> {
  showAlert() {
    alert(112)
  }

  render() {
    return (
      <div>
        <strong>11wdadw111</strong>
        <button onClick={this.showAlert}>Alert</button>
      </div>
    )
  }
}

export default App
