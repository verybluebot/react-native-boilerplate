import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

class IconChanger extends Component {
    static propTypes = {
        navigation: PropTypes.object
    };

    render(){
        return(
            <View style={styles.container}>

                <Text style={styles.text}>
                    Change main Page 'Start Here'
                </Text>

                <TextInput
                    placeholder='Enter new text'
                    style={styles.input}
                    onEndEditing={() => null}
                />
            </View>
        )
    }
}

export default IconChanger;