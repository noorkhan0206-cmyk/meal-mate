import React, {ForwardedRef} from 'react';
import {useSwitchLogic} from './logic';
import SwitchUI from './ui';
import {ISwitchProps, ISwitchRefReturnProps} from './types';

const Switch = React.forwardRef(
  (props: ISwitchProps, ref: ForwardedRef<ISwitchRefReturnProps>) => {
    const logicValues = useSwitchLogic(props, ref);
    return <SwitchUI {...logicValues} />;
  },
);

export default Switch;
