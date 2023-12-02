// Header.tsx
import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, styled, Box } from "@mui/material";
import CompanySelector from "../Components/Companies/CompanySelector";
import { getCompanies } from "../services/api";

interface HeaderProps {
  onSelectCompany: (company: string) => void;
}

const HeaderContainer = styled(AppBar)({
  flexDirection: "row", // Arrange items in a row
  justifyContent: "space-between", // Space between items
});

const Header: React.FC<HeaderProps> = ({ onSelectCompany }) => {
  const [companies, setCompanies] = useState<any[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string>("");

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const companyList = await getCompanies();
        setCompanies(companyList);
        setSelectedCompany(companyList[0]?.ticker || "");
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <HeaderContainer position="static">
      <Toolbar>
        <Typography variant="h6" style={{ marginRight: "20px" }}>
          Stock Exchange App
        </Typography>
      </Toolbar>
      <Box display="flex" alignItems="center">
        <CompanySelector companies={companies} onSelect={onSelectCompany} />
      </Box>
    </HeaderContainer>
  );
};

export default Header;
