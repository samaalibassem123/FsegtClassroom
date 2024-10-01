import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "FsegtClassroom",
  description: "fsegt-classroom account",
};

export default function RootLayout({ children }) {
  return (
    <main>
      <ThemeProvider attribute="class" enableSystem>
        <Header />
        {children}
      </ThemeProvider>
    </main>
  );
}
