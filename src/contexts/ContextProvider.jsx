import { ThemeProvider } from "@/contexts/ThemeContext";
import { UIProvider } from "@/contexts/UIContext";
import { SidebarProvider } from "@/contexts/SidebarContext";

const providers = [
  ThemeProvider,
  UIProvider,
  SidebarProvider,
];
export function ContextProvider({ children }) {
  return providers.reduceRight(
    (acc, Provider) => <Provider>{acc}</Provider>,
    children
  );
}