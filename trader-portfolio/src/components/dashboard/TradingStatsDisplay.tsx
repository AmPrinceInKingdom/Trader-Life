'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Target, Award, Activity } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string
  change?: string
  delay: number
}

function StatCard({ icon, label, value, change, delay }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="glass-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-lg bg-primary/10">
              {icon}
            </div>
            {change && (
              <span className={`text-sm ${change.startsWith('+') ? 'trading-green' : 'trading-red'}`}>
                {change}
              </span>
            )}
          </div>
          <div className="mt-4">
            <h3 className="text-3xl font-bold gradient-text">{value}</h3>
            <p className="text-muted-foreground text-sm mt-1">{label}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

interface TradingStatsDisplayProps {
  stats: {
    totalTrades: number
    winRate: number
    accountSize: number
    riskReward: number
    totalPnL?: number
    profitFactor?: number
  }
}

export function TradingStatsDisplay({ stats }: TradingStatsDisplayProps) {
  const statCards = [
    {
      icon: <Activity className="h-6 w-6 text-primary" />,
      label: 'Total Trades',
      value: stats.totalTrades.toLocaleString(),
      delay: 0.1,
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      label: 'Win Rate',
      value: `${stats.winRate.toFixed(1)}%`,
      change: stats.winRate >= 50 ? '+Excellent' : '+Good',
      delay: 0.2,
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      label: 'Account Size',
      value: `$${stats.accountSize.toLocaleString()}`,
      delay: 0.3,
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      label: 'Risk:Reward',
      value: `1:${stats.riskReward.toFixed(1)}`,
      delay: 0.4,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  )
}
