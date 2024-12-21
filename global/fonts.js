import { Open_Sans, Anek_Latin, Bagel_Fat_One } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

const anekLatin = Anek_Latin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anek",
});

const bagelFatOne = Bagel_Fat_One({
  subsets: ["latin"],
  preload: true,
  weight: "400",
  display: "swap",
});

export { openSans, anekLatin, bagelFatOne };
