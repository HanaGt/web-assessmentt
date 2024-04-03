export interface HospitalType {
  // Consider defining a function type for fetching data if applicable
  // fetchHospitalData?: () => Promise<HospitalType>;
  data?: Partial<HospitalType>; // Optional complete hospital data
  _id: string;

  address: {
    region: string;
    woreda: string;
    zone: string;
    summary: string;
  };

  availability: {
    twentyFourHours: boolean;
    startDay: string;
    endDay: string;
    opening: string;
    closing: string;
  };

  institutionName: string;
  photo: string;
  phoneNumbers: string[];
  emails: string[];
}
