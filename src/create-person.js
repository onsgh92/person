import React from 'react'
import person from './persons'
import persons from './persons'

const create-person = ({person}) => {
    return (
        <div className="person">
            {person.map((el, key) => <Persons el={persons} /> )}
        </div>
    )
}

export default create-person