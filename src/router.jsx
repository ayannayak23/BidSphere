import { createBrowserRouter } from "react-router-dom";

import {
    HomePageLayout,
    LandingPage,
    ContactPage,
    ProductPage,
    ErrorPage
} from "./pages/index";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <HomePageLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path: "/contact",
                element: <ContactPage />
            },
            {
                path: "/item/:id",
                element: <ProductPage />
            },

        ],
    },
]);