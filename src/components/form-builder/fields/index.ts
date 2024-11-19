import { FormField } from '../types';
import { NameField } from './NameField';
import { TextField } from './TextField';
import { TextAreaField } from './TextAreaField';
import { EmailField } from './EmailField';
import { AddressField } from './AddressField';
import { CountryField } from './CountryField';
import { NumericField } from './NumericField';
import { DropdownField } from './DropdownField';
import { RadioField } from './RadioField';
import { CheckboxField } from './CheckboxField';
import { UrlField } from './UrlField';
import { DateTimeField } from './DateTimeField';
import { ImageUploadField } from './ImageUploadField';
import { FileUploadField } from './FileUploadField';
import { HtmlField } from './HtmlField';
import { PhoneField } from './PhoneField';

export {
  NameField,
  TextField,
  TextAreaField,
  EmailField,
  AddressField,
  CountryField,
  NumericField,
  DropdownField,
  RadioField,
  CheckboxField,
  UrlField,
  DateTimeField,
  ImageUploadField,
  FileUploadField,
  HtmlField,
  PhoneField,
};

export function getFieldComponent(field: FormField) {
  const components: Record<string, React.ComponentType<any>> = {
    name: NameField,
    text: TextField,
    textarea: TextAreaField,
    email: EmailField,
    address: AddressField,
    country: CountryField,
    numeric: NumericField,
    dropdown: DropdownField,
    radio: RadioField,
    checkbox: CheckboxField,
    url: UrlField,
    datetime: DateTimeField,
    image: ImageUploadField,
    file: FileUploadField,
    html: HtmlField,
    phone: PhoneField,
  };

  return components[field.type] || TextField;
}
