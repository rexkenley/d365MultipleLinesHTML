import React from "react";
import { Provider } from "react-redux";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";

import store from "../js/store";
import TinyEditor from "./tinyMCE";

/**
 * @module multiplaLinesHTML
 */

const tinyEditor = React.createRef(),
  MultipleLinesHTML = props => {
    const { initialValue, onHTMLChange, isDisabled } = props;

    return (
      <Provider store={store}>
        <Fabric>
          <TinyEditor
            ref={tinyEditor}
            initialValue={initialValue}
            onHTMLChange={onHTMLChange}
            disabled={isDisabled}
          />
        </Fabric>
      </Provider>
    );
  };

/**
 * @exports multiplaLinesHTML/MultipleLinesHTML
 */
export default MultipleLinesHTML;

/**
 * @exports multiplaLinesHTML/loadHTML
 * @param {string} html
 */
export const setHTML = html => {
  try {
    tinyEditor.current.editor.setContent(html);
  } catch (ex) {
    console.warn(ex.message || ex);
  }
};

/**
 * @exports multiplaLinesHTML/getHTML
 * @returns {string}
 */
export const getHTML = () => {
  try {
    return tinyEditor.current.editor.getContent();
  } catch (ex) {
    console.warn(ex.message || ex);
  }
};
