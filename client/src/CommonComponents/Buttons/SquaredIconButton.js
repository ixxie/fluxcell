import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import iconButtonThemes from "./iconButtonThemes";
import withIconButton from "./withIconButton";

const SquaredIconButton = props => {
  const { onTouchStart, theme = iconButtonThemes.white } = props;

  const SquareButton = styled.button`
    border-radius: 10px;
    border: ${theme.border} !important;
    background: ${theme.background} !important;
    outline: none;
    height: 50px !important;
    min-width: 50px !important;
    cursor: pointer;
    padding: 10px;
    color: ${theme.color} !important;
    &:active {
      box-shadow: ${theme.clickBoxShadow} !important;
    }
    &:focus {
      outline: 0;
    }
    &:hover {
      opacity: 0.8 !important;
    }
  `;

  return <SquareButton onTouchStart={onTouchStart} {...props} />;
};

SquaredIconButton.propTypes = {
  onTouchStart: PropTypes.func,
  theme: PropTypes.shape({
    background: PropTypes.string,
    border: PropTypes.string,
    clickBoxShadow: PropTypes.string,
    color: PropTypes.string,
  }),
};

export default withIconButton(SquaredIconButton);
