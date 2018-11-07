import React, {Component, Suspense, lazy} from 'react';
import './App.css';
const ReactLogo = lazy(() => import('./ReactLogo.js'));

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showImage: true
        };
    }

    showImage = () => {
        this.setState({showImage: true});
    }

    hideImage = () => {
      this.setState({showImage: false});
  }

    render() {
        if(!this.state.showImage){
            return(
                <div className="App">
                    <h1>React 16.6: Suspense and Lazy</h1>
                    <button onClick={this.showImage}>Show Image</button>
                </div>
            );
        }
        else {
            return (
                <div className="App">
                  <h1>React 16.6: Suspense and Lazy</h1>
                  <Suspense fallback={<div>Loading...</div>}>
                    <ReactLogo/>
                  </Suspense>
                  <button onClick={this.hideImage}>Hide Image</button>
                </div>
            )
        }
    }
}

export default App;