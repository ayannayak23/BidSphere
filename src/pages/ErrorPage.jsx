import { Link, useRouteError } from "react-router-dom";
import notFound from '../assets/dino_404.svg';
import otherError from '../assets/other_error.svg';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    if (error.status === 404) {
        return (
            <div className="error-page">
                <img src={notFound} alt="404 Not Found" />
                <div>The page you are looking for does not exist.</div>
                <Link to="/">Go back to Home</Link>
            </div>
        );
    }
    else {
        return (
            <div className="error-page">
                <img src={otherError} alt="Error" />
                <h2>Something Went Wrong!</h2>
                <div>{error.statusText || error.message}</div>
            </div>
        );
    }
}

export default ErrorPage;