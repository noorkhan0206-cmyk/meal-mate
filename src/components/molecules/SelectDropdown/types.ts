import {IDropdownArrayData} from '@store/dropdowns/types';

interface ISelectDropdownCommonProps {
  valueAccessor: string;
  labelAccessor: string;
  selectedOption: IDropdownArrayData | object;
  label?: string;
  closeModal: () => void;
  openModal: () => void;
  searchPlaceholder?: string;
  searchable?: boolean;
  headerTitle?: string;
  showButton?: boolean;
}
export interface ISelectDropdownProps extends ISelectDropdownCommonProps {
  handleChange?: (val: IDropdownArrayData) => void;
  options: IDropdownArrayData[];
}
export interface ISelectDropdownUIProps extends ISelectDropdownCommonProps {
  search: string;
  setSearch: (val: string) => void;
  filteredOptions: IDropdownArrayData[];
  handleChangeCategory: (value: IDropdownArrayData) => void;
}
