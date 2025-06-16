"use client";

import { useState } from "react";

import * as React from "react";
import TextField from "@mui/material/TextField";

import ImageSlideshow from "@/components/images/Image-slideshow";
import classes from "./page.module.css";

const contactImages = [
  { image: "/contact.jpg", alt: "contact 1" },
  { image: "/contact2.jpg", alt: "contact 2" },
  { image: "/contact3.jpg", alt: "contact 3" },
];

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.target);
    const payload = Object.fromEntries(form.entries());

    setStatus("loading");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <main className={classes.contactMain}>
      <div className={classes.imageCont}>
        <ImageSlideshow images={contactImages} />
      </div>
      <div className={classes.formCont}>
        <h1>Contact Us</h1>
        <p className={classes.contactText}>
          If you have any questions or feedback, feel free to reach out!
        </p>
        <form onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              sx={{
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
              }}
            />
          </div>
          <div className={classes.formGroup}>
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              sx={{
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
              }}
            />
          </div>
          <div className={classes.formGroup}>
            <TextField
              label="Message"
              name="message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray", // default border
                  },
                  "&:hover fieldset": {
                    borderColor: "darkgray", // on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "gray", // 👈 when clicked/focused
                  },
                },
                "& label.Mui-focused": {
                  color: "gray", // optional: label color on focus
                },
              }}
            />
          </div>
          <div className={classes.formGroup}>
            <button
              type="submit"
              disabled={status === "loading"}
              className={classes.submitButton}
            >
              {status === "loading" ? "Sending" : "Send Message"}
            </button>
            <div className={classes.statusMessages}>
              {status === "success" && (
                <span className={classes.successMessage}>Message sent</span>
              )}
              {status === "error" && (
                <span className={classes.errorMessage}>
                  Something went wrong.
                </span>
              )}
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
