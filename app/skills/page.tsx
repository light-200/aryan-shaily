import PageTitle from "@/components/PageTitle";
import PageWrapper from "@/components/PageWrapper";

export default function Skills() {
  return (
    <PageWrapper>
      <div className="lg:row-start-2 col-start-1 col-span-2 whitespace-nowrap uppercase xl:text-3xl lg:text-2xl text-xl flex flex-col lg:gap-6 gap-2 lg:mt-20">
        <h3 className="font-bold">design tools</h3>
        <p className="">figma, photoshop, blender</p>
      </div>
      <div className="lg:col-start-3 col-start-1 col-span-2 lg:row-start-2 whitespace-nowrap uppercase xl:text-3xl lg:text-2xl text-xl flex flex-col lg:gap-6 gap-2 lg:ml-5 xl:ml-0 lg:mt-20">
        <h3 className="font-bold">frameworks</h3>
        <p className="">Nextjs, react-native, react</p>
      </div>
      <div className="lg:col-start-2 col-start-1 col-span-2 lg:row-start-4 whitespace-nowrap uppercase xl:text-3xl lg:text-2xl text-xl flex flex-col lg:gap-6 gap-2">
        <h3 className="font-bold">programming lang.</h3>
        <p className="">javascript, java, c++, python</p>
      </div>
      <div className="lg:col-start-4 col-start-1 col-span-2 lg:row-start-4 whitespace-nowrap uppercase xl:text-3xl lg:text-2xl text-xl flex flex-col lg:gap-6 gap-2 lg:ml-14 xl:ml-0">
        <h3 className="font-bold">languages</h3>
        <p className="">hindi, english, martian</p>
      </div>
      <PageTitle classes={"row-start-6"}>SKILLS</PageTitle>
    </PageWrapper>
  );
}
