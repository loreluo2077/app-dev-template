import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"



export default function Home() {
  return (
    <div className="flex justify-center h-svh">
      
      <div className="form-control">
  <label className="label cursor-pointer gap-4">
    <span className="label-text">Default</span>
    <input type="radio" name="theme-radios" className="radio theme-controller" value="default"/>
  </label>
</div>
<div className="form-control">
  <label className="label cursor-pointer gap-4">
    <span className="label-text">Retro</span>
    <input type="radio" name="theme-radios" className="radio theme-controller" value="retro"/>
  </label>
</div>
<div className="form-control">
  <label className="label cursor-pointer gap-4">
    <span className="label-text">Cyberpunk</span>
    <input type="radio" name="theme-radios" className="radio theme-controller" value="cyberpunk"/>
  </label>
</div>
<div className="form-control">
  <label className="label cursor-pointer gap-4">
    <span className="label-text">Valentine</span>
    <input type="radio" name="theme-radios" className="radio theme-controller" value="valentine"/>
  </label>
</div>
<div className="form-control">
  <label className="label cursor-pointer gap-4">
    <span className="label-text">Aqua</span>
    <input type="radio" name="theme-radios" className="radio theme-controller" value="aqua"/>
  </label>
</div>

       <Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      {/* <Button >Submit</Button> */}
      <div className="btn btn-primary">Submit</div>
      <DrawerClose>
        {/* <Button variant="outline"  >Cancel</Button> */}
        <div className="btn btn-primary">Cancel</div>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

    </div>
  );
}
