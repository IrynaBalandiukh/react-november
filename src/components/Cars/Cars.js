import React, {useEffect, useState} from 'react';
import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({newCar, setCarForUpdate, updatedCar}) => {
    const [cars, setCars] = useState([]);
    const [deletedCarId, setDeletedCarId] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    useEffect(() => {
        if (newCar) {
            // setCars([...cars, newCar])
            setCars(prevState => [...prevState, newCar])
        }
    }, [newCar])

    useEffect(() => {
        if (deletedCarId) {
            setCars(cars.filter(car => car.id !== deletedCarId))
        }
    }, [deletedCarId])

    useEffect(() => {
        if (updatedCar) {
            const car = cars.find(car => car.id === updatedCar.id);
            Object.assign(car, updatedCar);
            setCars([...cars])
        }
    }, [updatedCar])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setDeletedCarId={setDeletedCarId}/>)}
        </div>
    );
};

export {Cars};