import { 
    Box,
    Flex,
    Text,
    Link,
    Input,
    Spacer,
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import React from 'react';

  import btnX from './images/btnX.png';
  import starF from './images/starF.png';
  import starB from './images/starB.png';
  import arrowR from './images/arrowR.png';
  import p1 from './images/photo/photoEx1.png';

  export default function willGo() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    return(
        <div>
            <Flex w="vw" h="40px" justifyContent="center" alignItems="center" border="1px solid #DDDDDD">
                <Text fontSize={f1} fontWeight="bold" align="center">가볼래요</Text>
                <Link href='/profile' position="absolute" right="11px" w="20px" h="20px">
                    <Image src={btnX} />
                </Link>
            </Flex>

            <Flex direction='row' p="10px" alignItems="center" h="126px">
                <Flex w="85px" h="85px" borderRadius="10px" overflow="hidden">
                    <Image src={p1} />
                </Flex>
                <Flex direction="column" ml='10px'>
                    <Text fontWeight="bold" fontSize={f2}>카츠단길</Text>
                    <Flex direction="row" mb='10px'>
                        <Flex w="13px" h="13px">
                            <Image src={starF}/>
                        </Flex>
                        <Text fontSize={f2}>4.5 (10)</Text>
                    </Flex>
                    <Text fontSize={f2}>신천/잠실 · 한식코스</Text>
                </Flex>
                <Spacer/>
                <Flex w="30px" h="30px">
                    <Image src={starF}/>
                </Flex>
            </Flex>
            <Link href='/memo'>
                <Flex p="10px" h="50px" alignItems="center">
                    <Text fontSize={f2} color="#333333">가고싶은 이유가 있나요?</Text>
                    <Spacer/>
                    <Flex w="7px" h="10px">
                        <Image src={arrowR}/>
                    </Flex>
                </Flex>
            </Link>

            <Flex direction='row' p="10px" alignItems="center" h="126px" mt="10px">
                <Flex w="85px" h="85px" borderRadius="10px" overflow="hidden">
                    <Image src={p1} />
                </Flex>
                <Flex direction="column" ml='10px'>
                    <Text fontWeight="bold" fontSize={f2}>카츠단길</Text>
                    <Flex direction="row" mb='10px'>
                        <Flex w="13px" h="13px">
                            <Image src={starF}/>
                        </Flex>
                        <Text fontSize={f2}>4.5 (10)</Text>
                    </Flex>
                    <Text fontSize={f2}>신천/잠실 · 한식코스</Text>
                </Flex>
                <Spacer/>
                <Flex w="30px" h="30px">
                    <Image src={starF}/>
                </Flex>
            </Flex>

            <Link href='/memo'>
                <Flex p="10px" h="50px" alignItems="center">
                    <Text fontSize={f2} color="#333333">가고싶은 이유가 있나요?</Text>
                    <Spacer/>
                    <Flex w="7px" h="10px">
                        <Image src={arrowR}/>
                    </Flex>
                </Flex>
            </Link>

        </div>
    )
  }