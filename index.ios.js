import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './app/index';


export default class lightTemplateReact extends Component {
    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('lightTemplateReact', () => lightTemplateReact);
