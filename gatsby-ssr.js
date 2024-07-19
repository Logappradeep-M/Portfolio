// /**
//  * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/ssr-apis/
//  */

//  // You can delete this file if you're not using it
const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
setHeadComponents([
<script
    key="bmc-widget"
    data-name="BMC-Widget"
    data-cfasync="false"
    src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
    data-id="logappradep"
    data-description="Support me on Buy me a coffee!"
    data-message=""
    data-color="#40DCA5"
    data-position="Right"
    data-x_margin="18"
    data-y_margin="18"
></script>,
]);
};
