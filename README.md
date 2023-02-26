# Zemoga's Challenge: React Native

![](https://github.com/miguelzabalaf/ZemogaTestReactNative/blob/master/public/assets/images/zemoga-challenge-poster.png)

I hope and exceed your expectations. This react native(0.71.2) project based on clean architecture **DDD** (Domain Driven Design). I split this application in different layers with specific responsabilities: _Domain_, _Use cases_, _Adapters_, _Controllers_.

## Run this project

1. Install all dependencies:

```sh
yarn install
```

2. Install pods:

```sh
yarn pod:install
```

3. Run metro in other terminal tap (Optional):

```sh
yarn start
```

1. Run in iOS simulator, also you can open Xcode and run 2 different schemas (Debug or Release), with this command you can run in debug mode:

```sh
yarn ios
```

5. Run in Android simulator:

```sh
yarn android
```

If you have any problem, these're my actual global versions:

- node: v16.16.0
- yarn: 1.22.19
- metro: v0.73.7

Other commands:

1. Gradlew clean:

```sh
yarn android:clean
```

2. Generate APK:

```sh
yarn android:build:apk
```

## Folders

| Name             | Description                                                                                                                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ui`             | Contain all archives related with the UI components his logic, like interfaces, controllers, styles etc.                                                                                       |
| `domain`         | This archive contains all entities, bussines rules, services, etc, it's the heart of my application.                                                                                           |
| `implementation` | In my implementation define all methods to get data and these are management by my hooks view (Controllers).                                                                                   |
| `navigation`     | This folder contains all about the navigation in the app, constants, interfaces, architectures, definitions and more.                                                                          |
| `constants`      | In this folder you can see all constants used by user interfaces, like strings and endpoints.                                                                                                  |
| `config`         | In this folder you can set any configuration (global) for this app, in my case, i set the interceptor configuration to intercept all petitions and set configurations like timeout and headers |
| `redux`          | You can see all about: constants, types, interfaces, store, reducers and more related with redux configuration                                                                                 |
| `helpers`        | In this folder you can find function to resolve especific functionalities in the app                                                                                                           |

## Libraries

| Name                                        | Documentation                                                        | Description                                                                                                                                                                                                                             |
| ------------------------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `react-native-ui-lib`                       | https://github.com/wix/react-native-ui-lib                           | This is may favorite UI library to build beautiful user interfaces and preset a global styles of my application.                                                                                                                        |
| `react-native-navigation`                   | https://wix.github.io/react-native-navigation/docs/before-you-start/ | It's a [Recomended library](https://reactnative.directory/?search=react-native-navigation) by react native to manage native navigations, see preferences of navigation by react native [here](https://reactnative.dev/docs/navigation). |
| `react-redux`                               | https://react-redux.js.org/introduction/getting-started              | It's my preferred library to manage all global data of my application, based on [Redux](https://redux.js.org/).                                                                                                                         |
| `redux-persist`                             | https://github.com/rt2zz/redux-persist                               | All redux developer needs know about this library, this library help us to persist all o specific data in our local storage (Mobile and Web).                                                                                           |
| `@react-native-async-storage/async-storage` | https://react-native-async-storage.github.io/async-storage/          | It's a library to manage Data storage of my device (iOS/Android). The principal skill is your persistent storage, and i use that hability for my **persistConfig**.                                                                     |
| `redux-immutable-state-invariant`           | https://github.com/leoasis/redux-immutable-state-invariant           | It's a development tool (middleware of my store) , thats spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.                                                                        |
| `@react-native-community/netinfo`           | https://github.com/react-native-netinfo/react-native-netinfo         | With this library i was subscribed to my conection information and show a banner if i didn't have conection.                                                                                                                            |
| `axios`                                     | https://axios-http.com/docs/intro                                    | It's my preferred library to make HTTP request.                                                                                                                                                                                         |
| `lodash`                                    | https://lodash.com/                                                  | It's a utility library of Javascript with a good performance.                                                                                                                                                                           |
| `react-native-size-matters`                 | https://github.com/nirsky/react-native-size-matters                  | It's a simple tooling to make your scaling a whole lot easier (All styles in this app was created with this library)                                                                                                                    |
| `react-native-svg`                          | https://www.npmjs.com/package/react-native-svg                       | Used by adapt SVG images to create a custom components (Of icons)                                                                                                                                                                       |

## Requirements

| Requirement                                                                                                                             | By     | Completed                                    | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Load the posts from the JSON API and populate the view                                                                                  | Zemoga | <div align="center">:white_check_mark:</div> | Posts loaded with `axios` library and persist data with `redux`, `redux-persist` and `@react-native-async-storage/async-storage`. |
| Each cell/row should show the title of the post without clipping ( dynamic height ).                                                    | Zemoga | <div align="center">:white_check_mark:</div> | UI Builded by me with `react-native-ui-lib` and `react-native-size-matters`.                                                      |
| Once a Post is tapped, the user should be taken to a Post Details Screen.                                                               | Zemoga | <div align="center">:white_check_mark:</div> | The navigation to postDetailScreen was builded with `react-native-navigation`.                                                    |
| The post details screen should contain: Title, description, author information, list of comments                                        | Zemoga | <div align="center">:white_check_mark:</div> | This view is very beautiful, i love so much my list preview of comments.                                                          |
| Implement a mechanism to favorite/unfavorite a post: All favorite posts will be on the op of the list and should have a start indicator | Zemoga | <div align="center">:white_check_mark:</div> | I mutate my list data and organize with **sort** function of arrays.                                                              |
| Implement a mechanism to delete a post.                                                                                                 | Zemoga | <div align="center">:white_check_mark:</div> | This part has many other validation, but i did it.                                                                                |
| Only can delete if the list have one o more unfavorite posts                                                                            | Me     | <div align="center">:white_check_mark:</div> | This validation is for me, because, the user cant delete favorite posts in the list, and this case is possible.                   |
| Implement a mechanism to remove all posts except from the favorites ones.                                                               | Zemoga | <div align="center">:white_check_mark:</div> | I did this with filter function of maps.                                                                                          |
| Implement a mechanism to load all posts from the API.                                                                                   | Zemoga | <div align="center">:white_check_mark:</div> | I was create a useCase, repository, implementation and service for this action.                                                   |
| Add meaningful Unit Tests.                                                                                                              | Zemoga | <div align="center">:white_check_mark:</div> | I created unit tests only for my HTTP petitions                                                                                   |
| **Extra points**                                                                                                                        |        |                                              |                                                                                                                                   |
| User should be able to see previously loaded posts.                                                                                     | Zemoga | <div align="center">:white_check_mark:</div> | You can see previously loaded posts, author information and comments.                                                             |
| User should be able to see post details.                                                                                                | Zemoga | <div align="center">:white_check_mark:</div> | You can see all information precargated                                                                                           |
| Incorporate a RFP (Reactive Functional Programming) solution as part of your implementation wherever it makes sense                     | Zemoga | <div align="center">:white_check_mark:</div> | All application was based on functional components                                                                                |
| Only load author information if is necessary                                                                                            | Me     | <div align="center">:white_check_mark:</div> | A one author have many posts, then, you dont need load the same information in other post of the same author                      |
| States                                                                                                                                  | Me     | <div align="center">:white_check_mark:</div> | Manage all possible erros in the app: Empty list, Error lo load, No internet, etc                                                 |
