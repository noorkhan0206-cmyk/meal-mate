import React from 'react';
import useModalLogic from './logic';
import ModalUI from './ui';
import {IModalProps} from './types';

const Modal = ({
  children,
  onPressButton,
  overlayClicked,
  showModal,
  status,
  style,
}: React.PropsWithChildren<IModalProps>) => {
  const logicValues = useModalLogic({
    onPressButton,
    overlayClicked,
    showModal,
    status,
    style,
  });
  const propsWithLogicValues = {...logicValues, children};

  return <ModalUI {...propsWithLogicValues} />;
};

export default Modal;
