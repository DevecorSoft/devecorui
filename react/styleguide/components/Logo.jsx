import React from "react";

export default function LogoRenderer({children}) {
  return (
    <h1>
    <img src="/logo.svg" height={'24px'} alt="logo" />
    {children}
    </h1>
);
}
