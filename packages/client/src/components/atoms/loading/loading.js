import React from "react";
import loadingGif from "resources/images/spinner.gif";
import StyledLoading from "./styledLoading";

const Loading = () => (
  <StyledLoading>
    <img src={loadingGif} alt="Loading..." />
  </StyledLoading>
);

export default Loading;
