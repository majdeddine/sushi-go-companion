import React from "react";
import { oneOf } from "prop-types";
import GDMLogo from "resources/images/main-logo00.svg";
import StyledLogo from "./styledLogo";

const logos = [{ variant: "white", logo: GDMLogo }];

const getLogoByVariant = variant => logos.find(logo => logo.variant === variant);

const Logo = ({ variant, size }) => (
  <StyledLogo size={size}>
    <img src={getLogoByVariant(variant).logo} alt="GDM Logo" />
  </StyledLogo>
);

Logo.propTypes = {
  size: oneOf(["small", "medium", "large"]),
  variant: oneOf(["white"]),
};

Logo.defaultProps = {
  size: "small",
  variant: "white",
};

export default Logo;
