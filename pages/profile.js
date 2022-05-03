import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    Grid,
    GridItem,
    Select,
    Tag,
    Button,
  } from '@chakra-ui/react';
import React, { useState } from 'react';
import Image from "next/image";
import user from './images/user.png'; 
import arrowR from './images/arrowR.png';

import p1 from './images/photo/photoEx1.png';
import p2 from './images/photo/photoEx2.png';
import p3 from './images/photo/photoEx3.png';
import p4 from './images/photo/photoEx4.png';
import p5 from './images/photo/photoEx5.png';
import p6 from './images/photo/photoEx6.png';
import p7 from './images/photo/photoEx7.png';
import p8 from './images/photo/photoEx8.png';
import p9 from './images/photo/photoEx9.png';


import home from './images/navIcons/icon_home.png';
import homeA from './images/navIcons/icon_homeA.png';
import rec from './images/navIcons/icon_rec.png';
import recA from './images/navIcons/icon_recA.png';
import rev from './images/navIcons/icon_rev.png';
import revA from './images/navIcons/icon_revA.png';
import my from './images/navIcons/icon_my.png';
import myA from './images/navIcons/icon_myA.png';

export default function profile() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    return(
        <div>
            <Flex w="vw" h="140px" direction="column" alignItems="center" justifyContent="center" mb="10px">
                <Flex w="50px" h="50px">
                    <Image src={user}/>
                </Flex>
                <Text fontSize={f2} fontWeight="bold" mt="4px" mb="4px" letterSpacing="-1px" >유저닉네임</Text>
                <Link href='/profileSetting'>
                    <Button fontSize="10px" bg="#303030" color="#ffffff" h="20px" w="70px">프로필설정</Button>
                </Link>
            </Flex>

            <Flex h="92px" mb="40px">
                <Spacer/>
                    <Flex w="67px" direction="column" justifyContent="center">
                        <Link href='/willgo'>
                            <Text fontSize={f1} fontWeight="bold" align="center">999</Text>
                            <Text fontSize="10px" align="center" >가볼래요</Text>
                        </Link>
                    </Flex>
                    <Flex w="67px" direction="column" justifyContent="center">
                        <Link href='/went'>
                            <Text fontSize={f1} fontWeight="bold" align="center">999</Text>
                            <Text fontSize="10px" align="center" >가봤어요</Text>
                        </Link>
                    </Flex>
                    <Flex w="67px" direction="column" justifyContent="center">
                        <Link href='/review'>
                            <Text fontSize={f1} fontWeight="bold" align="center">999</Text>
                            <Text fontSize="10px" align="center" >후기</Text>
                        </Link> 
                    </Flex>
                    <Flex w="67px" direction="column" justifyContent="center">
                        <Link href='/like'>
                            <Text fontSize={f1} fontWeight="bold" align="center">999</Text>
                            <Text fontSize="10px" align="center" >좋아요</Text>
                        </Link>
                    </Flex>
                <Spacer/>
            </Flex>

            <Text fontSize="16px" ml="10px" mb="15px" fontWeight="bold">사진</Text>
            <Link href='/myPhoto'>
                <Box w="100%"   whiteSpace="nowrap" overflowX='auto' >
                    <Flex w="110px" h='110px' ml="10px"  display="inline-block" >
                        <Image src={p8} />
                    </Flex>
                    <Flex w="110px" h='110px' display="inline-block">
                        <Image src={p9} />
                    </Flex>
                    <Flex w="110px" h='110px'  display="inline-block">
                        <Image src={p3} />
                    </Flex>
                    <Flex w="110px" h='110px' display="inline-block">
                        <Image src={p4} />
                    </Flex>
                    <Flex w="110px" h='110px' display="inline-block">
                        <Image src={p5} />
                    </Flex>
                    <Flex w="110px" h='110px' display="inline-block">
                        <Image src={p6} />
                    </Flex>
                    <Flex w="110px" h='110px' display="inline-block">
                        <Image src={p7} />
                    </Flex>
                </Box>
            </Link>
            
            <Link href='/taste'>
                <Flex p="10px" h="50px" mt="30px">
                    <Text fontSize={f2} color="#333333">입맛 설정</Text>
                    <Spacer/>
                    <Flex w="7px" h="10px">
                        <Image src={arrowR}/>
                    </Flex>
                </Flex>
            </Link>

            <Link href='/setting'>
                <Flex p="10px" h="50px">
                    <Text fontSize={f2} color="#333333" >앱 설정</Text>
                    <Spacer/>
                    <Flex w="7px" h="10px">
                        <Image src={arrowR}/>
                    </Flex>
                </Flex>
            </Link>

            <Link href='/service'>
                <Flex p="10px" h="50px">
                    <Text fontSize={f2} color="#333333">고객센터</Text>
                    <Spacer/>
                    <Flex w="7px" h="10px">
                        <Image src={arrowR}/>
                    </Flex>
                </Flex>
            </Link>

            <Link href='/'>
                <Flex w="vw" mr="10px" ml="10px" mt="10px" h="50px" alignItems="center" justifyContent="center" color="#565656" border="2px solid #F6F6F6" borderRadius="10px">
                    <Text>로그아웃</Text>
                </Flex>
            </Link>

            <Link href='/withdrawal'>
                <Flex w="vw" mr="10px" ml="10px" mt="10px" h="50px" alignItems="center" justifyContent="center" color="#565656" border="2px solid #F6F6F6" borderRadius="10px">
                    <Text>회원탈퇴</Text>
                </Flex>
            </Link>


            {/* navBar */}
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
                                <Image src={rec}/>
                            </Link>
                            <Text fontWeight="medium" fontSize="10px" align="center" >추천</Text>
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
                                <Image src={myA}/>
                            </Link>
                            <Text fontWeight="bold" fontSize="10px" align="center" >마이</Text>
                        </Flex>
                        <Spacer/>

                    </Flex>
                </Box>
        </div>
    )
}