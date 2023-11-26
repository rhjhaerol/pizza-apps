import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeader";

const HomeMenu = () => {
  return (
    <>
      <section className="">
        <div className="absolute left-0 right-0">
          <div className="absolute left-0 -top-16 -z-10">
            <Image src={"/sallad1.png"} alt="Salad" width={109} height={189} />
          </div>
          <div className="absolute right-0 -top-32  -z-10">
            <Image src={"/sallad2.png"} alt="Salad" width={107} height={195} />
          </div>
        </div>
        <div className="text-center mb-4">
          <SectionHeader subHeader={'Cek out'} mainHeader={'Menu'} />
        </div>
        <div className="grid grid-cols-3 gap-4">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
      </section>
    </>
  );
};

export default HomeMenu;
