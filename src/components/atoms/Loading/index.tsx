import React from 'react';
import useLoadingLogic from './logic';
import LoadingUI from './ui';
import {ILoadingProps} from './types';

const Loading = (props: ILoadingProps) => {
  const logicValues = useLoadingLogic(props);

  return <LoadingUI {...logicValues} />;
};

export default Loading;
