import React from 'react';
import Divider from '../../Divider/Divider';
import BigArticleCard from '../../Card/BigCard/BigArticleCard';

import './NyastArtiklar.scss';

import { articles } from "../../../utilities/fakeData";

const NyastArtiklar = () => {
  const data = articles
  const text = 'Nyast Artiklar';
  return (
    <div className="nyastArtikel">
      <Divider header={text} />
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
