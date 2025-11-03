import React from 'react';
import {useErrorModalLogic} from './logic';
import ErrorModalUI from './ui';
import {IErrorModalProps} from './types';

const ErrorModal = (props: IErrorModalProps) => {
  const logicValues = useErrorModalLogic(props);
  return <ErrorModalUI {...logicValues} />;
};

export default ErrorModal;
