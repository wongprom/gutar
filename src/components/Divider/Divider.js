import React from 'react';
import './Divider.scss';

const divider = props => {

  const fixedDivider = {
    className: "divider-fixed"
  }
  // default styling/text if not send by props.
  const className = !props.className ? "divider divider-fixed" : props.className + ' ' + fixedDivider;
  const header = !props.header ? "header={'Your Text Goes Here'}" : props.header;

  return (
    <div className={className}>
      <p>
        {header}
      </p>
    </div>
  );
};

export default divider;
