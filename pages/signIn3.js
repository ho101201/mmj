import { 
    Box,
    Flex,
    Text,
    Heading,
    VStack,
    Img,
    Spacer,
    Link,
    Grid,
    GridItem,
    Input,
    Icon,
    Button,
    InputGroup,
    HStack,
    useMediaQuery,
    background,
  } from '@chakra-ui/react';
import React, { useState } from 'react';
import Image from "next/image";
import arrowL from './images/arrowL.svg';
import circleY from './images/EllipseY.png';
import circleG from './images/EllipseG.png';
import checkB from './images/checkB.png';
import checkW from './images/checkW.png';

  
export default function SignIn2() {

    const [heightIssue] = useMediaQuery(
        "(min-height: 305px)"
      );

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    const [Check1, setCheck1] = useState(false);
    
    const checking1 =()=> {
        setCheck1( Check1 => !Check1);
        setCheck2( Check2 => !Check2 );
        setCheck3( Check3 => !Check3 );
    }

    const [Check2, setCheck2] = useState(false);
    
    const checking2 =()=> {
        setCheck2( Check2 => !Check2 );
    }

    const [Check3, setCheck3] = useState(false);
    
    const checking3 =()=> {
        setCheck3( Check3 => !Check3 );
    }

    const [Check4, setCheck4] = useState(false);
    
    const checking4 =()=> {
        setCheck4( Check4 => !Check4 );
        setCheck5( Check5 => !Check5 );
        setCheck6( Check6 => !Check6 );
    }

    const [Check5, setCheck5] = useState(false);
    
    const checking5 =()=> {
        setCheck5( Check5 => !Check5 );
    }

    const [Check6, setCheck6] = useState(false);
    
    const checking6 =()=> {
        setCheck6( Check6 => !Check6 );
    }

    


    return(
        <div>
            <Flex direction="column" h="100vh">

                {/* header */}
                <Flex w="vw" h="40px" alignItems="center" justifyContent="center" borderBottom="1px solid #DDDDDD">
                    <Flex ml="18px" alignItems="center">
                        <Link href='/signIn2' mt="4px">
                            <Image src={arrowL}/>
                        </Link>
                    </Flex>
                    <Spacer/>
                    <Text fontWeight="extrabold" fontSize={f1} position="absolute">
                        회원가입
                    </Text>
                </Flex>

                {/* container1 */}
                <Flex direction="column" alignItems="center" justifyContent="center" h="138px" pr="20px" pl="20px">
                    <Spacer/>

                    <Text fontSize={f1} fontWeight="bold" letterSpacing="-2px" mb="1px">
                        약관동의
                    </Text>
                    <Text fontSize={f2} fontWeight="normal" letterSpacing="-1.5px" >
                        고객님께서는 동의를 거부할 수 있습니다.
                    </Text>
                    <Text fontSize={f2} fontWeight="normal" letterSpacing="-1.5px" mb="17px">
                    단, 필수항목 동의 거부 시에는 회원가입이 제한됩니다.
                    </Text>
                    <Box w="100%" h='2px' mr="20px" ml="20px" bg='#303030' />
                </Flex>

                {/* container2 */}
                <Flex direction="column" pr="20px" pl="20px">
                    <Flex alignItems="center" mt="26px">

                    {Check1?
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking1()}>
                            <Box h="20px">
                                <Image src={circleY} width="20px" height="20px" />
                            </Box>
                            <Box position="absolute" mb="3px">
                                <Image src={checkB} width="10px" height="8px" />
                            </Box>
                        </Flex>
                    :
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking1()}>
                            <Box h="20px">
                                <Image src={circleG} width="20px" height="20px" />
                            </Box>
                            <Box position="absolute" mb="3px">
                                <Image src={checkW} width="10px" height="8px" />
                            </Box>
                        </Flex>
                    }

                        <Text fontSize={f3} fontWeight={600} ml="9px">약관 전체 동의</Text>
                    </Flex>

                    <Flex alignItems="center" mt="26px">
                    {Check2?
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking2()}>
                            <Box h="20px">
                                <Image src={circleY} width="20px" height="20px" />
                            </Box>
                            <Box position="absolute" mb="3px">
                                <Image src={checkB} width="10px" height="8px" />
                            </Box>
                        </Flex>
                    :
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking2()}>
                            <Box h="20px">
                                <Image src={circleG} width="20px" height="20px" />
                            </Box>
                            <Box position="absolute" mb="3px">
                                <Image src={checkW} width="10px" height="8px" />
                            </Box>
                        </Flex>
                    }

                        <Text fontSize={f3} fontWeight={400} ml="9px">이용약관에 동의 합니다 (필수)</Text>
                        <Spacer/>
                        <Button fontSize="10px" fontWeight={400} border="1px solid #303030" borderRadius="4px" bg="#ffffff" w="55px" h="20px">내용보기</Button>
                    </Flex>

                    <Flex alignItems="center" mt="12px">
                    {Check3?
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking3()}>
                            <Box h="20px">
                                <Image src={circleY} width="20px" height="20px" />
                            </Box>
                            <Box position="absolute" mb="3px">
                                <Image src={checkB} width="10px" height="8px" />
                            </Box>
                        </Flex>
                    :
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking3()}>
                            <Box h="20px">
                                <Image src={circleG} width="20px" height="20px" />
                            </Box>
                            <Box position="absolute" mb="3px">
                                <Image src={checkW} width="10px" height="8px" />
                            </Box>
                        </Flex>
                    }

                        <Text fontSize={f3} fontWeight={400} ml="9px">개인정보 수집 및 이용에 동의합니다 (필수)</Text>
                        <Spacer/>
                        <Button fontSize="10px" fontWeight={400} border="1px solid #303030" borderRadius="4px" bg="#ffffff" w="55px" h="20px">내용보기</Button>
                    </Flex>
                    
                    <Text fontSize={f3} fontWeight="bold" mt="40px">마케팅 정보 수신 (선택)</Text>
                    <Flex alignItems="center" mt="27px">
                    {Check4?
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking4()}>
                            <Box h="20px">
                                <Image src={circleY} width="20px" height="20px" />
                            </Box>
                            <Box position="absolute" mb="3px">
                                <Image src={checkB} width="10px" height="8px" />
                            </Box>
                        </Flex>
                    :
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking4()}>
                            <Box h="20px">
                                <Image src={circleG} width="20px" height="20px" />
                            </Box>
                            <Box position="absolute" mb="3px">
                                <Image src={checkW} width="10px" height="8px" />
                            </Box>
                        </Flex>
                    }
                        <Text fontSize={f3} fontWeight={400} ml="9px">전체 동의합니다</Text>

                        <Spacer/>

                    {Check5?
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking5()}>
                            <Box h="20px">
                                <Image src={circleY} width="20px" height="20px" />
                            </Box>
                            <Box position="absolute" mb="3px">
                                <Image src={checkB} width="10px" height="8px" />
                            </Box>
                        </Flex>
                    :
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking5()}>
                            <Box h="20px">
                                <Image src={circleG} width="20px" height="20px" />
                            </Box>
                            <Box position="absolute" mb="3px">
                                <Image src={checkW} width="10px" height="8px" />
                            </Box>
                        </Flex>
                    }
                        <Text fontSize={f3} fontWeight={400} ml="9px" mr="25px">SNS</Text>

                    {Check6?
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking6()}>
                            <Box h="20px">
                                <Image src={circleY} width="20px" height="20px" />
                            </Box>
                            <Box position="absolute" mb="3px">
                                <Image src={checkB} width="10px" height="8px" />
                            </Box>
                        </Flex>
                    :
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking6()}>
                            <Box h="20px">
                                <Image src={circleG} width="20px" height="20px" />
                            </Box>
                            <Box position="absolute" mb="3px">
                                <Image src={checkW} width="10px" height="8px" />
                            </Box>
                        </Flex>
                    }
                        <Text fontSize={f3} fontWeight={400} ml="9px" mr="16px">Email</Text>
                    </Flex>
                    <Text color="#A4A4A4" fontSize="10px" mt="11px" ml="14px">-App Push 수신 동의 상태는 앱 내 설정메뉴에서 별도로 변경할 수 있습니다</Text>
                    

                </Flex>
                
                <Spacer/>
                {/* button */}
                <Box p="10px" w="100vw" h="40px" mb="30px" position="sticky">
                    <Link w="100%" href='/home' >
                        <Button w="100%" borderRadius="full" bg="#303030" fontSize={f1} fontWeight="bold" color="#ffffff">
                            동의하기
                        </Button>
                    </Link>
                </Box>
            </Flex>

        </div>
    )
}