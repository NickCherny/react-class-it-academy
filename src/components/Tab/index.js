import React from 'react';
import './styles.css';

class Tab extends React.Component {
    state = { activeTabId: this.props.startActiveTab };

    handleChangeTab = (activeTabId) => {
        this.setState({ activeTabId });
    }

    render() {
        const items = this.props.items;
        const selectContent = items.find(item => {
            return (item.source.id === this.state.activeTabId) ? item : null;
        });

        return (
            <div className="tab-container">
                <div className="tab-nav">
                    {items.map(item => {
                        const { source: { id, name } } = item;

                        return <div
                            key={id}
                            className={`tab-nav-item ${this.state.activeTabId === id ? 'active' : ''}`}
                            onClick={() => this.handleChangeTab(id)}
                        >
                            {name}
                        </div>
                    })}
                </div>
                {Boolean(selectContent) && <div className="tab-content-container">
                    <h3 className="tab-content-title">{selectContent.title}</h3>
                    <div className="tab-content-text">{selectContent.description}</div>
                    <div className="tab-content-auth">{selectContent.author}</div>
                </div>}
            </div>
        )
    }
}

Tab.defaultProps = {
    startActiveTab: 'props',
    items: [
        {
            source: {
                id: 'props',
                name: 'Props'
            },
            author: 'React',
            title: 'Information about Props',
            description: 'With createReactClass(), you have to provide a separate getInitialState method that returns the initial state:',
            url: 'https://reactjs.org/docs/react-without-es6.html#declaring-default-props',
            urlToImage: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiA_q-AgKDhAhXJR5oKHXN0AR0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.kirupa.com%2Freact%2Ftransferring_properties.htm&psig=AOvVaw1_y-fE_1j3XF1JgPJTdqqY&ust=1553696320018323',
            publishedAt: new Date(),
            content: null
        }, {
            source: {
                id: 'state',
                name: 'State'
            },
            author: 'React',
            title: 'Information about State',
            description: 'In React components declared as ES6 classes, methods follow the same semantics as regular ES6 classes. This means that they don’t automatically bind this to the instance. You’ll have to explicitly use .bind(this) in the constructor:',
            url: 'https://reactjs.org/docs/react-without-es6.html#setting-the-initial-state',
            urlToImage: 'https://i.imgur.com/DXuSNbw.png',
            publishedAt: new Date(),
            content: null
        }, {
            source: {
                id: 'context',
                name: 'Context'
            },
            author: 'React',
            title: 'Context',
            description: 'Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, in the code below we manually thread through a “theme” prop in order to style the Button component:',
            url: 'https://reactjs.org/docs/context.html#when-to-use-context',
            urlToImage: 'https://i.imgur.com/DXuSNbw.png',
            publishedAt: new Date(),
            content: null
        }
    ]
}

export default Tab;
