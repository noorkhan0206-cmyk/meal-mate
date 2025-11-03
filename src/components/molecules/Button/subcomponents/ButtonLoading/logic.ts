import {IButtonLoadingProps} from './types';

const useButtonLoadingLogic = ({
  containerStyles,
  isTransparent,
  isVisible,
}: IButtonLoadingProps) => {
  return {
    isTransparent,
    isVisible,
    containerStyles,
  };
};

export default useButtonLoadingLogic;
