import React, {useState} from 'react'
import {Button, Modal} from 'semantic-ui-react'
import {getUser, sendRequest} from '../actions/actions'

function ModalExampleContentImage() {
    const [open, setOpen] = React.useState(false)
    const [user, setUser] = useState({
        name: '',
        lastName: '',
        year: '',
        location: ''
    })
    const onChangeUser = (field, value) => {
        let test = user;
        test[field] = value;
        setUser({...test});
    }

    const onClickOk = async () => {
        await sendRequest(user)
        setOpen(false)
    }
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button className='cross'><i className="plus icon"/></Button>}
        >
            <Modal.Header>Upload image</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <form className="ui form">
                        <div className="field">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={user.name}
                                onChange={(e) => onChangeUser('name', e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="last-name"
                                placeholder="Last Name"
                                value={user.lastName}
                                onChange={(e) => onChangeUser('lastName', e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label>Location</label>
                            <input
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={user.location}
                                onChange={(e) => onChangeUser('location', e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label>Year of birth</label>
                            <input
                                type="text"
                                name="Year-of-birth"
                                placeholder="Year of birth"
                                value={user.year}
                                onChange={(e) => onChangeUser('year', e.target.value)}
                            />
                        </div>
                    </form>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={onClickOk} positive>
                    Ok
                </Button>
            </Modal.Actions>
        </Modal>
    )
}
export default ModalExampleContentImage