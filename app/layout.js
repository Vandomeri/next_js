import TheHeader from "@/components/UI/TheHeader";
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  weight: ["400", "500", "700", "200"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={montserrat.className}>
      <body>
        <TheHeader />
        <main className="container mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
