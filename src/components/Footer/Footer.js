import React, { useContext } from 'react';
import ZafaContext from '../../context/ZafaContext';

const Footer = () => {

    const {logged} = useContext(ZafaContext);

 return (
     <>
    <div>
        <p>{logged ? 'Logged' : 'Not Logged'}</p>
    </div>
    
</>
  );
    
};

export default Footer;