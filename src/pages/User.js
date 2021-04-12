import React from 'react'
import {connect} from "react-redux";
import {Card, Image} from "semantic-ui-react";

export const Component = ({currUser}) => {
    console.log('user', currUser)
    return (
            <Card>
                <Image src={currUser && currUser.ing}/>
                <Card.Content>
                    <Card.Header>{currUser && currUser.name} {currUser && currUser.lastName}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Year of birth: {currUser && currUser.year}</span>
                    </Card.Meta>
                    <Card.Description>
                        Country: {currUser && currUser.location}
                    </Card.Description>
                </Card.Content>
            </Card>
    )
}

const mapStateToProps = (state) => ({
    currUser: state.currUser,
});

export default connect(mapStateToProps)(Component);