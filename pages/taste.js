import { 
    Flex,
    Text,
    Link,
    Spacer,
    Wrap,
    Button
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import React from 'react';

  import arrowL from './images/arrow-left.png';
  import arrowB from './images/arrow-bottom.png';



  export default function taste() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    return(
        <div>
            <Flex w="vw" h="40px" justifyContent="center" alignItems="center" border="1px solid #DDDDDD">
                <Text fontSize={f1} fontWeight="bold" align="center">입맛설정</Text>
                <Link href='/profile' position="absolute" left="11px" w="20px" h="20px">
                    <Image src={arrowL} />
                </Link>
            </Flex>

            <Flex p="10px" h="50px" alignItems="center" borderBottom="1px solid #F6F6F6">
                <Text fontSize={f2} color="#333333" fontWeight="bold">좋아하는 음식</Text>
                <Spacer/>
                <Flex w="16px" h="10px">
                    <Image src={arrowB}/>
                </Flex>
            </Flex>

            <Flex p="10px" h="50px" alignItems="center">
                <Text fontSize={f2} color="#333333" fontWeight="bold" borderBottom="1px solid #F6F6F6">싫어하는 음식</Text>
                <Spacer/>
                <Flex w="16px" h="10px">
                    <Image src={arrowB}/>
                </Flex>
            </Flex>

            <Flex direction="column" p="10px">
                <Text mb="17px" mt='17px '>고기</Text>
                <Wrap>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button >
                    <Button bg="whitev" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                </Wrap>
            </Flex>
             
            <Flex direction="column" p="10px">
                <Text mb="17px" mt='17px '>해산물</Text>
                <Wrap>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button >
                    <Button bg="whitev" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                </Wrap>
            </Flex>
            
            <Flex direction="column" p="10px">
                <Text mb="17px" mt='17px '>분식</Text>
                <Wrap>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button >
                    <Button bg="whitev" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                    <Button bg="white" color="#A4A4A4" border="1px solid #E1E1E1" borderRadius="4px" w="49px" h='20px' fontWeight="medium" fontSize={f3}>메뉴</Button>
                </Wrap>
            </Flex>

            
            <Flex direction="column" mr="10px" w="100%" mt="70px" mb="34px" h="50px">
                <Flex  w="100%">
                    <Link w="100%" mr="10px" ml="10px">
                        <Button w="100%" borderRadius="10px" bg="white" border="2px solid #F6F6F6" color="#565656" fontWeight="medium" fontSize={f2} >입맛설정 초기화</Button>
                    </Link>
                </Flex>
            </Flex>
        </div>
    )
  }