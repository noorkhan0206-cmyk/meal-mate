import {ILoadingProps} from './types';
const useLoadingLogic = ({containerStyles, isVisible}: ILoadingProps) => {
  return {
    isVisible,
    containerStyles,
  };
};

export default useLoadingLogic;
