import React, { useState, useEffect } from 'react';
import { ProductForm } from './components/ProductForm';
import { ProductList } from './components/ProductList';
import { History } from './components/History';
import { ShoppingList } from './components/ShoppingList';
import { ThemeToggle } from './components/ThemeToggle';
import { Products, History as HistoryType, ShoppingRecommendation } from './types';
import { Refrigerator } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [products, setProducts] = useState<Products>({});
  const [history, setHistory] = useState<HistoryType>([]);
  const [recommendations, setRecommendations] = useState<ShoppingRecommendation[]>([]);

  useEffect(() => {
    const checkExpirationAndGenerateRecommendations = () => {
      const today = new Date();
      const newRecommendations: ShoppingRecommendation[] = [];
      
      Object.values(products).forEach(product => {
        const expDate = new Date(product.expirationDate);
        
        if (expDate < today && !product.isExpired) {
          setProducts(prev => ({
            ...prev,
            [product.id]: {
              ...product,
              isExpired: true,
              quantity: 0
            }
          }));
          
          setHistory(prev => ([{
            id: crypto.randomUUID(),
            productId: product.id,
            productName: product.name,
            type: 'expired',
            quantity: product.quantity,
            unit: product.unit,
            timestamp: new Date().toISOString(),
            category: product.category
          }, ...prev]));
        }
        
        const daysUntilExpiration = Math.ceil((expDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        const lastPurchase = history.find(h => h.productId === product.id && h.type === 'insert');
        const purchaseCount = history.filter(h => 
          h.productName === product.name && 
          h.type === 'insert'
        ).length;
        
        if (product.quantity <= 0 || (lastPurchase && product.quantity < 0.2 * lastPurchase.quantity)) {
          newRecommendations.push({
            productName: product.name,
            reason: 'low_stock',
            currentStock: product.quantity,
            unit: product.unit,
            lastPurchaseDate: lastPurchase?.timestamp,
            category: product.category,
            priority: 'high'
          });
        } else if (daysUntilExpiration <= 3 && daysUntilExpiration >= 0) {
          newRecommendations.push({
            productName: product.name,
            reason: 'expiring_soon',
            currentStock: product.quantity,
            unit: product.unit,
            category: product.category,
            priority: 'medium'
          });
        } else if (purchaseCount >= 3) {
          newRecommendations.push({
            productName: product.name,
            reason: 'regular_purchase',
            lastPurchaseDate: lastPurchase?.timestamp,
            category: product.category,
            priority: 'low'
          });
        }
      });
      
      setRecommendations(newRecommendations);
    };

    checkExpirationAndGenerateRecommendations();
    const interval = setInterval(checkExpirationAndGenerateRecommendations, 3600000);
    
    return () => clearInterval(interval);
  }, [products, history]);

  const handleAddProduct = (
    name: string,
    quantity: number,
    unit: string,
    expirationDate: string,
    category: string,
    notes: string
  ) => {
    const id = crypto.randomUUID();
    const timestamp = new Date().toISOString();

    setProducts(prev => ({
      ...prev,
      [id]: {
        id,
        name,
        quantity,
        unit,
        expirationDate,
        createdAt: timestamp,
        category: category as any,
        notes
      }
    }));

    setHistory(prev => ([
      {
        id: crypto.randomUUID(),
        productId: id,
        productName: name,
        type: 'insert',
        quantity,
        unit,
        timestamp,
        category
      },
      ...prev
    ]));
  };

  const handleConsume = (productId: string, quantity: number) => {
    const product = products[productId];
    if (!product || quantity > product.quantity || product.isExpired) return;

    setProducts(prev => ({
      ...prev,
      [productId]: {
        ...product,
        quantity: product.quantity - quantity
      }
    }));

    setHistory(prev => ([
      {
        id: crypto.randomUUID(),
        productId,
        productName: product.name,
        type: 'consume',
        quantity,
        unit: product.unit,
        timestamp: new Date().toISOString(),
        category: product.category
      },
      ...prev
    ]));
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Refrigerator size={40} className="text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Smart Refrigerator</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Add Product</h2>
                <ProductForm onSubmit={handleAddProduct} />
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Current Stock</h2>
                <ProductList products={products} onConsume={handleConsume} />
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Shopping Recommendations</h2>
                <ShoppingList recommendations={recommendations} />
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">History</h2>
                <History history={history} />
              </div>
            </div>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;