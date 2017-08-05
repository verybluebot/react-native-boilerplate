import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import PropTypes from 'prop-types';

import { ContainerMain } from '../components/Container';
import { LogoWithButton } from '../components/LogoButton';

class Home extends Component {
    static propTypes = {
        navigation: PropTypes.object
    };

    render() {
        return (
            <ContainerMain>
                <StatusBar barStyle="light-content" />
                <LogoWithButton onPress={() => this.props.navigation.navigate('Start')} />
            </ContainerMain>
        )
    }
};

export default Home;