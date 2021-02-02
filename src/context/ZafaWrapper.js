import React, { useState } from 'react';

const ZafaContext = React.createContext({logged: false, setLogged: ()=>{}})


const ZafaWrapper = ({children}) => {
    const [logged, setLogged] = useState(false)

    const values = {logged, setLogged};
    
    return (
        <ZafaContext.Provider value={values}>
            {children}
        </ZafaContext.Provider>
    )
}

export {ZafaWrapper, ZafaContext};