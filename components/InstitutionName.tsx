// InstitutionName.tsx
import React from 'react';

interface NameProps {
  InstitutionName: string;
}

const InstitutionName: React.FC<NameProps> = ({ InstitutionName }) => {
  return (
    
    <div className="font-bold text-[20px] text-[#25324B]">
      {InstitutionName}
    </div>
  );
};

export default InstitutionName;
