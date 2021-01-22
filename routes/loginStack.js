import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/login';
import MoviesList from '../screens/moviesList';
import MovieDetails from '../screens/movieDetails';

const screens = {
    Login: {
        screen: Login
    },
    MoviesList: {
        screen: MoviesList
    },
    MovieDetails: {
        screen: MovieDetails
    }
}

const LoginStack = createStackNavigator(screens);
export default createAppContainer(LoginStack);

