import React from 'react'
import {Switch, Route} from 'react-router-dom'

import User from '../pages/User'
import City from '../pages/City'


export const useRoutes = () => {
    return (
        <Switch>
            <Route path ='/user/:id' exact component={User}/>
            <Route path ='/city/:id' exact component={City}/>
        </Switch>
    )
}