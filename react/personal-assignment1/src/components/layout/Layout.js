import React from "react";
// import "./style.css";


//공통 css 속성

const Layout = (props) => {
  console.log('props.')
  return (<div>{props.children}</div>);
};

export default Layout;
