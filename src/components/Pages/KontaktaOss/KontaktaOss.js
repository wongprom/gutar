import React from 'react';
import Divider from '../../Divider/Divider'
import FormContainer from '../../FormContainer/FormContainer';
import contactUs from '../../../images/contact-us.jpg';
import './KontaktaOss.scss';

const KontaktaOss = (props) => {
  const header = 'Kontakta Oss';
  const fixedDivider = {
    className: "divider divider-fixed"
  }
  // if URL contain "/KontaktaOss", make divider fixed.
  const divider = props.match.path === "/KontaktaOss" && <Divider className={fixedDivider.className} header={header} />

  return (
    <div className="kontaktaOss" >
      {divider}
      <div id="header-text">
        <p>Kontakta Oss</p>
      </div>
      <div id="header-image">
        <img src={contactUs} alt="smiling girl with glasses play on her smartphone" />
      </div>
      <div className="formContainerWrapper">
        <FormContainer />
      </div>
    </div >
  )
}

export default KontaktaOss


