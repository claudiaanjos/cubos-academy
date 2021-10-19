import React from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./styles.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
    return (
        <div className="App">
            <Router>
                <div className="sidenav">
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="main">
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/services" component={Services} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
