import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    Button,
    useDisclosure,
    useMediaQuery,
    Grid,
    GridItem,
    Wrap, 
    SWrapItem,
    Tag
  } from '@chakra-ui/react';
  // import { Link } from 'next/link';
  import Image from 'next/image';
  import { 
    useState, 
} from 'react';
 
import arrowL from './images/arrowL.png';
import arrowR from './images/arrowR.png';
import Export from './images/export.png';
import gallery from './images/gallery.png';
import starF from './images/starF.png';
import Exclamation from './images/Exclamation.png';

import p1 from './images/photo/photoEx1.png';
import p2 from './images/photo/photoEx2.png';
import p3 from './images/photo/photoEx3.png';
import p4 from './images/photo/photoEx4.png';
import p5 from './images/photo/photoEx5.png';

import review from './images/navIcons/icon_rev.png';
import location from './images/navIcons/icon_loc.png';
import call from './images/navIcons/icon_call.png';

export default function rWork() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    return(
        <div>
            <Flex w="vw" h="40px" alignItems="center" justifyContent="center" borderBottom="1px solid #DDDDDD">
                <Flex ml="18px" alignItems="center">
                    <Link href='/randomR2' >
                        <Flex w="7px" h="16px">
                            <Image src={arrowL}/>
                        </Flex>
                    </Link>
                </Flex>
                <Spacer/>
                <Text fontWeight="extrabold" fontSize={f1} position="absolute">
                    카츠단길
                </Text>
                <Flex w="20px" h="20px" mr="9px">
                    <Image src={Export}/>
                </Flex>
            </Flex>
            <Grid templateRows='repeat( 2, 1fr )' templateColumns='repeat( 4, 1fr )' gap={0} >
                <GridItem colSpan={2} rowSpan={2} >
                    <Image src={p1}/>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1} >
                    <Image src={p2}/>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1} >
                    <Image src={p3}/>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1} mt="-5px">
                    <Image src={p4}/>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1} mt="-5px"  w="100%" h="100%">
                    <Link href='/'>
                        {/* <Flex position="absolute" bg="#303030" alignItems="center" justifyContent="center" direction="column" >
                            <Flex w="20px" h='20px'>
                                <Image src={gallery}/>
                            </Flex>
                        </Flex> */}
                        <Image src={p5}/>
                    </Link>
                </GridItem>
            </Grid>
            <Flex direction="row" ml="10px" mr="10px" mt="6px">
                <Flex direction="column" justifyContent="center">
                    <Flex direction='row' alignItems="flex-end">
                        <Text fontSize={f1} fontWeight='bold'>카츠단길</Text>
                        <Text fontSize={f3} color="#565656" ml="6px">126m</Text>
                    </Flex>
                    <Text fontSize={f2} color="#565656">서울 송파구 송파대로 201 A동 1층 117호</Text>
                </Flex>
                <Spacer/>
                <Flex direction="row" alignItems="center">
                    <Flex w="13px" h="13px" mr="5px">
                        <Image src={starF}/>
                    </Flex>
                    <Text fontWeight="bold" fontSize={f2}>4.5 <text fontWeight="medium">(10)</text></Text>
                </Flex>
            </Flex>
            <Flex direction="row" justifyContent="center" mt="19px" mb='30px'>
                <Link>
                    <Button w="90px" h="30px" bg="#303030" color="#ffffff" borderRadius="full" fontSize="10px" fontWeight="medium" mr="5px">가볼래요</Button>
                </Link>
                <Link href='/cutlet_went_rev1'>
                    <Button w="90px" h="30px" bg="#F6E229" border="1px solid #303030" borderRadius="full" fontSize="10px" fontWeight="medium" ml="5px">가봤어요</Button>
                </Link>
            </Flex>

            <Grid templateColumns="repeat(5,1fr)" h="50px">
                <GridItem display="flex" alignItems="center" justifyContent="center" borderBottom="2px solid #303030">
                    <Link href='/cutlet_info'>
                        <Text fontSize={f2} fontWeight="bold" align="center" >정보</Text>
                    </Link>
                </GridItem>
                <GridItem display="flex" alignItems="center" justifyContent="center" borderBottom="2px solid #F6E229">
                    <Link href='/cutlet_work'>
                        <Text fontSize={f2} fontWeight="medium" align="center">영업</Text>
                    </Link>
                </GridItem>
                <GridItem display="flex" alignItems="center" justifyContent="center"  borderBottom="2px solid #303030">
                    <Link href='/cutlet_menu'>
                        <Text fontSize={f2} fontWeight="medium" align="center">메뉴</Text>
                    </Link>
                </GridItem>
                <GridItem display="flex" alignItems="center" justifyContent="center"  borderBottom="2px solid #303030">
                    <Link href='/cutlet_photo'>
                        <Text fontSize={f2} fontWeight="medium" align="center">사진</Text>
                    </Link>
                </GridItem>
                <GridItem display="flex" alignItems="center" justifyContent="center"  borderBottom="2px solid #303030">
                    <Link href='/cutlet_review'>
                        <Text fontSize={f2} fontWeight="medium" align="center">후기</Text>
                    </Link>
                </GridItem>
            </Grid>

            <Flex m="10px" direction="column">
                <Text fontSize={f1} fontWeight="bold" mt="15px">영업시간</Text>
                <Flex direction="row">
                    <Flex direction="column">
                        <Text fontSize={f2} mt="8px">평일</Text>
                        <Text fontSize={f2} mt="8px">주말</Text>
                        <Text fontSize={f2} mt="8px">브레이크</Text>
                        <Text fontSize={f2} mt="8px">휴무일</Text>
                        <Text fontSize={f2} mt="8px">라스트오더</Text>
                    </Flex>
                    <Spacer/>
                    <Flex direction="column">
                        <Text fontSize={f2} mt="8px" align="end">11:00 ~ 22:00</Text>
                        <Text fontSize={f2} mt="8px" align="end">11:00 ~ 20:00</Text>
                        <Text fontSize={f2} mt="8px" align="end">15:00 ~ 17:00</Text>
                        <Text fontSize={f2} mt="8px" align="end">공휴일 영업, 명절 당일 휴무</Text>
                        <Text fontSize={f2} mt="8px" align="end">매장19:00 / 포장 21:00</Text>
                    </Flex>
                </Flex>

                <Flex direction="column" justifyContent="center" alignItems='center' w="vw" h="36px" mr="20px" ml='20px' mt='23px' bg="#F6F6F6">
                    <Text  fontSize='10px' borderRadius="4px" align='center' color="#565656">
                        코로나 19의 영향으로 식당 운영에 변동이 있을수 있습니다.
                    </Text>
                    <Text  fontSize='10px' borderRadius="4px" align='center' color="#565656" >
                        식당으로 문의 후 방문 부탁드립니다.
                    </Text>
                </Flex>

                <Text fontSize={f1} fontWeight="bold" mt="56px">상황 / 분위기</Text>
                <Wrap mt='16px'>
                    <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" mr="5px">점심식사</Tag>
                    <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" mr="5px">혼밥</Tag>
                    <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" mr="5px">직장인</Tag>
                    <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" mr="5px">데이트</Tag>
                    <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" mr="5px">연인</Tag>
                    <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" mr="5px">모던한</Tag>
                    <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" mr="5px">숨은맛집</Tag>
                </Wrap>

                <Text fontSize={f1} fontWeight="bold" mt="56px">주차</Text>
                <Text fontSize={f2} mt="8px">건물 내 주차장 ( 2시간 무료주차 )</Text>

                <Text fontSize={f1} fontWeight="bold" mt="53px" >단체 예약</Text>
                <Text fontSize={f2} mt="8px" mb="57px">홀 최대 66석, 룸 최대 32석 예약가능</Text>

            </Flex>

            {/* tapbar */}
            <Box borderTop="1px solid #E8E8E8" h="80px"  pl="7px" pr="7px" display="absolute" position="sticky" bottom="0px" bg="#ffffff">
                    <Flex direction="row" w="vw" mt="13px" >
                        <Spacer/>
                        <Flex direction="column" alignItems="center" justifyContent="center" ml="40px" mr="40px">
                            <Link href='/cutlet_info' w="24px" h="24px">
                                <Image src={review}/>
                            </Link>
                            <Text fontWeight="medium" fontSize="10px" align="center" >후기쓰기</Text>
                        </Flex>
                        <Spacer/>
                        <Flex direction="column" alignItems="center" justifyContent="center" ml="40px" mr="40px">
                            <Link href='/cutlet_info' w="24px" h="24px">
                                <Image src={call}/>
                            </Link>
                            <Text fontWeight="medium" fontSize="10px" align="center" >전화</Text>
                        </Flex>
                        <Spacer/>
                        <Flex direction="column" alignItems="center" justifyContent="center" ml="40px" mr="40px">
                            <Link href='/cutlet_info' w="24px" h="24px">
                                <Image src={location}/>
                            </Link>
                            <Text fontWeight="medium" fontSize="10px" align="center" >길찾기</Text>
                        </Flex>
                        <Spacer/>

                    </Flex>
                    <Flex justifyContent="center" mt="8px">
                        <Box w="135px" h="5px" opacity={26} bg="rgb(0, 0, 0, 0.26)" borderRadius="full"/>
                    </Flex>
                </Box>

        </div>
    )
}