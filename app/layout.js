import localFont from "next/font/local";
import "./globals.css";
import "./material-symbols.css";
import { openSans } from "@/global/fonts";
import Navbar from "@/components/navbar/navbar.component";

export const metadata = {
  title: "Comethouse - Web Design and Development Studio",
  description: "Web design and development studio in Ottawa, Canada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=add_circle,architecture,bolt,chevron_left,chevron_right,design_services,help,home,info,mail,new_releases,responsive_layout,rocket_launch,savings,sell,speed,support_agent"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${openSans.className} `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
