export interface Trade {
  id: string;
  user_id: string;
  symbol: string;
  type: 'LONG' | 'SHORT';
  entry_price: number;
  exit_price: number;
  quantity: number;
  risk_percentage: number;
  result: 'WIN' | 'LOSS' | 'BE';
  pnl: number;
  strategy: string;
  notes?: string;
  screenshot_url?: string;
  created_at: string;
  updated_at: string;
}

export interface PnLEntry {
  id: string;
  user_id: string;
  date: string;
  pnl: number;
  trades_count: number;
  win_rate: number;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  video_id: string;
  category: string;
  thumbnail_url?: string;
  duration?: string;
  views?: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Strategy {
  id: string;
  user_id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
  is_active: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface GalleryImage {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  image_url: string;
  category: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  bio?: string;
  trader_title?: string;
  total_trades?: number;
  win_rate?: number;
  account_size?: number;
  risk_reward?: number;
  is_admin: boolean;
  created_at: string;
  updated_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

export interface SiteSettings {
  id: string;
  key: string;
  value: string;
  created_at: string;
  updated_at: string;
}

export interface TradingStats {
  totalTrades: number;
  winRate: number;
  accountSize: number;
  riskReward: number;
  totalPnL: number;
  bestTrade: number;
  worstTrade: number;
  avgWin: number;
  avgLoss: number;
  profitFactor: number;
}
