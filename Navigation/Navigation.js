import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import ViewSignIn from '../Components/ViewSignIn'
import ViewSettings from '../Components/ViewSettings'


const ViewSignInStackNavigator = createStackNavigator({
    ViewSignIn: {
        screen: ViewSignIn,
        navigationOptions: {
            title: "S'inscrire"
        }
    },
    ViewSetting: {
        screen: ViewSettings,
        navigationOptions: {
            title: "Préférences"
        }
    }
});

export default createAppContainer(ViewSignInStackNavigator);
