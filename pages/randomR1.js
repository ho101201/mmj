import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    Wrap,
    Button,
  } from '@chakra-ui/react';
  // import { Link } from 'next/link';
  import Image from 'next/image';
  import { 
    useState, 
} from 'react';

import arrowL from './images/arrowL.png';
import Export from './images/export.png';
import circleY from './images/ellipseY.png';
import FNK from './images/F&K.png';

export default function random1() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    return(
        <div>
            <Flex w="vw" h="40px" alignItems="center" justifyContent="center" borderBottom="1px solid #DDDDDD">
                <Flex ml="18px" alignItems="center">
                    <Link href='/home' >
                        <Flex w="7px" h="16px">
                            <Image src={arrowL}/>
                        </Flex>
                    </Link>
                </Flex>
                <Spacer/>
                <Text fontWeight="extrabold" fontSize={f1} position="absolute">
                랜덤추천
                </Text>
                <Flex w="20px" h="20px" mr="9px">
                    <Image src={Export}/>
                </Flex>
            </Flex>
            <Flex w="vw" direction="column" alignItems='center' justifyContent="center" mt="20px">
                <Flex w="40px" h="40px">
                    <Image src={circleY}/>
                    <Flex  w="18px" h="18px" mt="11px" ml="11px" position="absolute" >
                        <Image src={FNK}/>
                    </Flex>
                </Flex>
                <Text fontSize={f1} fontWeight="bold" mt="15px">원하는 카테고리를 선택해주세요</Text>
                <Text fontSize={f2}>중복 선택 가능합니다</Text>

                <Flex w="90vw" h="8px" mt="17px" mb="30px" justifyContent="center">
                    <Flex w="100%" h="2px" bg="#303030" >
                    </Flex>
                </Flex>

                <Wrap spacing="10px" justify="center" pr="30px" pl="30px" >
                        <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#F6E229" borderRadius="full" border="1px solid #303030">
                            <Text  fontSize={f2} >메뉴</Text>
                        </Flex>
                        <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                            <Text  fontSize={f2} >메뉴</Text>
                        </Flex>
                        <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                            <Text  fontSize={f2} >메뉴</Text>
                        </Flex>
                        <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                            <Text  fontSize={f2} >메뉴</Text>
                        </Flex>
                        <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                            <Text  fontSize={f2} >메뉴</Text>
                        </Flex>
                        <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                            <Text  fontSize={f2} >메뉴</Text>
                        </Flex>
                        <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                            <Text  fontSize={f2} >메뉴</Text>
                        </Flex>
                        <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                            <Text  fontSize={f2} >메뉴</Text>
                        </Flex>
                        <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                            <Text  fontSize={f2} >메뉴</Text>
                        </Flex>
                        <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                            <Text  fontSize={f2} >메뉴</Text>
                        </Flex>
                </Wrap>

                <Flex direction="column" position="sticky" mr="10px" ml="10px" w="100%" bottom="0"  mt="50px" pb="20px">
                    <Flex  w="100%" h="40px">
                        <Link href='/randomR2' w="100%" mr="10px" ml="10px">
                            <Button w="100%" borderRadius="full" bg="#303030" color="#ffffff" fontWeight={500} fontSize={f1} >시작</Button>
                        </Link>
                    </Flex>
                </Flex>
             </Flex>
        </div>
    )
}