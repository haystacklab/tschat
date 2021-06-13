import { Action, Reducer } from 'redux';
import { ActionType } from '../action-types';
import {BankAction} from '../actions';
import { Bank } from '../models';

const initialState: Bank = {
    counter: 0
};

const bankReducer: Reducer<Bank, Action> = (state: Bank = initialState, action: BankAction) => {
    switch (action.type) {
        case ActionType.DEPOSIT:
            return {
                ...state,
                ...{
                    counter: state.counter + action.payload,
                }
            } 
        case ActionType.WITHDRAW:
            return {
                ...state,
                ...{
                    counter: state.counter > 0 ? state.counter - action.payload : 0,
                }
            };
        case ActionType.BANKRUPT:
            return {
                ...state,
                ...{
                    counter: 0,
                }
            };
        default:
            return state;
    }
}

export default bankReducer;
