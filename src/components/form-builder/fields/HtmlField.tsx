import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Copy, Trash2 } from 'lucide-react';
import { FormField } from '../types';

interface HtmlFieldProps {
  field: FormField;
  isSelected: boolean;
  onSelect: (field: FormField) => void;
  onDelete: (id: string) => void;
  onDuplicate: (field: FormField) => void;
}

export function HtmlField({
  field,
  isSelected,
  onSelect,
  onDelete,
  onDuplicate,
}: HtmlFieldProps) {
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

  const { label, content, helpText } = field.properties;

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

      <div>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}

        <div className="mt-2 border border-gray-300 rounded-md bg-gray-50 p-4">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        {helpText && <p className="mt-1 text-sm text-gray-500">{helpText}</p>}
      </div>
    </div>
  );
}
