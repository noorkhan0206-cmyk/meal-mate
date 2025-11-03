import {SvgProps} from 'react-native-svg';
import {Icons} from '../../../theme/icons';

export type IconName = keyof typeof Icons;

export interface IIconProps extends SvgProps {
  name: IconName;
}
