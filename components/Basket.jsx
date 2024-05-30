import { Box } from "@mui/material"

const Basket = () => {
  return (
    <Box
      height={400}

      width='auto'
      my={4}
      display="flex"
      gap={4}
      p={2}
      sx={{ bgcolor: '#ffffff',
            borderRadius: 5
    }}
    >
      Özel Paketin
    </Box>
  )
}

export default Basket
