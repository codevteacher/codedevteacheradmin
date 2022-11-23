import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));


const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', element: Dashboard },
    { path: '/forms/range', name: 'Range', element: Range },
];

export default routes;
