import React from 'react';

import {carService} from "../../services";

const Car = ({car, setCarForUpdate, setDeletedCarId}) => {
    const deleteCar = async () => {
        await carService.deleteById(car.id)
        setDeletedCarId(car.id)
    }

    return (
        <div>
            <div>Id: {car.id}</div>
            <div>Model: {car.model}</div>
            <div>Price: {car.price}</div>
            <div>Year: {car.year}</div>
            <button onClick={() => deleteCar()}>delete</button>
            <button onClick={() => setCarForUpdate(car)}>update</button>
            <br/>
        </div>
    );
};

export {Car};
