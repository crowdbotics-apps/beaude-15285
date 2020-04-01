import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList24559Navigator from '../features/NotificationList24559/navigator';
import Add-Item24542Navigator from '../features/Add-Item24542/navigator';
import Camera24541Navigator from '../features/Camera24541/navigator';
import Contacts24539Navigator from '../features/Contacts24539/navigator';
import BlankScreen24538Navigator from '../features/BlankScreen24538/navigator';
import Settings24523Navigator from '../features/Settings24523/navigator';
import SignUp124521Navigator from '../features/SignUp124521/navigator';
import TimeTracking24515Navigator from '../features/TimeTracking24515/navigator';
import UserProfile24513Navigator from '../features/UserProfile24513/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
NotificationList24559: { screen: NotificationList24559Navigator },
Add-Item24542: { screen: Add-Item24542Navigator },
Camera24541: { screen: Camera24541Navigator },
Contacts24539: { screen: Contacts24539Navigator },
BlankScreen24538: { screen: BlankScreen24538Navigator },
Settings24523: { screen: Settings24523Navigator },
SignUp124521: { screen: SignUp124521Navigator },
TimeTracking24515: { screen: TimeTracking24515Navigator },
UserProfile24513: { screen: UserProfile24513Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
