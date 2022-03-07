import classnames from "classnames";

export const Paragraph = ({ fontSize, textColor, children, fontWeight }) => {
  const fontClass = classnames("font-body ", fontSize, textColor, fontWeight);
  return <p className={fontClass}>{children}</p>;
};

export const HeadingTwo = ({ children }) => {
  const headingClass = classnames(
    "font-body font-bold text-lg font-black-dark "
  );
  return <h2 className={headingClass}>{children}</h2>;
};
export const HeadingThree = ({ children, fontSize }) => {
  const headingClass = classnames(
    "font-body font-bold  font-black-dark ",
    fontSize
  );
  return <h3 className={headingClass}>{children}</h3>;
};
export const HeadingOne = ({ children }) => {
  const headingClass = classnames(
    "font-body font-bold text-2xl font-black-dark "
  );
  return <h1 className={headingClass}>{children}</h1>;
};
