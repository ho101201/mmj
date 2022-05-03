import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    Button,
    useDisclosure,
    useMediaQuery
  } from '@chakra-ui/react';
  // import { Link } from 'next/link';
  import Image from 'next/image';
  import { 
    useState, 
} from 'react';


import home from './images/navIcons/icon_home.png';
import homeA from './images/navIcons/icon_homeA.png';
import rec from './images/navIcons/icon_rec.png';
import recA from './images/navIcons/icon_recA.png';
import rev from './images/navIcons/icon_rev.png';
import revA from './images/navIcons/icon_revA.png';
import my from './images/navIcons/icon_my.png';
import myA from './images/navIcons/icon_myA.png';
import dish from './images/dish.png';

export default function recommand() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";
    let nickname;

    const [longW] = useMediaQuery(
        "(min-width: 600px)"
      );

    return(
        <div>
            <Flex direction="column" w="vw" h="vh" bg="#F6E229">
                <Flex w="vw" h="vh" bg="#F6E229" alignItems="center" justifyContent="center" direction="column" mt="30px">
                    <Flex w="vw" h="vw" >
                        <Image src={dish} />
                    </Flex>
                    <Flex position="absolute" direction="column"  justifyContent="center" >
                        <Flex justifyContent="center">

                            {/* <Flex boxSizing="border-box" borderBottom="10px solid #F6E229" bg="red.100">
                                <Text align="center" fontSize="24px" fontWeight={700} >닉네임최대글자수</Text>
                            </Flex> */}

                            <Flex direction="column-reverse" w="180px" position="relative" alignItems="center">
                                <Box  position="absolute">
                                    <Text align="center" fontSize="24px" fontWeight={700}>닉네임최대글자수 </Text>
                                </Box>
                                <Box w="100%" h="8px" bg="#F6E229" mb="6px"/>
                            </Flex>

                            {/* <Flex>
                                <Text id='nickname' align="center" fontSize="24px" fontWeight={700} as="u">닉네임최대글자수</Text>
                                <Box bg="#F6E229" h="10px" w={nickname}/>
                            </Flex> */}
                            <Text fontSize="24px" fontWeight={700} >님</Text>
                        </Flex>
                        <Text align="center" fontSize="24px" letterSpacing="-1px">오늘 뭐 먹고 싶어요?</Text>
                    </Flex>
                </Flex>

                <Flex direction="row" justifyContent="center" m="15px" mb="25px" position="sticky" bottom="100px" >
                    <Link href='/situation' w="100%" mr="5px">
                        <Button w="100%" h="40px" bg="#ffffff" color="#303030" border="1px solid #303030" borderRadius="full" fontSize={f1} fontWeight="bold" >상황 따라</Button>
                    </Link>
                    <Link  w="100%"  ml="5px">
                        <Button w="100%" h="40px" bg="#303030" color="#ffffff"  borderRadius="full" fontSize={f1} fontWeight="bold">기분 따라</Button>
                    </Link>
                </Flex>

            </Flex>    

             {/* navbar */}
            <Box borderTop="1px solid #E8E8E8" h="80px"  pl="7px" pr="7px" display="absolute" position="sticky" bottom="0px" bg="#ffffff">
                    <Flex direction="row" w="vw" mt="13px" >
                        <Spacer/>
                        <Flex direction="column" justifyContent="center" ml="33px" mr="33px">
                            <Link href='/home' w="24px" h="24px">
                                <Image src={home}/>
                            </Link>
                            <Text fontWeight="medium" fontSize="10px" align="center" >홈</Text>
                        </Flex>
                        <Spacer/>
                        <Flex direction="column" justifyContent="center" ml="33px" mr="33px">
                            <Link href='/recommand' w="24px" h="24px">
                                <Image src={recA}/>
                            </Link>
                            <Text fontWeight="bold" fontSize="10px" align="center" >추천</Text>
                        </Flex>
                        <Spacer/>
                        <Flex direction="column" justifyContent="center" ml="33px" mr="33px">
                            <Link href='/review' w="24px" h="24px">
                                <Image src={rev}/>
                            </Link>
                            <Text fontWeight="medium" fontSize="10px" align="center" >후기</Text>
                        </Flex>
                        <Spacer/>
                        <Flex direction="column" justifyContent="center" ml="33px" mr="33px">
                            <Link href='/profile' w="24px" h="24px">
                                <Image src={my}/>
                            </Link>
                            <Text fontWeight="medium" fontSize="10px" align="center" >마이</Text>
                        </Flex>
                        <Spacer/>

                    </Flex>
                </Box>
        </div>
    )
}