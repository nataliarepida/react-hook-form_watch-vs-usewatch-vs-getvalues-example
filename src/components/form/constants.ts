export const FORM_FIELDS = {
  first_name: "first_name",
  last_name: "last_name",
  country: "country",
  telephone: "telephone",
} as const;

export const FORM_FIELDS_LABELS = {
  first_name: "First Name",
  last_name: "Last Name",
  country: "Country",
  telephone: "Telephone",
};

export const FORM_INITIAL_VALUES = {
  [FORM_FIELDS.first_name]: "",
  [FORM_FIELDS.last_name]: "",
  [FORM_FIELDS.country]: "",
  [FORM_FIELDS.telephone]: "",
};
