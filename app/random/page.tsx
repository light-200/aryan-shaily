import PageTitle from "@/components/PageTitle";
import Image from "next/image";

export default function Random() {
  return (
    <>
      <div className="row-start-2 xl:text-3xl text-2xl uppercase mt-10 flex flex-col gap-4">
        <h3 className="font-bold">Favorite Artists</h3>
        <ul>
          <li>the 1975</li>
          <li>tnbhd</li>
          <li>current joys</li>
          <li>justin beiber</li>
        </ul>
      </div>
      <div className="row-start-2 xl:text-3xl text-2xl uppercase mt-10 flex flex-col gap-4">
        <h3 className="font-bold">Favorite Stories</h3>
        <ul>
          <li>the great gatsby</li>
          <li>tamasha</li>
        </ul>
      </div>

      <div className="row-start-4 xl:text-3xl text-2xl uppercase flex flex-col gap-4">
        <h3 className="font-bold">Favorite Planet</h3>
        <ul>
          <li>pluto</li>
        </ul>
      </div>
      <div className="row-start-4 xl:text-3xl text-2xl uppercase flex flex-col gap-4">
        <h3 className="font-bold">Favorite Song</h3>
        <ul>
          <li>
            <i>A different age</i>
          </li>
        </ul>
      </div>

      <div className="row-start-2 mt-10 xl:text-3xl text-2xl uppercase col-start-4 col-span-2 row-span-3 flex flex-col gap-6">
        <h3 className="font-bold">Favorite Images</h3>
        <div className="flex gap-2">
          <Image
            src="https://picsum.photos/500/500"
            width={300}
            height={300}
            alt={"images"}
          />
          <div className="flex flex-col justify-end gap-2">
            <span className="w-14 h-14 grid place-content-center rounded-full border-2 border-black cursor-pointer select-none hover:bg-gray-200 transition duration-100 active:bg-gray-300">
              {">"}
            </span>
            <span className="w-14 h-14 grid place-content-center rounded-full border-2 border-black cursor-pointer select-none hover:bg-gray-200 transition duration-100 active:bg-gray-300">
              {"<"}
            </span>
          </div>
        </div>
      </div>

      <PageTitle>RANDOM</PageTitle>
    </>
  );
}
