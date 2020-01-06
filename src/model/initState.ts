import calcKeys from './calcKeys';

const newLocal: Array<string> = [];
const defaultStore = {
  historyDisplay: '',
  history: newLocal,
  displayValue: '0',
  calculated: false,
  keys: calcKeys,
  operatorAdded: false
};

export default defaultStore;
