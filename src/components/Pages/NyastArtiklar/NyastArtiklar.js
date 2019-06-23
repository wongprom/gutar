import React from 'react';
import Divider from '../../Divider/Divider';
import BigArticleCard from '../../Card/BigCard/BigArticleCard';

import './NyastArtiklar.scss';

import { articles } from "../../../utilities/fakeData";

const NyastArtiklar = () => {
  const data = articles
  const mestLastaArtikel = 'Mest Lästa Artikel';
  return (
    <div className="nyastArtikel">
      <Divider text={mestLastaArtikel} />
      <main>

        {data.map(item =>
          <BigArticleCard
            heading={item.heading}
            articleContent={item.articleContent}
            img={item.img}
          />
        )}

      </main>
    </div>
  );
};
export default NyastArtiklar;
