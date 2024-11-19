import React from 'react';
import { FormField } from './types';
import { User, Type, FileText, List } from 'lucide-react';

interface ElementToolboxProps {
  onAddField: (field: FormField) => void;
}

const ELEMENTS = [
  {
    type: 'name',
    icon: User,
    label: 'Name Fields',
    defaultProperties: {
      firstName: {
        label: 'First Name',
        placeholder: 'Enter first name',
        required: true
      },
      middleName: {
        label: 'Middle Name',
        placeholder: 'Enter middle name',
        required: false,
        show: false
      },
      lastName: {
        label: 'Last Name',
        placeholder: 'Enter last name',
        required: true
      },
      helpText: ''
    }
  },
  // Add other elements here as needed
];

export function ElementToolbox({ onAddField }: ElementToolboxProps) {
  const handleAddElement = (type: string) => {
    const element = ELEMENTS.find(e => e.type === type);
    if (element) {
      onAddField({
        id: crypto.randomUUID(),
        type: element.type,
        properties: element.defaultProperties
      });
    }
  };

  return (
    <div className="p-4 space-y-2">
      {ELEMENTS.map(({ type, icon: Icon, label }) => (
        <button
          key={type}
          onClick={() => handleAddElement(type)}
          className="w-full flex items-center gap-2 p-2 hover:bg-gray-100 rounded text-left"
        >
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}