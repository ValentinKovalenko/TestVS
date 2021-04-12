import React from 'react'
import {NavLink} from "react-router-dom";
import {Menu} from "semantic-ui-react";
import {connect} from "react-redux";
import {setCity, setUser} from "../actions/actions";

export const Main = ({allCity, allUser}) => {
    const handleItemClickUser = (item ) => {
        setUser(item);
    }
    const handleItemClickCity = (item ) => {
        setCity(item);
    }
    return (
        <Menu className="purple inverted">
            {allUser && <Menu.Item>
                {allUser.map((value) => <Menu.Item
                        as={NavLink}
                        to={`/user/${value.id}`}
                        name={value.name}
                        active={value.name === value.id}
                        onClick={() => handleItemClickUser(value)}
                    />
                )
                }
            </Menu.Item>}
            {allCity && <Menu.Item position='right'>
                {allCity.map((value) => <Menu.Item
                        as={NavLink}
                        to={`/city/${value.id}`}
                        name={value.city}
                        active={value.city === value.id}
                        onClick={()=>handleItemClickCity(value)}
                    />
                )
                }
            </Menu.Item>}
        </Menu>
    )
}
const mapStateToProps = (state) => ({
    allCity: state.allCity,
    allUser: state.allUser,
});


export default connect(mapStateToProps)(Main)

