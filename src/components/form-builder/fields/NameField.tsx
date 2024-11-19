import React from 'react';
import { FormField } from '../types';
import { FieldWrapper } from '../FieldWrapper';

interface NameFieldProps {
  field: FormField;
  isSelected: boolean;
  onSelect: (field: FormField) => void;
  onDelete: (id: string) => void;
  onDuplicate: (field: FormField) => void;
}

export function NameField(props: NameFieldProps) {
  const { firstName, middleName, lastName } = props.field.properties as any;

  return (
    <FieldWrapper
      field={props.field}
      isSelected={props.isSelected}
      onSelect={props.onSelect}
      onDelete={props.onDelete}
      onDuplicate={props.onDuplicate}
    >
      <div
        className={`grid ${
          middleName?.show ? 'grid-cols-3' : 'grid-cols-2'
        } gap-4 mt-2`}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {firstName?.label}{' '}
            {firstName?.required && <span className="text-red-500">*</span>}
          </label>
          <input
            type="text"
            placeholder={firstName?.placeholder}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            readOnly
          />
        </div>

        {middleName?.show && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {middleName?.label}{' '}
              {middleName?.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              placeholder={middleName?.placeholder}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              readOnly
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {lastName?.label}{' '}
            {lastName?.required && <span className="text-red-500">*</span>}
          </label>
          <input
            type="text"
            placeholder={lastName?.placeholder}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            readOnly
          />
        </div>
      </div>
      {props.field.properties.helpText && (
        <p className="mt-1 text-sm text-gray-500">
          {props.field.properties.helpText}
        </p>
      )}
    </FieldWrapper>
  );
}
