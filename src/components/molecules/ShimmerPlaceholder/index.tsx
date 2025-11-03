import React, {forwardRef} from 'react';
import {useShimmerPlaceholderLogic} from './logic';
import ShimmerPlaceholderUI from './ui';
import {ShimmerPlaceholderProps} from './types';

const ShimmerPlaceholder = forwardRef<any, ShimmerPlaceholderProps>(
  (props, ref) => {
    const logicValues = useShimmerPlaceholderLogic(props, ref);
    return <ShimmerPlaceholderUI {...logicValues} />;
  },
);

export default ShimmerPlaceholder;
