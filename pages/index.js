import React, { useState, useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";
import emailField from "../components/emailField";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  FormControlLabel
} from "@material-ui/core";

const Home = () => {
  const [email, setEmail] = useState("");
  // TODO: Hook this up to context provider
  // const [state, setState] = useContext()

  const updateContext = () => {};

  return (
    <div>
      <emailField />
    </div>
  );
};

export default Home;
