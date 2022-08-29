import React, { useEffect } from 'react';
import './News.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { useGetNewsQuery } from '../../features/news/newsApiSlice';
import { VscLoading } from 'react-icons/vsc';

function News() {
  const { data, isLoading, error } = useGetNewsQuery();
  const newsArticle = (heading, subtitle, img) => (
    <div className="widget_article">
      <div className="widgets_articleleft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleright">
        <h1 className='font-semibold'>{heading}</h1>
        <h2 className='text-sm'>{subtitle}</h2>
        <img  src={img} />
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widget_header">
        <h1> News</h1>
        <InfoIcon />
      </div>
      {
        data?.data.map((news) => newsArticle(news[0], news[1], news[2]))
      }
      {
        isLoading && 
        <div className='w-full flex flex-col justify-center items-center my-8'>
          <VscLoading className='w-8 h-8 animate-spin text-center text-gray-600' />
          <h1 className='text-xl mt-2'>Loading...</h1>
        </div>
      }
    </div>
  )
}

export default News