import React  from 'react';
import Navigator from './config/router';
import { addNavigationHelpers } from 'react-navigation';
import { Provider, connect } from 'react-redux';

import store from './config/store';

import EStyleSheet from 'react-native-extended-stylesheet';

// setting up app colors
EStyleSheet.build({
    $white: '#fff',
    $black: '#000',

    $primary: '#2196F3',
    $darkPrimary: '#1976D2',
    $lightPrimary: '#BBDEFB',
    $textColor: '#FFFFFF',
    $accentColor: '#FF4081',
    $primaryTextColor: '#212121',
    $secondaryTextColor: '#757575',
    $deviderColor: '#BDBDBD',
});

const App = ({ dispatch, nav }) =>  (
    <Navigator
        navigation={addNavigationHelpers({
            dispatch,
            state: nav
        })}
    />
);

const mapStateToProps = (state) => ({
    nav: state.nav
});

const AppWithNavigation = connect(mapStateToProps)(App);

export default () => (
        <Provider store={store}>
            <AppWithNavigation />
        </Provider>
);

