import React from 'react';
import { Box, Button, Flex, Center, Heading, Input, Spacer, Stack, Text, Tag, SimpleGrid, GridItem, Image, Spinner, HStack  } from "@chakra-ui/react";
import { Link, state} from 'react-router-dom';
import Header from "../Header.js";

function Product4({ id, title, color, potencia, price, image }) {
    return (
        <Box>
            <Header title="Card-jitsu.Online"/>
            <Box p={8} d="flex" alignItems="center">
                <Box ml={4}>
                    <SimpleGrid spacing={4} columns={5}>
                        <GridItem colSpan={1}>
                            <Image src="https://i.imgur.com/k4PcEsi.png"/>
                        </GridItem>
                        <GridItem>
                            <Stack spacing={4}>
                                <Box>
                                    <Heading>Precio: $50</Heading>
                                    <Tag mt={2} >Color: Azul</Tag>
                                </Box>
                                <Text>Carta de Fuego</Text>
                                <Text>Potencia: 3</Text>
                                <HStack>
                                    <Button w="xs" size="sm" colorScheme="green">
                                        Compra Puta!
                                    </Button>
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


export default Product4;
