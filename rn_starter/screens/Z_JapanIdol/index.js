import { createStackNavigator } from 'react-navigation';

import Signin from './Sign_in';
import Signup from './Sign_in/Sign_up';
import Account from './Account';
import Idols from './Idols';

export default createStackNavigator({
    Signin,
    Signup,
    Account,
    Idols
});