import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";

const CarForm = ({setNewCar, carForUpdate, setUpdatedCar, setCarForUpdate}) => {
    const [formErr, setFormErr] = useState({});
    const {register, reset, handleSubmit, formState:{errors, isValid}, setValue} = useForm({resolver: joiResolver(carValidator), mode:"onTouched"});

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    }, [carForUpdate])

    const submit = async (car) => {
        try {
            if (carForUpdate) {
                const {data} = await carService.updateById(carForUpdate.id, car);
                setUpdatedCar(data);
                setCarForUpdate(false);
            } else {
                const {data} = await carService.create(car);
                setNewCar(data);
            }
            reset();
        } catch (e) {
            setFormErr(e.response.data)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            {formErr.model && <span>{formErr.model[0]}</span>}
            <div><label>Price: <input type="number" {...register('price', {valueAsNumber: true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            {formErr.price && <span>{formErr.price[0]}</span>}
            {/*<div><label>Price: <input type="number" {...register('price.full', {valueAsNumber: true})}/></label></div>*/}
            {/*<div><label>Price: <input type="number" {...register('price.sale', {valueAsNumber: true})}/></label></div>*/}
            {/*{price: {*/}
            {/*    full: 1235,*/}
            {/*    sale: 364*/}
            {/*}}           */}
            <div><label>Year: <input type="number" {...register('year', {valueAsNumber: true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            {formErr.year && <span>{formErr.year[0]}</span>}
            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>
        </form>
    );
};

export {CarForm};