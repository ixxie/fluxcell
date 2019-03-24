/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import iconButtonThemes from "./iconButtonThemes";
import withIconButton from "./withIconButton";

const RoundedIconButton = props => {
  const { theme = iconButtonThemes.white } = props;

  const RoundedButton = styled.button`
    border-radius: 50%;
    border: ${theme.border} !important;
    background: ${theme.background} !important;
    outline: none;
    height: 50px !important;
    width: 50px !important;
    cursor: pointer;
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

  return <RoundedButton {...props} />;
};

RoundedIconButton.propTypes = {
  theme: PropTypes.shape({
    background: PropTypes.string,
    border: PropTypes.string,
    clickBoxShadow: PropTypes.string,
    color: PropTypes.string,
  }),
};

export default withIconButton(RoundedIconButton);
