import { 
    Box,
    Flex,
    Text,
    Link,
    Input,
    VStack,
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import React from 'react';

  import btnX from './images/btnX.png';
  import Search_Icons from './images/Search_Icons.png';
  import location from './images/location.png';

  export default function setMyLoc() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    return(
        <div>
            <Flex w="vw" h="42px" justifyContent="center" alignItems="center">
                <Text fontSize={f1} fontWeight="bold" align="center">지역 설정</Text>
                <Link href='/home' position="absolute" right="11px" w="20px" h="20px">
                    <Image src={btnX} />
                </Link>
            </Flex>
            <Flex h="40px" p="5px" alignItems="center" borderBottom="1px solid #DDDDDD">
                <Box w="20px" h="20px" mr="10px" ml="12px">
                    <Image src={Search_Icons} />
                </Box>
                <Input fontSize={f2} color="#A4A4A4" placeholder='동명(읍,면)으로 검색 (ex. 문정동)' bg="#F6F6F6" mr="5px" h="30px" border="none"/>
            </Flex>
            <Flex justifyContent="center" h="52px" alignItems="center" borderBottom="1px solid #F6F6F6" ml="10px" mr="10px">
                <Flex w="11px" h="13px" mr="6px">
                    <Image src={location}/>
                </Flex>
                <Text fontSize={f2} >내 주변 지역으로 검색</Text>
            </Flex>

            <Flex alignItems="center" justifyContent="center" mt="10px" mb="20px" border="1px solid #F6F6F6"> 
                <Text align="center" color="#A4A4A4" fontSize={f2}>근처 동네 <text>18</text>개</Text>
            </Flex>

            <Flex direction="column" ml="10px" mr="10px">
            
                <Text fontSize={f2} borderBottom="1px solid #F6F6F6" h="42px">
                    서울 송파구 문정동
                </Text>
                <Text fontSize={f2} borderBottom="1px solid #F6F6F6" h="42px">
                    서울 송파구 문정1동
                </Text>           
                <Text fontSize={f2} borderBottom="1px solid #F6F6F6" h="42px">
                    서울 송파구 가락동
                </Text>
                <Text fontSize={f2} borderBottom="1px solid #F6F6F6" h="42px">
                    서울 송파구 문정2동
                </Text>
                <Text fontSize={f2} borderBottom="1px solid #F6F6F6" h="42px">
                    서울 송파구 가락본동
                </Text>
                <Text fontSize={f2} borderBottom="1px solid #F6F6F6" h="42px">
                    서울 송파구 가락2동
                </Text>
                <Text fontSize={f2} borderBottom="1px solid #F6F6F6" h="42px">
                    서울 강남구 수서동
                </Text>

            </Flex>

        </div>
    )
  }