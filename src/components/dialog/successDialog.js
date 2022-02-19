import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';

const SuccessDialog = ({ open, setOpen, onSubmit }) => {
    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const pokedex = useSelector(store => store.pokedex);
    const validateName = () => {
        let isExist = pokedex.find(poke => poke.nickName === name);
        return !!isExist ? true : false;
    }


    const handleSubmit = () => {
        if (validateName()) {
            setError(true);
        } else {
            onSubmit(name);
            setError(false);
            setOpen(false);
        }

    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                <TextField
                    error={error}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Give me a name"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => setName(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Subscribe</Button>
            </DialogActions>
        </Dialog>

    );
}

export default SuccessDialog;