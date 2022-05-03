import { 
    Box,
    Flex,
    Text,
    Link,
    Input,
    Spacer,
    Grid,
    GridItem
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import React from 'react';

  import btnX from './images/btnX.png';
  import arrowL from './images/arrow-left.png';
  import starF from './images/starF.png';
  import starB from './images/starB.png';
  import arrowR from './images/arrowR.png';
  import p1 from './images/photo/photoEx1.png';
  import heart from './images/heart.png';
  import comment from './images/comment.png';
  import del from './images/del.png';


  export default function went() {

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    return(
        <div>
            <Flex w="vw" h="40px" justifyContent="center" alignItems="center" border="1px solid #DDDDDD">
                <Text fontSize={f1} fontWeight="bold" align="center">가봤어요</Text>
                <Link href='/profile' position="absolute" left="11px" w="20px" h="20px">
                    <Image src={arrowL} />
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
                        <Text fontSize={f2}>4.5 (10)</Text>
                    </Flex>
                    <Text fontSize={f2}>신천/잠실 · 한식코스</Text>
                </Flex>
                <Spacer/>
                <Flex w="30px" h="30px">
                    <Image src={del}/>
                </Flex>
            </Flex>

            <Grid templateColumns="repeat(3,1fr)" borderTop="1px solid #E8E8E8" borderBottom="1px solid #E8E8E8" h="50px" ml="10px" mr="10px" mb="10px" >
                <GridItem display="flex" flexDirection="row" alignItems="center" justifyContent='center'>
                    <Flex w="12px" h="12px" mr="7px">
                        <Image src={starB}/>
                    </Flex>
                    <Text fontSize={f2} color="#565656" >가볼래요 <text>(99)</text></Text>
                </GridItem>
                <GridItem display="flex" flexDirection="row" alignItems="center" justifyContent='center'>
                    <Flex w="12px" h="12px" mr="7px">
                        <Image src={heart}/>
                    </Flex>
                    <Text fontSize={f2} color="#565656">좋아요 <text>(99)</text></Text>
                </GridItem>
                <GridItem display="flex" flexDirection="row" alignItems="center" justifyContent='center'>
                    <Flex w="12px" h="12px" mr="7px">
                        <Image src={comment}/>
                    </Flex>
                    <Text fontSize={f2} color="#565656">댓글 <text>(99)</text></Text>
                </GridItem>
            </Grid>

            <Flex direction='row' p="10px" alignItems="center" h="126px" mt="10px">
                <Flex w="85px" h="85px" borderRadius="10px" overflow="hidden">
                    <Image src={p1} />
                </Flex>
                <Flex direction="column" ml='10px'>
                    <Text fontWeight="bold" fontSize={f2}>카츠단길</Text>
                    <Flex direction="row" mb='10px'>
                        <Flex w="13px" h="13px">
                            <Image src={del}/>
                        </Flex>
                        <Text fontSize={f2}>4.5 (10)</Text>
                    </Flex>
                    <Text fontSize={f2}>신천/잠실 · 한식코스</Text>
                </Flex>
                <Spacer/>
                <Flex w="30px" h="30px">
                    <Image src={del}/>
                </Flex>
            </Flex>

            <Grid templateColumns="repeat(3,1fr)" borderTop="1px solid #E8E8E8" borderBottom="1px solid #E8E8E8" h="62px" mt="20px">
                <GridItem display="flex" flexDirection="row" alignItems="center" justifyContent='center'>
                    <Flex w="12px" h="12px" mr="7px">
                        <Image src={starB}/>
                    </Flex>
                    <Text fontSize={f2} color="#565656">가볼래요<text>(99)</text></Text>
                </GridItem>
                <GridItem display="flex" flexDirection="row" alignItems="center" justifyContent='center'>
                    <Flex w="12px" h="12px" mr="7px">
                        <Image src={heart}/>
                    </Flex>
                    <Text fontSize={f2} color="#565656">좋아요<text>(99)</text></Text>
                </GridItem>
                <GridItem display="flex" flexDirection="row" alignItems="center" justifyContent='center'>
                    <Flex w="12px" h="12px" mr="7px">
                        <Image src={comment}/>
                    </Flex>
                    <Text fontSize={f2} color="#565656">댓글<text>(99)</text></Text>
                </GridItem>
            </Grid>

        </div>
    )
  }