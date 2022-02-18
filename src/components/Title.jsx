import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>
        {headline}
      </h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string,
};

Title.defaultProps = {
  headline: 'defaultProps',
};

export default Title;
