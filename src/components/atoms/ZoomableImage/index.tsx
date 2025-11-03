import React, { useRef, createRef, useState } from "react";
import { Animated, StyleSheet, View, useWindowDimensions } from "react-native";
import {
  HandlerStateChangeEvent,
  PanGestureHandler,
  PinchGestureHandler,
  State,
} from "react-native-gesture-handler";

interface IImage {
  uri: string;
}
const ZoomableImage = ({ uri }: IImage) => {
  const [panEnabled, setPanEnabled] = useState(false);
  const scale = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();

  const pinchRef = createRef();
  const panRef = createRef();

  const onPinchEvent = Animated.event(
    [
      {
        nativeEvent: { scale },
      },
    ],
    { useNativeDriver: true }
  );

  const onPanEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  const handlePinchStateChange = ({ nativeEvent }: HandlerStateChangeEvent) => {
    // enabled pan only after pinch-zoom
    if (nativeEvent.state === State.ACTIVE) {
      setPanEnabled(true);
    }

    // when scale < 1, reset scale back to original (1)
    const nScale = nativeEvent.scale as any;
    // eslint-disable-next-line sonarjs/no-collapsible-if
    if (nativeEvent.state === State.END) {
      if (nScale < 1) {
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
        }).start();
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();

        setPanEnabled(false);
      }
    }
  };

  return (
    <View>
      <PanGestureHandler
        onGestureEvent={onPanEvent}
        ref={panRef}
        simultaneousHandlers={[pinchRef]}
        enabled={panEnabled}
        failOffsetX={[-1000, 1000]}
        shouldCancelWhenOutside
      >
        <Animated.View>
          <PinchGestureHandler
            ref={pinchRef}
            onGestureEvent={onPinchEvent}
            simultaneousHandlers={[panRef]}
            onHandlerStateChange={handlePinchStateChange}
          >
            <Animated.Image
              source={{
                uri: uri,
              }}
              style={{
                width: windowWidth,
                height: windowHeight * 0.8,
                transform: [{ scale }, { translateX }, { translateY }],
              }}
              resizeMode="contain"
            />
          </PinchGestureHandler>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default ZoomableImage;

// eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imageContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
  },
  pinchableImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  wrapper: {
    flex: 1,
  },
});
