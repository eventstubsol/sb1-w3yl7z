export interface BaseFieldProperties {
  label: string;
  required: boolean;
  helpText?: string;
}

export interface NameFieldProperties extends BaseFieldProperties {
  firstName: {
    label: string;
    placeholder: string;
    required: boolean;
  };
  middleName: {
    label: string;
    placeholder: string;
    required: boolean;
    show: boolean;
  };
  lastName: {
    label: string;
    placeholder: string;
    required: boolean;
  };
}

export interface TextFieldProperties extends BaseFieldProperties {
  placeholder: string;
}

export interface TextAreaProperties extends BaseFieldProperties {
  placeholder: string;
  rows: number;
}

export interface EmailFieldProperties extends BaseFieldProperties {
  placeholder: string;
}

export interface MaskInputProperties extends BaseFieldProperties {
  placeholder: string;
  mask: string;
}

export interface AddressFieldProperties extends BaseFieldProperties {
  street: {
    label: string;
    placeholder: string;
    required: boolean;
  };
  city: {
    label: string;
    placeholder: string;
    required: boolean;
  };
  state: {
    label: string;
    placeholder: string;
    required: boolean;
  };
  zipCode: {
    label: string;
    placeholder: string;
    required: boolean;
  };
  country: {
    label: string;
    placeholder: string;
    required: boolean;
  };
}

export interface CountryFieldProperties extends BaseFieldProperties {
  placeholder: string;
  defaultCountry?: string;
}

export interface NumericFieldProperties extends BaseFieldProperties {
  placeholder: string;
  min?: number;
  max?: number;
  step?: number;
}

export interface DropdownFieldProperties extends BaseFieldProperties {
  placeholder: string;
  options: string[];
}

export interface RadioFieldProperties extends BaseFieldProperties {
  options: string[];
  inline: boolean;
}

export interface CheckboxFieldProperties extends BaseFieldProperties {
  text: string;
  checked: boolean;
}

export interface UrlFieldProperties extends BaseFieldProperties {
  placeholder: string;
}

export interface DateTimeFieldProperties extends BaseFieldProperties {
  type: 'date' | 'time' | 'datetime-local';
  min?: string;
  max?: string;
}

export interface FileUploadFieldProperties extends BaseFieldProperties {
  accept?: string;
  multiple: boolean;
  maxSize: number; // in MB
}

export interface ImageUploadFieldProperties extends BaseFieldProperties {
  maxSize: number; // in MB
  accept: string;
  maxWidth?: number;
  maxHeight?: number;
}

export interface HtmlFieldProperties extends BaseFieldProperties {
  content: string;
}

export interface PhoneFieldProperties extends BaseFieldProperties {
  placeholder: string;
  format: string;
}

export interface MultipleChoiceFieldProperties extends BaseFieldProperties {
  options: string[];
}

export type FieldProperties =
  | NameFieldProperties
  | TextFieldProperties
  | TextAreaProperties
  | EmailFieldProperties
  | MaskInputProperties
  | AddressFieldProperties
  | CountryFieldProperties
  | NumericFieldProperties
  | DropdownFieldProperties
  | RadioFieldProperties
  | CheckboxFieldProperties
  | UrlFieldProperties
  | DateTimeFieldProperties
  | FileUploadFieldProperties
  | ImageUploadFieldProperties
  | HtmlFieldProperties
  | PhoneFieldProperties
  | MultipleChoiceFieldProperties;

export interface FormField {
  id: string;
  type: string;
  properties: FieldProperties;
}
