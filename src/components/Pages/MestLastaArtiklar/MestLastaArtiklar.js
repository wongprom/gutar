
import React from 'react';
import Divider from '../../Divider/Divider';
import BigArticleCard from '../../Card/BigCard/BigArticleCard';

import './MestLastaArtiklar.scss';

import { articles } from "../../../utilities/fakeData";
const MestLastaArtiklar = (props) => {

  const data = articles
  const header = 'Mest Lästa Artiklar';

  const fixedDivider = {
    className: "divider divider-fixed"
  }

  // if on page /MestLastaArtiklar, add fixed styling to component Divider.
  const divider = props.match.path === "/MestLastaArtiklar" && <Divider className={fixedDivider.className} header={header} />

  return (
    <div className="mestLastaArtiklar">
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

export default MestLastaArtiklar;
