import React from 'react';
import styled from 'styled-components';
import { avatar } from '../../../../assets/images';

const DrawerWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: ${({ open }) => open ? '0' : '-500px'};
  width: 500px;
  height: calc(100vh);
  background-color: white;
  box-shadow: rgba(0,0,0,0.2) 0px 0px 5px 1px;
  transition: all .2s ease;

  .userinfos {
    height: 500px;
    /* background-color: papayawhip; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .avatar {
      margin: 10% 0;
      width: 50%;
      height: 50%;
      border-radius: 50%;
    }

    .username {
      color: rgba(0,0,0, .8);
    }
  }
`;

export const Drawer = ({ open }) => {
  return (
    <DrawerWrapper open={open}>
      <div className="userinfos">
        <img src={avatar} alt="user avatar" className="avatar"/>
        <h1 className="username">Nana Mouskouri</h1>
      </div>
    </DrawerWrapper>
  )
}
