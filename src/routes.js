import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './Components/App';
import Store from './Components/Store/Store';
import Product from './Components/Product/Product';
import Product1 from './Components/Product/Product1';
import Product2 from './Components/Product/Product2';
import Product3 from './Components/Product/Product3';
import Product4 from './Components/Product/Product4';
import Product5 from './Components/Product/Product5';
import Product6 from './Components/Product/Product6';
import Product7 from './Components/Product/Product7';
import Product8 from './Components/Product/Product8';
import Product9 from './Components/Product/Product9';
import Product10 from './Components/Product/Product10';
import Product11 from './Components/Product/Product11';
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
            {/*<Route path='/product/:id' element={props => <Product {...props} />} />*/}
            <Route path='/product/1' element={<Product1/>} />
            <Route path='/product/2' element={<Product2/>} />
            <Route path='/product/3' element={<Product3/>} />
            <Route path='/product/4' element={<Product4/>} />
            <Route path='/product/5' element={<Product5/>} />
            <Route path='/product/6' element={<Product6/>} />
            <Route path='/product/7' element={<Product7/>} />
            <Route path='/product/8' element={<Product8/>} />
            <Route path='/product/9' element={<Product9/>} />
            <Route path='/product/10' element={<Product10/>} />
            <Route path='/product/11' element={<Product11/>} />
        </Routes>
    </App>
)

export default AppRoutes;