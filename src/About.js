import React, { useContext } from "react";
import { ValueContext } from "./App";

const About = () => {
  const value = useContext(ValueContext);
  return <div>{value}</div>;
};

export default About;
