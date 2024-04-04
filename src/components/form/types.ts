import { FORM_INITIAL_VALUES } from "./constants";

export type FormValues = {
  [key in keyof typeof FORM_INITIAL_VALUES]: (typeof FORM_INITIAL_VALUES)[key];
};
