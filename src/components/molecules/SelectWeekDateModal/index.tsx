import React from 'react';
import {useSelectWeekDateModalLogic} from './logic';
import SelectWeekDateModalUI from './ui';
import {ISelectWeekDateModalProps} from './types';

const SelectWeekDateModal = (props: ISelectWeekDateModalProps) => {
  const logicValues = useSelectWeekDateModalLogic(props);
  return <SelectWeekDateModalUI {...logicValues} />;
};

export default SelectWeekDateModal;
