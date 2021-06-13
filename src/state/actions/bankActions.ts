import { ActionType } from '../action-types';

interface DepositAction {
    type: ActionType.DEPOSIT,
    payload: number,
}

interface WithrawAction {
    type: ActionType.WITHDRAW,
    payload: number,
}

interface BankruptAction {
    type: ActionType.BANKRUPT,
}

export type BankAction = DepositAction | WithrawAction | BankruptAction;
