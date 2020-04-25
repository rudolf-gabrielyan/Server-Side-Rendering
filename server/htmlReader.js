import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";


import fs from "fs";

const htmlReader = (props,res,Page) => {
    fs.readFile(path.resolve("./public/index.html"), "utf-8", (err, data) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Some error happened");
        }
        return res.send(
          data.replace(
            '<div id="root"></div>',
            `<div id="root">${ReactDOMServer.renderToString(<Page name={props} />)}</div>`
          )
        );
    });
}

module.exports = htmlReader;