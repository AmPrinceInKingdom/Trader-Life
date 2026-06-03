'use client'

import { motion } from 'framer-motion'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const equityData = [
  { month: 'Jan', value: 10000 },
  { month: 'Feb', value: 12500 },
  { month: 'Mar', value: 11800 },
  { month: 'Apr', value: 14200 },
  { month: 'May', value: 16500 },
  { month: 'Jun', value: 15800 },
  { month: 'Jul', value: 18900 },
  { month: 'Aug', value: 21200 },
  { month: 'Sep', value: 23500 },
  { month: 'Oct', value: 25800 },
  { month: 'Nov', value: 28100 },
  { month: 'Dec', value: 32000 },
]

const monthlyPerformance = [
  { month: 'Jan', profit: 2500, loss: -500 },
  { month: 'Feb', profit: 1800, loss: -800 },
  { month: 'Mar', profit: 3200, loss: -400 },
  { month: 'Apr', profit: 2100, loss: -600 },
  { month: 'May', profit: 4500, loss: -300 },
  { month: 'Jun', profit: 2800, loss: -700 },
]

const winLossData = [
  { name: 'Wins', value: 65, color: '#10b981' },
  { name: 'Losses', value: 30, color: '#ef4444' },
  { name: 'BE', value: 5, color: '#6b7280' },
]

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Equity Curve */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-white">Equity Curve</CardTitle>
            <CardDescription className="text-muted-foreground">Account growth over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={equityData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }} 
                />
                <Area type="monotone" dataKey="value" stroke="#60a5fa" fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Monthly Performance */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-white">Monthly Performance</CardTitle>
            <CardDescription className="text-muted-foreground">Profit vs Loss by month</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="profit" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="loss" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Win/Loss Distribution */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-white">Win/Loss Distribution</CardTitle>
            <CardDescription className="text-muted-foreground">Trade outcome breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={winLossData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {winLossData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Performance Metrics */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-white">Key Metrics</CardTitle>
            <CardDescription className="text-muted-foreground">Trading performance indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Profit Factor', value: '2.45' },
                { label: 'Avg Win', value: '$1,250' },
                { label: 'Avg Loss', value: '-$520' },
                { label: 'Max Drawdown', value: '-8.5%' },
                { label: 'Sharpe Ratio', value: '1.85' },
                { label: 'Recovery Factor', value: '3.2' },
              ].map((metric, index) => (
                <div key={index} className="p-4 rounded-lg bg-secondary/50">
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className="text-xl font-bold gradient-text mt-1">{metric.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
