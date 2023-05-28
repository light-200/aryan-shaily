import { FunctionComponent } from "react";
import Button from "./Button";

interface MenuProps {}

const Menu: FunctionComponent<MenuProps> = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 gap-x-16 col-start-5 col-span-2">
      <Button>ABOUT</Button>
      <Button>PROJECTS</Button>
      <Button>SKILLS</Button>
      <Button>RANDOM</Button>
    </div>
  );
};

export default Menu;
