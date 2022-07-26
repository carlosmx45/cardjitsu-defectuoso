import { useRef, useState, useEffect } from 'react';
import { Box, Button, Flex, Center, Heading, Input, Spacer, Stack, Text, Tag, SimpleGrid, GridItem, Image, Spinner } from "@chakra-ui/react";

import Header from "../Header.js";
import { Link, state} from 'react-router-dom';
import axios from "axios";

//Muestra de Items
const StoreItem = ({ id, title, elemento, color, potencia, price, image }) => {
    return (
        <Box p={4} borderRadius="lg" borderWidth="1px">
            <Center>
                <Image src={image} h="sm" />
            </Center>
            <Heading noOfLines={2} size="sm" fontWeight="normal">
                {title}.
            </Heading>
            <Text>Tipo: {elemento}, Color: {color}.</Text>
            <Text>Potencia: {potencia}.</Text>
            <Tag mt={4}>${price}</Tag> <Tag mt={4}>Disponible</Tag>
        </Box>
    );
};


//referencias para Ingreso de Items
function Store({  }) {
    //Sistema de Visaluzacion de Items
    const [filteredItems, setFilteredItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [items, setItem] = useState([]);

    /*https://my-json-server.typicode.com/carlosmx45/card-jitsu-api/items*/
    
    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/carlosmx45/card-jitsu-api/items').then(({data}) => {
          setLoading(false);
          setItem(data);
          setFilteredItems(data)
        });
      }, []);
 //no tocar
    return (
        <Box>
            <Header title="Card-Jitsu.Store" />
            {loading ? (
                <Center mt={6}>
                    <Spinner />
                </Center>
             ) : (
                <Box p={2}>
                    <Input
                        onChange={(e) => {
                            let f = items.filter((item) => 
                                item.color.toLowerCase().includes(e.target.value.toLowerCase())
                            );
                            setFilteredItems(f);
                        }} 
                        placeholder="Buscar"
                        mt={4}
                    />
                    <SimpleGrid columns={5} spacing={4} mt={4} p={2}>
                        {filteredItems.map((item) => {
                            return (
                                <GridItem>
                                    <Link to={ `/product/${item.id}`}>
                                        <StoreItem {...item} />
                                    </Link>
                                </GridItem>
                            );
                        })}
                    </SimpleGrid>
                </Box>
            )}
        </Box>
    );
}

export default Store;