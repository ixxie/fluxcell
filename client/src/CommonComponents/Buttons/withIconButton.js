/* eslint-disable react/prefer-stateless-function, react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iconButtonThemes from './iconButtonThemes';

export default function hoc(WrappedComponent) {
  class withIconButton extends React.Component {
    render() {
      const { isHover, icon, id, onClick, tooltip, theme = iconButtonThemes.white } = this.props;

      const classes = classNames({ 'icon-button': true, 'icon-button-hover': isHover });

      return (
        <WrappedComponent
          className={classes}
          title={tooltip}
          id={id}
          onMouseEnter={() => this.setState({ isHover: true })}
          onMouseLeave={() => this.setState({ isHover: false })}
          onClick={onClick}
          {...this.props}
        >
          <FontAwesomeIcon icon={icon} color={theme.color} />
          {this.props.children}
        </WrappedComponent>
      );
    }
  }

  withIconButton.propTypes = {
    isHover: PropTypes.bool,
    icon: PropTypes.shape({
      iconName: PropTypes.string,
      prefix: PropTypes.string,
    }),
    id: PropTypes.string,
    onClick: PropTypes.func,
    tooltip: PropTypes.string,
    theme: PropTypes.shape({
      background: PropTypes.string,
      border: PropTypes.string,
      clickBoxShadow: PropTypes.string,
      color: PropTypes.string,
    }),
    children: PropTypes.shape({ props: PropTypes.object }),
  };

  return withIconButton;
}
