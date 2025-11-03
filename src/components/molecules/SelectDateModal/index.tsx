import React from 'react';
import {useSelectDateModalLogic} from './logic';
import SelectDateModalUI from './ui';
import {ISelectDateModalProps} from './types';

const SelectDateModal = (props: ISelectDateModalProps) => {
  const logicValues = useSelectDateModalLogic(props);
  return <SelectDateModalUI {...logicValues} />;
};

export default SelectDateModal;
