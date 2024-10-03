import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

const TodoDetails = ({todoDetails, openDialog, setOpenDialog, setTodoDetails}) => {
    const handleClose = () => {
        setOpenDialog(false); 
        setTodoDetails(null);
    }
    return (
        <>
        <Dialog onClose={handleClose} open={openDialog}>
            <DialogTitle>{todoDetails?.todo}</DialogTitle>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
        </>
    )
};

export default TodoDetails;