import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('add successfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <h1>hello world add services</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" /> <br />
                <input {...register("description")} placeholder="Description" /> <br />
                <input type="number" {...register("price")} placeholder="Price" /> <br />
                <input {...register("img")} placeholder="Image URL" /> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;