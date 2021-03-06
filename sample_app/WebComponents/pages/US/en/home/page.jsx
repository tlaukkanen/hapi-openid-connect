/**
 * @author Ali Ismael <ali@gaaiat.com>
 */
"use strict";

import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";

import RootTemplate from "pages/templates/root_react_template";

/**
 * An example of how to extend the parent template, and replace the elements that the
 * parent template allows for overriding.
 */
export default class AppMainPage extends RootTemplate {
    constructor(props) {
        super(props);

        // this.bodyTop = <PageBodyTop />;
        // this.bodyMain = <PageBodyMain id="t24" ref={(bdyMnRef) => {
        //     this.__bodyMainRef = bdyMnRef;
        // }} />;
        // this.bodyBottom = <PageBodyBottom id="q122" onClick={() => {
        //     this.__bodyMainRef.setNewGraphData({age: Math.random()});
        // }} />;
    }

    /**
     * [handleClick description]
     * @return {[type]} [description]
     */
    handleClick() {
        this.__bodyMainRef.setState({age: Math.random()});
    }

    /**
     * You should never override the render method of the parent template!
     */
    createBody() {

        return (

            <div>
                <h1>Welcome to OIDC sample app</h1>
            </div>
        );
    }
}
