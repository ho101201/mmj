import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    Button,
    Grid,
    GridItem, 
    Tag
  } from '@chakra-ui/react';
  // import { Link } from 'next/link';
  import Image from 'next/image';
  import { 
    useState, 
} from 'react';
 
import arrowL from './images/arrowL.png';
import Export from './images/export.png';
import gallery from './images/gallery.png';
import starF from './images/starF.png';
import user from './images/user.png';
import foodExample from './images/photo/foodExample.png';


import p1 from './images/photo/photoEx1.png';
import p2 from './images/photo/photoEx2.png';
import p3 from './images/photo/photoEx3.png';
import p4 from './images/photo/photoEx4.png';
import p5 from './images/photo/photoEx5.png';
import p6 from './images/photo/photoEx6.png';
import p7 from './images/photo/photoEx7.png';
import p8 from './images/photo/photoEx8.png';
import p9 from './images/photo/photoEx9.png';

import review from './images/navIcons/icon_rev.png';
import location from './images/navIcons/icon_loc.png';
import call from './images/navIcons/icon_call.png';

export default function rRev() {

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
                <GridItem display="flex" alignItems="center" justifyContent="center" borderBottom="2px solid #303030">
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
                <GridItem display="flex" alignItems="center" justifyContent="center"  borderBottom="2px solid #F6E229">
                    <Link href='/cutlet_review'>
                        <Text fontSize={f2} fontWeight="medium" align="center">후기</Text>
                    </Link>
                </GridItem>
            </Grid>

            <Flex m="10px" direction="column">
                <Text fontSize={f1} fontWeight="bold" mt="15px">후기 (100)</Text>

                <Flex direction="column" w="vw" mt="16px">
                    <Flex direction="row">
                        <Flex w="50px" h="50px" >
                            <Image src={user}/>
                        </Flex>
                        <Flex ml="12px" direction="column" justifyContent="center">
                            <Text fontSize={f2} >유저닉네임</Text>
                            <Text fontSize="10px" color="#565656">2022.03.01  1번째 방문</Text>
                        </Flex>
                        <Spacer/>
                        <Flex direction="row" alignItems="center">
                            <Flex w="13px" h="13px" mr="5px">
                                <Image src={starF}/>
                            </Flex>
                            <Text fontWeight="bold" fontSize={f2}>4.5</Text>
                        </Flex>
                    </Flex>
                    <Flex mt="12px">
                        <Image src={foodExample}/>
                    </Flex>

                    <Text id='userReview1' mt="12px">
                        후기텍스트후기텍스트후기텍스트후기텍스트후기텍스트
                        후기텍스트후기텍스트후기텍스트후기텍스트후기텍스트
                        후기텍스트후기텍스트후기텍스트후기텍스트후기텍스트
                        후기텍스트
                    </Text>

                    <Flex mt="41px">
                        <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" mr="5px">점심식사</Tag>
                        <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" mr="5px">후기태그</Tag>
                    </Flex>
                </Flex>

                <Box w="vw" bg="#F6F6F6" h="2px" mt="30px" mb="20px"/>

                <Flex direction="column" w="vw" mt="16px">
                    <Flex direction="row">
                        <Flex w="50px" h="50px" >
                            <Image src={user}/>
                        </Flex>
                        <Flex ml="12px" direction="column" justifyContent="center">
                            <Text fontSize={f2} >유저닉네임</Text>
                            <Text fontSize="10px" color="#565656">2022.03.01  1번째 방문</Text>
                        </Flex>
                        <Spacer/>
                        <Flex direction="row" alignItems="center">
                            <Flex w="13px" h="13px" mr="5px">
                                <Image src={starF}/>
                            </Flex>
                            <Text fontWeight="bold" fontSize={f2}>4.5</Text>
                        </Flex>
                    </Flex>

                    <Text id='userReview1' mt="12px">
                        후기텍스트후기텍스트후기텍스트후기텍스트후기텍스트
                        후기텍스트후기텍스트후기텍스트후기텍스트후기텍스트
                        후기텍스트후기텍스트후기텍스트후기텍스트후기텍스트
                        후기텍스트
                    </Text>

                    <Flex mt="41px">
                        <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" mr="5px">점심식사</Tag>
                        <Tag border="1px solid #E1E1E1" color="#A4A4A4" bg="#ffffff" mr="5px">후기태그</Tag>
                    </Flex>
                </Flex>

                <Box w="vw" bg="#F6F6F6" h="2px" mt="30px" mb="20px"/>

                <Text fontSize={f1} fontWeight="bold" mt="15px">방문자 사진 (100)</Text>
                
                <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(2, 1fr)" mt='13px' mb="46px" gap={1} >
                    <GridItem>
                        <Image src={p9}/>
                    </GridItem>
                    <GridItem>
                        <Image src={p4}/>
                    </GridItem>
                    <GridItem>
                        <Image src={p8}/>
                    </GridItem>
                    <GridItem mt='-5px'>
                        <Image src={p7}/>
                    </GridItem>
                    <GridItem mt='-5px'>
                        <Image src={p3}/>
                    </GridItem>
                    <GridItem mt='-5px'>
                        <Image src={p5}/>
                    </GridItem>
                    <GridItem mt='-10px'>
                        <Image src={p6}/>
                    </GridItem>
                    <GridItem mt='-10px'>
                        <Image src={p2}/>
                    </GridItem>
                    <GridItem mt='-10px'>
                        <Image src={p1}/>
                    </GridItem>
                </Grid>
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