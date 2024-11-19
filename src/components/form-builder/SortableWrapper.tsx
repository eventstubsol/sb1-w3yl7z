import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';
import { FieldWrapper } from './FieldWrapper';
import { FormField } from './types';

interface SortableWrapperProps {
  field: FormField;
  isSelected: boolean;
  onSelect: (field: FormField) => void;
  onDelete: (id: string) => void;
  onDuplicate: (field: FormField) => void;
  children: React.ReactNode;
}

export function SortableWrapper({
  field,
  isSelected,
  onSelect,
  onDelete,
  onDuplicate,
  children,
}: SortableWrapperProps) {
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
    zIndex: isDragging ? 1 : 0,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative ${isDragging ? 'opacity-50' : ''}`}
    >
      <FieldWrapper
        field={field}
        isSelected={isSelected}
        onSelect={onSelect}
        onDelete={onDelete}
        onDuplicate={onDuplicate}
      >
        <div
          className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-move"
          {...attributes}
          {...listeners}
        >
          <GripVertical className="w-5 h-5 text-gray-400" />
        </div>
        <div className="pl-6">{children}</div>
      </FieldWrapper>
    </div>
  );
}
