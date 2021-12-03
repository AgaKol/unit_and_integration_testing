import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add numbers', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const operator_add = container.find('#operator_add');
    const runningTotal = container.find('#running-total')
    const equals = container.find('#operator-equals')
    button1.simulate('click');
    operator_add.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('5')
  })

  it('should subtract numbers', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const operator_subtract = container.find('#operator-subtract');
    const runningTotal = container.find('#running-total')
    const equals = container.find('#operator-equals')
    button7.simulate('click');
    operator_subtract.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('3')
  })

  it('should multiply numbers', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const operator_multiply = container.find('#operator-multiply');
    const runningTotal = container.find('#running-total')
    const equals = container.find('#operator-equals')
    button3.simulate('click');
    operator_multiply.simulate('click');
    button5.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('15')
  })

  it('should divide numbers', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const operator_divide = container.find('#operator-divide');
    const runningTotal = container.find('#running-total')
    const equals = container.find('#operator-equals')
    button2.simulate('click');
    button1.simulate('click');
    operator_divide.simulate('click');
    button7.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('3')
  })

  it('should concatenate multiple number buttons clicks', () => {
    const button1 = container.find('#number1');
    const operator_add = container.find('#operator_add');
    const runningTotal = container.find('#running-total')
    const equals = container.find('#operator-equals')
    button1.simulate('click');
    button1.simulate('click');
    button1.simulate('click');
    operator_add.simulate('click');
    button1.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('112')
  })

  it('should chain multiple operations together', () => {
    const button2 = container.find('#number2');
    const button3 = container.find('#number3');
    const operator_add = container.find('#operator_add');
    const operator_divide = container.find('#operator-divide');
    const runningTotal = container.find('#running-total');
    const equals = container.find('#operator-equals');
    button2.simulate('click');
    operator_add.simulate('click');
    button3.simulate('click');
    operator_add.simulate('click');
    button3.simulate('click');
    operator_divide.simulate('click');
    button2.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('4')
  })

  it('should clear the running total without affecting calculation', () => {
    const clear = container.find('#clear');
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const operator_add = container.find('#operator_add');
    const runningTotal = container.find('#running-total')
    const equals = container.find('#operator-equals')
    button1.simulate('click');
    operator_add.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    operator_add.simulate('click');
    button4.simulate('click');
    clear.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('5')
  })
})


