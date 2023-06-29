import { Box, Stack } from "@mui/material";
import LoginForm from "@/components/LoginForm";

const index = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "",
          width: 1,
          height: 1,
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          mt={6}
        >
          <h1>Sign in</h1>
          <small> Sign in and start managing your candidate!</small>
          <LoginForm />
        </Stack>
      </Box>
    </>
  );
};

export default index;
