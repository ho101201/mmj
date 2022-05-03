import { 
    Box,
    Flex,
    Text,
    Link,
    Input,
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import React from 'react';

  import btnX from './images/btnX.png';
  import Search_Icons from './images/Search_Icons.png';
  import location from './images/location.png';

  export default function setLoc() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    return(
        <div>
            <Flex w="vw" h="42px" justifyContent="center" alignItems="center">
                <Text fontSize={f1} fontWeight="bold" align="center">위치 설정</Text>
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
            <Flex justifyContent="center" mt="16px" alignItems="center">
                <Flex w="11px" h="13px" mr="6px">
                    <Image src={location}/>
                </Flex>
                <Text fontSize={f2} >내 주변 지역으로 검색</Text>
            </Flex>

        </div>
    )
  }