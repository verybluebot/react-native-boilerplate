# React Native Boilerplate
React Native boilerplate is a light weight bliolerpalte to start your project with tools evey app needs without 
overloading your code and understanding :)

## Whats inside?
This is the bare minimum, for my own porjects I guss with time more will be added. 
That said I wanted it to be as lean and minimal as possible.

the boilerplate is a 2 page "app" with navigation button to the second page.
On the second page there is an input field that changes text on that page and on the main page.

under the hood:
1. [Redux](http://redux.js.org/) state management 
2. Navigation with [React Navigation](https://reactnavigation.org/) integrated with redux state (navigation saved in state)
3. Icons with [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) (the logo icon on the main page)
4. [React Native Elements](https://react-native-training.github.io/react-native-elements/) gives you buttons cards and such (the main button in the boilerplate)
5. [Extened Style Sheet](https://github.com/vitalets/react-native-extended-stylesheet) lets you create variables and much more in your styles
6. [Redux Logger](https://github.com/evgenyrodionov/redux-logger) logs state actions and changes for debugging in development

## Install
 1. for installing download/clone:
```
git clone https://github.com/verybluebot/react-native-boilerplate.git
```

2. cd into the project:
``` 
cd react-native-boilerplate
```
3. install all dependencies:
```
npm install
```
4. build and run app on iOS:
``` 
react-native run-ios
```
4a. build and run app on Android:
```
// open your emulator (Andorid Studio AVD or the one you use)
react-native run-android

```

## License 
[MIT](https://github.com/verybluebot/react-native-boilerplate/blob/master/LICENSE)
