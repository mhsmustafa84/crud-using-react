import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Tds } from './Tds';
import './AddItems.css';

const initialState = {
    name: '',
    age: '',
    work: '',
};

const AddItems = ({ addItems, editableItem, setEditableItem }) => {
    const [state, setState] = useState(initialState);
    const { name, age, work } = state;

    useEffect(() => {
        editableItem && setState(editableItem);
    }, [editableItem]);

    const getInputValue = ({ target }) => {
        setState({
            ...state,
            [target.id]: target.value,
        });
    };

    const save = () => {
        if (name === '' || age === '' || work === '') return;
        if (editableItem && editableItem.isEdit) {
            setEditableItem(null);
        }
        addItems(state);
        setState(initialState);
    };

    return (
        <tr>
            <Tds state={state} getInputValue={getInputValue} />
            <td>
                <Button
                    className='px-5 w-75'
                    variant='success'
                    disabled={name === '' || age === '' || work === ''}
                    onClick={save}>
                    {editableItem && editableItem.isEdit ? 'Update' : 'Save'}
                </Button>
            </td>
        </tr>
    );
};

export default AddItems;
