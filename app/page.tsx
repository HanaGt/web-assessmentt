"use client"

import HospitalCard from "@/components/HospitalCard";
import { useGetHospitalDataQuery } from "./Redux/hospitalSlice";


export default function Home() {
  
  return ( 
    <HospitalCard/>
    
  );
}
