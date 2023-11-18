import { useState } from 'react';
import Menu from './components/Menu';

export default function App() {
  const objects = [
    {label: 'Home', link: '/'},
    {label: 'Contacts', link: '/Contacts'},
    {label: 'AboutUs', link: '/AboutUs'},
    
  ]
  return (
    <div>
        <Menu 
          objects={objects}
        />
    </div>
  );
}
