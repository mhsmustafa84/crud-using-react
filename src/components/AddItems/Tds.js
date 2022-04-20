import React from 'react';

const inputProps = {
    name: {
        id: 'name',
        type: 'text',
        placeholder: 'Enter Name',
    },
    age: {
        id: 'age',
        type: 'text',
        placeholder: 'Enter Age',
    },
    work: {
        id: 'work',
        type: 'text',
        placeholder: 'Enter Work',
    },
};

export const Tds = ({ state, getInputValue }) => {
    const tds = [];
    for (const prop in inputProps) {
        if (Object.hasOwnProperty.call(inputProps, prop)) {
            tds.push(
                <td key={prop}>
                    <input
                        type={inputProps[prop].type}
                        placeholder={inputProps[prop].placeholder}
                        id={inputProps[prop].id}
                        onChange={getInputValue}
                        value={state[prop]}
                        required={true}
                    />
                </td>
            );
        }
    }
    return tds;
};
