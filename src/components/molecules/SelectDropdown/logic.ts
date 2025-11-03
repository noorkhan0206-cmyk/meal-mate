import {useCallback, useMemo, useState} from 'react';
import {IDropdownArrayData} from '@store/dropdowns/types';
import {ISelectDropdownProps} from './types';

export const useSelectDropdownLogic = ({
  closeModal,
  handleChange,
  headerTitle,
  label,
  labelAccessor,
  openModal,
  options,
  searchPlaceholder,
  searchable,
  selectedOption,
  showButton,
  valueAccessor,
}: ISelectDropdownProps) => {
  const [search, setSearch] = useState('');

  const filteredOptions = useMemo(() => {
    if (search && search !== '') {
      return options.filter((item: IDropdownArrayData) =>
        item[labelAccessor as keyof IDropdownArrayData]
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase()),
      );
    }
    return options;
  }, [labelAccessor, options, search]);

  const handleChangeCategory = useCallback(
    (value: IDropdownArrayData) => {
      closeModal();
      if (handleChange) {
        if (searchable) {
          setSearch('');
        }
        handleChange(value);
      }
    },
    [closeModal, handleChange, searchable],
  );

  return {
    search,
    setSearch,
    openModal,
    closeModal,
    filteredOptions,
    handleChangeCategory,
    selectedOption,
    valueAccessor,
    labelAccessor,
    headerTitle,
    label,
    searchPlaceholder,
    showButton,
    searchable,
  };
};
