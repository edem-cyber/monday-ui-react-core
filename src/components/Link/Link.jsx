import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import NOOP from "lodash/noop";
import "./Link.scss";
import { LINK_TARGET, ICON_POSITION } from "./LinkConsts";
import Icon from "../Icon/Icon";

const Link = ({
  componentClassName,
  href,
  text,
  rel,
  onClick,
  target,
  ariaLabelDescription,
  icon,
  iconPosition,
  id
}) => {
  const isStart = iconPosition === ICON_POSITION.START;

  return (
    <a
      id={id}
      href={href}
      rel={rel}
      onClick={onClick}
      target={target}
      className={cx("monday-style-link", componentClassName)}
      aria-label={ariaLabelDescription}
    >
      {getIcon(isStart, icon, "monday-style-link--icon-start")}
      <span className="monday-style-link--text">{text}</span>
      {getIcon(!isStart, icon, "monday-style-link--icon-end")}
    </a>
  );
};

function getIcon(shouldShow, icon, className) {
  if (!shouldShow) return;
  return (
    <Icon
      className={className}
      clickable={false}
      icon={icon}
      iconType={Icon.type.ICON_FONT}
    />
  );
}

Link.target = LINK_TARGET;
Link.position = ICON_POSITION;

Link.propTypes = {
  componentClassName: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string,
  rel: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.oneOf([
    LINK_TARGET.NEW_WINDOW,
    LINK_TARGET.PARENT,
    LINK_TARGET.SELF,
    LINK_TARGET.TOP
  ]),
  ariaLabelDescription: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf([ICON_POSITION.START, ICON_POSITION.END]),
  id: PropTypes.string
};

Link.defaultProps = {
  componentClassName: "",
  href: "",
  text: "",
  rel: "noreferrer",
  onClick: NOOP,
  target: LINK_TARGET.NEW_WINDOW,
  ariaLabelDescription: "",
  icon: "",
  iconPosition: ICON_POSITION.START,
  id: ""
};

export default Link;
