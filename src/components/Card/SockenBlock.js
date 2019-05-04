import React from 'react';

import './SockenBlock.scss';

const sockenBlock = props => {
  return (
    <div className="socken-block">
      <p>
        {props.visby}
        {props.tingstade}
        {props.farosund}
        {props.vibble}
        {props.hoburgen}
        {props.larbro}
        {props.faro}
        {props.rafosund}
      </p>
    </div>
  );
};
export default sockenBlock;
