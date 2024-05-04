# Bun
FROM docker.io/oven/bun:1-debian as bun


# Node
FROM docker.io/library/node:20-bookworm as node

RUN corepack enable && \
    corepack prepare pnpm@latest-9 --activate


# Android
FROM docker.io/thyrlian/android-sdk:latest as android

ARG STUDIO=2024.1.1.11
ARG BUILD=30.0.3
ARG NDK=27.0.11718014

ENV NDK_HOME=${ANDROID_HOME}/ndk

# "platforms;android-30" \
# "platforms;android-31" \
RUN yes | ${ANDROID_HOME}/cmdline-tools/tools/bin/sdkmanager --licenses && \
    ${ANDROID_HOME}/cmdline-tools/tools/bin/sdkmanager --install \
      "platforms;android-32" \
      "platforms;android-33" \
      "platforms;android-34" \
      "platform-tools" \
      "ndk;${NDK}" \
      "build-tools;${BUILD}" \
      "cmdline-tools;latest" \
      "system-images;android-33;google_apis;x86_64" \
      "system-images;android-34;google_apis;x86_64" \
      "emulator"

ADD https://dl.google.com/dl/android/studio/ide-zips/${STUDIO}/android-studio-${STUDIO}-linux.tar.gz /opt/android-studio.tar.gz
RUN cd /opt/ && tar -zxvf android-studio.tar.gz && \
    rm android-studio.tar.gz
  


# iOS
FROM docker.io/homebrew/brew:latest as brew


# Tauri
FROM mcr.microsoft.com/devcontainers/rust:1-bookworm

ARG NDK=27.0.11718014

ARG PUID=1000
ARG PGID=1000

ENV ANDROID_STUDIO /opt/android-studio
ENV ANDROID_HOME /opt/android-sdk
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
ENV NDK_HOME=${ANDROID_HOME}/ndk/${NDK}/

ENV PATH "$PATH:/home/linuxbrew/.linuxbrew/Homebrew/bin:/opt/gradle/bin:/opt/kotlinc/bin:/opt/android-studio/bin:/opt/android-sdk/cmdline-tools/latest/bin:/opt/android-sdk/cmdline-tools/tools/bin:/opt/android-sdk/platform-tools:/opt/android-sdk/emulator"

ENV UID=$PUID

# COPY --from=android --chown 1000:1000 /opt/android-sdk /opt/android-sdk
COPY --from=android --chown=1000:1000 ${ANDROID_STUDIO} ${ANDROID_STUDIO}
COPY --from=android --chown=1000:1000 ${ANDROID_HOME} ${ANDROID_HOME}
COPY --from=android --chown=1000:1000 ${JAVA_HOME} ${JAVA_HOME}
COPY --from=android --chown=1000:1000 /opt/gradle /opt/gradle
COPY --from=android --chown=1000:1000 /opt/kotlinc /opt/kotlinc

COPY --from=brew --chown=1000:1000 /home/linuxbrew/.linuxbrew /home/linuxbrew/.linuxbrew

COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=node /usr/local/bin /usr/local/bin

COPY --from=bun /usr/local/bin/bun /usr/local/bin/bun
COPY --from=bun /usr/local/bin/bunx /usr/local/bin/bunx

RUN ln -s /home/linuxbrew/.linuxbrew/Homebrew/bin/brew /usr/local/bin/brew && \
    mkdir -p /run/user/1000 && \
    chown 1000:1000 /run/user/1000

RUN apt-get update && \ 
    apt-get install -y --no-install-recommends \ 
      openjdk-17-jdk \
      libwebkit2gtk-4.1-dev \
      libcanberra-gtk-module \
      libcanberra-gtk3-module \
      dbus-user-session \
      build-essential \
      curl \
      wget \
      file \
      procps \
      libssl-dev \
      libayatana-appindicator3-dev \
      librsvg2-dev \
      git \
      git-lfs && \
      apt-get clean && rm -rf /var/lib/apt/lists/*

# Mobile
RUN rustup target add \
      aarch64-linux-android \
      armv7-linux-androideabi \
      i686-linux-android \
      x86_64-linux-android \
      aarch64-apple-ios \
      x86_64-apple-ios \
      aarch64-apple-ios-sim && \
      avdmanager create avd --name tauri --force --package "system-images;android-34;google_apis;x86_64" --device pixel_7_pro
      
# Frontend
RUN bun x playwright install --with-deps
