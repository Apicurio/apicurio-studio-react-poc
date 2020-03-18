import {useContext} from 'react';
import {StoreContext} from './StoreContext';

const useStoreContext = () => {
    const [state] = useContext(StoreContext);

    return {
        ...state
    };
};

export { useStoreContext };
