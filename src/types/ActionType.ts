import {UserType} from './UserType';

export interface ActionType {
  type: string;
  payload: {
    flag?: boolean;
    payloadString?: string;
    payloadUserType?: UserType;
  };
}
