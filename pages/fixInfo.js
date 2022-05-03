import { 
    Box,
    Flex,
    Text,
    Link,
    Textarea,
    Button,
    Spacer
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';

import btnX from './images/btnX.png';
import arrowL from './images/arrow-Left.png';
import circleY from './images/EllipseY.png';
import circleG from './images/EllipseG.png';
import checkB from './images/checkB.png';
import checkW from './images/checkW.png';

  export default function fix() {

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

    const [Check3, setCheck3] = useState(false);
    
    const checking3 =()=> {
        setCheck3( Check3 => !Check3 );
    }

    const [Check4, setCheck4] = useState(false);
    
    const checking4 =()=> {
        setCheck4( Check4 => !Check4 );
    }

    const [Check5, setCheck5] = useState(false);
    
    const checking5 =()=> {
        setCheck5( Check5 => !Check5 );
    }

    const [Check6, setCheck6] = useState(false);
    
    const checking6 =()=> {
        setCheck6( Check6 => !Check6 );
    }

    const [Check7, setCheck7] = useState(false);
    
    const checking7 =()=> {
        setCheck7( Check7 => !Check7 );
    }

    return(
        <div>
            <Flex w="vw" h="40px" justifyContent="center" alignItems="center" border="1px solid #DDDDDD">
                <Text fontSize={f1} fontWeight="bold" align="center">정보수정</Text>
                <Link href='/profile' position="absolute" left="11px" w="20px" h="20px">
                    <Image src={arrowL} />
                </Link>
            </Flex>

            <Flex direction="row-reverse" p="10px">
                <Text fontSize={f2} color="#A4A4A4" letterSpacing="-0.5px">중복선택 가능</Text>
            </Flex>

            <Flex direction="column" ml="10px" mr="10px">
                <Flex direction="row" alignItems="center" justifyContent="center" mb="20px">
                    <Text fontSize={f2}>매장이 문을 닫았어요</Text>
                    <Spacer/>
                    {Check1?
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking1()}>
                            <Flex width="20px" height="20px">
                                <Image src={circleY}  />
                            </Flex>
                            <Flex position="absolute" width="10px" height="8px">
                                <Image src={checkB}/>
                            </Flex>
                        </Flex>
                    :
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking1()}>
                            <Flex width="20px" height="20px">
                                <Image src={circleG}  />
                            </Flex>
                            <Flex position="absolute" width="10px" height="8px">
                                <Image src={checkW}/>
                            </Flex>
                        </Flex>
                    }
                </Flex>

                <Flex direction="row" alignItems="center" justifyContent="center" mb="20px">
                    <Text fontSize={f2}>주소가 틀려요</Text>
                    <Spacer/>
                    {Check2?
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking2()}>
                            <Flex width="20px" height="20px">
                                <Image src={circleY}  />
                            </Flex>
                            <Flex position="absolute" width="10px" height="8px">
                                <Image src={checkB}/>
                            </Flex>
                        </Flex>
                    :
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking2()}>
                            <Flex width="20px" height="20px">
                                <Image src={circleG}  />
                            </Flex>
                            <Flex position="absolute" width="10px" height="8px">
                                <Image src={checkW}/>
                            </Flex>
                        </Flex>
                    }
                </Flex>

                <Flex direction="row" alignItems="center" justifyContent="center" mb="20px">
                    <Text fontSize={f2}>전화번호가 틀려요</Text>
                    <Spacer/>
                    {Check3?
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking3()}>
                            <Flex width="20px" height="20px">
                                <Image src={circleY}  />
                            </Flex>
                            <Flex position="absolute" width="10px" height="8px">
                                <Image src={checkB}/>
                            </Flex>
                        </Flex>
                    :
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking3()}>
                            <Flex width="20px" height="20px">
                                <Image src={circleG}  />
                            </Flex>
                            <Flex position="absolute" width="10px" height="8px">
                                <Image src={checkW}/>
                            </Flex>
                        </Flex>
                    }
                </Flex>

                <Flex direction="row" alignItems="center" justifyContent="center" mb="20px">
                    <Text fontSize={f2}>운영시간 정보가 틀려요</Text>
                    <Spacer/>
                    {Check4?
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking4()}>
                            <Flex width="20px" height="20px">
                                <Image src={circleY}  />
                            </Flex>
                            <Flex position="absolute" width="10px" height="8px">
                                <Image src={checkB}/>
                            </Flex>
                        </Flex>
                    :
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking4()}>
                            <Flex width="20px" height="20px">
                                <Image src={circleG}  />
                            </Flex>
                            <Flex position="absolute" width="10px" height="8px">
                                <Image src={checkW}/>
                            </Flex>
                        </Flex>
                    }
                </Flex>

                <Flex direction="row" alignItems="center" justifyContent="center" mb="20px">
                    <Text fontSize={f2}>메뉴 정보가 틀려요</Text>
                    <Spacer/>
                    {Check5?
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking5()}>
                            <Flex width="20px" height="20px">
                                <Image src={circleY}  />
                            </Flex>
                            <Flex position="absolute" width="10px" height="8px">
                                <Image src={checkB}/>
                            </Flex>
                        </Flex>
                    :
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking5()}>
                            <Flex width="20px" height="20px">
                                <Image src={circleG}  />
                            </Flex>
                            <Flex position="absolute" width="10px" height="8px">
                                <Image src={checkW}/>
                            </Flex>
                        </Flex>
                    }
                </Flex>

                <Flex direction="row" alignItems="center" justifyContent="center" mb="20px">
                    <Text fontSize={f2}>가격 정보가 틀려요</Text>
                    <Spacer/>
                    {Check6?
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking6()}>
                            <Flex width="20px" height="20px">
                                <Image src={circleY}  />
                            </Flex>
                            <Flex position="absolute" width="10px" height="8px">
                                <Image src={checkB}/>
                            </Flex>
                        </Flex>
                    :
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking6()}>
                            <Flex width="20px" height="20px">
                                <Image src={circleG}  />
                            </Flex>
                            <Flex position="absolute" width="10px" height="8px">
                                <Image src={checkW}/>
                            </Flex>
                        </Flex>
                    }
                </Flex>

                <Flex direction="row" alignItems="center" justifyContent="center" mb="6px">
                    <Text fontSize={f2}>그 외 수정이 필요한 정보가 있어요</Text>
                    <Spacer/>
                    {Check7?
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking7()}>
                            <Flex width="20px" height="20px">
                                <Image src={circleY}  />
                            </Flex>
                            <Flex position="absolute" width="10px" height="8px">
                                <Image src={checkB}/>
                            </Flex>
                        </Flex>
                    :
                        <Flex alignItems='center' justifyContent="center" onClick={()=>checking7()}>
                            <Flex width="20px" height="20px">
                                <Image src={circleG}  />
                            </Flex>
                            <Flex position="absolute" width="10px" height="8px">
                                <Image src={checkW}/>
                            </Flex>
                        </Flex>
                    }
                </Flex>
            </Flex>

            <Textarea fontSize={f2} placeholder='더 상세한 정보를 알려주고 싶으신가요?' variant="unstyled" p="10px" m="10px" h="100px" border="1px solid #E1E1E1 " resize='none' overflow="visible"/>
            
            <Flex direction="column" justifyContent="center">
                <Text align="center" fontSize="10px" color="#A4A4A4">요청하신 정보는 내부 심사를 거쳐 처리되며,</Text>
                <Text align="center" fontSize="10px" color="#A4A4A4">처리 내용은 알림 메시지로 알려드립니다.</Text>
            </Flex>

            {/* btn */}

            {!Check1&&!Check2&&!Check3&&!Check4&&!Check5&&!Check6&&!Check7 ?
                <Flex direction="column" position="sticky" mr="10px"  w="100%" bottom="0"  mt="30px" pb="20px">
                    <Flex  w="100%" h="40px">
                        <Link href='/willgo' w="100%" mr="10px" ml="10px">
                            <Button w="100%" borderRadius="full" bg="#F6E229" color="#303030" fontWeight={700} fontSize={f1} isDisabled>보내기</Button>
                        </Link>
                    </Flex>
                </Flex>
            :
                <Flex direction="column" position="sticky" mr="10px"  w="100%" bottom="0"  mt="30px" pb="20px">
                    <Flex  w="100%" h="40px">
                        <Link href='/cutlet_info' w="100%" mr="10px" ml="10px">
                            <Button w="100%" borderRadius="full" bg="#F6E229" color="#303030" fontWeight={700} fontSize={f1} >보내기</Button>
                        </Link>
                    </Flex>
                </Flex>
            }
        </div>
    )
  } 