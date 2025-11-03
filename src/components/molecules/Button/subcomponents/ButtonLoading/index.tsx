import React from 'react';
import useButtonLoadingLogic from './logic';
import ButtonLoadingUI from './ui';
import {IButtonLoadingProps} from './types';

const ButtonLoading = (props: IButtonLoadingProps) => {
  const logicValues = useButtonLoadingLogic(props);

  return <ButtonLoadingUI {...logicValues} />;
};

export default ButtonLoading;
