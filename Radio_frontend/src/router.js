import React from 'react';
import Login from './components/ChatRoom.js'
import  ChatRoom from './components/ChatRoom.js';


const routes = [
    
    {
        path : '/login',
        exact : false,
        main : ({location}) => <Login location={location} />
    },
    {
        path : '/chat',
        exact : false,
        main : ({ match, location }) => <ChatRoom match={match} location={location} />
    }
];

export default routes;