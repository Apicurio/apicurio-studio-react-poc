import {useContext} from 'react';
import {Api} from "@apicurio/models";
import {StoreContext} from './StoreContext';

const useStoreContext = () => {
    const [state] = useContext(StoreContext);

    function storeData(newData: Api[]) {
        const [setState] = useContext(StoreContext);
        console.log('did it reach this point!' + JSON.stringify(newData));
        setState({...state, apiData: newData});
    }

    return {
        ...state,
        storeData
    };
};

export { useStoreContext };
