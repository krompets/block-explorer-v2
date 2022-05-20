import { FC } from "react";
import { Flex, Link, Center, useConst, FlexProps } from "@ironfish/ui-kit";
import { OuterReferenceIcon } from "svgx";
import NextLink from 'next/link'
import RoutePaths from "constants/RoutePaths";

const NavListOfLinks: FC<FlexProps> = (props) => {
  const linkStyle = useConst({
    mr: "2rem",
    whiteSpace: "nowrap",
  });

  return (
    <Flex {...props}>
      <NextLink href={RoutePaths.Explorer} passHref>
        <Link sx={linkStyle}>
          All blocks
        </Link>
      </NextLink>
      <Link sx={linkStyle} href="#">
        Charts
      </Link>
      <Link sx={linkStyle} href="#">
        <Flex>
          Developer Docs
          <Center ml="0.5rem">
            <OuterReferenceIcon />
          </Center>
        </Flex>
      </Link>
    </Flex>
  );
};

export default NavListOfLinks;
