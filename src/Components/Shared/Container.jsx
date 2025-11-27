import React from "react";

const Container = ({ children, className }) => {
  return <div className={`${className} px-4 sm:px-6 lg:px-8`}>{children}</div>;
};

export default Container;
