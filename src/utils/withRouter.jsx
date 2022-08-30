import { useParams, useNavigate, useLocation } from 'react-router-dom';

export const withRouter = Component => {
    function ComponentWithRouterProp(props) {
        let params = useParams();
        let location = useLocation();
        let navigate = useNavigate();

        return (
            <Component
                {...props}
                params={params}
                location={location}
                navigate={navigate}
            />
        );
    }

    return ComponentWithRouterProp;
};
