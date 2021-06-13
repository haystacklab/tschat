import { ActionType } from "../action-types";
import {Dispatch} from 'redux';
import { BankAction } from "../actions";

export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<BankAction>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount,
        })
    }
}

export const withdrawMoney = (amount: number) => {
    return (dispatch: Dispatch<BankAction>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount,
        })
    }
}

export const bankrupt = () => {
    return (dispatch: Dispatch<BankAction>) => {
        dispatch({
            type: ActionType.BANKRUPT,
        })
    }
}