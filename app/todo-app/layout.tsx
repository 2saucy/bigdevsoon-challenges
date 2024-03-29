import type { Metadata } from "next";
import { TodoProvider } from "./hooks/useTodos";
import { ThemeProvider } from "./hooks/useTheme";

export const metadata: Metadata = {
  title: "To-do App - Big Dev Soon Challenges",
  description: "Generated by create next app",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <TodoProvider>{children}</TodoProvider>
    </ThemeProvider>
  );
};

export default Layout;
