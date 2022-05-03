import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    HStack,
    Wrap,
    Tag,
    useRadio,
    useRadioGroup,
    WrapItem
  } from '@chakra-ui/react';
  // import { Link } from 'next/link';
  import Image from 'next/image';
  import { 
    useState, useRef
} from 'react';
  
  import styled from "styled-components";
  
  import bell from './images/Bell_Icon.png';
  import search from './images/Search_Icons.png';
  import info from './images/info.png';
  import arrowB from './images/arrowB.png';
  import starF from './images/starF.png';

  import p1 from './images/photo/photoEx1.png';

//   footer
  import home from './images/navIcons/icon_home.png';
  import homeA from './images/navIcons/icon_homeA.png';
  import rec from './images/navIcons/icon_rec.png';
  import recA from './images/navIcons/icon_recA.png';
  import rev from './images/navIcons/icon_rev.png';
  import revA from './images/navIcons/icon_revA.png';
  import my from './images/navIcons/icon_my.png';
  import myA from './images/navIcons/icon_myA.png';
  
  function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as='label'>
        <input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          border="1px solid #E1E1E1"
          borderRadius='full'
          fontSize="10px"
          fontWeight={500}

          _checked={{
            bg: '#F6E229',
            border: "1px solid #303030"
          }}
          _focus={{
            
          }}
          px={2.5}
          py={1}
        >
          {props.children}
        </Box>
      </Box>
    )
  }


  export default function category () {
  
    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    const styles = {
        control: base => ({
          ...base,
          fontFamily: "Noto Sans KR"
        }),
        menu: base => ({
          ...base,
          fontFamily: "Noto Sans KR"
        })
      };

    const SelectBoxWrapper = styled.div`
	display: flex;
`;

    const IconSVG = styled.svg`
	margin-left: -28px;
	align-self: center;
	width: 24px;
	height: 24px;  
`;

    const options = ['전체', '한식', '일식','중식', '양식', '분식', '퓨전', '기타' ]

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'catalog',
        defaultValue: '전체',
        onChange: console.log,
    })

    const group = getRootProps()

  
    return (
      
        <div>
                <Flex h="40px"  alignItems="center" borderBottom="1px solid #DDDDDD" position="sticky">
                    {/* <SelectBoxWrapper >
                        <Select variant="unstyled" style={styles} placeholder="송파구 문정동" letterSpacing='-1px' ml="10px" fontSize={f2} iconSize='20px' w="115px" >
                        </Select>
                    </SelectBoxWrapper> */}
                    <Link href='/setLocation' display="flex" flexDirection="row">
                        <Text id='location' fontSize={f2} fontWeight="bold" ml="10px" mr="7px" >송파구 문정동</Text>
                        <Box w="12px" h="20px" position="absolute" left="104px" top="4px" >
                            <Image src={arrowB} />
                        </Box>
                    </Link>
                    <Spacer/>
                    <Link href='/search'>
                        <Box w="20px" h="20px" mr="22px">
                            <Image src={search} />
                        </Box>
                    </Link>
                    <Link href='/alarm'>
                        <Box w="20px" h="20px" mr="22px">
                            <Image src={bell} />
                        </Box>
                    </Link>
                </Flex>

                {/* hide or fade out */}
                    <Box position="absolute" w="214px" h="28px" top="29px" left="11px">
                        <Image src={info} />
                    </Box>

                <HStack {...group} mt="19px" mb="15px" ml="10px" overflowX="hidden">
                    {options.map((value) => {
                        const radio = getRadioProps({ value })
                        return (
                        <RadioCard key={value} {...radio}>
                            {value}
                        </RadioCard>
                        )
                    })}
                </HStack>

                <Wrap ml="10px" mr="10px" spacing="10px" justify="center">
                    <WrapItem>
                        <Flex direction="column">
                            <Flex w="165px" h="165px" borderRadius="10px" overflow="hidden">
                                <Image src={p1}/>
                            </Flex>
                            <Flex bg="#F6E229" border="1px solid #FFF061" w="46px" h="20px" borderRadius="4px" m="10px" justifyContent="center" alignItems="center" position="absolute" >
                                <Text fontSize="10px" align="center" fontWeight="bold" letterSpacing="-0.5px">
                                    영업중
                                </Text>
                            </Flex>
                            <Flex direction="row" alignItems="center" mt="5px">
                                <Text fontWeight="bold" fontSize={f1}>카츠단식</Text>
                                <Spacer/>
                                <Text fontSize={f3} color="#565656">126m</Text>
                            </Flex>
                            <Flex direction="row">
                                <Tag border="1px solid #E1E1E1" bg='white' color="#A4A4A4" fontSize="10px" mr="5px">일식</Tag>
                                <Tag border="1px solid #E1E1E1" bg='white' color="#A4A4A4" fontSize="10px">치즈돈까스</Tag>
                            </Flex>
                            <Flex mt="10px">
                                <Flex w="12px" h="12px" mr="5px">
                                    <Image src={starF}/>
                                </Flex>
                                <Text fontSize="10px" color="#565656">4.5 (10)</Text>
                            </Flex>
                        </Flex>
                    </WrapItem>

                    <WrapItem>
                        <Flex direction="column">
                            <Flex w="165px" h="165px" borderRadius="10px" overflow="hidden">
                                <Image src={p1}/>
                            </Flex>
                            <Flex bg="#333333" border="1px solid #FFF061" w="55px" h="20px" borderRadius="4px" m="10px" justifyContent="center" alignItems="center" position="absolute" >
                                <Text color="#F6E229" fontSize="10px" align="center" fontWeight="bold" letterSpacing="-0.5px">
                                    브레이크
                                </Text>
                            </Flex>
                            <Flex direction="row" alignItems="center" mt="5px">
                                <Text fontWeight="bold" fontSize={f1}>카츠단식</Text>
                                <Spacer/>
                                <Text fontSize={f3} color="#565656">126m</Text>
                            </Flex>
                            <Flex direction="row">
                                <Tag border="1px solid #E1E1E1" bg='white' color="#A4A4A4" fontSize="10px" mr="5px">일식</Tag>
                                <Tag border="1px solid #E1E1E1" bg='white' color="#A4A4A4" fontSize="10px">치즈돈까스</Tag>
                            </Flex>
                            <Flex mt="10px">
                                <Flex w="12px" h="12px" mr="5px">
                                    <Image src={starF}/>
                                </Flex>
                                <Text fontSize="10px" color="#565656">4.5 (10)</Text>
                            </Flex>
                        </Flex>
                    </WrapItem>

                    <WrapItem>
                        <Flex direction="column">
                            <Flex w="165px" h="165px" borderRadius="10px" overflow="hidden">
                                <Image src={p1}/>
                            </Flex>
                            <Flex bg="#333333" border="1px solid #FFF061" w="40px" h="20px" borderRadius="4px" m="10px" justifyContent="center" alignItems="center" position="absolute" >
                                <Text color="#F6E229" fontSize="10px" align="center" fontWeight="bold" letterSpacing="-0.5px">
                                    휴무
                                </Text>
                            </Flex>
                            <Flex direction="row" alignItems="center" mt="5px">
                                <Text fontWeight="bold" fontSize={f1}>카츠단식</Text>
                                <Spacer/>
                                <Text fontSize={f3} color="#565656">126m</Text>
                            </Flex>
                            <Flex direction="row">
                                <Tag border="1px solid #E1E1E1" bg='white' color="#A4A4A4" fontSize="10px" mr="5px">일식</Tag>
                                <Tag border="1px solid #E1E1E1" bg='white' color="#A4A4A4" fontSize="10px">치즈돈까스</Tag>
                            </Flex>
                            <Flex mt="10px">
                                <Flex w="12px" h="12px" mr="5px">
                                    <Image src={starF}/>
                                </Flex>
                                <Text fontSize="10px" color="#565656">4.5 (10)</Text>
                            </Flex>
                        </Flex>
                    </WrapItem>

                    <WrapItem>
                        <Flex direction="column">
                            <Flex w="165px" h="165px" borderRadius="10px" overflow="hidden">
                                <Image src={p1}/>
                            </Flex>
                            <Flex direction="row" alignItems="center" mt="5px">
                                <Text fontWeight="bold" fontSize={f1}>카츠단식</Text>
                                <Spacer/>
                                <Text fontSize={f3} color="#565656">126m</Text>
                            </Flex>
                            <Flex direction="row">
                                <Tag border="1px solid #E1E1E1" bg='white' color="#A4A4A4" fontSize="10px" mr="5px">일식</Tag>
                                <Tag border="1px solid #E1E1E1" bg='white' color="#A4A4A4" fontSize="10px">치즈돈까스</Tag>
                            </Flex>
                            <Flex mt="10px">
                                <Flex w="12px" h="12px" mr="5px">
                                    <Image src={starF}/>
                                </Flex>
                                <Text fontSize="10px" color="#565656">4.5 (10)</Text>
                            </Flex>
                        </Flex>
                    </WrapItem>

                    <WrapItem>
                        <Flex direction="column">
                            <Flex w="165px" h="165px" borderRadius="10px" overflow="hidden">
                                <Image src={p1}/>
                            </Flex>
                            <Flex direction="row" alignItems="center" mt="5px">
                                <Text fontWeight="bold" fontSize={f1}>카츠단식</Text>
                                <Spacer/>
                                <Text fontSize={f3} color="#565656">126m</Text>
                            </Flex>
                            <Flex direction="row">
                                <Tag border="1px solid #E1E1E1" bg='white' color="#A4A4A4" fontSize="10px" mr="5px">일식</Tag>
                                <Tag border="1px solid #E1E1E1" bg='white' color="#A4A4A4" fontSize="10px">치즈돈까스</Tag>
                            </Flex>
                            <Flex mt="10px">
                                <Flex w="12px" h="12px" mr="5px">
                                    <Image src={starF}/>
                                </Flex>
                                <Text fontSize="10px" color="#565656">4.5 (10)</Text>
                            </Flex>
                        </Flex>
                    </WrapItem>

                    <WrapItem>
                        <Flex direction="column">
                            <Flex w="165px" h="165px" borderRadius="10px" overflow="hidden">
                                <Image src={p1}/>
                            </Flex>
                            <Flex direction="row" alignItems="center" mt="5px">
                                <Text fontWeight="bold" fontSize={f1}>카츠단식</Text>
                                <Spacer/>
                                <Text fontSize={f3} color="#565656">126m</Text>
                            </Flex>
                            <Flex direction="row">
                                <Tag border="1px solid #E1E1E1" bg='white' color="#A4A4A4" fontSize="10px" mr="5px">일식</Tag>
                                <Tag border="1px solid #E1E1E1" bg='white' color="#A4A4A4" fontSize="10px">치즈돈까스</Tag>
                            </Flex>
                            <Flex mt="10px">
                                <Flex w="12px" h="12px" mr="5px">
                                    <Image src={starF}/>
                                </Flex>
                                <Text fontSize="10px" color="#565656">4.5 (10)</Text>
                            </Flex>
                        </Flex>
                    </WrapItem>
                </Wrap>

                

                
      


                {/* footer */}
                <Spacer/>
                <Box borderTop="1px solid #E8E8E8" h="80px"  pl="7px" pr="7px" display="absolute" position="sticky" bottom="0px" bg="#ffffff">
                    <Flex direction="row" w="vw" mt="13px" >
                        <Spacer/>
                        <Flex direction="column" justifyContent="center" ml="33px" mr="33px">
                            <Link href='/home' w="24px" h="24px">
                                <Image src={home}/>
                            </Link>
                            <Text fontWeight="medium " fontSize="10px" align="center" >홈</Text>
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
                                <Image src={my}/>
                            </Link>
                            <Text fontWeight="medium" fontSize="10px" align="center" >마이</Text>
                        </Flex>
                        <Spacer/>
                    </Flex>
                </Box>

        </div>
  
    )
  }