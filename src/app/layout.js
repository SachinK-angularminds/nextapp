// app/layout.js

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({ children }) {
  return (
      <>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </>
  );
}
