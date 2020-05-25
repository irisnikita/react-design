import React from 'react';

const Home = React.lazy(() => import('Src/modules/Home'));
export default [
    {
        state: 'home',
        path: '/home',
        exact: true,
        name: 'Home',
        component: Home,
        resources: [
          
        ]
    }
];
