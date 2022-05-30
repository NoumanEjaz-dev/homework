import { makeStyles, createStyles } from "@material-ui/core/styles";
import React from "react";
import InputField from "../components/inputfield/InputField";
import "../App.css";
import MainCard from "../components/box/MainCard";

const useStyles = makeStyles((theme) =>
  createStyles({
    contactForm: {
      marginTop: "20px !important",
    },
  })
);

export default function Contact() {
  const classes = useStyles();
  const inputRefs = React.useRef([React.createRef(), React.createRef()]);

  const [data, setData] = React.useState({});

  const handleChange = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    let isValid = true;

    for (let i = 0; i < inputRefs.current.length; i++) {
      const valid = inputRefs.current[i].current.validate();
      console.log(valid);
      if (!valid) {
        isValid = false;
      }
    }

    if (!isValid) {
      return;
    }

    console.log("Logged In");
    //Carry on as normal
  };

  return (
    <div className={classes.contactForm}>
      <MainCard>
        <div className="App">
          <form onSubmit={submitForm} className="form">
            <h1>Contact Form</h1>
            <InputField
              ref={inputRefs.current[0]}
              name="username"
              label="Name:"
              onChange={handleChange}
              validation={"required|min:6|max:12"}
            />
            <InputField
              ref={inputRefs.current[1]}
              name="email"
              label="Email:"
              validation="required|min:6"
              onChange={handleChange}
            />
            <InputField
              className={classes.messageBox}
              ref={inputRefs.current[2]}
              name="message"
              label="Message:"
              validation="required|min:8"
              onChange={handleChange}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </MainCard>
    </div>
  );
}
