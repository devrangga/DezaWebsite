import { IoIosStar, IoMdPerson } from "react-icons/io";

const ClientReviewCard = () => {
  return (
    <div
      className="bg-gradient-to-t from-zinc-100 to-zinc-50 h-[20rem] w-[15rem] grid grid-rows-[5fr_2fr] text-center gap-4 rounded-xl hover:cursor-pointer transition-all ease-in-out duration-50 overflow-hidden
    "
    >
      <div className="flex flex-col gap-4 p-8">
        <div className="flex gap-2 text-zinc-900">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <div className="text-left font-bold">
          Our Experience working with Deza Digital was exceptional
        </div>
      </div>

      <div className="flex flex-row justify-start items-center gap-4 bg-gradient-to-t from-zinc-950 to-zinc-800 px-6">
        <div className="p-4 text-white bg-gradient-to-t from-zinc-700 to-zinc-500 rounded-full self-center justify-center">
          <IoMdPerson />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg text-left font-bold text-zinc-50">John Dep</h1>
          <h3 className="text-xs text-left text-zinc-300">
            XYZ Company, Indonesia
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewCard;
