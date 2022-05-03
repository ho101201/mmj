import { 
    Flex,
    Text,
    Spacer,
    Link,
  } from '@chakra-ui/react';
import React, { useState } from 'react';
import Image from "next/image";
import arrowR from './images/arrowR.png';
import arrowL from './images/arrow-left.png';


export default function Service() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    return(
        <div>
            <Flex w="vw" h="40px" justifyContent="center" alignItems="center" border="1px solid #DDDDDD">
                <Text fontSize={f1} fontWeight="bold" align="center">고객센터</Text>
                <Link href='/profile' position="absolute" left="11px" w="20px" h="20px">
                    <Image src={arrowL} />
                </Link>
            </Flex> 
            
            <Link href='/announcement'>
                <Flex p="10px" h="50px" mt="10px">
                    <Text fontWeight="bold" fontSize={f2} color="#333333">공지사항</Text>
                    <Spacer/>
                    <Flex w="7px" h="10px">
                        <Image src={arrowR}/>
                    </Flex>
                </Flex>
            </Link>

            <Link >
                <Flex p="10px" h="50px">
                    <Text fontWeight="bold" fontSize={f2} color="#333333" >FAQ</Text>
                    <Spacer/>
                    <Flex w="7px" h="10px">
                        <Image src={arrowR}/>
                    </Flex>
                </Flex>
            </Link>

            <Link>
                <Flex p="10px" h="50px">
                    <Text fontWeight="bold" fontSize={f2} color="#333333">피드백 및 지원</Text>
                    <Spacer/>
                    <Flex w="7px" h="10px">
                        <Image src={arrowR}/>
                    </Flex>
                </Flex>
            </Link>

            <Link>
                <Flex p="10px" h="50px">
                    <Text fontWeight="bold" fontSize={f2} color="#333333" >서비스 이용약관</Text>
                    <Spacer/>
                    <Flex w="7px" h="10px">
                        <Image src={arrowR}/>
                    </Flex>
                </Flex>
            </Link>

            <Link>
                <Flex p="10px" h="50px">
                    <Text fontWeight="bold" fontSize={f2} color="#333333" >개인정보 처리방침</Text>
                    <Spacer/>
                    <Flex w="7px" h="10px">
                        <Image src={arrowR}/>
                    </Flex>
                </Flex>
            </Link>

            <Link>
                <Flex p="10px" h="50px">
                    <Text fontWeight="bold" fontSize={f2} color="#333333" >위치기반 서비스 이용약관</Text>
                    <Spacer/>
                    <Flex w="7px" h="10px">
                        <Image src={arrowR}/>
                    </Flex>
                </Flex>
            </Link>

        </div>
    )
}