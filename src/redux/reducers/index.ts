import { combineReducers } from 'redux';
import { userReducer as user } from './user';
import { walletFetch as wallet } from './wallet';

// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const rootRedux = combineReducers({ user, wallet });

export default rootRedux;
