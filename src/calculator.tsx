import * as React from 'react';
import Button from './components/buttons';
import Display from './components/display';
import { connect } from 'react-redux';
import * as constants from './actions/constants';
import createAction from "./actions/createAction";
//import helper from './model/utils';

class Calculator extends React.Component <any> {
    constructor(props: any) {
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick(evt: any, props: any) {
        evt.preventDefault();
        switch (props.command) {
            case 'addAction': {
                this.props.addAction(props.label);
                break;
            }
            case 'operatorAction': {
                let input: string;
                if(props.label === '\u00F7') {
                    input = '/';
                } else if(props.label === '\u00D7') {
                    input = '*';
                } else if(props.label === '\u2212') {
                    input = '-';
                } else {
                    input = props.label;
                }
                this.props.operatorAction(input);
                break;
            }
            case 'resultAction': {
                this.props.resultAction(props.label);
                break;
            }
            case 'deleteAction': {
                this.props.deleteAction(props.label);
                break;
            }
            case 'clearAction': {
                this.props.clearAction(props.label);
                break;
            }
            default: {
                break;
            }
        }
    }

    render() {
        return (
            <div className='parent'>
                <h1>{'Calculator'}</h1>
                <div className='display'>
                    <Display className='display-row' value={this.props.historyDisplay}/>
                    <Display className='display-row' value={this.props.displayValue}/>
                </div>
                <div className='container'> {
                    this.props.keys.map((elmt: any, index: Number) => {
                        return (
                            <Button key={index} id={elmt.key} onClick={this.buttonClick} {...elmt}/>
                        );
                    })
                }
                </div>
            </div>
        );
    }
}

function _dispatchAction(dispatch: any, action: string, value: string) {
    dispatch(createAction(action, value));
}

const mapStateToProps = (store: any) => {
    return store;
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addAction: (value: string) => { _dispatchAction(dispatch, constants.ADD, value); },
        operatorAction: (value: string) => { _dispatchAction(dispatch, constants.OPERATOR, value); },
        resultAction: (value: string) => { _dispatchAction(dispatch, constants.CALCULATE, value); },
        deleteAction: (value: string) => { _dispatchAction(dispatch, constants.DEL, value); },
        clearAction: (value: string) => { _dispatchAction(dispatch, constants.CLEAR, value); },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);