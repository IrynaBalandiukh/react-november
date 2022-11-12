import React, {useReducer, useState} from 'react';

const reducer = (state, action) => {
    switch(action.type) {
        case 'addCat':
            return {...state, cats:[...state.cats, {name: action.payload, id: Date.now()}]}
        case 'deleteCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload)}

        case 'addDog':
            return {...state, dogs: [...state.dogs, {name: action.payload, id: Date.now()}]}
        case 'deleteDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload)}

        default:
            console.error('невідомий тип')
            return state
    }
}

const DogsCats = () => {
    const [state, dispatch] = useReducer(reducer, {cats:[], dogs:[]});
    const [catValue, setCatValue] = useState('');
    const [dogValue, setDogValue] = useState('');

    const createCat = () => {
        dispatch({type:'addCat', payload: catValue})
        setCatValue('')
    }

    const createDog = () => {
        dispatch({type: 'addDog', payload: dogValue})
        setDogValue('')
    }
    return (
        <div>
            <div>
                <div>
                    <label>Cat name<input type="text" onChange={({target}) => setCatValue(target.value)} value={catValue}/></label>
                    <button onClick={createCat}>save</button>
                </div>
                <hr/>
                <div>
                    {state.cats.map(cat => <div key={cat.id}>
                        {cat.name}
                        <button onClick={()=> dispatch({type: 'deleteCat', payload: cat.id})}>delete</button>
                    </div>)}
                </div>
            </div>
            <div>
                <div>
                    <label>Dog name<input type="text" onChange={({target}) => setDogValue(target.value)} value={dogValue}/></label>
                    <button onClick={createDog}>save dog</button>
                </div>
                <hr/>
                <div>
                    {state.dogs.map(dog => <div key={dog.id}>
                        {dog.name}
                        <button onClick={() => dispatch({type: 'deleteDog', payload: dog.id})}>delete</button>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export {DogsCats};