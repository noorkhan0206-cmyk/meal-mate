import React, { useMemo, useRef } from "react";
import { ActivityIndicator, Platform } from "react-native";
import { WebView } from "react-native-webview";
import { IWebViewPopoverProps } from "./types";

const WebViewPopover = ({ url }: IWebViewPopoverProps) => {
  const t = encodeURIComponent("&");
  const ref = useRef<WebView>(null);
  const newUrl = url.replace("&", t);
  const finalUrl = useMemo(() => {
    if (Platform.OS === "android") {
      return `${newUrl}`;
    }
    return url;
  }, [newUrl, url]);

  const loading = () => {
    return <ActivityIndicator />;
  };
  return (
    <>
      <WebView
        startInLoadingState={true}
        source={{
          uri: finalUrl,
        }}
        onLoadStart={loading}
        ref={ref}
        onContentProcessDidTerminate={() => {
          ref.current?.reload;
        }}
      />
    </>
  );
};

export default WebViewPopover;
