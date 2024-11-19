import React from 'react';
import {
  DndContext,
  DragEndEvent,
  useSensor,
  useSensors,
  PointerSensor,
  DragOverlay,
  DragStartEvent,
} from '@dnd-kit/core';
import { BuilderCanvas } from './BuilderCanvas';
import { ToolboxPanel } from './ToolboxPanel';
import { PropertiesPanel } from './PropertiesPanel';
import { FormPreview } from './FormPreview';
import { useFormBuilder } from './hooks/useFormBuilder';
import { getFieldComponent } from './fields';
import { DEFAULT_FIELDS } from './constants';

export function FormBuilder() {
  const {
    fields,
    selectedField,
    addField,
    updateField,
    removeField,
    reorderFields,
    selectField,
  } = useFormBuilder();

  const [isPreviewOpen, setIsPreviewOpen] = React.useState(false);
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [activeDragData, setActiveDragData] = React.useState<any>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
    setActiveDragData(event.active.data.current);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveId(null);
    setActiveDragData(null);

    if (!over) return;

    if (active.data.current?.isToolboxItem && over.id === 'builder-canvas') {
      const fieldType = active.data.current.type;
      const defaultConfig =
        DEFAULT_FIELDS[fieldType as keyof typeof DEFAULT_FIELDS];

      if (defaultConfig) {
        addField({
          id: crypto.randomUUID(),
          type: fieldType,
          properties: defaultConfig,
        });
      }
      return;
    }

    if (active.id !== over.id && !active.data.current?.isToolboxItem) {
      const oldIndex = fields.findIndex((field) => field.id === active.id);
      const newIndex = fields.findIndex((field) => field.id === over.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        const newFields = [...fields];
        const [movedField] = newFields.splice(oldIndex, 1);
        newFields.splice(newIndex, 0, movedField);
        reorderFields(newFields);
      }
    }
  };

  const renderDragOverlay = () => {
    if (!activeId || !activeDragData) return null;

    if (activeDragData.isToolboxItem) {
      const fieldType = activeDragData.type;
      const defaultConfig =
        DEFAULT_FIELDS[fieldType as keyof typeof DEFAULT_FIELDS];
      if (defaultConfig) {
        const FieldComponent = getFieldComponent({
          id: 'preview',
          type: fieldType,
          properties: defaultConfig,
        });
        return (
          <div className="opacity-80 pointer-events-none">
            <FieldComponent
              field={{
                id: 'preview',
                type: fieldType,
                properties: defaultConfig,
              }}
              isSelected={false}
              onSelect={() => {}}
              onDelete={() => {}}
              onDuplicate={() => {}}
              onUpdate={() => {}}
            />
          </div>
        );
      }
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-white">
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <header className="border-b">
          <div className="flex justify-between items-center px-4 py-3">
            <h1 className="text-xl font-semibold">Form Builder</h1>
            <div className="flex gap-3">
              <button
                onClick={() => setIsPreviewOpen(true)}
                className="px-4 py-2 text-gray-700 border rounded-md hover:bg-gray-50"
              >
                Preview Form
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Save Form
              </button>
            </div>
          </div>
        </header>

        <div className="flex">
          <div className="w-[30%] border-r min-h-[calc(100vh-64px)] overflow-y-auto">
            <ToolboxPanel />
          </div>

          <div className="w-[50%] border-r min-h-[calc(100vh-64px)] overflow-y-auto">
            <BuilderCanvas
              fields={fields}
              selectedField={selectedField}
              onFieldSelect={selectField}
              onFieldUpdate={updateField}
              onFieldDelete={removeField}
              onFieldDuplicate={() => {}}
            />
          </div>

          <div className="w-[20%] p-3 bg-white overflow-y-auto">
            {selectedField ? (
              <PropertiesPanel field={selectedField} onUpdate={updateField} />
            ) : (
              <div className="text-center py-6 text-gray-500 text-sm">
                Select a field to edit its properties
              </div>
            )}
          </div>
        </div>

        <DragOverlay>{renderDragOverlay()}</DragOverlay>

        <FormPreview
          isOpen={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
          fields={fields}
        />
      </DndContext>
    </div>
  );
}
