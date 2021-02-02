import React, { useState } from 'react';
import ZafaContext from './ZafaContext';

const ZafaWrapper = ({children}) => {
    const [logged, setLogged] = useState(false)

    const values = {logged, setLogged};
    
    return (
        <ZafaContext.Provider value={values}>
            {children}
        </ZafaContext.Provider>
    )
}

export default ZafaWrapper;