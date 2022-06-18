import {StackActions} from '@react-navigation/native';

let _navigator;

export const setTopLevelNavigator = navigatorRef => {
  _navigator = navigatorRef;
};

export const pop = () => {
  _navigator.dispatch(
    StackActions.pop(1),
  );
};
