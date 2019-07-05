import React from 'react';
import "./OmOss.scss";
import Divider from '../../Divider/Divider';

const OmOss = (props) => {
  console.log(props)
  return (
    <div id="om-oss">
      <Divider header={"Om Oss"} path={props.path} />
      <div className="box-1">
        <h1>Om Oss</h1>
        <div className="who">
          <p>Who? My About me page needs to tell my readers who I am, and why that matters. When people see that I have years of experience, or that I juggle numerous blogs and hundreds of thousands of visitors, it translates into more credibility with my readers, and thus more stock in my advice.</p>
        </div>
        <div className="what">
          <p>What? It's super important that my About page tells my readers exactly what I'm about. This is my call to action—offering to help my readers break into the blogosphere and start writing like a pro.</p>
        </div>
        <div className="why">
          <p>Why? I want my readers to understand my stake in this process, and understand that I kicked off StartBloggingOnline.com in 2013 to address the needs I saw for some reliable, actionable advice.</p>
        </div>
      </div>
      <div className="box-2">
        <div className="inner-box">
          <p>30K</p>
          <p>Artiklar</p>
        </div>
        <div className="inner-box">
          <p>1999</p>
          <p>Kom första artikel</p>
        </div>
        <div className="inner-box">
          <p>2017</p>
          <p>lorem lorem</p>
        </div>
      </div>
    </div>
  );
};
export default OmOss;
