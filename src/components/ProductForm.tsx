import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { CATEGORIES } from '../types';

interface ProductFormProps {
  onSubmit: (
    name: string,
    quantity: number,
    unit: string,
    expirationDate: string,
    category: string,
    notes: string
  ) => void;
}

export function ProductForm({ onSubmit }: ProductFormProps) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [category, setCategory] = useState('other');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && quantity && unit && expirationDate) {
      onSubmit(name, Number(quantity), unit, expirationDate, category, notes);
      setName('');
      setQuantity('');
      setUnit('');
      setExpirationDate('');
      setCategory('other');
      setNotes('');
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg border p-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          required
        />
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="rounded-lg border p-2 flex-1 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            min="0"
            step="0.01"
            required
          />
          <input
            type="text"
            placeholder="Unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="rounded-lg border p-2 w-24 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            required
          />
        </div>
        <input
          type="date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          className="rounded-lg border p-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          min={today}
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border p-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <textarea
        placeholder="Notes (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full rounded-lg border p-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        rows={2}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2 transition-colors"
      >
        <Plus size={20} /> Add Product
      </button>
    </form>
  );
}