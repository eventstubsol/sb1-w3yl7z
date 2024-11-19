export const DEFAULT_FIELD_CONFIGS = {
  name: {
    firstName: {
      label: 'First Name',
      placeholder: 'Enter first name',
      required: true,
    },
    middleName: {
      label: 'Middle Name',
      placeholder: 'Enter middle name',
      required: false,
      show: false,
    },
    lastName: {
      label: 'Last Name',
      placeholder: 'Enter last name',
      required: true,
    },
    helpText: '',
  },
  text: {
    label: 'Text Field',
    placeholder: 'Enter text',
    required: false,
    minLength: '',
    maxLength: '',
    defaultValue: '',
    pattern: '',
    helpText: '',
  },
  textarea: {
    label: 'Text Area',
    placeholder: 'Enter text here',
    required: false,
    rows: 4,
    minLength: '',
    maxLength: '',
    defaultValue: '',
    helpText: '',
  },
  email: {
    label: 'Email',
    placeholder: 'Enter email address',
    required: false,
    pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
    multiple: false,
    helpText: '',
  },
  address: {
    street: {
      label: 'Street Address',
      placeholder: 'Enter street address',
      required: true,
    },
    street2: {
      label: 'Apartment, suite, etc.',
      placeholder: 'Enter apartment, suite, etc.',
      required: false,
      show: false,
    },
    city: {
      label: 'City',
      placeholder: 'Enter city',
      required: true,
    },
    state: {
      label: 'State/Province',
      placeholder: 'Enter state/province',
      required: true,
    },
    zipCode: {
      label: 'ZIP/Postal Code',
      placeholder: 'Enter ZIP/postal code',
      required: true,
      pattern: '^[0-9]{5}(?:-[0-9]{4})?$',
    },
    country: {
      label: 'Country',
      placeholder: 'Select country',
      required: true,
    },
    helpText: '',
  },
  country: {
    label: 'Country',
    placeholder: 'Select country',
    required: false,
    defaultValue: '',
    helpText: '',
    searchable: true,
    showFlag: true,
  },
  numeric: {
    label: 'Number',
    placeholder: 'Enter number',
    required: false,
    min: '',
    max: '',
    step: '1',
    decimalPlaces: 0,
    allowNegative: true,
    format: '', // e.g., 'currency', 'percentage'
    helpText: '',
  },
  dropdown: {
    label: 'Dropdown',
    placeholder: 'Select an option',
    required: false,
    options: ['Option 1', 'Option 2', 'Option 3'],
    allowMultiple: false,
    searchable: false,
    defaultValue: '',
    helpText: '',
  },
  radio: {
    label: 'Radio Group',
    required: false,
    options: ['Option 1', 'Option 2', 'Option 3'],
    inline: true,
    defaultValue: '',
    helpText: '',
  },
  checkbox: {
    label: 'Checkbox',
    text: 'Check this option',
    required: false,
    checked: false,
    helpText: '',
  },
  url: {
    label: 'Website URL',
    placeholder: 'Enter website URL',
    required: false,
    pattern: '^https?://.+',
    defaultValue: '',
    helpText: '',
  },
  datetime: {
    label: 'Date & Time',
    type: 'datetime-local', // 'date', 'time', 'datetime-local'
    required: false,
    min: '',
    max: '',
    defaultValue: '',
    format: '', // e.g., 'YYYY-MM-DD', 'HH:mm'
    helpText: '',
  },
  file: {
    label: 'File Upload',
    required: false,
    multiple: false,
    accept: '*/*',
    maxSize: 5, // in MB
    maxFiles: 1,
    allowedTypes: [], // e.g., ['.pdf', '.doc', '.docx']
    helpText: '',
  },
  image: {
    label: 'Image Upload',
    required: false,
    multiple: false,
    accept: 'image/*',
    maxSize: 2, // in MB
    maxFiles: 1,
    maxWidth: 1920,
    maxHeight: 1080,
    aspectRatio: '', // e.g., '16:9', '4:3', '1:1'
    allowedTypes: ['.jpg', '.jpeg', '.png', '.gif'],
    helpText: '',
  },
  html: {
    label: 'Custom HTML',
    content: '<div>Custom HTML content</div>',
    helpText: '',
  },
  phone: {
    label: 'Phone Number',
    placeholder: 'Enter phone number',
    required: false,
    format: '+1 (###) ###-####',
    defaultCountry: 'US',
    allowInternational: true,
    helpText: '',
  },
};

// Alias export for DEFAULT_FIELDS
export const DEFAULT_FIELDS = DEFAULT_FIELD_CONFIGS;
