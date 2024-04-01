import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HospitalType} from "../../Types/index"

export const hospitalApi = createApi({
  reducerPath : "hospitalApi",
  baseQuery:fetchBaseQuery({baseUrl : "https://hakimhub-api-dev-wtupbmwpnq-uc.a.run.app/api/"}),
  endpoints:(builder )=>({
    getHospitalData:builder.query<HospitalType , void>({
        query:()=>({
            url:"v1/search?institutions=true&articles=false&doctors=false",
            method:"POST",
            body:{}
        })
    })
  })
})

export const { useGetHospitalDataQuery} = hospitalApi

