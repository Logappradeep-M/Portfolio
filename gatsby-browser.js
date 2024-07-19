// /**
//  * Implement Gatsby's Browser APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/browser-apis/
//  */
const React = require("react");

exports.onClientEntry = () => {
const script = document.createElement("script");
script.setAttribute("data-name", "BMC-Widget");
script.setAttribute("data-cfasync", "false");
script.setAttribute("src", "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js");
script.setAttribute("data-id", "logappradep");
script.setAttribute("data-description", "Support me on Buy me a coffee!");
script.setAttribute("data-message", "");
script.setAttribute("data-color", "#40DCA5");
script.setAttribute("data-position", "Right");
script.setAttribute("data-x_margin", "18");
script.setAttribute("data-y_margin", "18");
document.body.appendChild(script);
};
