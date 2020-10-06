import React from "react";
import { node, func, oneOf } from "prop-types";
import Button from "@material-ui/core/Button";

const PrimaryButton = (props) => {
  const { children, ...buttonProps } = props;
  return (
    <Button variant="contained" color="primary" {...buttonProps}>
      {children}
    </Button>
  );
};

PrimaryButton.propTypes = {
  /**
   * Button contents
   */
  children: node,
  /**
   * Optional click handler
   */
  onClick: func,
  /**
   * How large should the button be?
   */
  size: oneOf(['small', 'medium', 'large']),
};

PrimaryButton.defaultProps = {
  children: '',
  onClick: undefined,
  size: 'medium',
};

export default PrimaryButton;
