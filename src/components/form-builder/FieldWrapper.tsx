import React, { ReactNode } from 'react';
import { Copy, Trash2, Settings2 } from 'lucide-react';
import { FormField } from './types';

interface FieldWrapperProps {
  field: FormField;
  isSelected: boolean;
  onSelect?: (field: FormField) => void;
  onDelete?: (id: string) => void; // Made onDelete optional
  onDuplicate: (field: FormField) => void;
  children: ReactNode;
}

export function FieldWrapper({
  field,
  isSelected,
  onSelect,
  onDelete,
  onDuplicate,
  children,
}: FieldWrapperProps) {
  return (
    <div
      className={`relative p-6 rounded-lg border-2 transition-all mb-4 cursor-pointer group
        ${
          isSelected
            ? 'border-blue-500'
            : 'border-gray-200 hover:border-gray-300'
        }`}
      onClick={() => onSelect?.(field)} // Safe call with optional chaining
    >
      {/* Actions Toolbar */}
      <div className="absolute top-3 right-3 flex items-center gap-2">
        {/* Edit Properties Button */}
        <button
          className={`p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md flex items-center gap-1
            ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
            transition-opacity duration-200`}
          onClick={(e) => {
            e.stopPropagation();
            onSelect?.(field); // Safe call with optional chaining
          }}
          title="Edit Properties"
        >
          <Settings2 className="w-4 h-4" />
          <span className="text-sm">Edit Properties</span>
        </button>

        {/* Duplicate Button */}
        <button
          className={`p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md
            ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
            transition-opacity duration-200`}
          onClick={(e) => {
            e.stopPropagation();
            onDuplicate(field);
          }}
          title="Duplicate Field"
        >
          <Copy className="w-4 h-4" />
        </button>

        {/* Delete Button */}
        <button
          className={`p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md
            ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
            transition-opacity duration-200`}
          onClick={(e) => {
            e.stopPropagation();
            onDelete?.(field.id); // Safe call with optional chaining
          }}
          title="Delete Field"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Field Content */}
      {children}
    </div>
  );
}
