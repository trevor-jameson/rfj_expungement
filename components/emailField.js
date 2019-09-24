import React, { useState, useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";
import caseForm from "../components/caseForm";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  FormControlLabel
} from "@material-ui/core";

const emailField = () => {
  const [email, setEmail] = useState("");
  // TODO: Hook this up to context provider
  // const [state, setState] = useContext()

  const updateContext = () => {};

  return (
    <FormControl onBlur={updateContext}>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input
        id="my-input"
        aria-describedby="my-helper-text"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <FormHelperText id="my-helper-text">
        We'll never share your email.
      </FormHelperText>
    </FormControl>
  );
};

export default emailField;
