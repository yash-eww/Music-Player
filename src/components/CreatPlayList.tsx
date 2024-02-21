import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import "./creatPlayList.css";

export default function CreatePlayList({
  open,
  handleClose,
  createPlayList,
}: {
  open: boolean;
  handleClose: any;
  createPlayList: (data: any) => void;
}) {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      desc: "",
      public: false,
    },
    onSubmit: (values) => {
      createPlayList(values);
    },
  });

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            minWidth: "420px",
            borderRadius: "15px",
          },
        }}
      >
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText>Create PlayList</DialogContentText>
        </DialogContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <div className="flex flex-col px-10 gap-6 w-full">
            <input
              type="text"
              name="name"
              placeholder="PlayList name"
              value={values.name}
              onChange={handleChange}
              className="input"
            />
            <input
              type="text"
              name="desc"
              placeholder="desc"
              value={values.desc}
              className="input"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-10 justify-end w-full p-5 pt-7">
            <Button
              onClick={handleClose}
              sx={{
                color: "black",
                fontWeight: 700,
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
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
              Create
            </Button>
          </div>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
