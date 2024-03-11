import * as React from "react";
import Link from "next/link"
import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";


const LangSwitch: React.FunctionComponent = (props) => {


  return (

  <DropdownMenu>
    <DropdownMenuTrigger>
    <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.Languages className="h-5 w-5" />
                <span className="sr-only">LangSwitch</span>
              </div>
      
     </DropdownMenuTrigger>
    <DropdownMenuContent>
    <Link
              href={'/en'}
              rel="noreferrer"
            >
      <DropdownMenuItem>  
       en</DropdownMenuItem>
       </Link>
       <Link
              href={'/zh-CN'}
              rel="noreferrer"
            >
      <DropdownMenuItem>  
        zh-CN</DropdownMenuItem>
        </Link>
    </DropdownMenuContent>
  </DropdownMenu>

  


  );
};

export default LangSwitch;
