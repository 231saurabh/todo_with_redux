import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import { v1 as id } from 'uuid';
import { useDispatch } from 'react-redux';

function TodoInput() {
    let [name, setName] = useState();
    let dispatch = useDispatch();
    return (
        <div>
            <div className="row">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" className="col form-control" />
                <button
                    onClick={() => {
                        dispatch(addTodo({
                            id: id(),
                            name: name
                        }));
                        setName('');
                    }}
                    className="btn btn-primary btn-sm">Add</button>
            </div>
        </div>
    )
}

export default TodoInput