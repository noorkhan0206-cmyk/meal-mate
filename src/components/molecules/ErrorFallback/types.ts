import {ModalBaseProps} from 'react-native';

export interface IErrorFallbackProps extends ModalBaseProps {
  error?: Error;
  resetError?: Function;
}

export enum ErrorMessage {
  title = 'Something Went Wrong',
  description = 'There seems to be a problem. Please close the app and re-open.',
}
