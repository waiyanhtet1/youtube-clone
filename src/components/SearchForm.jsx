import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";

const SearchForm = () => {
  return (
    <Paper
      component="form"
      sx={{
        borderRadius: 5,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input type="text" className="search-bar" placeholder="Search" />
      <IconButton sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchForm;
