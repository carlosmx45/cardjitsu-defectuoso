import React from 'react';
import { Box, Button, Flex, Center, Heading, Input, Spacer, Stack, Text, Tag, SimpleGrid, GridItem, Image, Spinner } from "@chakra-ui/react";

function About(props) {
    return (
        <Box>
            <Heading>Informacion</Heading>
            <Box p={4} borderRadius="lg" borderWidth="1px">
            <Center>
                <Image src="https://news.artnet.com/app/news-upload/2019/01/conspiracy-theory-meme-salvator-mundi.jpg" h="sm" />
            </Center>
            <Heading noOfLines={2} size="sm" fontWeight="normal">
                La verdad solo estoy pasando la materia.
            </Heading>
            <Text>¿Queres mas Informacion?</Text>
            <Text>Vete a la Biblioteca!</Text>
        </Box>
        </Box>
    );
}

export default About;