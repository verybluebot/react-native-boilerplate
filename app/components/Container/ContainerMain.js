import React from 'react';
import { View } from 'react-native';
import styles from './styles';

import PropTypes from 'prop-types';

const ContainerMain = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
};

ContainerMain.propTypes = {
    children: PropTypes.any
};

export default ContainerMain;