import React from 'react';
import { Box, Button, Flex, Center, Heading, Input, Spacer, Stack, Text, Tag, SimpleGrid, GridItem, Image, Spinner } from "@chakra-ui/react";

function Contact(props) {
    return (
        <Box>
            <Heading>Contact</Heading>
            <Box p={4} borderRadius="lg" borderWidth="1px">
            <Center>
                <Image src="https://i.imgur.com/SzS2bWC.png" h="sm" />
            </Center>
            <Heading noOfLines={2} size="sm" fontWeight="normal">
                No lo Intentes.
            </Heading>
            <Text>624.NO.ME.LLAMES</Text>
            <Text>dejadeintentas@largo.com</Text>
        </Box>
        </Box>
    );
}

export default Contact;