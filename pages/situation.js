import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    Button,
    useDisclosure,
    useMediaQuery,
    Wrap, 
    SWrapItem
  } from '@chakra-ui/react';
  // import { Link } from 'next/link';
  import Image from 'next/image';
  import { 
    useState, 
} from 'react';


import Q from './images/Q.png';
import arrowL from './images/arrowL.png';
import Export from './images/export.png';


export default function situation() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";
    let nickname;

    const [longW] = useMediaQuery(
        "(min-width: 600px)"
      );

    return(
        <div>
            <Flex w="vw" h="40px" alignItems="center" justifyContent="center" borderBottom="1px solid #DDDDDD">
                <Flex ml="18px" alignItems="center">
                    <Link href='/recommand' >
                        <Flex w="7px" h="16px">
                            <Image src={arrowL}/>
                        </Flex>
                    </Link>
                </Flex>
                <Spacer/>
                <Text fontWeight="extrabold" fontSize={f1} position="absolute">
                    상황따라
                </Text>
                <Flex w="20px" h="20px" mr="9px">
                    <Image src={Export}/>
                </Flex>
            </Flex>
            <Flex w="vw" direction="column" alignItems='center' justifyContent="center" mt="20px">
                <Flex w="40px" h="40px">
                    <Image src={Q}/>
                </Flex>
                <Text fontSize={f1} fontWeight="bold" mt="15px">누구와 함께 하나요?</Text>
                <Text fontSize={f2}>선택은 최대 1개까지 가능합니다</Text>

                <Flex w="90vw" h="8px" mt="17px" mb="30px" justifyContent="center">
                    <Flex w="100%" h="8px" bg="#303030" borderRadius="full">
                        <Box w="25%" bg="#F6E229" borderRadius="full"/>
                    </Flex>
                </Flex>

                <Wrap spacing="10px" justify="center" pr="30px" pl="30px">
                        <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#F6E229" borderRadius="full" border="1px solid #303030">
                            <Text  fontSize={f2} >선택</Text>
                        </Flex>
                        <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                            <Text  fontSize={f2} >친구</Text>
                        </Flex>
                        <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                            <Text  fontSize={f2} >친구</Text>
                        </Flex>
                        <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                            <Text  fontSize={f2} >친구</Text>
                        </Flex>
                        <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                            <Text  fontSize={f2} >친구</Text>
                        </Flex>
                        <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                            <Text  fontSize={f2} >친구</Text>
                        </Flex>
                        <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                            <Text  fontSize={f2} >친구</Text>
                        </Flex>
                        <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                            <Text  fontSize={f2} >친구</Text>
                        </Flex>
                        <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                            <Text  fontSize={f2} >친구</Text>
                        </Flex>
                        <Flex justifyContent="center" alignItems="center" w="64px" h="34px" bg="#ffffff" borderRadius="full" border="1px solid #E1E1E1">
                            <Text  fontSize={f2} >친구</Text>
                        </Flex>
                </Wrap>

                <Flex direction="column" position="sticky" mr="10px" ml="10px" w="100%" bottom="0"  mt="50px" pb="20px">
                    <Flex  w="100%" h="40px">
                        <Button w="100%" mr="10px" ml="10px" borderRadius="full" bg="#303030" color="#ffffff" fontWeight={500} fontSize={f1}  >다음</Button>
                    </Flex>
                    <Flex  w="100%" h="40px" mt="20px">
                        <Button w="100%" h="40px" mr="10px" ml="10px" borderRadius="full" bg="#ffffff" color="#303030" border="1px solid #303030" fontWeight={500} fontSize={f1}  >건너뛰기</Button>
                        <Button w="100%" h="40px" mr="10px" ml="10px" borderRadius="full" bg="#303030" color="#ffffff" fontWeight={500} fontSize={f1}  >바로추천</Button>
                    </Flex>
                </Flex>
            </Flex>
 
        </div>
    )
}