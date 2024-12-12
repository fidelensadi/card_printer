import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon: React.ReactNode;
  error?: string | null;
}

export function InputField({
  label,
  type,
  value,
  onChange,
  placeholder,
  icon,
  error
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={`block w-full pl-10 pr-3 py-2 border ${
            error ? 'border-red-300' : 'border-gray-300'
          } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}