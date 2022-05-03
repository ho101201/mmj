import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    Button,
  } from '@chakra-ui/react';
import React, { useState } from 'react';
import Image from "next/image";
import user from './images/user.png';  
import arrowL from './images/arrow-left.png';
import circleY from './images/EllipseY.png';
import circleG from './images/EllipseG.png';
import checkB from './images/checkB.png';
import checkW from './images/checkW.png';

export default function withdrawal() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    const [Check1, setCheck1] = useState(false);

    const checking1 =()=> {
        setCheck1( Check1 => !Check1);
    }

    const [Check2, setCheck2] = useState(false);
    
    const checking2 =()=> {
        setCheck2( Check2 => !Check2 );
    }

    return(
        <div>
            <Flex w="vw" h="40px" justifyContent="center" alignItems="center" border="1px solid #DDDDDD">
                <Text fontSize={f1} fontWeight="bold" align="center">회원탈퇴</Text>
                <Link href='/profile' position="absolute" left="11px" w="20px" h="20px">
                    <Image src={arrowL} />
                </Link>
            </Flex> 

            <Flex w="vw" h="120px" direction="column" alignItems="center" justifyContent="center" mb="10px">
                <Flex w="50px" h="50px">
                    <Image src={user}/>
                </Flex>
                <Text fontSize={f2} fontWeight="bold" mt="4px" mb="4px" letterSpacing="-1px" >유저닉네임</Text>
            </Flex>

            <Flex h="92px">
                <Spacer/>
                    <Flex w="67px" direction="column" justifyContent="center">
                        <Link href='/willgo'>
                            <Text fontSize={f1} fontWeight="bold" align="center">999</Text>
                            <Text fontSize="10px" align="center" >작성후기</Text>
                        </Link>
                    </Flex>
                    <Flex w="67px" direction="column" justifyContent="center">
                        <Link href='/went'>
                            <Text fontSize={f1} fontWeight="bold" align="center">999</Text>
                            <Text fontSize="10px" align="center" >좋아요</Text>
                        </Link>
                    </Flex>
                    <Flex w="67px" direction="column" justifyContent="center">
                        <Link href='/review'>
                            <Text fontSize={f1} fontWeight="bold" align="center">999</Text>
                            <Text fontSize="10px" align="center" >정보수정</Text>
                        </Link> 
                    </Flex>
                    <Flex w="67px" direction="column" justifyContent="center">
                        <Link href='/like'>
                            <Text fontSize={f1} fontWeight="bold" align="center">완료</Text>
                            <Text fontSize="10px" align="center" >입맛테스트</Text>
                        </Link>
                    </Flex>
                <Spacer/>
            </Flex>

            <Flex justifyContent="center">
                <Text bg="#F6E229" fontSize={f2} fontWeight="bold" mt="50px" mb="10px">
                    회원 탈퇴 전 아래 내용을 꼭! 확인해 주세요!
                </Text>
            </Flex>

            <Flex direction="row" m="10px" alignItems="flex-start" >
                {Check1?
                    <Flex alignItems='center' justifyContent="center" mr="10px" mt="4px" onClick={()=>checking1()}>
                        <Flex width="20px" height="20px">
                            <Image src={circleY}  />
                        </Flex>
                        <Flex position="absolute" width="10px" height="8px">
                            <Image src={checkB}/>
                        </Flex>
                    </Flex>
                :
                    <Flex alignItems='center' justifyContent="center" mr="10px" mt="4px" onClick={()=>checking1()}>
                        <Flex width="20px" height="20px">
                            <Image src={circleG}  />
                        </Flex>
                        <Flex position="absolute" width="10px" height="8px">
                            <Image src={checkW}/>
                        </Flex>
                    </Flex>
                }
                <Flex direction="column">
                    <Text fontSize={f2}>
                        탈퇴 후 재가입하더라도 탈퇴 이전의 회원 정보 및 서비스 이용 기록이 모두 삭제되며, 삭제된 데이터는 복구되지 않습니다. 다만 법령에 의해 보관해야 하는 경우 또는 회사 내부 정책에 의하여 보관해야 하는 정보는 탈퇴 후에도 일정 기간 보관됩니다. 
                    </Text>
                    <Text color="#A4A4A4" fontSize="10px" mt="10px">- 자세한 사항을 개인정보처리방침에서 확인하실 수 있습니다.</Text>
                </Flex>
            </Flex>

            <Flex direction="row" m="10px" alignItems="flex-start" mt="20px">
                {Check2?
                    <Flex alignItems='center' justifyContent="center" mr="10px" mt="4px" onClick={()=>checking2()}>
                        <Flex width="20px" height="20px">
                            <Image src={circleY}  />
                        </Flex>
                        <Flex position="absolute" width="10px" height="8px">
                            <Image src={checkB}/>
                        </Flex>
                    </Flex>
                :
                    <Flex alignItems='center' justifyContent="center" mr="10px" mt="4px" onClick={()=>checking2()}>
                        <Flex width="20px" height="20px">
                            <Image src={circleG}  />
                        </Flex>
                        <Flex position="absolute" width="10px" height="8px">
                            <Image src={checkW}/>
                        </Flex>
                    </Flex>
                }
                <Text fontSize={f2}>
                    탈퇴하더라도 “뭐먹지＂서비스에 기록한 활동 내역(후기,댓글,좋아요) 등의 게시물은 삭제되지 않습니다. 회원을 탈퇴하면, 개인정보가 삭제되어 게시물 수정 및 삭제가 불가하니 노출을 원하지 않으면 탈퇴 전 삭제하시기 바랍니다.
                </Text>
            </Flex>

            {Check1 && Check2?
                <Flex direction="column" position="sticky" mr="10px"  w="100%" bottom="0"  mt="30px" pb="20px" is>
                    <Flex  w="100%" h="40px">
                        <Link href='/index' w="100%" mr="10px" ml="10px">
                            <Button w="100%" borderRadius="full" bg="#F6E229" color="#303030" fontWeight={700} fontSize={f1}>탈퇴하기</Button>
                        </Link>
                    </Flex>
                </Flex>
            :
                <Flex direction="column" position="sticky" mr="10px"  w="100%" bottom="0"  mt="30px" pb="20px" is>
                    <Flex  w="100%" h="40px">
                        <Link href='#' w="100%" mr="10px" ml="10px">
                            <Button w="100%" borderRadius="full" bg="#F6E229" color="#303030" fontWeight={700} fontSize={f1} isDisabled>탈퇴하기</Button>
                        </Link>
                    </Flex>
                </Flex>
            }
            
        </div>
    )
}