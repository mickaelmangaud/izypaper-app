import React from 'react';
import { DrawerWrapper } from './styled';
import { avatar } from '../../../assets/images';
import { Context } from '../../../context';

export const Drawer = () => {
  const { context } = React.useContext(Context);

  return (
    <DrawerWrapper open={context.drawerOpen}>
      <div className="userinfos">
        <img src={avatar} alt="user avatar" className="avatar"/>
        <h1 className="username">Nana Mouskouri</h1>
        <p className="description">Juriste chez Novaltis Consulting</p>
      </div>
    </DrawerWrapper>
  )
}
