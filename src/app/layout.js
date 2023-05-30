import { Providers } from "@/redux/provider";
import { Roboto } from 'next/font/google';
import "./globals.css";
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: "Win Store",
  description: "Win Store E-commerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}


