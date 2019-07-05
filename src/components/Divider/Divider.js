import React from 'react';
import './Divider.scss';

const divider = props => {

  const fixedDivider = {
    className: "divider-fixed"
  }
  // Use "divider" as className if not sended with props, otherwise there are no styling on Divider component.
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
