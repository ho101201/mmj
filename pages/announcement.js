import { 
    Flex,
    Text,
    Spacer,
    Link,
  } from '@chakra-ui/react';
import Image from "next/image";
import arrowR from './images/arrowR.png';
import arrowL from './images/arrow-left.png';
import arrowB from './images/arrow-bottom.png';


export default function ann() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    return(
        <div>
            <Flex w="vw" h="40px" justifyContent="center" alignItems="center" border="1px solid #DDDDDD">
                <Text fontSize={f1} fontWeight="bold" align="center">공지사항</Text>
                <Link href='/service' position="absolute" left="11px" w="20px" h="20px">
                    <Image src={arrowL} />
                </Link>
            </Flex> 
            
            <Link href='/announcement'>
                <Flex p="10px" h="50px" alignItems="center" border="1px solid #F6F6F6">
                    <Text fontWeight="bold" fontSize={f2} color="#333333">공지사항리스트</Text>
                    <Spacer/>
                    <Flex w="16px" h="10px">
                        <Image src={arrowB}/>
                    </Flex>
                </Flex>
            </Link>

            {/* 공지사항내용 */}
            <Flex h="262px" p="10px" pr="30px" direction="column">
                <Text fontSize={f3} color="#565656" mb="12px">2022.03.1</Text>
                <Text fontSize={f2}>
                    공지사항 내용공지사항 내용공지사항 내용공지사항 내용
                    공지사항 내용공지사항 내용공지사항 내용공지사항 내용
                    공지사항 내용공지사항 내용공지사항 내용공지사항 내용
                    공지사항 내용공지사항 내용공지사항 내용공지사항 내용
                </Text>
            </Flex>

            <Link >
                <Flex p="10px" h="50px" alignItems="center" border="1px solid #F6F6F6">
                    <Text fontWeight="bold" fontSize={f2} color="#333333" >공지사항리스트</Text>
                    <Spacer/>
                    <Flex w="16px" h="10px">
                        <Image src={arrowB}/>
                    </Flex>
                </Flex>
            </Link>

            <Link>
                <Flex p="10px" h="50px" alignItems="center" border="1px solid #F6F6F6">
                    <Text fontWeight="bold" fontSize={f2} color="#333333">공지사항리스트</Text>
                    <Spacer/>
                    <Flex w="16px" h="10px">
                        <Image src={arrowB}/>
                    </Flex>
                </Flex>
            </Link>

            <Link>
                <Flex p="10px" h="50px" alignItems="center" border="1px solid #F6F6F6">
                    <Text fontWeight="bold" fontSize={f2} color="#333333" >공지사항리스트</Text>
                    <Spacer/>
                    <Flex w="16px" h="10px">
                        <Image src={arrowB}/>
                    </Flex>
                </Flex>
            </Link>

            <Link>
                <Flex p="10px" h="50px" alignItems="center" border="1px solid #F6F6F6">
                    <Text fontWeight="bold" fontSize={f2} color="#333333" >공지사항리스트</Text>
                    <Spacer/>
                    <Flex w="16px" h="10px">
                        <Image src={arrowB}/>
                    </Flex>
                </Flex>
            </Link>

        </div>
    )
}