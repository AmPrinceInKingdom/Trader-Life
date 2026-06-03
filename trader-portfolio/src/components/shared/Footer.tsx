import React from 'react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass-card border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold gradient-text mb-4">TraderPro</h3>
            <p className="text-muted-foreground text-sm">
              Professional trading portfolio and analytics platform. Track your trades, 
              analyze performance, and improve your trading skills.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/dashboard" className="hover:text-primary transition-colors">Dashboard</a></li>
              <li><a href="/journal" className="hover:text-primary transition-colors">Trade Journal</a></li>
              <li><a href="/strategies" className="hover:text-primary transition-colors">Strategies</a></li>
              <li><a href="/youtube" className="hover:text-primary transition-colors">Learning Hub</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Risk Disclosure</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} TraderPro. All rights reserved.</p>
          <p className="mt-2">
            Trading involves substantial risk of loss and is not suitable for every investor.
          </p>
        </div>
      </div>
    </footer>
  )
}
