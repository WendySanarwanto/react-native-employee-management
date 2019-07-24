# react-native-employee-management

A React Native mobile app sample which demonstrate view navigation & simple authentication on a mobile app. The sample is taken from Udemy's "The Complete React Native & Redux" course, created by Stephen Grider.

## Pre-requisite

* [react-native-cli](https://www.npmjs.com/package/react-native-cli).

* [yarn](https://yarnpkg.com/en/).

* [Android Studio](https://developer.android.com/studio).

* __XCode__.

## Setup

* Clone this repository: `git clone https://github.com/WendySanarwanto/react-native-tech-stack.git`.

* Change current directory to the cloned repo's directory.

* Run `yarn` to install all required dependency.

* Run `cd android/app && keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000 && cd ../..` for creating required developer certificate.

## How to run the app on Android Simulator

* Run the Android Simulator from __Android Studio__.

* Once the Android Simulator is running & ready, run `react-native run-android` command to build, install and run the app on the Android simulator.

## How to run the app on an Android Phone

* Ensure that your Android Phone's developer mode is enabled & activatied.

* Connect your Phone with the development machine using USB Cable.

* Run `adb devices -l` command, to confirm that the Phone is already connected and has device id. Make note the device id.

* Run `react-native run-android` command to build, install and run the app on your connected android phone.

## How to run the app on iOS Simulator

__TODO: Add the steps here__

## How to run the app on iOS Phone

__TODO: Add the steps here__
