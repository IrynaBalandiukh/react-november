import React, {useState} from 'react';

const Form2 = () => {
    const [user, setUser] = useState({});

    const getUser = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
    }

    return (
        <div>
            <div><label>Name<input type="text" name={'name'} onChange={getUser}/></label></div>
            <div><label>Age<input type="number" name={'age'} onChange={getUser}/></label></div>

        </div>
    );
};

export {Form2};