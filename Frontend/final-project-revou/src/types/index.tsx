export interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  firstName: string;
  lastName: string;
  resetPasswordQuestion: string;
  resetPasswordAnswer: string;
}

export type SetToggleMenuType = (
  value: boolean | ((prev: boolean) => boolean)
) => void;
