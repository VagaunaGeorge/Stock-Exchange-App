// Header.tsx
import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import CompanySelector from "../Components/Companies/CompanySelector";

interface HeaderProps {
  onCompanySelect: (symbol: string) => void;
}

const HeaderContainer = styled(AppBar)({
  flexDirection: "row", // Arrange items in a row
  justifyContent: "space-between", // Space between items
});

const Header: React.FC<HeaderProps> = ({ onCompanySelect }) => {
  const [selectedCompany, setSelectedCompany] = useState<string>("");

  const handleCompanySelect = (symbol: string) => {
    setSelectedCompany(symbol);
    onCompanySelect(symbol);
  };

  return (
    <HeaderContainer position="static">
      <Toolbar>
        <Typography variant="h6">Stock Exchange App</Typography>
      </Toolbar>
      <Box display="flex" alignItems="center">
        <CompanySelector
          onSelect={handleCompanySelect}
          selectedCompany={selectedCompany}
        />
      </Box>
    </HeaderContainer>
  );
};

export default Header;
