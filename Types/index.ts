export interface HospitalType {
    getHospitalData: any;
    data:any
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
  
    institutionName:String;
    photo: string;
  
  
    phoneNumbers: string[];
    emails: string[];
  }
  