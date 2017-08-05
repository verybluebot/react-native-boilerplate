import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { ContainerMain } from '../components/Container';
import { IconChanger } from '../components/IconChanger';

class Start extends Component {
    render() {
        return (
            <ContainerMain>
                <StatusBar barStyle="default" />
                <IconChanger />
            </ContainerMain>
        )
    }
}

export default Start;