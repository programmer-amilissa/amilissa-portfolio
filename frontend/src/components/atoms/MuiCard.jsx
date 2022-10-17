import { Box, Card, CardContent, Typography } from "@mui/material";

function MuiCard() {
  return (
  <>
    <Box width="300px">
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Girlfriend ni Ida.
          </Typography>
          <Typography variant="body2" component="div">
          And ganda mo palagi. I love you! Akin ka lang please. 
          </Typography>
        </CardContent>
      </Card>
    </Box>
    </>
    );
}

export default MuiCard;
