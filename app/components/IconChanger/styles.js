import EStyleSheet from 'react-native-extended-stylesheet';

import { Dimensions } from 'react-native';

const inputWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '600%'
    },
    text: {
        color: '$textColor',
        marginBottom: 10
    },
    input: {
        height: 40,
        color: '$textColor',
        borderColor: '$textColor',
        borderWidth: 1,
        borderRadius: 2,
        textAlign: 'center',
        width: inputWidth / 1.2
    }
})
