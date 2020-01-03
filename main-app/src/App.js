import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const navigateTo = url => window.history.pushState(null, null, url);

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathname : window.location.pathname
        }
    }

    handleMenuClick = () => {
        this.setState(() => ({pathname : window.location.pathname}));
    };

    render() {
        return (
            <div className="Menu" onClick={this.handleMenuClick}>
                {this.props.children(this.state.pathname)}
            </div>
        )
    }
}

const MenuItem = ({link, children, pathname}) => {
    const classes = ['Menu-Item'];
    if (pathname === link) {
        classes.push('Menu-Item--Selected')
    }
    return (
        <div className={classes.join(' ')} onClick={() => navigateTo(link)}>
            {children}
        </div>
    );
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-content">
                    
                    <div className="App-container">
                        <div id="react-app" className="child1"/>
                        <div id="react-app-child2" className="child2"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
