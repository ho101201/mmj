import { 
    Box,
    Flex,
    Text,
    Link,
    Button,
    Input,
    Spacer,
    Textarea,
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import React, { useState } from 'react';

  import btnX from './images/btnX.png';
  import arrowL from './images/arrow-left.png';
  import camera from './images/addphoto3.png';
  import starF from './images/starF.png';
  import starB from './images/starB2.png';
  import arrowR from './images/arrowR.png';
  import p1 from './images/photo/photoEx1.png';
  import heart from './images/heart.png';
  import comment from './images/comment.png';
  import del from './images/del.png';


  export default function writingRev() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    const [Check1, setCheck1] = useState(false);
    const [Check2, setCheck2] = useState(false);
    const [Check3, setCheck3] = useState(false);
    const [Check4, setCheck4] = useState(false);
    const [Check5, setCheck5] = useState(false);
    
    const checking1 =()=> {
        setCheck1( 
            Check1 => true,
            Check2 => false,
            Check3 => false,
            Check4 => false,
            Check5 => false);
    }
    
    const checking2 =()=> {
        setCheck2( 
            Check1 => true,
            Check2 => true,
            Check3 => false,
            Check4 => false,
            Check5 => false );
    }
    
    const checking3 =()=> {
        setCheck3( 
            Check1 => true,
            Check2 => true,
            Check3 => true,
            Check4 => false,
            Check5 => false  );
    }

    const checking4 =()=> {
        setCheck4( 
            Check1 => true,
            Check2 => true,
            Check3 => true,
            Check4 => true,
            Check5 => false );
    }
    
    const checking5 =()=> {
        setCheck5( 
            Check1 => true,
            Check2 => true,
            Check3 => true,
            Check4 => true,
            Check5 => true );
    }

    return(
        <div>
            <Flex w="vw" h="40px" justifyContent="center" alignItems="center" border="1px solid #DDDDDD">
                <Text fontSize={f1} fontWeight="bold" align="center">후기 쓰기</Text>
                <Link href='/cutlet_info' position="absolute" right="11px" w="20px" h="20px">
                    <Image src={btnX} />
                </Link>
            </Flex>

            <Flex direction='row' p="10px" alignItems="center" h="126px">
                <Flex w="85px" h="85px" borderRadius="10px" overflow="hidden">
                    <Image src={p1} />
                </Flex>
                <Flex direction="column" ml='10px'>
                    <Text fontWeight="bold" fontSize={f2}>카츠단길</Text>
                    <Flex direction="row" mb='10px'>
                        <Flex w="13px" h="13px">
                            <Image src={starF}/>
                        </Flex>
                        <Text fontSize={f2} fontWeight="bold">4.5 (10)</Text>
                    </Flex>
                    <Text fontSize={f2}>신천/잠실 · 한식코스</Text>
                </Flex>
                <Spacer/>
            </Flex> 

            <Text fontSize={f2} fontWeight="bold" align="center" mb="5px" mt="36px">매장이 어떤점이 좋았나요?</Text>

            <Flex direction="row" alignItems="center" justifyContent="center" mb="25px">
                <Flex w="30px" h="30px" onClick={()=>checking1()} m="5px">
                    {Check1?
                        <Image src={starF}/>
                    :
                        <Image src={starB}/>
                    }
                </Flex>
                <Flex w="30px" h="30px" onClick={()=>checking2()} m="5px">
                    {Check2?
                        <Image src={starF}/>
                    :
                        <Image src={starB}/>
                    }
                </Flex>
                <Flex w="30px" h="30px" onClick={()=>checking3()} m="5px">
                    {Check3?
                        <Image src={starF}/>
                    :
                        <Image src={starB}/>
                    }
                </Flex>
                <Flex w="30px" h="30px" onClick={()=>checking4()} m="5px">
                    {Check4?
                        <Image src={starF}/>
                    :
                        <Image src={starB}/>
                    }
                </Flex>
                <Flex w="30px" h="30px" onClick={()=>checking5()} >
                    {Check5?
                        <Image src={starF}/>
                    :
                        <Image src={starB}/>
                    }
                </Flex>

            </Flex>
            
            <Flex pr="10px" pl="10px" h="175px">
                <Textarea fontSize={f2} placeholder='최소 5자 이상 입력해주세요. (ex. 이 메뉴가 제일 맛있었어요, 친절해요, 깔끔해요.주차가 편리해요 등)' 
                variant="unstyled"  border="1px solid #E1E1E1 " p="10px" resize='none' overflow="visible"/>
            </Flex>
            <Flex direction="row-reverse" pr="10px">
                <Text fontSize={f2} color="#A4A4A4">0/3,000</Text>
            </Flex>

            <Flex direction="row" p="10px" mt='24px'>
                <Flex w="60px" h="60px">
                    <Image src={camera}/>
                </Flex>
                <Flex direction="column" ml="10px">
                    <Text fontSize={f3} fontWeight="bold" mb="5px">사진/동영상 첨부하기</Text>
                    <Text fontSize="10px" color="#A4A4A4">상품과 무관한 사진/동영상을 첨부한 리뷰는 통보없이</Text>
                    <Text fontSize="10px" color="#A4A4A4">삭제될 수 있습니다.</Text>
                </Flex>
            </Flex>

            <Link href='/tagInput'>
                <Flex p="10px" h="50px" mt="30px" mb="50px">
                    <Text fontSize={f2} color="#333333" >#태그 입력</Text>
                    <Spacer/>
                    <Flex w="7px" h="10px">
                        <Image src={arrowR}/>
                    </Flex>
                </Flex>
            </Link>

            <Flex direction="column" position="sticky" mr="10px"  w="100%" bottom="0"  mt="30px" pb="20px">
                <Flex  w="100%" h="40px">
                    <Link href='/cutlet_info' w="100%" mr="10px" ml="10px">
                        <Button w="100%" borderRadius="full" bg="#F6E229" color="#303030" fontWeight={700} fontSize={f1} >등록</Button>
                    </Link>
                </Flex>
            </Flex>


        </div>
    )
  }