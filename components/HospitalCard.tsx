import { useGetHospitalDataQuery } from "@/app/Redux/hospitalSlice";
import { HospitalType } from "@/Types";
import Image from "next/image";

const HospitalList = () => {
  const { data, error, isLoading } = useGetHospitalDataQuery();

  console.log(data?.data);

  if (isLoading) {
    return <div>Loading hospitals...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching hospitals.</div>;
  }

  return (
    <div className="h-custom-card-height w-[91] rounded-[30px]">
      {(data?.data ?? []).map((hospital: HospitalType) => (
        <div key={hospital._id} className="flex gap-6 w-full">
          <div className="w-1/3">
            <Image
              height={100}
              width={100}
              src={hospital.photo}
              className=""
              alt="image"
            />
          </div>
          <div className="h-w-[100%] md:ml-[24px] mt-[24px] md:mt-0 md:w-[755px] flex flex-col gap-[8px]">
          <div className="font-epilogue font-bold text-30 text-[#7C8493]">
          <h3>{hospital.institutionName}</h3>
          </div>
          <p>{hospital.address.region}</p>
          <p>{hospital.phoneNumbers}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HospitalList;
