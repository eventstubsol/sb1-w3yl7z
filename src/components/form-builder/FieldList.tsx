import React from 'react';
import { FormField } from './types';
import { SortableField } from './SortableField';

interface FieldListProps {
  fields: FormField[];
  selectedField: FormField | null;
  onFieldSelect: (field: FormField) => void;
  onFieldDelete: (id: string) => void;
  onFieldDuplicate: (field: FormField) => void;
  onFieldUpdate: (field: FormField) => void;
}

export function FieldList({
  fields,
  selectedField,
  onFieldSelect,
  onFieldDelete,
  onFieldDuplicate,
  onFieldUpdate
}: FieldListProps) {
  return (
    <div className="space-y-4">
      {fields.map(field => (
        <SortableField
          key={field.id}
          field={field}
          isSelected={selectedField?.id === field.id}
          onSelect={onFieldSelect}
          onDelete={onFieldDelete}
          onDuplicate={onFieldDuplicate}
          onUpdate={onFieldUpdate}
        />
      ))}
    </div>
  );
}