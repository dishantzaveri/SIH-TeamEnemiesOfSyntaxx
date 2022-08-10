import React from 'react';
import './News.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function News() {
  const newsArticle = (heading, subtitle) => (
    <div className="widget_article">
      <div className="widgets_articleleft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleright">
        <h1>{heading}</h1>
        <h2>The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads.
 Protect yourself and others from infection by staying at least 1 metre apart from others, wearing a properly fitted mask, and washing your hands or using an alcohol-based rub frequently. Get vaccinated when it’s your turn and follow local guidance.The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads.
 Protect yourself and others from infection by staying at least 1 metre apart from others, wearing a properly fitted mask, and washing your hands or using an alcohol-based rub frequently. Get vaccinated when it’s your turn and follow local guidance.</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widget_header">
        <h1> News</h1>
        <InfoIcon />
      </div>

      {newsArticle("Coronavirus: Lagos updates", "Tops news - 324 readers")}
      {newsArticle("Bitcoin hits new high", "Tops news - 2,324 readers")}
    </div>
  )
}

export default News