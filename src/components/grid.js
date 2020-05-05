import React, { useState } from 'react';
//import { animated, useSpring } from 'react-spring';
import styles from './grid.module.css';
import InstaCard from './InstaCard';

//const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
//const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Card = ({ onMouseEnter, onMouseLeave }) => {
  /*const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  <animated.img
        className="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}/>
*/

  return (
    <div className={styles.item} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
      <img src={'http://placekitten.com/600/400'} />
    </div>
  );
};

const Grid = ({ igImages }) => {
  const [currentImg, setImg] = useState(null);

  let placeholders = [];
  const fillerAmount = 20 - igImages.length;
  const onClick = src => {
    if (currentImg) {
      setImg('');
    } else {
      setImg(src);
    }
  };

  for (let i = 0; i < fillerAmount; i++) {
    placeholders.push(<Card key={i} />);
  }

  const igCards = igImages.map(image => (
    <InstaCard
      onClick={() => onClick(image.original)}
      className={styles.item}
      url={image.original}
    />
  ));

  const images = [...igCards, ...placeholders];

  return (
    <>
      <div className={styles.fullImage} style={{ height: currentImg ? '300px' : 0 }}>
        <img src={currentImg} />
      </div>
      <div className={styles.wrapper}>
        {images}
        <div className={[styles.item, styles.blog].join(' ')}>
          <a href={''}>BLOG</a>
        </div>
      </div>
    </>
  );
};
export default Grid;
