import { PROJECT_TABLE } from "@/constants";
import Card from "./Card";
import Table from "./Table";
const Project = () => {
  const backgroundImage = "/images/about.png";
  return (
    <>
      <div
        className="relative flex justify-center items-center overflow-hidden bg-cover bg-no-repeat bg-center sm:bg-[50%] md:bg-[25%] lg:bg-[20%] h-[500px] rounded-md"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="text-center p-4 relative z-10 tracking-widest space-y-4">
          <h2 className="text-4xl text-white font-semibold">OUR PROJECTS </h2>
        </div>
      </div>
      {/* BANNER */}
      <div
        className="w-full mx-auto px-6 relative z-20"
        style={{ top: "-70px" }}
      >
        <div className="flex justify-center">
          <Card
            img="/images/project.png"
            content="We are proud to show you our completed and highly successful projects."
            title="PT. BLUE OCEAN SEJAHTERA"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <Table 
        column={["No", "Name of Clients", "Project"]}
        tableData={PROJECT_TABLE}
        />
      </div>
    </>
  );
};

export default Project;
