import React from 'react';
import './Divider.scss';

const divider = props => {
  return (
    <div className={props.className}>
      <p>
        {props.header}
      </p>
    </div>
  );
};

export default divider;
