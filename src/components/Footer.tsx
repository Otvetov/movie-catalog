import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => (
  <Box sx={{ p: 2, backgroundColor: "#eee", textAlign: "center", mt: 4 }}>
    <Typography variant="body2">© {new Date().getFullYear()} Movie Catalog</Typography>
  </Box>
);

export default Footer;