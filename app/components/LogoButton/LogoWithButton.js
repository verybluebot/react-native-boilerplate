import React from 'react';

import {
    View,
    Text
} from 'react-native';
import styles from './styles';

import Icon from 'react-native-vector-icons/Foundation';
import { Button } from 'react-native-elements';



const LogoWithButton = () => {
    return (
        <View style={styles.container}>

            <Icon name='foot' size={90} color='white' />
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
            />
        </View>
    )
};

export default LogoWithButton;