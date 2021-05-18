import React from 'react'
import './SendEmail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from './features/emailSlice';
import { db } from './firebase';
import firebase from 'firebase'

function SendEmail() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        dispatch(closeSendMessage());
    };



    return (
        <div className="sendEmail">
            <div className="sendEmail__header">
                <h3>New Message</h3>
                <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendEmail__close" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="to"
                    placeholder="To"
                    type="email"
                    {...register("to", { required: true })}
                />
                {errors.to && <p className="sendEmail__error">To is Required!</p>}
                <input
                    placeholder="Subject"
                    type="text"
                    {...register('subject', { required: true })}
                />
                {errors.subject && (<p className="sendEmail__error">Subject is Required!</p>)}
                <input
                    className="sendEmail__message"
                    placeholder="Message..."
                    type="text"
                    {...register('message', { required: true })}
                />
                {errors.message && (<p className="sendEmail__error">message is Required!</p>)}

                <div className="sendEmail__options">
                    <Button className="sendEmail__send"
                        variant="contained"
                        color="primary"
                        type="submit">
                        Send</Button>
                </div>
            </form>

        </div>
    )
}

export default SendEmail
