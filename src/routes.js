import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './Components/App';
import Store from './Components/Store/Store';
import About from './Components/About/About';
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
import Product12 from './Components/Product/Product12';
import Contact from './Components/Contact/Contact';
import Notes from './Components/Notes/Notes';
import Gracias1 from './Components/Product/gracias/gracias1';
import Gracias2 from './Components/Product/gracias/gracias2';
import Gracias3 from './Components/Product/gracias/gracias3';
import Gracias4 from './Components/Product/gracias/gracias4';
import Gracias5 from './Components/Product/gracias/gracias5';
import Gracias6 from './Components/Product/gracias/gracias6';
import Gracias7 from './Components/Product/gracias/gracias7';
import Gracias8 from './Components/Product/gracias/gracias8';
import Gracias9 from './Components/Product/gracias/gracias9';
import Gracias10 from './Components/Product/gracias/gracias10';
import Gracias11 from './Components/Product/gracias/gracias11';
import Gracias12 from './Components/Product/gracias/gracias12';
import Error404 from './Components/Error/404';

import axios from "axios";
import { Box, Button, Flex, Center, Heading, Input, Spacer, Stack, Text, Tag, SimpleGrid, GridItem, Image, Spinner } from "@chakra-ui/react";

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<Store />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='/notes/:noteId' element={<Notes />} />
            <Route path='*' element={<Error404 />} />
            {/*<Route path='/product' element={<Product />} />*/}
            {/*<Route path='/product/:id' element={props => <Product {...props} />} />*/}
            <Route path='/product/end1' element={<Gracias1/>} />
            <Route path='/product/end2' element={<Gracias2/>} />
            <Route path='/product/end3' element={<Gracias3/>} />
            <Route path='/product/end4' element={<Gracias4/>} />
            <Route path='/product/end5' element={<Gracias5/>} />
            <Route path='/product/end6' element={<Gracias6/>} />
            <Route path='/product/end7' element={<Gracias7/>} />
            <Route path='/product/end8' element={<Gracias8/>} />
            <Route path='/product/end9' element={<Gracias9/>} />
            <Route path='/product/end10' element={<Gracias10/>} />
            <Route path='/product/end11' element={<Gracias11/>} />
            <Route path='/product/end12' element={<Gracias12/>} />

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
            <Route path='/product/12' element={<Product12/>} />
        </Routes>
    </App>
)

export default AppRoutes;