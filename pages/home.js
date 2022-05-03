import { 
    Box,
    Flex,
    Text,
    Spacer,
    Link,
    HStack,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useMediaQuery
  } from '@chakra-ui/react';
  // import { Link } from 'next/link';
  import Image from 'next/image';
  import { 
    useState, 
} from 'react';
  
  import styled from "styled-components";

  import { useRef } from "react";
  import { useDraggable } from "react-use-draggable-scroll";
  
  import bell from './images/Bell_Icon.png';
  import search from './images/Search_Icons.png';
  import info from './images/info.png';
  import arrowB from './images/arrowB.png';
  import circleB from './images/EllipseB.png';
  import ranking from './images/ranking.png';

  import p1 from './images/photo/photoEx1.png';
  import p2 from './images/photo/photoEx2.png';
  import p3 from './images/photo/photoEx3.png';
  import pd from './images/photo/default.png';

  import foodA1 from './images/foodIcon/foodA1.png';
  import foodA2 from './images/foodIcon/foodA2.png';
  import foodA3 from './images/foodIcon/foodA3.png';
  import foodA4 from './images/foodIcon/foodA4.png';
  import foodA5 from './images/foodIcon/foodA5.png';
  import foodA6 from './images/foodIcon/foodA6.png';
  import foodA7 from './images/foodIcon/foodA7.png';
  import foodA8 from './images/foodIcon/foodA8.png';
  import foodA9 from './images/foodIcon/foodA9.png';
  import foodA10 from './images/foodIcon/foodA10.png';
  import foodN1 from './images/foodIcon/foodN1.png';
  import foodN2 from './images/foodIcon/foodN2.png';
  import foodN3 from './images/foodIcon/foodN3.png';
  import foodN4 from './images/foodIcon/foodN4.png';
  import foodN5 from './images/foodIcon/foodN5.png';
  import foodN6 from './images/foodIcon/foodN6.png';
  import foodN7 from './images/foodIcon/foodN7.png';
  import foodN8 from './images/foodIcon/foodN8.png';
  import foodN9 from './images/foodIcon/foodN9.png';
  import foodN10 from './images/foodIcon/foodN10.png';
  import iconBgA from './images/foodIcon/iconBgA.png';
  import iconBgN from './images/foodIcon/iconBgN.png';
  
