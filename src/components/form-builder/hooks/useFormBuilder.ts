import { useState, useCallback } from 'react';
import { FormField } from '../types';
import { useFormBuilder } from './hooks/useFormBuilder';
import { Edit2 } from 'lucide-react';

export function useFormBuilder() {
  const [fields, setFields] = useState<FormField[]>([]);
  const [selectedField, setSelectedField] = useState<FormField | null>(null);

  const addField = useCallback((field: FormField) => {
    setFields((prev) => [...(Array.isArray(prev) ? prev : []), field]);
    setSelectedField(field);
  }, []);

  const updateField = useCallback((updatedField: FormField) => {
    setFields((prev) => {
      const current = Array.isArray(prev) ? prev : [];
      return current.map((f) => (f.id === updatedField.id ? updatedField : f));
    });
    setSelectedField(updatedField);
  }, []);

  const deleteField = useCallback(
    (fieldId: string) => {
      setFields((prev) => {
        const current = Array.isArray(prev) ? prev : [];
        return current.filter((f) => f.id !== fieldId);
      });
      if (selectedField?.id === fieldId) {
        setSelectedField(null);
      }
    },
    [selectedField]
  );

  const duplicateField = useCallback((field: FormField) => {
    const newField = {
      ...field,
      id: crypto.randomUUID(),
    };
    setFields((prev) => [...(Array.isArray(prev) ? prev : []), newField]);
    setSelectedField(newField);
  }, []);

  const reorderFields = useCallback((oldIndex: number, newIndex: number) => {
    setFields((prev) => {
      const current = Array.isArray(prev) ? prev : [];
      const result = [...current];
      const [removed] = result.splice(oldIndex, 1);
      result.splice(newIndex, 0, removed);
      return result;
    });
  }, []);

  return {
    fields: Array.isArray(fields) ? fields : [], // Ensure we always return an array
    selectedField,
    addField,
    updateField,
    deleteField,
    duplicateField,
    setSelectedField,
    reorderFields,
  };
}
