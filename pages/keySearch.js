import { 
    Box,
    Flex,
    Text,
    Link,
    Input,
    HStack,
    Tag,
    SimpleGrid,
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import React from 'react';

  import btnX from './images/btnX.png';
  import Search_Icons from './images/Search_Icons.png';
  import location from './images/location.png';

  export default function kSearch() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    return(
        <div>
            <Flex h="40px" p="5px" alignItems="center" borderBottom="1px solid #DDDDDD">
                <Box w="20px" h="20px" mr="10px" ml="12px">
                    <Image src={Search_Icons} />
                </Box>
                <Input fontSize={f2} color="#A4A4A4" placeholder='동명(읍,면)으로 검색 (ex. 문정동)' bg="#F6F6F6" mr="5px" h="30px"/>
                <Link href='/home' w="20px" h="20px" ml="7px" mr="6px" > 
                    <Image src={btnX} />
                </Link>
            </Flex>
            <Flex justifyContent="center" mt="16px" alignItems="center" >
                <Flex w="11px" h="13px" mr="6px">
                    <Image src={location}/>
                </Flex>
                <Text fontSize={f2} >내 주변 식당 검색하기</Text>
            </Flex>
            
            {/* hide */}
            <Box w="vw" mt="35px" p="10px">
                <Text fontSize="16px" fontWeight="bold" >오늘의 추천 태그</Text>
                <SimpleGrid minChildWidth="60px" spacing="5px" mt="16px">
                        <Tag textAlign="center" border="1px solid #A4A4A4" color="#A4A4A4" bg="white" fontSize="10px" borderRadius="4px" p="6px " >점심식사</Tag>
                        <Tag border="1px solid #A4A4A4" color="#A4A4A4" bg="white" fontSize="10px" borderRadius="4px" p="6px" >혼밥</Tag>
                        <Tag border="1px solid #A4A4A4" color="#A4A4A4" bg="white" fontSize="10px" borderRadius="4px" p="6px" >직장인</Tag>
                        <Tag border="1px solid #A4A4A4" color="#A4A4A4" bg="white" fontSize="10px" borderRadius="4px" p="6px" >데이트</Tag>
                        <Tag border="1px solid #A4A4A4" color="#A4A4A4" bg="white" fontSize="10px" borderRadius="4px" p="6px" >연인</Tag>
                        <Tag border="1px solid #A4A4A4" color="#A4A4A4" bg="white" fontSize="10px" borderRadius="4px" p="6px" >모던한</Tag>
                        <Tag border="1px solid #A4A4A4" color="#A4A4A4" bg="white" fontSize="10px" borderRadius="4px" p="6px" >숨은맛집</Tag>
                        <Tag border="1px solid #A4A4A4" color="#A4A4A4" bg="white" fontSize="10px" borderRadius="4px" p="6px" >숨은맛집</Tag>
                        <Tag border="1px solid #A4A4A4" color="#A4A4A4" bg="white" fontSize="10px" borderRadius="4px" p="6px" >숨은맛집</Tag>
                        <Tag border="1px solid #A4A4A4" color="#A4A4A4" bg="white" fontSize="10px" borderRadius="4px" p="6px" >숨은맛집</Tag>
                        <Tag border="1px solid #A4A4A4" color="#A4A4A4" bg="white" fontSize="10px" borderRadius="4px" p="6px" >숨은맛집</Tag>
                </SimpleGrid>
            </Box>

            <Box w="vw" mt="56px" p="10px">
                <Text fontSize="16px" fontWeight="bold" >내 주변 인기 태그</Text>
                <Flex direction="column">
                    <Flex direction="row" alignItems="center" mt="15px">
                        <Text fontSize={f3} fontWeight="bold" mr="10px">1</Text>
                        <Tag textAlign="center" border="1px solid #A4A4A4" color="#A4A4A4" bg="white" fontSize="10px" borderRadius="4px" p="6px " >점심식사</Tag>
                    </Flex>
                    <Flex direction="row" alignItems="center" mt="15px">
                        <Text fontSize={f3} fontWeight="bold" mr="10px">3</Text>
                        <Tag textAlign="center" border="1px solid #A4A4A4" color="#A4A4A4" bg="white" fontSize="10px" borderRadius="4px" p="6px " >점심식사</Tag>
                    </Flex>
                    <Flex direction="row" alignItems="center" mt="15px">
                        <Text fontSize={f3} fontWeight="bold" mr="10px">3</Text>
                        <Tag textAlign="center" border="1px solid #A4A4A4" color="#A4A4A4" bg="white" fontSize="10px" borderRadius="4px" p="6px " >점심식사</Tag>
                    </Flex>
                    <Flex direction="row" alignItems="center" mt="15px">
                        <Text fontSize={f3} fontWeight="bold" mr="10px">4</Text>
                        <Tag textAlign="center" border="1px solid #A4A4A4" color="#A4A4A4" bg="white" fontSize="10px" borderRadius="4px" p="6px " >점심식사</Tag>
                    </Flex>
                    <Flex direction="row" alignItems="center" mt="15px">
                        <Text fontSize={f3} fontWeight="bold" mr="10px">5</Text>
                        <Tag textAlign="center" border="1px solid #A4A4A4" color="#A4A4A4" bg="white" fontSize="10px" borderRadius="4px" p="6px " >점심식사</Tag>
                    </Flex>


                </Flex>
            </Box>


        </div>
    )
  }