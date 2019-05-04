import React from 'react';
import ArticleCard from '../../Card/ArticleCard';
import HeroSection from '../../HeroSection/HeroSection';
import Divider from '../../Divider/Divider';
import SockenBlock from '../../Card/SockenBlock';

import './Hem.scss';

const Hem = () => {
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

  return (
    <div>
      <HeroSection />

      <Divider nyastArtiklar={nyastArtiklar} />
      <div className="scroll-section">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
      <Divider mestLastaArtikel={mestLastaArtikel} />
      <div className="scroll-section">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
      <Divider allaSocknar={allaSocknar} />
      <div className="scroll-section">
        <SockenBlock visby={visby} />
        <SockenBlock tingstade={tingstade} />
        <SockenBlock vibble={vibble} />
        <SockenBlock hoburgen={hoburgen} />
        <SockenBlock faro={faro} />
        <SockenBlock farosund={farosund} />
        <SockenBlock larbro={larbro} />
      </div>
    </div>
  );
};

export default Hem;
