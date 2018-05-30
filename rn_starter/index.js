import { AppRegistry } from 'react-native';
import nav from './nav';
import Training from './screens/TrainingScreen';
import tester from './screens/TrainingScreen/test';

import Example01 from './screens/Example01';
import Example02 from './screens/Example02';
import Example03 from './screens/Example03';
import Example04 from './screens/Example04';

import Discord from './screens/Logins/Discord';
import Stack from './screens/NavigationExamples/StackNavigator';
import Switch from './screens/NavigationExamples/SwitchNavigator';
import Tab from './screens/NavigationExamples/TabNavigator';
import Drawer from './screens/NavigationExamples/DrawerNavigator';

import jpsidols from './screens/Z_JapanIdol';
import Signin from './screens/Z_JapanIdol/Sign_in';
import Signup from './screens/Z_JapanIdol/Sign_in/Sign_up';

// AppRegistry.registerComponent('rn_starter', () => nav);
// AppRegistry.registerComponent('rn_starter', () => Training);
// AppRegistry.registerComponent('rn_starter', () => tester);

// AppRegistry.registerComponent('rn_starter', () => Example01);
// AppRegistry.registerComponent('rn_starter', () => Example02);
// AppRegistry.registerComponent('rn_starter', () => Example03);
// AppRegistry.registerComponent('rn_starter', () => Example04);

// AppRegistry.registerComponent('rn_starter', () => Discord);


AppRegistry.registerComponent('rn_starter', () => jpsidols);
// AppRegistry.registerComponent('rn_starter', () => Signin);
// AppRegistry.registerComponent('rn_starter', () => Signup);

//NAVIGATION EXAMPLES
// AppRegistry.registerComponent('rn_starter', () => Switch);
// AppRegistry.registerComponent('rn_starter', () => Stack);
// AppRegistry.registerComponent('rn_starter', () => Tab);
// AppRegistry.registerComponent('rn_starter', () => Drawer);