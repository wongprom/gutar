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
  // data.map(article => {
  //   console.log(article)
  // })
  const mestLastaArtikel = 'Mest Lästa Artikel';
  const nyastArtiklar = 'Nyast Artiklar';
  const allaSocknar = 'Socknar På Gotland';

  const visby = 'visby';
  const tingstade = 'tingstade';
  const vibble = 'vibble';
  const hoburgen = 'hoburgen';
  const faro = 'fårö';
  const farosund = 'fårösund';
  const larbro = 'lärbro';


  // const articleCard = data.map(item => <ArticleCard key={item.id} data={item} />)


  return (
    // style={{ flex: "1" }} is for the sticky footer
    <div style={{ flex: "1" }}>
      <HeroSection />
      <Divider nyastArtiklar={nyastArtiklar} />
      <div className="scroll-section">

        {data.map(item =>
          <ArticleCard
            heading={item.heading}
            articleContent={item.articleContent}
            img={item.img}
          />
        )}

        {/* {articleCard} */}
      </div>
      <Divider mestLastaArtikel={mestLastaArtikel} />
      <div className="scroll-section">
        {data.map(item =>
          <ArticleCard
            heading={item.heading}
            articleContent={item.articleContent}
            img={item.img}
          />
        )}
      </div>
      {/* <Divider allaSocknar={allaSocknar} />
        <div className="scroll-section" />
        <SockenBlock visby={visby} />
        <SockenBlock tingstade={tingstade} />
        <SockenBlock vibble={vibble} />
        <SockenBlock hoburgen={hoburgen} />
        <SockenBlock faro={faro} />
        <SockenBlock farosund={farosund} />
        <SockenBlock larbro={larbro} />
      </div>*/}
      <FormContainer />
    </div>
  );
};

export default Hem;
