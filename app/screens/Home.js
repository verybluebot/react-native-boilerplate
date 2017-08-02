import React from 'react';
import {
    View,
    Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Foundation';
import { Button } from 'react-native-elements';

import { ContainerMain } from '../components/Container';

const Home = (props) => {
    return (
        <ContainerMain>
            <View >
                <Text>
                    this is home
                </Text>
                <Icon name='foot' size={30} color='white' />
                <Button
                    raised
                    iconRight={true}
                    icon={{name: 'chevron-right', size: 20, type: 'octicon'}}
                    buttonStyle={{backgroundColor: 'grey', borderRadius: 1}}
                    textStyle={{textAlign: 'center'}}
                    title='NEXT'
                />
            </View>
        </ContainerMain>
    )
};

export default Home;