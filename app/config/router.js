import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Start from '../screens/Start';

export default StackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                header: () => null
            }

        },
        Start: {
            screen: Start
        }
    },
    {
        headerMode: 'screen'
    }
)
