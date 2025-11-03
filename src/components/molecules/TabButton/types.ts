import {IconName} from '@components/atoms/Icon/types';

export interface ITabButtonProps {
  onPress: () => void;
  backgroundColor?: string;
  iconName: IconName;
}
