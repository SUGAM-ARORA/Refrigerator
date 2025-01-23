import React, { useState } from 'react';
import { Minus, AlertTriangle, Info } from 'lucide-react';
import { Product, Products } from '../types';

interface ProductListProps {
  products: Products;
  onConsume: (productId: string, quantity: number) => void;
}

export function ProductList({ products, onConsume }: ProductListProps) {
  const [consumeQuantities, setConsumeQuantities] = useState<Record<string, string>>({});
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showNotes, setShowNotes] = useState<Record<string, boolean>>({});

  const handleConsume = (product: Product) => {
    const quantity = Number(consumeQuantities[product.id]);
    if (quantity && quantity <= product.quantity) {
      onConsume(product.id, quantity);
      setConsumeQuantities(prev => ({ ...prev, [product.id]: '' }));
    }
  };

  const getExpirationStatus = (expirationDate: string) => {
    const today = new Date();
    const expDate = new Date(expirationDate);
    const daysUntilExpiration = Math.ceil((expDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    if (daysUntilExpiration < 0) {
      return { status: 'expired', className: 'bg-red-50 dark:bg-red-900/20' };
    } else if (daysUntilExpiration <= 3) {
      return { status: 'expiring-soon', className: 'bg-yellow-50 dark:bg-yellow-900/20' };
    }
    return { status: 'good', className: 'bg-white dark:bg-gray-800' };
  };

  const filteredProducts = Object.values(products).filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const categories = ['all', ...new Set(Object.values(products).map(p => p.category))];

  return (
    <div className="space-y-4">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredProducts.map((product) => {
          const { status, className } = getExpirationStatus(product.expirationDate);
          
          return (
            <div key={product.id} className={`p-4 rounded-lg shadow-md transition-all ${className}`}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold dark:text-white">{product.name}</h3>
                  {status !== 'good' && (
                    <AlertTriangle 
                      size={20} 
                      className={status === 'expired' ? 'text-red-500' : 'text-yellow-500'} 
                    />
                  )}
                  {product.notes && (
                    <button
                      onClick={() => setShowNotes(prev => ({ ...prev, [product.id]: !prev[product.id] }))}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <Info size={20} />
                    </button>
                  )}
                </div>
                <span className="text-gray-600 dark:text-gray-300">
                  {product.quantity} {product.unit}
                </span>
              </div>

              {showNotes[product.id] && product.notes && (
                <div className="mb-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 p-2 rounded">
                  {product.notes}
                </div>
              )}

              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Expires: {new Date(product.expirationDate).toLocaleDateString()}
                {status === 'expired' && (
                  <span className="text-red-500 ml-2">EXPIRED - Please remove from refrigerator</span>
                )}
                {status === 'expiring-soon' && (
                  <span className="text-yellow-500 ml-2">Expiring soon!</span>
                )}
              </div>

              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder={`Consume amount in ${product.unit}`}
                  value={consumeQuantities[product.id] || ''}
                  onChange={(e) => setConsumeQuantities(prev => ({
                    ...prev,
                    [product.id]: e.target.value
                  }))}
                  className="flex-1 rounded-lg border p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  min="0"
                  max={product.quantity}
                  step="0.01"
                  disabled={status === 'expired'}
                />
                <button
                  onClick={() => handleConsume(product)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center gap-2 transition-colors disabled:opacity-50"
                  disabled={status === 'expired'}
                >
                  <Minus size={20} /> Consume
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}