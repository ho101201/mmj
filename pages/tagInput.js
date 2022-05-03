import { 
    Box,
    Flex,
    Text,
    Link,
    Button,
    Input,
    Spacer,
    Textarea,
    Wrap,
    WrapItem,
    Tag,
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import React, { useState } from 'react';

  import btnX from './images/btnX.png';
  import arrowL from './images/arrow-left.png';
  import camera from './images/addphoto3.png';
  import starF from './images/starF.png';
  import starB from './images/starB2.png';
  import arrowR from './images/arrowR.png';
  import p1 from './images/photo/photoEx1.png';
  import heart from './images/heart.png';
  import comment from './images/comment.png';
  import del from './images/del.png';


  export default function tagInput() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";


    return(
        <div>
            <Flex w="vw" h="40px" justifyContent="center" alignItems="center" border="1px solid #DDDDDD">
                <Text fontSize={f1} fontWeight="bold" align="center">태그 입력</Text>
                <Link href='/writingRev' position="absolute" right="11px" w="20px" h="20px">
                    <Image src={btnX} />
                </Link>
            </Flex>

            <Flex h="50px" direction="row" pr="10px" pl="10px" alignItems="center">
                <Input placeholder='#태그입력' variant="unstyled" fontSize={f2}/>
                {/* <Spacer/> */}
                <Button bg="#303030" color="white" fontSize={f3} fontWeight="medium" w="70px" h="30px" borderRadius="full">등록</Button>
            </Flex>

            <Flex mt="25px" direction="column" ml="10px" mr="10px">
                <Text fontSize={f1} fontWeight="bold"  mb='15px'>최근 사용 태그</Text>
                <Wrap spacing="9px">
                    <WrapItem>
                        <Box>
                            <Text fontSize={f3} color="#2596FF">#점심식사</Text>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box>
                            <Text fontSize={f3} color="#2596FF">#점심식사</Text>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box>
                            <Text fontSize={f3} color="#2596FF">#점심식사</Text>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box>
                            <Text fontSize={f3} color="#2596FF">#점심식사</Text>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box>
                            <Text fontSize={f3} color="#2596FF">#점심식사</Text>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box>
                            <Text fontSize={f3} color="#2596FF">#점심식사</Text>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box>
                            <Text fontSize={f3} color="#2596FF">#점심식사</Text>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box>
                            <Text fontSize={f3} color="#2596FF">#점심식사</Text>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box>
                            <Text fontSize={f3} color="#2596FF">#점심식사</Text>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box>
                            <Text fontSize={f3} color="#2596FF">#점심식사</Text>
                        </Box>
                    </WrapItem>
                </Wrap>
            </Flex>
            <Flex h="210px">

            </Flex>
                <Flex direction="column" position="sticky" mr="10px"  w="100%" bottom="0"  mt="30px" pb="20px">
                    <Flex  w="100%" h="40px" mt="20px" position="sticky">
                        <Link w="100%" h="40px" mr="10px" ml="10px">
                            <Button w="100%" borderRadius="full" bg="#ffffff" color="#303030" border="1px solid #303030" fontWeight={500} fontSize={f1}>초기화</Button>
                        </Link>
                        <Link w="100%" h="40px" mr="10px" ml="10px">
                            <Button w="100%" borderRadius="full" bg="#F6E229" color="#303030" fontWeight={500} fontSize={f1}>완료</Button>
                        </Link>
                    </Flex>
                </Flex>

            {/* <Flex direction="column" position="sticky" mr="10px"  w="100%" bottom="0"  mt="30px" pb="20px">
                    <Flex  w="100%" h="40px">
                        <Link href='/cutlet_info' w="100%" mr="10px" ml="10px">
                            <Button w="100%" borderRadius="full" bg="#F6E229" color="#303030" fontWeight={700} fontSize={f1} >완료</Button>
                        </Link>
                    </Flex>
                </Flex> */}
        </div>
    )
  }