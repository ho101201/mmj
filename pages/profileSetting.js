import { 
    Tag,
    TagCloseButton,
    Flex,
    Icon,
    Text,
    Spacer,
    Link,
    Input,
    Button,
    useDisclosure,
    useMediaQuery,
    Wrap, 
    SWrapItem,
    TagLabel
  } from '@chakra-ui/react';
  // import { Link } from 'next/link';
  import Image from 'next/image';
  import { AddIcon } from '@chakra-ui/icons'
  import { 
    useState, 
} from 'react';


import Q from './images/Q.png';
import arrowL from './images/arrowL.png';
import Export from './images/export.png';

import addphoto1 from './images/addphoto1.png';
import addphoto2 from './images/addphoto2.png';


export default function pfSet() {

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
                    <Link href='/profile' >
                        <Flex w="7px" h="16px">
                            <Image src={arrowL}/>
                        </Flex>
                    </Link>
                </Flex>
                <Spacer/>
                <Text fontWeight="extrabold" fontSize={f1} position="absolute">
                    프로필 설정
                </Text>
            </Flex>

            <Flex alignItems="center" justifyContent='center' mt="20px" mb="20px">
                <Flex w="50px" h='50px' alignItems="center" justifyContent='center' >
                    <Image src={addphoto2}/>
                    <Flex w="24px" h='18px' ml="1px" mt="-1px" position="absolute">
                        <Image src={addphoto1} />
                    </Flex>
                </Flex>
            </Flex>

            <Flex direction="row" h="50px" alignItems='center' pr="10px" pl="10px">
                <Text fontSize={f2} fontWeight="bold" >닉네임</Text>
                <Spacer/>
                <Input w="80%" h="40px" fontSize={f2} placeholder='닉네임' border="1px solid #E1E1E1">
                </Input>
            </Flex>

            <Flex direction="row" h="50px" alignItems='center' pr="10px" pl="10px">
                <Text fontSize={f2} fontWeight="bold" >생년월일</Text>
                <Spacer/>
                <Input w="80%" h="40px" fontSize={f2} placeholder='생년월일' border="1px solid #E1E1E1">
                </Input>
            </Flex>

            <Flex direction="row" h="50px" alignItems='center' pr="10px" pl="10px">
                <Text fontSize={f2} fontWeight="bold" >성별</Text>
                <Spacer/>
                <Input w="80%" h="40px" fontSize={f2} placeholder='성별' border="1px solid #E1E1E1">
                </Input>
            </Flex>

            <Text fontSize={f2} fontWeight="bold" mt="42px" ml="10px">자주 가는 지역</Text>
            <Wrap mt="10px" ml="10px">
                <Tag fontSize={f3} color="#A4A4A4" border="1px solid #E1E1E1" bg="none" borderRadius="4px">
                    <TagLabel>지역명</TagLabel>
                    <TagCloseButton fontSize="10px" bg="#A4A4A4" borderRadius="full" color="white" w="10px" h="10px"/>
                </Tag>
                <Tag fontSize={f3} color="#A4A4A4" border="1px solid #E1E1E1" bg="none" borderRadius="4px">
                    <TagLabel>지역명</TagLabel>
                    <TagCloseButton fontSize="10px" bg="#A4A4A4" borderRadius="full" color="white" w="10px" h="10px"/>
                </Tag>
                <Tag fontSize={f1} color="#A4A4A4" border="1px solid #E1E1E1" bg="none" borderRadius="4px">
                    <Link href='/add        Location'>
                        <TagLabel><Icon w="48px" pb="5px" as={AddIcon}/></TagLabel>
                    </Link>
                </Tag>
            </Wrap>
            <Text color="#A4A4A4" fontSize="10px" ml="10px" mt="10px">* 지역은 최소 1개 이상 최대 3개까지 설정 가능합니다</Text>

            <Flex direction="column" position="sticky" mr="10px"  w="100%" bottom="0"  mt="30px" pb="20px">
                <Flex  w="100%" h="40px">
                    <Link href='/profile' w="100%" mr="10px" ml="10px">
                        <Button w="100%" borderRadius="full" bg="#F6E229" color="#303030" fontWeight={700} fontSize={f1} >완료</Button>
                    </Link>
                </Flex>
            </Flex>
 
        </div>
    )
}