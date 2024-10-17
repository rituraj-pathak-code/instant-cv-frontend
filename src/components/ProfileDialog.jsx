
import { Avatar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Button from "./Button";

const ProfileDialog = ({ isOpen, setIsOpen }) => {
    const userPhoto = localStorage.getItem('userPhoto');
    const userEmail = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('user');
    const onClose = () => {
        setIsOpen(false)
    }
  return (
    <>
    <Dialog
      open={isOpen}
      onClose={()=>setIsOpen(false)}
      aria-labelledby="alert-dialog-profile"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" className="text-center">
        {"Your Profile"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
            <div className="min-w-[360px] flex flex-col justify-center items-center gap-4">
            <Avatar
              alt={userName}
              src={userPhoto}
              sx={{ width: 100, height: 100 }}
            />
            <div className="text-center">
                <h3 className="text-xl font-bold">{userName}</h3>
                <p className="">{userEmail}</p>
            </div>
            </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  </>
  );
};

export default ProfileDialog;