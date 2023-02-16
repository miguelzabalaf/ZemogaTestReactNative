# Zemoga's Challenge: React Native

I hope and exceed your expectations. This react native(0.71.2) project based on clean architecture **DDD** (Domain Driven Design). I split this application in different layers with specific responsabilities: _Domain_, _Use cases_, _Adapters_, _Controllers_.

## Run this project

1. Install all dependencies:

```sh
yarn install
```

2. Install pods:

```sh
cd ios/ && pod install && cd ..
# --- or ---
npx pod-install
```

3. Run metro in other terminal tap (Optional):

```sh
yarn start
```

4. Run in iOS simulator:

```sh
yarn ios
```

5. Run in Android simulator:

```sh
yarn android
```

6 .Generate APK (Optional):

```sh
yarn android:build:apk
```

If you have any problem, these're my actual global versions:

- node: v16.16.0
- yarn: 1.22.19
- metro: v0.73.7

## Folders

| Folder name      | Description                                                                                                          |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| `ui`             | Contain all archives related with the UI components his logic, like interfaces, controllers, styles etc.             |
| `domain`         | This archive contains all entities, bussines rules, services, etc, it's the heart of my application.                 |
| `implementation` | In my implementation define all methods to get data and these are management by my hooks view (Controllers).         |
| `navigation`     | This folder contains all about the navigation in the app, constants, interfaces, architectures, definitions and more |
