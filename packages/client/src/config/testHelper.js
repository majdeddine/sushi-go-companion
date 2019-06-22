import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { Theme } from "../resources/styles/theme";

const renderWithTheme = component =>
  renderer.create(<ThemeProvider theme={Theme}>{component}</ThemeProvider>);

export { renderWithTheme };
