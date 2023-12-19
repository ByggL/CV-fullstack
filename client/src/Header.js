import { Avatar, Box, Flex, Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center,} from "@chakra-ui/react";
import React from "react";

export function Header() {
    return (
        <header>
            <Flex align="center" justify="space-between" bg='#222222'>
            <Box m="20px">
            <Avatar size="xl" name="Samuel Léobon" src="/Sleobon_portrait_carre.jpg"/>
            </Box>
            <Center>
            <Heading color="whitesmoke">Samuel Léobon</Heading>
            </Center>
            <Box m="20px">
            <Breadcrumb color="whitesmoke">
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href='#'>Education</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href='#'>Experience</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            </Box>
            </Flex>
        </header>
        
    )
}