# THIS FILE IS AUTO-GENERATED. DO NOT MODIFY!!

# Copyright 2020-2023 Tauri Programme within The Commons Conservancy
# SPDX-License-Identifier: Apache-2.0
# SPDX-License-Identifier: MIT

-keep class com.longevity.pricebook.dev.* {
  native <methods>;
}

-keep class com.longevity.pricebook.dev.WryActivity {
  public <init>(...);

  void setWebView(com.longevity.pricebook.dev.RustWebView);
  java.lang.Class getAppClass(...);
  java.lang.String getVersion();
}

-keep class com.longevity.pricebook.dev.Ipc {
  public <init>(...);

  @android.webkit.JavascriptInterface public <methods>;
}

-keep class com.longevity.pricebook.dev.RustWebView {
  public <init>(...);

  void loadUrlMainThread(...);
  void loadHTMLMainThread(...);
  void setAutoPlay(...);
  void setUserAgent(...);
  void evalScript(...);
}

-keep class com.longevity.pricebook.dev.RustWebChromeClient,com.longevity.pricebook.dev.RustWebViewClient {
  public <init>(...);
}