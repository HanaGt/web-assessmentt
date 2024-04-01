import { useGetHospitalDataQuery } from '@/app/Redux/hospitalSlice';
import { HospitalType } from '@/Types';

interface HospitalImageProps {
  hospitalId: string;
}

const HospitalImage = ({ hospitalId }: HospitalImageProps) => {
  const { data, error, isLoading } = useGetHospitalDataQuery();

  if (isLoading) {
    return <div>Loading hospital image...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching hospital image.</div>;
  }

  const hospital = data?.find((hospital: HospitalType) => hospital._id === hospitalId);

  return (
    <div>
      {hospital ? (
        <div>
          <h3>{hospital.institutionName}</h3>
          <img src={hospital.photo} alt={hospital.institutionName} />
        </div>
      ) : (
        <div>Hospital not found.</div>
      )}
    </div>
  );
};

export default HospitalImage;