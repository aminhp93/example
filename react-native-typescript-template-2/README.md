# React Native Typescript Template

This is a template for React Native projects using Typescript. - Based on official [React Native](https://reactnative.dev/docs/typescript) and profice more functionality. - Includes ...

## Installation

Install package

```sh
yarn install
```

Install ios

```sh
npx pod-install ios
```

Run

```
npm run ios
```

## Structure

- Template use [React Native CLI](https://reactnative.dev/docs/environment-setup)
- Stack use:
  - Redux toolkit
- Styles:
  - Use inline style
- Features include:
  - Login/logout
  - Get profile of use in github
- Upcoming features:
  - Get list of followers

## Note

1. To debug with React-native-debugger
   - For installation: [React Native Debugger](https://github.com/jhen0409/react-native-debugger)
   - In iso/Podfile, change hermes_enabled from `true` to `false`
   - View network click `Enable Network Inspect` in menu when right click React Native Debugger
   - To copy object when debug, in Console, change dropdown to `RNDebuggerWorker`

![Screen Shot 2022-11-04 at 09 22 08](https://user-images.githubusercontent.com/17437143/199871936-f00b4dfd-0329-4033-9e28-445d5df20e8c.png)

## Documentation (v0.10)

Please visit [`v0.10 branch`](https://github.com/jhen0409/react-native-debugger/tree/v0.10).

## LICENSE

[MIT](LICENSE.md)
