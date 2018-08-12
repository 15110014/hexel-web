import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ServicesPage from './pages/ServicesPage/Servicespage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/about',
        exact: false,
        main: () => <AboutPage/>
    },
    {
        path: '/services',
        exact: false,
        main: () => <ServicesPage/>
    },
    {
        path: '/projects',
        exact: false,
        main: () => <ProjectsPage/>
    },
    {
        path: '/contact',
        exact: false,
        main: () => <ContactPage/>
    },
    {
        path: '/',
        exact: false,
        main: () => <NotFoundPage/>
    }
];
export default routes;