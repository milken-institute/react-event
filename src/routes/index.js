import HomeContainer from '../containers/HomeContainer';
import ProfileContainer from '../containers/ProfileContainer';

const indexRoutes = [
    {
        path: '/',
        exact: true,
        component: HomeContainer
    },
    {
        path:'/profile',
        exact: true,
        component:ProfileContainer
    }
];
export default indexRoutes;