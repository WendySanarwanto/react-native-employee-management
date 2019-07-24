# react-native-employee-management

A React Native mobile app sample which demonstrate view navigation, simple authentication on a mobile app using [Firebase Authentication](https://firebase.google.com/docs/auth) and Create-Retrieve-Update-Delete feature using [Firebase Cloud Firestore](https://firebase.google.com/docs/firestore) as well. The sample is taken from Udemy's "The Complete React Native & Redux" course, created by Stephen Grider.

## Pre-requisite

* [react-native-cli](https://www.npmjs.com/package/react-native-cli).

* [yarn](https://yarnpkg.com/en/).

* [Android Studio](https://developer.android.com/studio).

* __XCode__.

* [Firebase](https://firebase.google.com/) account.

## Setup

* Clone this repository: `git clone https://github.com/WendySanarwanto/react-native-tech-stack.git`.

* Change current directory to the cloned repo's directory.

* Run `yarn` to install all required dependency.

* Run `cd android/app && keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000 && cd ../..` for creating required developer certificate.

* Login into your [Firebase](https://firebase.google.com/) web console, create a new project and create a new Web Application in the project. 

* On the [Firebase](https://firebase.google.com/) web console, click `Project Settings` menu then make notes the `firebaseConfig`.

* Create a `.env` file in the cloned repo's root directory. Write down these parameters inside the `.env` file and assign them with values of `firebaseConfig` you have noted in prior step. Example:

      FIREBASE_API_KEY=xyzabc
      FIREBASE_AUTH_DOMAIN=xyzabc
      FIREBASE_DB_URL=xyzabc
      FIREBASE_PROJECT_ID=xyzabc
      FIREBASE_MESSAGING_SENDER_ID=xyzabc
      FIREBASE_APP_ID=xyzabc

## How to run the app on Android Simulator

* Run the Android Simulator from __Android Studio__.

* Once the Android Simulator is running & ready, run `react-native run-android` command to build, install and run the app on the Android simulator.

## How to run the app on an Android Phone

* Ensure that your Android Phone's developer mode is enabled & activated.

* Connect your Phone with the development machine using USB Cable.

* Run `adb devices -l` command, to confirm that the Phone is already connected and has device id. Make note the device id.

* Run `react-native run-android --deviceId <phone id you noted in prior step>` command to build, install and run the app on your connected android phone.

## How to run the app on iOS Simulator

__TODO: Add the steps here__

## How to run the app on iOS Phone

__TODO: Add the steps here__
