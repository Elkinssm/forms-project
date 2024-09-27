import React, { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";

interface LayoutProps {
  sidebar: ReactNode;
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  sidebar,
  header,
  footer,
  children,
}) => {
  return (
    <Flex height="100vh">
      {sidebar}
      <Box flex="1" display="flex" flexDirection="column">
        {header}
        <Box flex="1" overflowY="auto" p={4}>
          {children} {/* Aquí se renderizan las rutas */}
        </Box>
        {footer}
      </Box>
    </Flex>
  );
};

export default Layout;
