import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import {
  User,
  Mail,
  Type,
  FileText,
  MapPin,
  Flag,
  Hash,
  List,
  Radio,
  CheckSquare,
  Globe,
  Calendar,
  Image,
  Upload,
  Code,
  Phone,
  AlignLeft,
} from 'lucide-react';
import { DEFAULT_FIELD_CONFIGS } from './constants';

const FIELD_TYPES = [
  { icon: User, label: 'Name Fields', type: 'name' },
  { icon: Type, label: 'Simple Text', type: 'text' },
  { icon: FileText, label: 'Text Area', type: 'textarea' },
  { icon: Mail, label: 'Email', type: 'email' },
  { icon: MapPin, label: 'Address Fields', type: 'address' },
  { icon: Flag, label: 'Country List', type: 'country' },
  { icon: Hash, label: 'Numeric Field', type: 'numeric' },
  { icon: List, label: 'Dropdown', type: 'dropdown' },
  { icon: Radio, label: 'Radio Field', type: 'radio' },
  { icon: CheckSquare, label: 'Checkbox', type: 'checkbox' },
  { icon: Globe, label: 'Website URL', type: 'url' },
  { icon: Calendar, label: 'Time & Date', type: 'datetime' },
  { icon: Image, label: 'Image Upload', type: 'image' },
  { icon: Upload, label: 'File Upload', type: 'file' },
  { icon: Code, label: 'Custom HTML', type: 'html' },
  { icon: Phone, label: 'Phone/Mobile', type: 'phone' },
  { icon: AlignLeft, label: 'Multiple Choice', type: 'multiple' },
  { icon: AlignLeft, label: 'Mask Input', type: 'mask' },
];

function DraggableItem({
  type,
  icon: Icon,
  label,
}: {
  type: string;
  icon: any;
  label: string;
}) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `toolbox-${type}`,
    data: {
      type,
      isToolboxItem: true,
      defaultConfig: DEFAULT_FIELD_CONFIGS[type],
    },
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`flex items-center justify-start px-4 py-3 cursor-pointer rounded-lg border text-sm gap-3 hover:bg-gray-100 bg-white shadow-sm
        ${isDragging ? 'opacity-50' : ''}`}
      style={{
        touchAction: 'none',
      }}
    >
      <Icon className="w-5 h-5 text-gray-600" />
      <span className="text-gray-700 font-medium">{label}</span>
    </div>
  );
}

export function ToolboxPanel() {
  return (
    <div className="w-full bg-white border-r shadow">
      <div className="p-4 border-b bg-gray-50">
        <h2 className="text-sm font-semibold text-gray-700">Form Fields</h2>
      </div>
      <div className="p-3">
        <div className="grid grid-cols-2 gap-3">
          {FIELD_TYPES.map((field) => (
            <DraggableItem
              key={field.type}
              type={field.type}
              icon={field.icon}
              label={field.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
