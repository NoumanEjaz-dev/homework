import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    messageBox: {
      width: "91%",
      height: "150px !important",
      borderRadius: "5px",
      padding: "5px",
    },
  })
);

export default function TextArea() {
  const classes = useStyles();

  return (
    <TextareaAutosize
      className={classes.messageBox}
      maxRows={8}
      placeholder="Enter your message"
    />
  );
}
