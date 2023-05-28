import PageTitle from "@/components/PageTitle";

export default function Skills() {
  return (
    <>
      <div className="row-start-2 col-span-2 whitespace-nowrap uppercase xl:text-3xl text-2xl flex flex-col gap-6 mt-20">
        <h3 className="font-bold">design tools</h3>
        <p className="">figma, photoshop, blender</p>
      </div>
      <div className="col-start-3 col-span-2 row-start-2 whitespace-nowrap uppercase xl:text-3xl text-2xl flex flex-col gap-6 ml-5 xl:ml-0 mt-20">
        <h3 className="font-bold">frameworks</h3>
        <p className="">Nextjs, react-native, react</p>
      </div>
      <div className="col-start-2 col-span-2 row-start-4 whitespace-nowrap uppercase xl:text-3xl text-2xl flex flex-col gap-6">
        <h3 className="font-bold">programming lang.</h3>
        <p className="">javascript, java, c++, python</p>
      </div>
      <div className="col-start-4 col-span-2 row-start-4 whitespace-nowrap uppercase xl:text-3xl text-2xl flex flex-col gap-6 ml-14 xl:ml-0">
        <h3 className="font-bold">languages</h3>
        <p className="">hindi, english, martian</p>
      </div>

      <PageTitle>SKILLS</PageTitle>
    </>
  );
}
