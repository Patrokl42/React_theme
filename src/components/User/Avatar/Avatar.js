import React from 'react';
import s from './Avatar.module.scss';
import T from 'prop-types';

const Avatar = ({styles, src}) => (
  <img className={s.avatar} style={{...styles}} src={src} alt='User Avatar'/>
);

Avatar.defaultProps = {
  styles: {height: '150px', width: '150px'},
  src: 'https://land-soft.ucoz.ru/Pin/Tux_Avatar-2-.png'
};

Avatar.propTypes = {
  styles: T.object,
  src: T.string
};

export default Avatar;