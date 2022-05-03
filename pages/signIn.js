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
    InputGroup
  } from '@chakra-ui/react';
import React from 'react';
import { 
    CheckIcon,
} from '@chakra-ui/icons'
import Image from "next/image";
import arrowL from './images/arrowL.svg';
import check from './images/check.svg';


  
export default function SignIn() {

    const btnHover = () =>{

    }

    const [show, setShow] = React.useState(false)
    const inputted = () => setShow(!show)

    const f1 ="16px";
    const f2 ="14px";
    const f3 ="12px";

    return(
        <div>
            <Flex direction="column" h="100vh">

            {/* header */}
            <Flex w="vw" h="40px" alignItems="center" justifyContent="center" borderBottom="1px solid #DDDDDD">
                <Flex ml="18px" alignItems="center">
                    <Link href='/' mt="4px">
                        <Image src={arrowL}/>
                    </Link>
                </Flex>
                <Spacer/>
                <Text fontWeight="extrabold" fontSize={f1} position="absolute">
                    회원가입
                </Text>
            </Flex>
            {/* container1 */}
            <Flex mt="21px" h="40px" p="10px" alignItems="center">
                <Box w="133px">
                    <Text fontWeight="bold" fontSize={f2}>
                        닉네임
                    </Text>
                </Box>
                <Flex w="100%" alignItems="center" direction="row-reverse">
                    <Input placeholder='한글,영문/숫자로 4~16자 이내' border="1px solid #E1E1E1" borderRadius="10px" w="100%" fontSize={f3}/>
                    <Flex position="absolute" mr="11px">
                        <Image src={check} />
                    </Flex>
                    {/* <Icon as={CheckIcon} w="20px"  position="absolute" mr="17px" /> */}
                </Flex>
                    {/* 유효성검사 */}
                    <Text id='' fontSize="10px" color="#494949" position="absolute" ml="113px" mt="66px" >
                        사용하실 수 있는 닉네임입니다.
                    </Text>
            </Flex>

            {/* container2 */}
            <Flex mt="28px" h="40px" p="10px" alignItems="center">
                <Box w="133px">
                    <Text fontWeight="bold" fontSize={f2}>
                        이메일
                    </Text>
                </Box>
                <Flex w="100%" alignItems="center" direction="row-reverse">
                    <Input placeholder='이메일을 입력해주세요' border="1px solid #E1E1E1" borderRadius="10px" w="100%" fontSize={f3}/>
                </Flex>
                    {/* 유효성검사 */}
                    <Text id='' fontSize="10px" color="#494949" position="absolute" ml="113px" mt="66px" >
                        사용하실 수 있는 이메일입니다.
                    </Text>
            </Flex>

            {/* container3 */}
            <Flex mt="28px" h="40px" p="10px" alignItems="center">
                <Box w="133px">
                    <Text fontWeight="bold" fontSize={f2}>
                        비밀번호
                    </Text>
                </Box>
                <Flex w="100%" alignItems="center" direction="row-reverse">
                    <InputGroup>
                        <Input type="password" placeholder='8~16자리 영대/소문자, 숫자, 특수문자 조합' border="1px solid #E1E1E1" borderRadius="10px" w="100%" fontSize={f3}/>
                    </InputGroup>
                </Flex>
                    {/* 유효성검사 */}
                    <Text id='' fontSize="10px" color="#494949" position="absolute" ml="113px" mt="66px" >
                        사용하실 수 있는 비밀번호입니다.
                    </Text>
            </Flex>

            {/* container4 */}
                <Flex mt="28px" h="40px" p="10px" alignItems="center">
                    <Box w="133px">
                        <Text fontWeight="bold" fontSize={f2}>
                            친구 초대 코드
                        </Text>
                        <Text fontWeight="bold" fontSize={f2}>
                            (선택)
                        </Text>
                    </Box>
                    <Flex w="100%" alignItems="center" direction="row-reverse">
                        <Input placeholder='친구에게 받은 코드를 입력해주세요' border="1px solid #E1E1E1" borderRadius="10px" w="100%" fontSize={f3} />
                        <Text id='timeLeft' fontSize={f3} color={"#A4A4A4"} position="absolute" mr="11px">00:00</Text>
                    </Flex>
                </Flex>
                <Flex mt="10px" h="40px" p="10px" alignItems="center">
                    <Box w="133px"/>
                    <Flex w="100%" alignItems="center" direction="row-reverse">
                        <Button w="100%" border="1px solid #303030" borderRadius="10px" bg="#ffffff" fontSize={f2} fontWeight="medium" color="#303030">
                            인증 번호 확인
                        </Button>
                    </Flex>
                </Flex>

                <Spacer/>

                {/* sign in button */}
                <Box p="10px" w="100vw" h="40px" mb="30px">
                    {/* 유효성검사  */}
                    <Link w="100%" href='/signIn2' >
                        <Button w="100%" borderRadius="full" bg="#F6E229" fontSize={f1} fontWeight="bold" _hover={btnHover} >
                            가입하기
                        </Button>
                    </Link>
                </Box>
            </Flex>

        </div> 
    )
}
