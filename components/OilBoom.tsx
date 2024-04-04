import { OILBOOM_TABLE } from "@/constants";
import Table from "./Table";

const OilBoom = () => {
  const backgroundImage = "/images/about.png";

  return (
    <>
      <div
        className="relative flex justify-center items-center overflow-hidden bg-cover bg-no-repeat bg-center sm:bg-[50%] md:bg-[25%] lg:bg-[20%] h-[300px] rounded-md"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="text-center p-4 relative z-10 tracking-widest space-y-4">
          <h2 className="text-5xl text-white font-semibold">Oil Boom</h2>
        </div>
      </div>

        
        <div className="flex justify-center p-10">
            <Table 
            column={["Oil Boom", "Description", "PDF"]}
            tableData={OILBOOM_TABLE}
            />
        </div>
    </>
  );
};

export default OilBoom;