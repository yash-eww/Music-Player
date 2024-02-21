import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function RemoveModal({
  open,
  handleClose,
  handleRemoved,
}: {
  open: boolean;
  handleClose: any;
  handleRemoved: any;
}) {
  return (
    <React.Fragment>
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            minWidth: "420px",
            borderRadius: "15px",
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <h1 className="text-2xl font-semibold text-left p-5">
          Delete from Your Song?
        </h1>

        <div className="flex gap-10 justify-end w-full pb-5 pr-5">
          <Button
            onClick={handleClose}
            sx={{
              color: "black",
              fontWeight: 700,
            }}
          >
            cancel
          </Button>
          <Button
            onClick={handleRemoved}
            sx={{
              backgroundColor: "#1FDF64",
              color: "black",
              fontWeight: 700,
              borderRadius: 200,
              px: "20px",
              ":hover": {
                backgroundColor: "#1FDF64",
              },
            }}
          >
            Delete
          </Button>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
