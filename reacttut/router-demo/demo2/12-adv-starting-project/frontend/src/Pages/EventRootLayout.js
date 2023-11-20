import React from 'react'
import { Outlet } from 'react-router';
import EventsNavigation from '../components/EventsNavigation';

const EventRootLayout = () => {
  return (
    <>
    <EventsNavigation/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default EventRootLayout