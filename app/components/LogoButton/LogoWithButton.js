import React from 'react';

import {
    View,
    Text
} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/Foundation';
import { Button } from 'react-native-elements';

const LogoWithButton = ({ onPress }) => {
    return (
        <View style={styles.container}>

            <Icon style={styles.logo} name='foot' size={90} color='white' />
            <Text style={styles.text}>
                Start Here
            </Text>
            <Button
                style={styles.button}
                raised
                iconRight={true}
                icon={{name: 'chevron-right', size: 20, type: 'octicon'}}
                buttonStyle={{backgroundColor: styles.$buttonColor, borderRadius: 1}}
                textStyle={{textAlign: 'center'}}
                title='NEXT'
                onPress={onPress}
            />
        </View>
    )
};

LogoWithButton.porpTypes = {
    onPress: PropTypes.func
};

export default LogoWithButton;