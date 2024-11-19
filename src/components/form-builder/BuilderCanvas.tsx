import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { FormField } from './types';
import { getFieldComponent } from './fields';

interface BuilderCanvasProps {
  fields: FormField[];
  selectedField: FormField | null;
  onFieldSelect: (field: FormField) => void;
  onFieldUpdate: (field: FormField) => void;
  onFieldDelete: (id: string) => void;
  onFieldDuplicate: (field: FormField) => void;
}

export function BuilderCanvas({
  fields = [],
  selectedField,
  onFieldSelect,
  onFieldUpdate,
  onFieldDelete,
  onFieldDuplicate,
}: BuilderCanvasProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: 'builder-canvas',
  });

  return (
    <div
      ref={setNodeRef}
      className={`p-4 min-h-full transition-colors duration-200 ${
        isOver ? 'bg-blue-50' : 'bg-gray-50'
      }`}
    >
      <SortableContext
        items={fields.map((field) => field.id)}
        strategy={verticalListSortingStrategy}
      >
        {fields.map((field) => {
          const FieldComponent = getFieldComponent(field);
          return (
            <FieldComponent
              key={field.id}
              field={field}
              isSelected={selectedField?.id === field.id}
              onSelect={onFieldSelect}
              onDelete={onFieldDelete}
              onDuplicate={onFieldDuplicate}
              onUpdate={onFieldUpdate}
            />
          );
        })}
      </SortableContext>

      {fields.length === 0 && (
        <div
          className={`flex items-center justify-center h-full min-h-[400px] border-2 border-dashed rounded-lg transition-colors duration-200 ${
            isOver ? 'border-blue-300 bg-blue-50' : 'border-gray-300'
          }`}
        >
          <p className="text-gray-500">Drag and drop fields here</p>
        </div>
      )}
    </div>
  );
}
