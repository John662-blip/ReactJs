import { useLocation, useNavigate, useParams } from 'react-router-dom';

const withRouter = (Component) => {
    const Wrapper = (props) => {
        const navigate = useNavigate();
        const location = useLocation();
        const params = useParams();
        return (
            <Component
                navigate={navigate}
                {...props}
                location={location}
                params={params}
            />
        );
    };

    return Wrapper;
};
export default withRouter