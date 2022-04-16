import { Box } from "@mui/material";
import React, { forwardRef } from "react";
import { Helmet } from "react-helmet-async";

type PageProps = {
  children: React.ReactNode;
  title?: string;
};

const Page = forwardRef(({ children, title = "", ...rest }: PageProps, ref) => (
  <Box ref={ref} {...rest}>
    <Helmet>
      <title>{title} | MUI Admin</title>
    </Helmet>
    {children}
  </Box>
));

export default Page;
