import React, {useEffect, useState} from 'react'
import './App.css';
import {Main} from "./components/Main";
import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from "./components/routes";
import {connect} from "react-redux";
import * as actions from './actions/actions'
import ModalExampleContentImage from "./components/Modal";

function App({allUser, allCity}) {
    const routes = useRoutes()
    const [open, setOpen] = useState(true)

    useEffect(() => {
        actions.getUser()
        actions.getCity()
    }, [])

    return (
        <BrowserRouter>
            <div>
                <Main allCity={allCity} allUser={allUser}/>
                {routes}
                <ModalExampleContentImage show={open} />
            </div>
        </BrowserRouter>
    );
}

const mapStateToProps = (state) => ({
    allCity: state.allCity,
    allUser: state.allUser,
});


export default connect(mapStateToProps)(App);

