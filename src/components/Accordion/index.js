import React, { Component } from 'react';
import './styles.css';

class Accordion extends Component {
    state = { isOpen: false };

    handleToggleOpen = () => {
        this.setState(state => ({ isOpen: !state.isOpen }));
    }

    render() {
        return (
            <div className="accordion-container">
                <div onClick={this.handleToggleOpen} className="accordion-header">
                    <span>Declarative</span>
                    <span>^</span>
                </div>
                {this.state.isOpen && (
                    <div className="accordion-content">
                        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                    </div>
                )}
            </div>
        );
    }
}

export default Accordion;
