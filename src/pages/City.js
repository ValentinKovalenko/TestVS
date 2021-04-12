import React from 'react'
import {connect} from "react-redux";
import {Card, Image} from "semantic-ui-react";

export const Component = ({currCity}) => {
    console.log('city', currCity)
    return (
        <div>
            <Card>
                <Image src={currCity && currCity.img}  />
                <Card.Content>
                    <Card.Header>City {currCity && currCity.city}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Year of birth: {currCity && currCity.yearOfCreation}</span>
                    </Card.Meta>
                    <Card.Description>
                        Population: {currCity && currCity.population}
                    </Card.Description>
                </Card.Content>
            </Card>

        </div>
    )
}
const mapStateToProps = (state) => ({
    currCity: state.currCity,
});

export default connect(mapStateToProps)(Component);