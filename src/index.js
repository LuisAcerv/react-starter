import React from "react";
import ReactDOM from "react-dom";

const title = "My Minimal React Webpack Babel Setup";

ReactDOM.render(<div>{title}</div>, document.getElementById("app"));

// commit 1
// commit 2

module.hot.accept();
