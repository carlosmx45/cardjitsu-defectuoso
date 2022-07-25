import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './Components/App';
import Store from './Components/Store/Store';
import Product from './Components/Product/Product';
import Contact from './Components/Contact/Contact';
import Notes from './Components/Notes/Notes';
import Error404 from './Components/Error/404';

import axios from "axios";
import { Box, Button, Flex, Center, Heading, Input, Spacer, Stack, Text, Tag, SimpleGrid, GridItem, Image, Spinner } from "@chakra-ui/react";

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<Store />} />
            <Route path='/about' element={<Product />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='/notes/:noteId' element={<Notes />} />
            <Route path='*' element={<Error404 />} />
            <Route path='/product' element={<Product />} />
            <Route path='/product/:id' element={props => <Product {...props} />} />
        </Routes>
    </App>
)

export default AppRoutes;