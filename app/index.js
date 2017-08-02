import React  from 'react';
import Home from './screens/Home';

import EStyleSheet from 'react-native-extended-stylesheet';

// setting up app colors
EStyleSheet.build({
    $white: '#fff',
    $black: '#000',

    $primary: '#3498db',
});

const App = () => {
    return (
        <Home />
    );
};

export default App;