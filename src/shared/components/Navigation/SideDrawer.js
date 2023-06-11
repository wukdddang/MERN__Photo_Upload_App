import React from "react";
import { createPortal } from "react-dom";
import CSSTransition from "react-transition-group/CSSTransition";
import "./SideDrawer.css";

function SideDrawer(props) {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
      onClick={props.onClick}>
      <aside className="side-drawer">{props.children}</aside>
    </CSSTransition>
  );
  return createPortal(content, document.getElementById("drawer-hook"));
}

export default SideDrawer;
