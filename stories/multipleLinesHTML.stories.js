import "../node_modules/tinymce/skins/ui/oxide/skin.min.css";
import "../node_modules/tinymce/skins/ui/oxide/content.min.css";
import "../node_modules/tinymce/skins/content/default/content.css";

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { initializeIcons } from "@uifabric/icons";
import MultipleLinesHTML from "../src/jsx/multipleLinesHTML";

initializeIcons();

storiesOf("MultipleLinesHTML", module)
  .add("Initial", () => <MultipleLinesHTML />)
  .add("with props initialValue ", () => (
    <MultipleLinesHTML initialValue="Hello" />
  ))
  .add("with props isDisabled ", () => <MultipleLinesHTML isDisabled />)
  .add("with props onHTMLChange ", () => (
    <MultipleLinesHTML onHTMLChange={action("onHTMLChange")} />
  ));
