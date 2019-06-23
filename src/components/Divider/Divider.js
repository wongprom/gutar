import React from 'react';
import './Divider.scss';

const divider = props => {
  return (
    <div className="divider">
      <p>
        {props.text}  {props.allaSocknar}
      </p>
    </div>
  );
};

export default divider;
