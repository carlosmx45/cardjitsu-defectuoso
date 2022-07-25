import React from 'react';
import { Box, Button, Flex, Center, Heading, Input, Spacer, Stack, Text, Tag, SimpleGrid, GridItem, Image, Spinner, HStack  } from "@chakra-ui/react";
import { Link, state} from 'react-router-dom';
import Header from "../Header.js";

function Product8({ id, title, color, potencia, price, image }) {
    return (
        <Box>
            <Header title="Card-jitsu.Online"/>
            <Box p={8} d="flex" alignItems="center">
                <Box ml={4}>
                    <SimpleGrid spacing={4} columns={5}>
                        <GridItem colSpan={1}>
                            <Image src="https://i.imgur.com/mTXJ8rb.png"/>
                        </GridItem>
                        <GridItem>
                            <Stack spacing={4}>
                                <Box>
                                    <Heading>Precio: $40</Heading>
                                    <Tag mt={2} >Color: Morado</Tag>
                                </Box>
                                <Text as="i">Manhole Cover.</Text>
                                <Text>Tipo: Agua, Potencia: 4.</Text>
                                <HStack>
                                    <Button w="xs" size="sm" colorScheme="green"><a href="/product/end" className="Text">Comprar Ahora</a></Button>
                                    <Button w="xs" size="sm">
                                        Comparte Puta!
                                    </Button>
                                </HStack>
                            </Stack>
                        </GridItem>
                    </SimpleGrid>
                </Box>
            </Box>
        </Box>
    );
}


export default Product8;
