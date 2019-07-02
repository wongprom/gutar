import React from 'react';
import ArticleCard from '../../Card/ArticleCard';
import HeroSection from '../../HeroSection/HeroSection';
import Divider from '../../Divider/Divider';
import FormContainer from '../../FormContainer/FormContainer';

import SockenBlock from '../../Card/SockenBlock';

import './Hem.scss';

import { articles } from "../../../utilities/fakeData";

import testImage from '../../../images/nature-test.jpg';


const Hem = () => {
  const data = articles;

  const mestLastaArtikel = 'Mest Lästa Artikel';
  const nyastArtiklar = 'Nyast Artiklar';
  const kontaktaOss = "Kontakta Oss"

  // styling for component Divider
  const defaultStyling = "divider"

  return (
    //  style={{ flex: "1" }} is for the sticky footer
    <div style={{ flex: "1", marginTop: "160px" }}>
      <HeroSection />
      <Divider className={defaultStyling} header={nyastArtiklar} />
      <div className="scroll-section">
        {/* outPut amount of cards with content depending on length of data */}
        {data.map(item =>
          <ArticleCard
            heading={item.heading}
            articleContent={item.articleContent}
            img={item.img}
          />
        )}

      </div>
      <Divider className={defaultStyling} header={mestLastaArtikel} />
      <div className="scroll-section">
        {data.map(item =>
          <ArticleCard
            heading={item.heading}
            articleContent={item.articleContent}
            img={item.img}
          />
        )}
      </div>
      <Divider className={defaultStyling} header={kontaktaOss} />
      <div id="kontakta-oss">
        <p>Kontakta Oss</p>
        <div id="form-container_wrapper">
          <FormContainer />
        </div>
      </div>

    </div>
  );
};

export default Hem;
