// import { ThemeProvider } from "@/contexts/ThemeContext";
// import { UIProvider } from "./UIContext";
// import { ClickProvider } from "./ClickContext";

// export default function ContextProvider({ children }) {
//     return (
//         <ThemeProvider>
//             <UIProvider>
//                 <ClickProvider>{children}</ClickProvider>
//             </UIProvider>
//         </ThemeProvider>
//     );
// }
import { ThemeProvider } from "@/contexts/ThemeContext";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { UIProvider } from "@/contexts/UIContext";

const providers = [
  ThemeProvider,
  SidebarProvider,
  UIProvider,
];
export function ContextProvider({ children }) {
  return providers.reduceRight(
    (acc, Provider) => <Provider>{acc}</Provider>,
    children
  );
}