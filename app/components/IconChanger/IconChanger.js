import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';
import { submitNewText } from '../../actions/main';

class IconChanger extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func
    };

    onSubmitText(text) {
        this.props.dispatch(submitNewText(text))
    }

    render(){
        return(
            <View style={styles.container}>

                <Text style={styles.text}>
                    Change main Page '{this.props.mainText}'
                </Text>

                <TextInput
                    placeholder='Enter new text'
                    style={styles.input}
                    onChangeText={(text) => this.onSubmitText(text)}
                    underlineColorAndroid='transparent'
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    mainText: state.main.mainText
});

export default connect(mapStateToProps)(IconChanger);