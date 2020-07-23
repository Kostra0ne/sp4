import React from "react";
import {Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page">
      <h1 className="title">Home</h1>
      <h1 className="title">Installation</h1>
      <p>$ npm i react-router-dom</p>
      <Link to="/whatever">fake link here ...</Link>
      <h2 className="title">API reference</h2>
      check the doc{" "}
      <a
        href="https://reacttraining.com/react-router/web/guides/quick-start"
        target="_blank"
      >here</a>
    </div>
  );
}
