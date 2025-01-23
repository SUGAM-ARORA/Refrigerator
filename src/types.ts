export interface Product {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  createdAt: string;
  expirationDate: string;
  isExpired?: boolean;
  category?: 'dairy' | 'vegetables' | 'fruits' | 'meat' | 'beverages' | 'other';
  notes?: string;
}

export interface HistoryEntry {
  id: string;
  productId: string;
  productName: string;
  type: 'insert' | 'consume' | 'expired';
  quantity: number;
  unit: string;
  timestamp: string;
  category?: string;
}

export interface ShoppingRecommendation {
  productName: string;
  reason: 'low_stock' | 'expiring_soon' | 'regular_purchase';
  lastPurchaseDate?: string;
  currentStock?: number;
  unit?: string;
  category?: string;
  priority: 'high' | 'medium' | 'low';
}

export type Products = Record<string, Product>;
export type History = HistoryEntry[];

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export const CATEGORIES = [
  'dairy',
  'vegetables',
  'fruits',
  'meat',
  'beverages',
  'other'
] as const;