import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Copy, Trash2, Upload, Image } from 'lucide-react';
import { FormField } from '../types';

interface ImageUploadFieldProps {
  field: FormField;
  isSelected: boolean;
  onSelect: (field: FormField) => void;
  onDelete: (id: string) => void;
  onDuplicate: (field: FormField) => void;
}

export function ImageUploadField({
  field,
  isSelected,
  onSelect,
  onDelete,
  onDuplicate,
}: ImageUploadFieldProps) {
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

  const { label, required, helpText, maxSize, accept, multiple } =
    field.properties;

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
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>

        <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md bg-gray-50">
          <div className="space-y-2 text-center">
            <Image className="mx-auto h-12 w-12 text-gray-400" />
            <div className="text-sm text-gray-600">
              <label className="relative cursor-not-allowed">
                <span>Upload {multiple ? 'images' : 'an image'}</span>
                <input
                  type="file"
                  accept={accept}
                  multiple={multiple}
                  disabled
                  className="sr-only"
                />
              </label>
              <p className="text-xs text-gray-500">
                {accept?.split(',').join(', ')} up to {maxSize}MB
              </p>
            </div>
          </div>
        </div>

        {helpText && <p className="mt-1 text-sm text-gray-500">{helpText}</p>}
      </div>
    </div>
  );
}
