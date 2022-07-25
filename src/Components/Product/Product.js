import { Box, Heading, Image } from "@chakra-ui/react";

const Header = ({ title }) => (
    <Box p={4} shadow='md'>
        <Heading>{title}</Heading>
    </Box>
);

function Product({ location }) {
    const { state } = location;

    if (!state) {
        window.location = '/';
    }

    return (
        <Box>
            <Header title={state.title} />
            <Box p={8} d='flex' alignItems='center'>
            <Image w={48} src={state.image} />
            <Box>
                <Heading>Price: ${state.price}</Heading>
            </Box>
            </Box>
        </Box>
    );
}

export default Product;
