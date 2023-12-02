// CompanySelector.tsx
import React from "react";
import { Autocomplete, TextField, styled } from "@mui/material"; // Import Autocomplete

interface CompanySelectorProps {
  companies: string[];
  onSelect: (company: string) => void;
}

const StyledAutocomplete = styled(Autocomplete)({
  width: "500px",
  marginRight: "20px", // Adjust the width as needed
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white !important", // Set background color to white
  },
});

const CompanySelector: React.FC<CompanySelectorProps> = ({
  companies,
  onSelect,
}) => {
  return (
    <StyledAutocomplete
      options={companies}
      renderInput={(params) => (
        <TextField {...params} label="Select Company" variant="outlined" />
      )}
      onChange={(event, value) => onSelect(value as string)}
    />
  );
};

export default CompanySelector;
