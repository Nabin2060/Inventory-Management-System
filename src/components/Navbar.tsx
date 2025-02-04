// import { Bell } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// export function Navbar() {
//   return (
//     <header className="border-b">
//       <div className="flex h-16 items-center px-4 gap-4">
//         <div className="ml-auto flex items-center gap-4">
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" size="icon" className="relative">
//                 <Bell className="h-4 w-4" />
//                 <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
//                   2
//                 </span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end" className="w-[240px]">
//               <DropdownMenuItem>
//                 Low stock alert: Electronics category
//               </DropdownMenuItem>
//               <DropdownMenuItem>New order received: #1234</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </div>
//     </header>
//   );
// }