//   footer
  import home from './images/navIcons/icon_home.png';
  import homeA from './images/navIcons/icon_homeA.png';
  import rec from './images/navIcons/icon_rec.png';
  import recA from './images/navIcons/icon_recA.png';
  import rev from './images/navIcons/icon_rev.png';
  import revA from './images/navIcons/icon_revA.png';
  import my from './images/navIcons/icon_my.png';
  import myA from './images/navIcons/icon_myA.png';
  
  export default function LogIn() {
  
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
    const [show, setShow] = useState(true);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [longW] = useMediaQuery(
        "(min-width: 600px)"
      );

  
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
      

                <HStack overflow="hidden" mt='20px' spacing="14.5px" whiteSpace="nowrap" overflowX='hide' >
                    {/* hilighted */}
                    <Link href='/category'>
                        <Flex alignItems="center" justifyContent="center" ml="10px" position="relative">
                            <Box w="60px" h="60px">
                                <Image src={iconBgA}/>
                            </Box>
                            <Box position="absolute" w="18px" h="12px" mb="20px">
                                <Image src={foodA1}  />
                            </Box>
                            <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">전체</Text>
                        </Flex>
                    </Link>

                    {/* normal */}
                    <Flex alignItems="center" justifyContent="center" position="relative">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN}/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN2}  />
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">한식</Text>
                    </Flex>

                    <Flex alignItems="center" justifyContent="center" position="relative">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN}/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN3}  />
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">일식</Text>
                    </Flex>

                    <Flex alignItems="center" justifyContent="center" position="relative">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN}/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN4}  />
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">중식</Text>
                    </Flex>

                    <Flex alignItems="center" justifyContent="center" position="relative">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN}/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN5}  />
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">양식</Text>
                    </Flex> 

                    <Flex alignItems="center" justifyContent="center" position="relative">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN}/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN6}  />
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">분식</Text>
                    </Flex> 

                    <Flex alignItems="center" justifyContent="center" position="relative">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN}/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN7}  />
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">퓨전</Text>
                    </Flex> 

                    <Flex alignItems="center" justifyContent="center" position="relative">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN}/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN8}  />
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">퓨전</Text>
                    </Flex> 
                    
                    <Flex alignItems="center" justifyContent="center" position="relative">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN}/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="26px">
                            <Image src={foodN9}  />
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="16px">디저트</Text>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="36px">베이커리</Text>
                    </Flex> 

                    <Flex alignItems="center" justifyContent="center" position="relative">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN}/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN10}  />
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">기타</Text>
                    </Flex> 
                </HStack>

                {/* <Flex overflow="hidden" ml="10px" mt='20px'>
                    {/* hilighted */}
                    {/* <Flex alignItems="center" justifyContent="center" mr="15px">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgA}/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodA1}  />
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">전체</Text>
                    </Flex> */}

                    {/* normal */}
                    {/* <Flex alignItems="center" justifyContent="center" mr="15px">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN}/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN2}  />
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">한식</Text>
                    </Flex>

                    <Flex alignItems="center" justifyContent="center" mr="15px">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN}/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN3}  />
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">일식</Text>
                    </Flex>

                    <Flex alignItems="center" justifyContent="center" mr="15px">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN}/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN4}  />
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">중식</Text>
                    </Flex>

                    <Flex alignItems="center" justifyContent="center" mr="15px">
                        <Box w="60px" h="60px" >
                            <Image src={iconBgN}/>
                        </Box>
                        <Box position="absolute" w="18px" h="12px" mb="20px">
                            <Image src={foodN5}  />
                        </Box>
                        <Text fontSize="10px" position="absolute" fontWeight="bold" mt="26px">양식</Text>
                    </Flex>

                </Flex> */}

                <Box mt="26px" ml="10px">
                    <Text fontSize={f1} fontWeight="bold" >최근에 먹은 것들</Text>
                    <HStack spacing="10px" mt="11px">
                        <Box w="90px" h="90px" bg="gray.200">
                            <Image src={p1}/>
                        </Box>
                        <Box w="90px" h="90px" bg="gray.200">
                            <Image src={p2}/>
                        </Box>
                        <Box w="90px" h="90px" bg="gray.200">
                            <Image src={p3}/>
                        </Box>
                        <Box w="90px" h="90px" bg="gray.200">
                            <Image src={pd}/>
                        </Box>
                    </HStack>
                </Box>

                <Flex direction="column" w="vw" h="120px" justifyContent="center" alignItems="center"  ml="10px" mr="10px"mt="40px" border="3px solid #F6E229"
                 borderTopLeftRadius="30px" borderTopRightRadius="30px" borderBottomLeftRadius="30px">
                     <Flex position="absolute" alignItems="center" justifyContent="center" mb="115px">
                         <Flex position="absolute" w="40px" h="40px">
                             <Image src={circleB}/>
                         </Flex>
                         <Flex position="absolute" w="24px" h="24px">
                             <Image src={ranking}/>
                         </Flex>
                     </Flex>
                    <Text fontSize={f2} fontWeight="bold" align="center">갑작스럽게 혼밥을 해야할 때 당신은?</Text>
                    <Flex direction="row" justifyContent="center" mt="9px">
                        <Button w="90px" h="30px" bg="#303030" color="#ffffff" borderRadius="full" fontSize="10px" fontWeight="medium" mr="5px">죽어도 싫어</Button>
                        <Button w="90px" h="30px" bg="#F6E229" border="1px solid #303030" borderRadius="full" fontSize="10px" fontWeight="medium" ml="5px">오히려 좋아</Button>
                    </Flex>
                </Flex>

                <Flex direction="row" w="vw" h="60px" ml="10px" mr="10px" mt="30px" mb="30px" borderRadius="full" bg="#F6E229" justifyContent="center" alignItems="center" >
                    <Text fontSize={f2} fontWeight="bold" letterSpacing="-1px" align="center" mr="5px">아직도 뭐 먹을까 고민하세요 ?</Text>
                    <Link href='/randomR1'>
                        <Button fontSize={f3} fontWeight="medium" color="#ffffff" w="96px" h="30px" bg="#303030" borderRadius="full" ml="5px">랜덤 추천받기</Button>
                    </Link>

                </Flex>
                
                {/* Modal1 */}
                <Button onClick={onOpen} bg="yellow.200">
                    modal test
                </Button>
                <Modal id='alarm' isOpen={isOpen} onClose={onClose} show={show} onHide={() => setShow(false)}>
                    <ModalOverlay/>
                    <ModalContent  borderRadius="30px">
                        <ModalBody >
                            <Text fontSize={f2} fontWeight="bold" align="center" mt="26px">‘뭐먹지’에서 알림을 보내고자 합니다.</Text>
                            <Text fontSize={f3} mt="10px" align="center">
                                경고, 사운드 및 아이콘 배지가 알림에 포함될 수 있습니다.
                            </Text>
                            <Text fontSize={f3} align="center">
                                설정에서 이를 구성할 수 있습니다.
                            </Text>
                            <Flex direction="row" justifyContent="center" mt="15px" mb="25px">
                                <Button w="90px" h="30px" bg="#303030" color="#ffffff" borderRadius="full" fontSize="10px" fontWeight="medium" mr="5px" onClick={onClose}>허용 안 함</Button>
                                <Button w="90px" h="30px" bg="#F6E229" border="1px solid #303030" borderRadius="full" fontSize="10px" fontWeight="medium" ml="5px" >허용</Button>
                            </Flex>
                        </ModalBody>
                        {/* <ModalFooter>
                        </ModalFooter> */}
                    </ModalContent>
                </Modal>

                {/* Modal2 */}
                {/* <Modal id='alarm' isOpen={isOpen} onClose={onClose} show={show} onHide={() => setShow(false)}>
                    <ModalOverlay/>
                    <ModalContent  borderRadius="30px">
                        <ModalCloseButton w="20px" h="20px" fontSize="20px" m="10px"/>
                        <ModalBody >
                            <Text fontSize={f2} fontWeight="bold" align="center" mt="26px">입맛 취향을 확인해 보세요!</Text>
                            <Text fontSize={f3} mt="10px" align="center">
                                싫어하는 음식과 좋아하는 음식 취향을 반영해  
                            </Text>
                            <Text fontSize={f3} align="center">
                                근처 식당을 랜덤으로 추천해드립니다.
                            </Text>
                            <Flex direction="row" justifyContent="center" mt="15px" mb="25px">
                                <Button w="90px" h="30px" bg="#F6E229" border="1px solid #303030" borderRadius="full" fontSize="10px" fontWeight="medium" ml="5px" >식당 둘러보기</Button>
                            </Flex>
                        </ModalBody>
                    </ModalContent>
                </Modal> */}

                {/* footer */}
                <Spacer/>
                <Box borderTop="1px solid #E8E8E8" h="80px"  pl="7px" pr="7px" display="absolute" position="sticky" bottom="0px" bg="#ffffff">
                    <Flex direction="row" w="vw" mt="13px" >
                        <Spacer/>
                        <Flex direction="column" justifyContent="center" ml="33px" mr="33px">
                            <Link href='/home' w="24px" h="24px">
                                <Image src={homeA}/>
                            </Link>
                            <Text fontWeight="bold" fontSize="10px" align="center" >홈</Text>
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
  