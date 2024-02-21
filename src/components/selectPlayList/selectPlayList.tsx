import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { MyPlayList } from "@/types";
import "./playListCard.css";
import Image from "next/image";

export default function SelectPlayList({
  open,
  handleClose,
  List,
  handleSong,
}: {
  open: boolean;
  handleClose: any;
  List: MyPlayList[];
  handleSong: (id: string) => void;
}) {
  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText>Select PlayList</DialogContentText>
          <div className="main">
            {List.map((x) => (
              <div
                key={Math.random()}
                className="loader"
                onClick={() => {
                  handleSong(x.id);
                  handleClose();
                }}
              >
                <div className="song">
                  <p className="name">{x.name}</p>
                  <p className="artist">Jim Corce</p>
                </div>
                {x?.images[0]?.url ? (
                  <Image
                    src={x?.images[0]?.url}
                    alt=""
                    className=" albumcover"
                  />
                ) : (
                  <div className="albumcover"></div>
                )}
                {/* <div className="loading">
          <div className="load"></div>
          <div className="load"></div>
          <div className="load"></div>
          <div className="load"></div>
        </div> */}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
