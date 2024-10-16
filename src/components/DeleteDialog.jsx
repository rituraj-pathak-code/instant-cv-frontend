
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Button from "./Button";

const DeleteDialog = ({ isOpen, setIsOpen, deleteHandler }) => {
    const onDelete = () => {
        deleteHandler();
        setIsOpen(false)
    }
  return (
    <>
    <Dialog
      open={isOpen}
      onClose={()=>setIsOpen(false)}
      aria-labelledby="alert-dialog-delete-resume"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Delete Resume?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
         Are you sure you want to delete this resume. All the data will be permanently deleted.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button category="info" onClick={()=>setIsOpen(false)}>Cancel</Button>
        <Button category="error" onClick={onDelete}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  </>
  );
};

export default DeleteDialog;