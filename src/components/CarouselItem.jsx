import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play.png';
import plusIcon from '../assets/static/add.png';
// import Carousel from './Carousel';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carrousel-item'>
    <img
      className='carrousel-item__img'
      src={cover}
      alt={title}
    />
    <div className='carrousel-item__details'>
      <div>
        <img src={playIcon} alt='Play' />
        <img src={plusIcon} alt='Add' />
      </div>
      <p className='carrousel-item__details--title'>{title}</p>
      <p className='carrousel-item__details--subtitle'>
        {`${year} ${contentRating} ${duration}`}
      </p>
    </div>
  </div>
);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselItem;
