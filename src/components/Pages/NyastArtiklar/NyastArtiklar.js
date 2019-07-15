import React from 'react';
import Divider from '../../Divider/Divider';
import BigArticleCard from '../../Card/BigCard/BigArticleCard';
import './NyastArtiklar.scss';
import { articles } from "../../../utilities/fakeData";



const NyastArtiklar = (props) => {
  const data = articles
  const header = 'Nyast Artiklar';
  const fixedDivider = {
    className: "divider divider-fixed"
  }
  // if on page /NyastArtiklar, add fixed styling to component Divider.
  const divider = props.match.path === "/NyastArtiklar" && <Divider className={fixedDivider.className} header={header} />

  return (
    <div className="nyastArtikel">
      {divider}
      <main>
        {/* OutPut amount of cards depending on data */}
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
