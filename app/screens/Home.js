import React from 'react';

import { ContainerMain } from '../components/Container';
import { LogoWithButton } from '../components/LogoButton';

const Home = (props) => {
    return (
        <ContainerMain>
            <LogoWithButton onPress={() => props.navigation.navigate('Start')} />
        </ContainerMain>
    )
};

export default Home;