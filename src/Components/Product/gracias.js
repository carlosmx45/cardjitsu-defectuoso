import React from 'react';
import { Box, Button, Flex, Center, Heading, Input, Spacer, Stack, Text, Tag, SimpleGrid, GridItem, Image, Spinner } from "@chakra-ui/react";

function Gracias(props) {
    return (
        <Box>
            <Heading>Gracias por su Compra</Heading>
            <Box p={4} borderRadius="lg" borderWidth="1px">
            <Center>
                <Image src="https://i.pinimg.com/originals/8c/87/48/8c874897fee0a13abab123012e9345fb.gif" h="sm" />
            </Center>
            <Heading noOfLines={2} size="sm" fontWeight="normal">
                Ya Terminaste por Aqui.
            </Heading>
            <Button><a href="/" className="Text">Regresar a Home</a></Button>
        </Box>
        </Box>
    );
}

export default Gracias;