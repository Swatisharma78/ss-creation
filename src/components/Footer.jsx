import {Container,Link, SimpleGrid,Stack,Text} from '@chakra-ui/react';
const ListHeader = ({ children }) => {
return (
<Text fontWeight={'700'} fontSize={'lg'} mb={2}>{children}</Text>)};
export default function Footer() {
return (
<Container as={Stack} maxW={'7xl'} py={10} marginTop={100} >
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4,lg:5 }} width="100%" border="1px solid #dfdfe1" backgroundColor="#dffaef " shadow={"lg"} margin="auto" borderRadius="15px" padding="1rem" spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Our Collection</ListHeader>
              <line style={{border:'0.2px solid #dfdfe1' ,width:'150px'}}></line>
              <Link>Mens Collection</Link>
              <Link>Womens Collection</Link>
              <Link>Kids Collection</Link>
              <Link>Electronics product</Link>
              </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>HELP</ListHeader>
              <line style={{border:'0.2px solid #dfdfe1' ,width:'150px'}}></line>
              <Link>Payments</Link>
              <Link>Shipping</Link>
              <Link>Cancellation & Returns</Link>
              <Link>FAQ</Link>
            </Stack>
          <Stack align={'flex-start'}>
              <ListHeader>POLICY</ListHeader>
              <line style={{border:'0.2px solid #dfdfe1' ,width:'150px'}}></line>
              <Link>Return Policy</Link>
              <Link>Terms Of use</Link>
              <Link>Security</Link>
              <Link>Privacy</Link>
            </Stack>
           <Stack align={'flex-start'}>
              <ListHeader>SOCIAL</ListHeader>
              <line style={{border:'0.2px solid #dfdfe1' ,width:'150px'}}></line>
              <Link>Instagram</Link>
              <Link>Twitter</Link>
              <Link>Facebook</Link>
             <Link>YouTube</Link>
            </Stack> 
         <Stack align={'flex-start'}>
              <ListHeader>Useful links</ListHeader>
              <line style={{border:'0.2px solid #dfdfe1' ,width:'160px'}}></line>
              <Link>Blogs</Link>
              <Link>Careers</Link>
            </Stack> 
          </SimpleGrid>
        </Container>
    );
  }