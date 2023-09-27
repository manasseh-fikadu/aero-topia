import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home/page";
import About from "./pages/about/page";
import Contact from "./pages/contact/page";
import Services from "./pages/services/page";
import Works from "./pages/works/page";
import Login from "./pages/admin/auth/login/page";
import Dashboard from "./pages/admin/dashboard/page";
import AddWorks from "./pages/admin/works/page";
import AddServices from "./pages/admin/services/page";
import ViewContact from "./pages/admin/contact/page";
import AddAbout from "./pages/admin/about/page";


export default createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/services',
        element: <Services />
    },
    {
        path: '/works',
        element: <Works />
    },
    {
        path: '/admin/auth/login',
        element: <Login />
    },
    {
        path: '/admin/dashboard',
        element: <Dashboard />
    },
    {
        path: '/admin/works',
        element: <AddWorks />
    },
    {
        path: '/admin/services',
        element: <AddServices />
    },
    {
        path: '/admin/contact',
        element: <ViewContact />
    },
    {
        path: '/admin/about',
        element: <AddAbout />
    }
])