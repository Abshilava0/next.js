"use client";

import * as React from "react";
import TextField from "@mui/material/TextField";


import { useState } from "react";
import Button from "./Button";
import Modal from "../modal/Modal";
import classes from "./ClientLayout.module.css";

export default function ClientLayout({ children }) {
  const [modalIsOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* This children element renderes page content when passed in layout js */}
      {children}
      <Button onClick={() => setIsModalOpen(true)}></Button>

      <Modal
        isOpen={modalIsOpen}
        onClose={() => setIsModalOpen(false)}
        className={classes.modal}
      >
        <div className={classes.modalText}>
          <h1>Contact Us</h1>
          <div className={classes.form}>
            <div className={classes.formElement}>
              <TextField label="Name" name="name" variant="outlined" fullWidth  sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray", // default border
                  },
                  "&:hover fieldset": {
                    borderColor: "darkgray", // on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "gray", // when clicked/focused
                  },
                },
                "& label.Mui-focused": {
                  color: "gray", // optional: label color on focus
                },
              }} />
            </div>
            <div className={classes.formElement}>
              <TextField label="Email" name="email" variant="outlined" fullWidth  sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray", // default border
                  },
                  "&:hover fieldset": {
                    borderColor: "darkgray", // on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "gray", // when clicked/focused
                  },
                },
                "& label.Mui-focused": {
                  color: "gray", // optional: label color on focus
                },
              }} />
            </div>
            <div className={classes.formElement}>
              <TextField label="Message" name="message" variant="outlined" fullWidth multiline rows={3}  sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray", // default border
                  },
                  "&:hover fieldset": {
                    borderColor: "darkgray", // on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "gray", // when clicked/focused
                  },
                },
                "& label.Mui-focused": {
                  color: "gray", // optional: label color on focus
                },
              }} />
            </div>

          </div>
        </div>
      </Modal>
    </>
  );
}
