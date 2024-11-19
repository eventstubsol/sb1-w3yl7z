import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Copy, Settings, Trash2 } from 'lucide-react';
import { FormField } from './types';
import * as Fields from './fields';

interface SortableFieldProps {
  field: FormField;
  isSelected: boolean;
  onSelect: () => void;
  onRemove: () => void;
  onClone?: (field: FormField) => void;
  onEdit?: () => void;
}

export default function SortableField({
  field,
  isSelected,
  onSelect,
  onRemove,
  onClone,
  onEdit
}: SortableFieldProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: field.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const FieldComponent = Fields[field.type as keyof typeof Fields];

  const handleClone = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClone?.(field);
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit?.();
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove();
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative group border rounded-lg p-4 mb-2 cursor-pointer ${
        isSelected ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'
      }`}
      onClick={onSelect}
    >
      <div 
        className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 cursor-move" 
        {...attributes} 
        {...listeners}
      >
        <GripVertical className="w-4 h-4 text-gray-400" />
      </div>

      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-0 group-hover:opacity-100">
        <button
          onClick={handleEdit}
          className="p-1 rounded-md hover:bg-gray-100 transition-colors"
          title="Edit Properties"
        >
          <Settings className="w-4 h-4 text-gray-500" />
        </button>
        <button
          onClick={handleClone}
          className="p-1 rounded-md hover:bg-gray-100 transition-colors"
          title="Clone Field"
        >
          <Copy className="w-4 h-4 text-gray-500" />
        </button>
        <button
          onClick={handleDelete}
          className="p-1 rounded-md hover:bg-gray-100 transition-colors"
          title="Delete Field"
        >
          <Trash2 className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      <div className="pl-6 pr-20">
        <FieldComponent {...field} />
      </div>
    </div>
  );
}