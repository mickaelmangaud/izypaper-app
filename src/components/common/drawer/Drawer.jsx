import React from 'react';
import { DrawerWrapper } from './styled';
import { avatar } from '../../../assets/images';
import { Context } from '../../../context';

export const Drawer = ({ open }) => {
  const drawer = React.useRef(null);
  const { context, setContext } = React.useContext(Context);

  React.useEffect(() => {
    const handleClickOutside = evt => 
      window.innerWidth - evt.clientX > 500 && setContext({ ...context, drawerOpen: false });

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <DrawerWrapper open={context.drawerOpen} ref={drawer}>
      <div className="userinfos">
        <img src={avatar} alt="user avatar" className="avatar"/>
        <h1 className="username">Nana Mouskouri</h1>
        <p className="description">Juriste chez Novaltis Consulting</p>
      </div>
    </DrawerWrapper>
  )
}
