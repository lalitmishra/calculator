
const helper = {
    hasValue(value) {
      return value.length > 0;
    },

    isNaN(value) {
      return isNaN(parseFloat(value));
    },

    numberToString(value) {
      if(!this.isNaN(Number(value))) {
        if(value[0] === '.' || value[value.length - 1] === '.') {
          return value;
        }
        return Number(value).toString();
      }
      return '';
    },
    addPayloadToDisplay(old, newVal) {
      if(newVal === '.' && old.indexOf(newVal) > -1) {
        return old;
      }
      return old += newVal;
    },
    getOperator(value, oldVal) {
      if(value === '*'){
        return '\u00D7';
      } else if(value === '-'){
        return '\u2212';
      } else if(value === '/'){
        return '\u00F7';
      }
      return value;
    },
  
    isInteger(value) {
      // eslint-disable-next-line eqeqeq
      return parseInt(value, 10) == value;
    },
  
    removeLastChar(value) {
      return value.toString().substring(0, value.length - 1);
    }
  };
  
  export default helper;
  