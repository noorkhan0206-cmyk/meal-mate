import React, {forwardRef} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useSelectDropdownLogic} from './logic';
import SelectDropdownUI from './ui';
import {ISelectDropdownProps} from './types';

const SelectDropdown = forwardRef(
  (props: ISelectDropdownProps, ref: React.ForwardedRef<BottomSheetModal>) => {
    const logicValues = useSelectDropdownLogic(props);
    return <SelectDropdownUI {...logicValues} ref={ref} />;
  },
);

export default SelectDropdown;
