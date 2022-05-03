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
            <Flex w="vw" h="40px" justifyContent="center" alignItems="center" border="1px solid #DDDDDD">
                <Text fontSize={f1} fontWeight="bold" align="center">알림</Text>
                <Link href='/home' position="absolute" right="11px" w="20px" h="20px">
                    <Image src={btnX} />
                </Link>
            </Flex>

            <Box m="10px" p="10px" w="vw" h="96px" borderBottom="1px solid #F6F6F6">
                <Text fontWeight="bold" fontSize={f1} >회원가입 완료</Text>
                <Text fontWeight="medium" fontSize={f2} >가입을 축하드립니다. 지금 바로 뭐먹지를 시작해보세요.</Text>
                <Text fontSize="10px" color="#A4A4A4" mt="17px">1시간전</Text>
            </Box>
            
            <Box m="10px" p="10px" w="vw" h="96px" borderBottom="1px solid #F6F6F6">
                <Text fontWeight="bold" fontSize={f1} >회원가입 완료</Text>
                <Text fontWeight="medium" fontSize={f2} >가입을 축하드립니다. 지금 바로 뭐먹지를 시작해보세요.</Text>
                <Text fontSize="10px" color="#A4A4A4" mt="17px">1시간전</Text>
            </Box>
        </div>
    )
  }