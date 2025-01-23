import React from 'react';
import { ShoppingCart, TrendingUp, AlertCircle, Clock } from 'lucide-react';
import { ShoppingRecommendation } from '../types';

interface ShoppingListProps {
  recommendations: ShoppingRecommendation[];
}

export function ShoppingList({ recommendations }: ShoppingListProps) {
  if (recommendations.length === 0) {
    return (
      <div className="text-gray-500 dark:text-gray-400 text-center py-4">
        No shopping recommendations at the moment
      </div>
    );
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-4 border-red-500';
      case 'medium':
        return 'border-l-4 border-yellow-500';
      case 'low':
        return 'border-l-4 border-green-500';
      default:
        return '';
    }
  };

  const getReasonIcon = (reason: string) => {
    switch (reason) {
      case 'low_stock':
        return <AlertCircle size={20} className="text-red-500" />;
      case 'expiring_soon':
        return <Clock size={20} className="text-yellow-500" />;
      case 'regular_purchase':
        return <TrendingUp size={20} className="text-green-500" />;
      default:
        return <ShoppingCart size={20} className="text-blue-500" />;
    }
  };

  return (
    <div className="space-y-4">
      {recommendations.map((item, index) => (
        <div
          key={index}
          className={`bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg ${getPriorityColor(item.priority)}`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {getReasonIcon(item.reason)}
              <span className="font-medium dark:text-white">{item.productName}</span>
            </div>
            {item.currentStock !== undefined && (
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Current: {item.currentStock} {item.unit}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {item.reason === 'low_stock' && 'Running low on stock'}
            {item.reason === 'expiring_soon' && 'Current stock expiring soon'}
            {item.reason === 'regular_purchase' && 'Regularly purchased item'}
            {item.lastPurchaseDate && ` - Last purchased: ${new Date(item.lastPurchaseDate).toLocaleDateString()}`}
          </p>
          {item.category && (
            <span className="inline-block mt-2 text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              {item.category}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}