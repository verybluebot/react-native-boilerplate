import React from 'react';
import {
    View,
    Text
} from 'react-native';

import { ContainerMain } from '../components/Container';

const Home = (props) => {
    return (
        <ContainerMain>
            <View>
                <Text>
                    this is home
                </Text>
            </View>
        </ContainerMain>
    )
};

export default Home;