// CompanySelector.tsx
import React, { useState, useEffect } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import styled from "@emotion/styled";
import { getCompanies } from "../../services/api";

interface Company {
  ticker: string;
  name: string;
}

interface CompanySelectorProps {
  onSelect: (symbol: string) => void;
  selectedCompany: string; // Add selectedCompany prop
}

const StyledSelect = styled(Select)({
  width: "500px",
  backgroundColor: "white !important",
  marginRight: "24px",
});

const CompanySelector: React.FC<CompanySelectorProps> = ({
  onSelect,
  selectedCompany, // Use the selectedCompany prop
}) => {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      const companyList = await getCompanies();
      setCompanies(companyList);
    };

    fetchCompanies();
  }, []);

  const handleChange = (
    event: SelectChangeEvent<unknown>,
    child: React.ReactNode
  ) => {
    if (event.target) {
      onSelect(event.target.value as string);
    }
  };

  return (
    <FormControl variant="outlined">
      <InputLabel id="company-selector-label">Select Company</InputLabel>
      <StyledSelect
        label="Select Company"
        value={selectedCompany} // Set the value to the selectedCompany prop
        onChange={handleChange}
      >
        {companies.map((company) => (
          <MenuItem key={company.ticker} value={company.ticker}>
            {company.name}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default CompanySelector;
