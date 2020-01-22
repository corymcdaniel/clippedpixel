import React from 'react';
//import { animated, useSpring } from 'react-spring';
import { wrapper, item } from './grid.module.css';
import InstaCard from './InstaCard';

//const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
//const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Card = () => {
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
    <div className={item}>
      <img src={'http://placekitten.com/600/400'} />
    </div>
  );
};

const Grid = ({ igImages }) => {
  let murrays = [];
  for (let i = 0; i < 20; i++) {
    murrays.push(<Card key={i} />);
  }

  const igCards = igImages.map(image => <InstaCard className={item} url={image.original} />);

  return (
    <div className={wrapper}>
      {igCards}
      {murrays}
    </div>
  );
};
export default Grid;
