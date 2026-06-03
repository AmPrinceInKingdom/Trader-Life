'use client'

import { motion } from 'framer-motion'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Download, ChevronLeft, ChevronRight } from 'lucide-react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns'

interface PnLData {
  [key: string]: {
    pnl: number
    trades: number
    winRate: number
  }
}

// Sample PnL data
const samplePnLData: PnLData = {
  '2024-01-15': { pnl: 1250, trades: 5, winRate: 80 },
  '2024-01-16': { pnl: -450, trades: 3, winRate: 33 },
  '2024-01-17': { pnl: 890, trades: 4, winRate: 75 },
  '2024-01-18': { pnl: 2100, trades: 6, winRate: 83 },
  '2024-01-19': { pnl: -320, trades: 2, winRate: 50 },
  '2024-01-22': { pnl: 1580, trades: 5, winRate: 60 },
  '2024-01-23': { pnl: 750, trades: 4, winRate: 75 },
  '2024-01-24': { pnl: -890, trades: 3, winRate: 33 },
  '2024-01-25': { pnl: 3200, trades: 7, winRate: 86 },
  '2024-01-26': { pnl: 1100, trades: 4, winRate: 75 },
}

export default function PnLCalendarPage() {
  const [date, setDate] = useState<Date>(new Date(2024, 0, 1))
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  const handleExportPDF = () => {
    // In a real app, this would generate and download a PDF
    alert('PDF export functionality would be implemented here')
  }

  const getDayClass = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd')
    const dayData = samplePnLData[dateStr]
    
    if (!dayData) return ''
    
    if (dayData.pnl > 0) return 'bg-trading-green/20 text-trading-green border-trading-green/50'
    if (dayData.pnl < 0) return 'bg-trading-red/20 text-trading-red border-trading-red/50'
    return 'bg-secondary/50'
  }

  const selectedDateData = selectedDate ? samplePnLData[format(selectedDate, 'yyyy-MM-dd')] : null

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold gradient-text mb-2">P&L Calendar</h1>
            <p className="text-muted-foreground">Track your daily trading performance</p>
          </div>
          <Button onClick={handleExportPDF} variant="outline" className="gap-2">
            <Download className="h-4 w-4" /> Export PDF
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <Card className="lg:col-span-2 glass-card">
            <CardHeader>
              <CardTitle className="text-white">
                {format(date, 'MMMM yyyy')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(d) => {
                  setSelectedDate(d || undefined)
                  if (d) setDate(d)
                }}
                month={date}
                onMonthChange={setDate}
                classNames={{
                  day: `h-14 w-full p-2 text-sm ${getDayClass(new Date())}`.trim(),
                  day_selected: 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground',
                  day_today: 'bg-accent text-accent-foreground',
                  day_outside: 'opacity-50',
                  day_disabled: 'opacity-50',
                  day_range_middle: 'rounded-none',
                  day_hidden: 'invisible',
                }}
              />
            </CardContent>
          </Card>

          {/* Daily Stats */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-white">Daily Details</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedDateData ? (
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      {format(selectedDate!, 'EEEE, MMMM d, yyyy')}
                    </p>
                    <p className={`text-4xl font-bold mt-2 ${selectedDateData.pnl >= 0 ? 'trading-green' : 'trading-red'}`}>
                      {selectedDateData.pnl >= 0 ? '+' : ''}${selectedDateData.pnl.toLocaleString()}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground">Trades</p>
                      <p className="text-2xl font-bold">{selectedDateData.trades}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Win Rate</p>
                      <p className={`text-2xl font-bold ${selectedDateData.winRate >= 50 ? 'trading-green' : 'trading-red'}`}>
                        {selectedDateData.winRate}%
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>Select a date to view details</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Monthly Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-white">Monthly Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: 'Total P&L', value: '$12,310', positive: true },
                  { label: 'Total Trades', value: '43' },
                  { label: 'Win Rate', value: '67%', positive: true },
                  { label: 'Best Day', value: '+$3,200', positive: true },
                  { label: 'Worst Day', value: '-$890', positive: false },
                  { label: 'Avg Win', value: '$1,520', positive: true },
                  { label: 'Avg Loss', value: '-$553', positive: false },
                  { label: 'Profit Factor', value: '2.75', positive: true },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-secondary/50">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className={`text-2xl font-bold mt-1 ${
                      stat.positive === true ? 'trading-green' : 
                      stat.positive === false ? 'trading-red' : ''
                    }`}>
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
