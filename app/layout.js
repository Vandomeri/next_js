import TheHeader from "@/components/UI/TheHeader";
import './globals.css'
import { Montserrat } from 'next/font/google'
import { getServerSession } from "next-auth";
import authConfig from "@/auth";
const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  weight: ["400", "500", "700", "200"]
})

export default async function RootLayout({ children }) {
  const session = await getServerSession(authConfig)
  console.log(session)
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
