import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const FailedDialog = ({ open, setOpen, onSubmit }) => {
    const [name, setName] = useState("");

    const handleSubmit = () => {
        onSubmit(name);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Failed</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Catch me again</Button>
            </DialogActions>
        </Dialog>

    );
}

export default FailedDialog;