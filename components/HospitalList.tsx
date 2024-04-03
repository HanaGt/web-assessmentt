import { useGetHospitalDataQuery } from "@/app/Redux/hospitalSlice";
import { HospitalType } from "@/Types";
import Image from "next/image";
import {  FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

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
    <div className="bg-slate-100 flex justify-center items-center">
      <div className="w-[919px] flex flex-col py-10">
        {(data?.data ?? []).map((hospital: HospitalType) => (
          <div
            key={hospital._id}
            className="border mb-6 p-4 rounded-xl shadow-2xl bg-white"
          >
            <div className="flex gap-6">
              <div className="h-auto">
                <Image
                  width={100}
                  height={100}
                  src={hospital.photo}
                  alt="image"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-customPurple">
                  {hospital.address.summary}, {hospital.address.region}
                </p>

                <h3 className="font-epilogue font-extrabold text-2xl text-30 text-customGray">
                  {hospital.institutionName}
                </h3>
                <div className="flex items-center gap-2 text-gray-500">
                <FaMapLocationDot />
                  <p>3 kilometers Away</p>
                </div>
                <div className="flex flex-col py-5">
                  {Array.isArray(hospital.phoneNumbers) ? (
                    hospital.phoneNumbers.map((phoneNumber, index) => (
                      <div key={index}>
                        {index === 0 ? (
                          <div className="flex items-center gap-2">
                            <FaPhoneAlt/>
                            <p>{phoneNumber}</p>
                          </div>
                        ) : (
                          <p>{phoneNumber}</p>
                        )}
                      </div>
                    ))
                  ) : (
                    <p>{hospital.phoneNumbers}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalList;
