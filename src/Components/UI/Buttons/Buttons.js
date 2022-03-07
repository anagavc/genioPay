import classnames from "classnames";
import { NavLink } from "react-router-dom";

export const SideNavButton = (props) => {
  return (
    <NavLink
      className={(navData) =>
        navData.isActive
          ? "font-body font-bold rounded inline-flex items-center bg-white text-green px-8 space-x-4 py-4 "
          : "rounded inline-flex items-center text-white font-body font-bold hover:bg-white hover:text-green px-8 space-x-4 py-4 hover:rounded-md transition duration-300 ease-in"
      }
      to={{ pathname: props.path }}
    >
      {props.children} <span>{props.caption}</span>
    </NavLink>
  );
};

export const PrimaryButton = (props) => {
  const buttonClass = classnames(
    "font-body font-normal text-sm px-9 py-3 rounded-md transition duration-300 ease-in",
    props.textColor,
    props.bgColor,
    props.hoverBg
  );
  return <button className={buttonClass}>{props.children}</button>;
};
