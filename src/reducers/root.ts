import * as constants from "./../actions/constants";
import helper from './../model/utils';
import defaultStore from './../model/initState';

const operators = ['+' , '-' , '*' , '/' , '(' , ')']; 

type stateType = typeof defaultStore;
type actionType = {
    type: string;
    payload: string;
}

const RootReducer = (state: any, action: actionType) => {
    const localState: stateType  = {...state};
    let expression: string; 
    let result: string = '0';
    switch (action.type) {
        case constants.ADD: {
            if (helper.isInteger(action.payload) || action.payload === '.') {
                if(localState.operatorAdded) {
                    localState.displayValue = '';
                    localState.operatorAdded = false;
                }
                localState.displayValue = helper.numberToString(helper.addPayloadToDisplay(localState.displayValue, action.payload));
                localState.calculated = false;
            }
            return {...state, ...localState};
        }
        case constants.OPERATOR: {
            if (helper.hasValue(action.payload) && operators.includes(action.payload) && !localState.operatorAdded) {
                if(Number(localState.displayValue)){
                    localState.history.push(localState.displayValue);
                    localState.historyDisplay += (localState.displayValue + helper.getOperator(action.payload, localState.displayValue));
                } else {
                    localState.historyDisplay += helper.getOperator(action.payload);
                }
                localState.operatorAdded = true;
                localState.history.push(action.payload);                
                localState.calculated = false;
            }
            return {...state, ...localState};
        }
        case constants.CLEAR: {
            localState.history.length = 0;
            localState.historyDisplay = '';
            localState.displayValue = '0';
            localState.operatorAdded = false;
            localState.calculated = false;
            return {...state, ...localState};
        }
        case constants.CALCULATE: {
            if (!localState.calculated) {
                localState.history.push(localState.displayValue);
                expression = localState.history.join('');
                try {
                    // eval used with caution as only integer and operators can be passed in it after checking
                    // eslint-disable-next-line no-eval
                    result = eval(expression).toString();
                } catch (x) {
                    result = '';
                }
                if ( result && result !== (Infinity).toString() && !helper.isNaN(result)) {
                    localState.displayValue = result;                    
                } else {
                    localState.displayValue = '0';
                }
                localState.history.length = 0;
                localState.historyDisplay = '';
                localState.operatorAdded = false;
                localState.calculated = true;
            }
            return {...state, ...localState};
        }
        case constants.DEL: {
            localState.displayValue = helper.removeLastChar(localState.displayValue);
            localState.displayValue = (!localState.displayValue) ? '0' : localState.displayValue;
            return {...state, ...localState};
        }
        default: {
            return state;
        }
    }
};

export default RootReducer;