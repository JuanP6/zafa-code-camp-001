import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import {ZafaContext} from '../../context/ZafaWrapper';

const Header = () => {

    const {logged, setLogged} = useContext(ZafaContext);

    // const [loggedIn, setLoggedIn] = useState(false);

    /* useEffect(() => {
        if (!loggedIn) {
            console.log('User is not logged in')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!loggedIn) {
            console.log('Not logged in!')
        } else {
            console.log('Logged in!')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loggedIn]); */

    const clickEvent = () => {
        setLogged(!logged)
    }

 return (
     <>
    <div>
        <p>{logged ? 'Logged' : 'Not Logged'}</p>
    </div>
    <div>
    <p>
        <Button onClick={clickEvent}>Te quiero Diego</Button>
    </p>
</div>
</>
  );
    
};

export default Header;

