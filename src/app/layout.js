import { Toaster } from "react-hot-toast";
import "./globals.css";
import Providers from "./providers";
import LayoutWrapper from "./user/Layout";

export const metadata = {
  title: "PNINFOSYS",
  description: "Website by PNINFOSYS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
