import React  from 'react';
import Home from './screens/Home';

import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
    $primary: '#34495e',
});

const App = () => {
    return (
        <Home />
    );
};

export default App;