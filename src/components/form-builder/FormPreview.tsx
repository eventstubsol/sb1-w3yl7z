import React from 'react';
import { X } from 'lucide-react';
import { FormField } from './types';

interface FormPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  fields: FormField[];
}

export function FormPreview({ isOpen, onClose, fields }: FormPreviewProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-30 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h2 className="text-lg font-semibold">Form Preview</h2>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {fields.map(field => {
                if (field.type === 'name') {
                  const { firstName, middleName, lastName } = field.properties as any;
                  return (
                    <div key={field.id} className="space-y-4">
                      <div className={`grid ${middleName.show ? 'grid-cols-3' : 'grid-cols-2'} gap-4`}>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {firstName.label} {firstName.required && <span className="text-red-500">*</span>}
                          </label>
                          <input
                            type="text"
                            placeholder={firstName.placeholder}
                            required={firstName.required}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>

                        {middleName.show && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              {middleName.label} {middleName.required && <span className="text-red-500">*</span>}
                            </label>
                            <input
                              type="text"
                              placeholder={middleName.placeholder}
                              required={middleName.required}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>
                        )}

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {lastName.label} {lastName.required && <span className="text-red-500">*</span>}
                          </label>
                          <input
                            type="text"
                            placeholder={lastName.placeholder}
                            required={lastName.required}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {field.properties.helpText && (
                        <p className="text-sm text-gray-500">{field.properties.helpText}</p>
                      )}
                    </div>
                  );
                }
                return null;
              })}

              {fields.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No fields have been added to the form yet.</p>
                </div>
              )}

              {fields.length > 0 && (
                <div className="flex justify-end gap-3 pt-4 border-t">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-gray-700 border rounded-md hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}