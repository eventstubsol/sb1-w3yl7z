import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Copy, Trash2 } from 'lucide-react';
import { FormField } from '../types';

interface AddressFieldProps {
  field: FormField;
  isSelected: boolean;
  onSelect: (field: FormField) => void;
  onDelete: (id: string) => void;
  onDuplicate: (field: FormField) => void;
}

export function AddressField({
  field,
  isSelected,
  onSelect,
  onDelete,
  onDuplicate,
}: AddressFieldProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: field.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const { street, city, state, zipCode, country, helpText } =
    field.properties as any;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`relative p-6 rounded-lg border-2 transition-all mb-4 cursor-move group
        ${
          isSelected
            ? 'border-blue-500'
            : 'border-gray-200 hover:border-gray-300'
        }`}
      onClick={() => onSelect(field)}
    >
      <div className="absolute top-3 right-3 flex gap-2">
        <button
          className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md"
          onClick={(e) => {
            e.stopPropagation();
            onDuplicate(field);
          }}
        >
          <Copy className="w-4 h-4" />
        </button>
        <button
          className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(field.id);
          }}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        {/* Street Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {street.label}{' '}
            {street.required && <span className="text-red-500">*</span>}
          </label>
          <input
            type="text"
            placeholder={street.placeholder}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            readOnly
          />
        </div>

        {/* City, State, and ZIP in a row */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {city.label}{' '}
              {city.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              placeholder={city.placeholder}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {state.label}{' '}
              {state.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              placeholder={state.placeholder}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {zipCode.label}{' '}
              {zipCode.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              placeholder={zipCode.placeholder}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              readOnly
            />
          </div>
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {country.label}{' '}
            {country.required && <span className="text-red-500">*</span>}
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            disabled
          >
            <option>{country.placeholder}</option>
          </select>
        </div>

        {helpText && <p className="mt-1 text-sm text-gray-500">{helpText}</p>}
      </div>
    </div>
  );
}
