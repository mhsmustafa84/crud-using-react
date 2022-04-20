import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import ShowItems from './components/ShowItems/ShowItems';
import AddItems from './components/AddItems/AddItems';
import 'bootstrap/dist/css/bootstrap.min.css';

const getId = () => Math.floor(Math.random() * 10000);

const App = () => {
    const [state, setState] = useState([
        {
            id: getId(),
            name: 'Mostafa',
            age: 27,
            work: 'Developer',
            email: 'mhsmustafa84@gmail.com',
            isEdit: false,
        },
    ]);
    const [editableItem, setEditableItem] = useState(null);

    const deleteItem = (item) => {
        const items = state.filter(({ id }) => id !== item.id);
        setState(items);
    };

    const editItem = (item) => {
        setEditableItem({ ...item, isEdit: true });
    };

    const addItems = (item) => {
        item.isEdit = false;
        if (!item.id) {
            item.id = getId();
            setState([...state, item]);
            return;
        }
        const items = state.filter(({ id }) => id !== item.id);
        setState([...items, item]);
    };

    return (
        <div className='bg-secondary vh-100 pt-5'>
            <div className='container'>
                <Table
                    striped
                    borderless
                    hover
                    responsive
                    variant='dark'
                    className='text-center'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Work</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <AddItems
                            addItems={addItems}
                            editableItem={editableItem}
                            setEditableItem={setEditableItem}
                        />
                        <ShowItems
                            items={state}
                            deleteItem={deleteItem}
                            editItem={editItem}
                        />
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default App;
