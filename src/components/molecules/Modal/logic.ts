import {useEffect, useMemo, useRef} from 'react';
import {Animated, Easing} from 'react-native';
import {IconName} from '@components/atoms/Icon/types';
import {IModalProps, ModalType} from './types';

const useModalLogic = ({
  onPressButton,
  overlayClicked,
  showModal,
  status,
  style,
}: IModalProps) => {
  const animatedValue = useRef(new Animated.Value(0));
  const scaleCheckmarkValue = useRef(new Animated.Value(0));

  const animateAlert = (value: number) => {
    Animated.timing(animatedValue.current, {
      toValue: value,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const scaleCheckmark = (value: number) => {
    Animated.timing(scaleCheckmarkValue.current, {
      toValue: value,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const useAnimatedModal = (isVisible: boolean) => {
    const opacity = animatedValue.current.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0.8, 1],
    });

    const iconScale = scaleCheckmarkValue.current.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1.2, 1],
    });

    useEffect(() => {
      if (isVisible) {
        animateAlert(1);
        scaleCheckmark(1);
      } else {
        animateAlert(0);
        scaleCheckmark(0);
      }
    }, [isVisible]);

    return {opacity, iconScale};
  };

  const iconName: IconName = useMemo(() => {
    switch (status) {
      case ModalType.error:
        return 'x';
      case ModalType.success:
        return 'check';
      default:
        return 'questionMark';
    }
  }, [status]);

  const {iconScale, opacity} = useAnimatedModal(showModal);

  return {
    overlayClicked,
    opacity,
    showModal,
    iconName,
    status,
    iconScale,
    onPressButton,
    style,
  };
};

export default useModalLogic;
