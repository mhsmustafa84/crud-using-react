import React from 'react';
import { Button } from 'react-bootstrap';

const ShowItems = ({ items, deleteItem, editItem }) => {
    return (
        <>
            {items.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.work}</td>
                        <td>
                            <Button
                                className='m-1'
                                onClick={() => editItem(item)}
                                variant='warning'>
                                Edit
                            </Button>
                            <Button
                                className='m-1'
                                onClick={() => deleteItem(item)}
                                variant='danger'>
                                Delete
                            </Button>
                        </td>
                    </tr>
                );
            })}
        </>
    );
};

export default ShowItems;
