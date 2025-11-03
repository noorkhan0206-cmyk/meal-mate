import React from 'react';
import {
  Animated,
  LayoutChangeEvent,
  ScrollViewProps,
  ViewStyle,
} from 'react-native';

export interface IViewAboveKeyboardState {
  isKeyboardVisible: boolean;
}

export interface IViewAboveKeyboardProps extends ScrollViewProps {
  showView?: boolean;
  viewAboveKeyboard?:
    | React.ReactNode
    | ((state: IViewAboveKeyboardState) => React.ReactNode);
  /**
   * If enabled, when the keyboard is dismissed the view will stay on the bottom of the screen
   * instead of dissapearing.
   */
  dockToBottom?: boolean;
  /**
   * Color of a view inserted between the bottom of the `viewAboveKeyboard` component and
   * the keyboard, in case extra space is required due to unpredicable keyboard toolbars e.g.
   * Samsung's auto-correct toolbar.
   */
  fillerColor?: string;
  isSelfServe: boolean;
}

export interface IViewAboveKeyboardUIProps
  extends Pick<
      IViewAboveKeyboardProps,
      'viewAboveKeyboard' | 'dockToBottom' | 'fillerColor' | 'isSelfServe'
    >,
    ScrollViewProps {
  keyboardHeightStyle: ViewStyle;
  keyboardHeight: number;
  viewHeightAnim: Animated.Value;
  onLayout: (event: LayoutChangeEvent) => void;
  isKeyboardVisible: boolean;
}
