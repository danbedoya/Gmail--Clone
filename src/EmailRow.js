import React from 'react'
import './EmailRow.css'
import { Checkbox, IconButton, Snackbar } from '@material-ui/core';
import StarBorderOutlineIcon from '@material-ui/icons/StarOutline';
import LabelImportantOutlineIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectEmail } from './features/emailSlice';


function EmailRow({ id, title, subject, description, time }) {

    const history = useHistory();
    const dispatch = useDispatch();

    const openEmail = () => {
        dispatch(selectEmail({
            id,
            title,
            subject,
            description,
            time
        })

        );

        history.push("/email");
    };

    return (


        <div onClick={openEmail} className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlineIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlineIcon />
                </IconButton>

            </div>
            <h3 className="emailRow__title">
                {title}
            </h3>
            <div className="emailRow__message">
                <h4>{subject}{" "}
                    <span className="emailRow__description">-
                        {description}
                    </span>
                </h4>
            </div>
            <p className="emailRow__time">
                {time}
            </p>
        </div>
    )
}

export default EmailRow
