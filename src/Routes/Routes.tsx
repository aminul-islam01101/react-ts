import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import RouteCheck from '../Components/RouteCheck';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import Root from './Root';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
            <Route path="/" element={<Home />} />
            <Route path="/route-check" element={<RouteCheck />} />

            {/* <Route path="/Signup" element={<RegistrationPage />} />

      <Route path="/login" element={<LoginPage />} /> */}
        </Route>
    )
);

export default router;
