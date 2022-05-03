import { 
    Flex,
    Text,
    Spacer,
    Link,
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
import store from './images/store.png';

export default function random2() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    return(
        <div>
            <Flex w="vw" h="40px" alignItems="center" justifyContent="center" borderBottom="1px solid #DDDDDD">
                <Flex ml="18px" alignItems="center">
                    <Link href='/randomR1' >
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
                        <Image src={store}/>
                    </Flex>
                </Flex>
                <Text fontSize={f1} fontWeight="bold" mt="15px">가츠단길 문정점</Text>
                <Text fontSize={f2} fontWeight="medium">음식점 ▶ 일식 ▶ 돈까스</Text>

                <Flex alignItems="center" justifyContent="center">
                    <Link href='/cutlet_info'>
                        <Button h="30px" mt="17px" fontSize={f3} bg="#F6E229" border="1px solid #303030" borderRadius="full">상세정보 보기</Button>
                    </Link>
                </Flex>


                <Flex direction="column" position="sticky" mr="10px" ml="10px" w="100%" bottom="0"  mt="55px" pb="20px">
                    <Flex  w="100%" h="40px">
                        <Link href='/randomR1' w="100%" mr="10px" ml="10px">
                            <Button w="100%" borderRadius="full" bg="#303030" color="#ffffff" fontWeight={500} fontSize={f1} >다시하기</Button>
                        </Link>
                    </Flex>
                </Flex>
             </Flex>
        </div>
    )
}