import { 
    Box,
    Flex,
    Text,
    Link, 
    Textarea,
    Button
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import React from 'react';

  import btnX from './images/btnX.png';

  export default function memo() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    return(
        <div>
            <Flex w="vw" h="40px" justifyContent="center" alignItems="center" border="1px solid #DDDDDD">
                <Text fontSize={f1} fontWeight="bold" align="center">메모</Text>
                <Link href='/profile' position="absolute" right="11px" w="20px" h="20px">
                    <Image src={btnX} />
                </Link>
            </Flex>

            <Textarea fontSize={f2} placeholder='가고싶은 이유를 기록하세요 (100자 이내)' variant="unstyled" p="10px" h="585px" resize='none' overflow="visible"/>
            

            <Flex direction="column" position="sticky" mr="10px"  w="100%" bottom="0"  mt="30px" pb="20px">
                <Flex  w="100%" h="40px">
                    <Link href='/willgo' w="100%" mr="10px" ml="10px">
                        <Button w="100%" borderRadius="full" bg="#F6E229" color="#303030" fontWeight={700} fontSize={f1} >완료</Button>
                    </Link>
                </Flex>
            </Flex>
        </div>
    )
  } 