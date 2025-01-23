import React from 'react';
import { History as HistoryType } from '../types';
import { ArrowUpRight, ArrowDownRight, AlertTriangle } from 'lucide-react';

interface HistoryProps {
  history: HistoryType;
}

export function History({ history }: HistoryProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'insert':
        return <ArrowUpRight className="text-green-500" size={20} />;
      case 'consume':
        return <ArrowDownRight className="text-red-500" size={20} />;
      case 'expired':
        return <AlertTriangle className="text-yellow-500" size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {history.map((entry) => (
        <div
          key={entry.id}
          className={`p-4 rounded-lg ${
            entry.type === 'insert'
              ? 'bg-green-50 dark:bg-green-900/20'
              : entry.type === 'expired'
              ? 'bg-yellow-50 dark:bg-yellow-900/20'
              : 'bg-red-50 dark:bg-red-900/20'
          }`}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {getTypeIcon(entry.type)}
              <span className="font-medium dark:text-white">{entry.productName}</span>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {new Date(entry.timestamp).toLocaleString()}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {entry.type === 'insert' && 'Added'}
            {entry.type === 'consume' && 'Consumed'}
            {entry.type === 'expired' && 'Expired'}
            {' '}
            {entry.quantity} {entry.unit}
          </p>
          {entry.category && (
            <span className="inline-block mt-2 text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              {entry.category}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}