import React from 'react';
import { FormField } from './types';

interface PropertiesPanelProps {
  field: FormField;
  onUpdate: (field: FormField) => void;
}

export function PropertiesPanel({ field, onUpdate }: PropertiesPanelProps) {
  // Handler for name field properties
  const handleNameFieldChange = (
    name: 'firstName' | 'middleName' | 'lastName',
    key: string,
    value: string | boolean
  ) => {
    onUpdate({
      ...field,
      properties: {
        ...field.properties,
        [name]: {
          ...field.properties[name],
          [key]: value,
        },
      },
    });
  };

  // Handler for other field properties
  const handleBasicChange = (key: string, value: string | boolean | number) => {
    onUpdate({
      ...field,
      properties: {
        ...field.properties,
        [key]: value,
      },
    });
  };

  const renderFieldSpecificProperties = () => {
    switch (field.type) {
      case 'name':
        return (
          <div className="space-y-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                First Name Label
              </label>
              <input
                type="text"
                value={field.properties.firstName.placeholder}
                onChange={(e) =>
                  handleNameFieldChange(
                    'firstName',
                    'placeholder',
                    e.target.value
                  )
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter first name"
              />
              <div className="mt-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={field.properties.firstName.required}
                    onChange={(e) =>
                      handleNameFieldChange(
                        'firstName',
                        'required',
                        e.target.checked
                      )
                    }
                    className="rounded border-gray-300 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">Required</span>
                </label>
              </div>
            </div>

            {/* Middle Name */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-900">
                  Middle Name Label
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={field.properties.middleName.show}
                    onChange={(e) =>
                      handleNameFieldChange(
                        'middleName',
                        'show',
                        e.target.checked
                      )
                    }
                    className="rounded border-gray-300 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">Show</span>
                </label>
              </div>
              {field.properties.middleName.show && (
                <>
                  <input
                    type="text"
                    value={field.properties.middleName.placeholder}
                    onChange={(e) =>
                      handleNameFieldChange(
                        'middleName',
                        'placeholder',
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter middle name"
                  />
                  <div className="mt-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={field.properties.middleName.required}
                        onChange={(e) =>
                          handleNameFieldChange(
                            'middleName',
                            'required',
                            e.target.checked
                          )
                        }
                        className="rounded border-gray-300 text-blue-600"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        Required
                      </span>
                    </label>
                  </div>
                </>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Last Name Label
              </label>
              <input
                type="text"
                value={field.properties.lastName.placeholder}
                onChange={(e) =>
                  handleNameFieldChange(
                    'lastName',
                    'placeholder',
                    e.target.value
                  )
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter last name"
              />
              <div className="mt-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={field.properties.lastName.required}
                    onChange={(e) =>
                      handleNameFieldChange(
                        'lastName',
                        'required',
                        e.target.checked
                      )
                    }
                    className="rounded border-gray-300 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-600">Required</span>
                </label>
              </div>
            </div>

            {/* Help Text */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Help Text
              </label>
              <input
                type="text"
                value={field.properties.helpText || ''}
                onChange={(e) =>
                  onUpdate({
                    ...field,
                    properties: {
                      ...field.properties,
                      helpText: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter help text"
              />
            </div>
          </div>
        );

      // ... rest of the field types' properties panels
      case 'text':
      case 'email':
      case 'url':
      case 'phone':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Label
              </label>
              <input
                type="text"
                value={field.properties.label}
                onChange={(e) => handleBasicChange('label', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Placeholder
              </label>
              <input
                type="text"
                value={field.properties.placeholder || ''}
                onChange={(e) =>
                  handleBasicChange('placeholder', e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={field.properties.required}
                  onChange={(e) =>
                    handleBasicChange('required', e.target.checked)
                  }
                  className="rounded border-gray-300 text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-600">Required</span>
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Help Text
              </label>
              <input
                type="text"
                value={field.properties.helpText || ''}
                onChange={(e) => handleBasicChange('helpText', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter help text"
              />
            </div>
          </div>
        );

      // ... continue with other field types
    }
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Field Properties
        </h3>
        {renderFieldSpecificProperties()}
      </div>
    </div>
  );
}
