import {Alert} from 'react-native';
import {AlertType} from '../types/AlertType';
//Common component for alert
export const createSingleButtonAlert = (props: AlertType) =>
  Alert.alert(props.AlertTitle, props.AlertMeassge, [
    {text: props.FirstButtonText},
  ]);
