import React, {useRef} from 'react';

const Form1 = () => {
    const name = useRef();
    const age = useRef();

    const submit = (e) => {
        e.preventDefault();
        const userName = name.current.value;
        const userAge = age.current.value;
        const user = {name: userName, age: userAge};
        console.log(user);
    }

    return (
        <form onSubmit={submit}>
            <div><label>Name<input type="text" ref={name}/></label></div>
            <div><label>Age<input type="number" ref={age}/></label></div>
            <button>submit</button>
        </form>
    );
};

export {Form1};