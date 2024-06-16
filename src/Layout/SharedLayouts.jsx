import React from 'react'
import MyNav from '../components/MyNav';
import { Outlet } from 'react-router-dom';

export default function SharedLayouts() {
  return (
    <>
    <MyNav/>
    <Outlet/>
    </>
  )
}
