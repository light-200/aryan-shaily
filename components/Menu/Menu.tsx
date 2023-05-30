import { FunctionComponent } from "react";
import Button from "./Button";

interface MenuProps {}

const Menu: FunctionComponent<MenuProps> = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:gap-x-16 col-start-2 lg:col-start-4 col-span-2 justify-self-end">
      <Button>ABOUT</Button>
      <Button>PROJECTS</Button>
      <Button>SKILLS</Button>
      <Button>RANDOM</Button>
    </div>
  );
};

export default Menu;
