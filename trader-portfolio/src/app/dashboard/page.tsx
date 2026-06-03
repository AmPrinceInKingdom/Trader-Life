'use client'

import { motion } from 'framer-motion'
import { DashboardCharts } from '@/components/dashboard/DashboardCharts'
import { TradingStatsDisplay } from '@/components/dashboard/TradingStatsDisplay'

const demoStats = {
  totalTrades: 1247,
  winRate: 68.5,
  accountSize: 125000,
  riskReward: 2.3,
  totalPnL: 87500,
  profitFactor: 2.45,
}

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">Trading Dashboard</h1>
          <p className="text-muted-foreground">Real-time analytics and performance metrics</p>
        </div>

        {/* Stats Overview */}
        <div className="mb-8">
          <TradingStatsDisplay stats={demoStats} />
        </div>

        {/* Charts */}
        <DashboardCharts />

        {/* Recent Trades Table Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <div className="glass-card rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Recent Trades</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-muted-foreground">Date</th>
                    <th className="text-left py-3 px-4 text-muted-foreground">Symbol</th>
                    <th className="text-left py-3 px-4 text-muted-foreground">Type</th>
                    <th className="text-left py-3 px-4 text-muted-foreground">Entry</th>
                    <th className="text-left py-3 px-4 text-muted-foreground">Exit</th>
                    <th className="text-left py-3 px-4 text-muted-foreground">P&L</th>
                    <th className="text-left py-3 px-4 text-muted-foreground">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: '2024-01-26', symbol: 'EURUSD', type: 'LONG', entry: 1.0850, exit: 1.0920, pnl: 700, result: 'WIN' },
                    { date: '2024-01-25', symbol: 'GBPUSD', type: 'SHORT', entry: 1.2680, exit: 1.2720, pnl: -400, result: 'LOSS' },
                    { date: '2024-01-25', symbol: 'XAUUSD', type: 'LONG', entry: 2025.50, exit: 2045.00, pnl: 1950, result: 'WIN' },
                    { date: '2024-01-24', symbol: 'USDJPY', type: 'SHORT', entry: 148.20, exit: 147.80, pnl: 400, result: 'WIN' },
                    { date: '2024-01-23', symbol: 'BTCUSD', type: 'LONG', entry: 42500, exit: 43200, pnl: 700, result: 'WIN' },
                  ].map((trade, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-secondary/50">
                      <td className="py-3 px-4">{trade.date}</td>
                      <td className="py-3 px-4 font-medium">{trade.symbol}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          trade.type === 'LONG' ? 'bg-trading-green/20 text-trading-green' : 'bg-trading-red/20 text-trading-red'
                        }`}>
                          {trade.type}
                        </span>
                      </td>
                      <td className="py-3 px-4">{trade.entry}</td>
                      <td className="py-3 px-4">{trade.exit}</td>
                      <td className={`py-3 px-4 font-medium ${trade.pnl >= 0 ? 'trading-green' : 'trading-red'}`}>
                        {trade.pnl >= 0 ? '+' : ''}${trade.pnl}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          trade.result === 'WIN' ? 'bg-trading-green/20 text-trading-green' : 'bg-trading-red/20 text-trading-red'
                        }`}>
                          {trade.result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
