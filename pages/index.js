import { 
  Box,
  Flex,
  Text,
  Heading,
  VStack,
  Img,
  Spacer,
  Link
} from '@chakra-ui/react';
import Image from "next/image";
// import { Link } from 'next/link';


import kakao from './images/kakao.svg';
import naver from './images/naver.svg';
import facebook from './images/facebook.svg';
import apple from './images/apple.svg';
import mail from './images/mail.svg';

export default function LogIn() {

  const f1 ="16px";
  const f2 ="14px";
  const f3 ="12px";

  return (
    
      <div>  
        <Box bg="#F6E229" w="100vw" h="100vh">
          <Flex direction="column" w="100%" h="100%" >
            
            <Flex direction="column" alignItems="center" justifyContent="center" flex='1'>
              <Text fontSize="36px" lang='ko' fontWeight={900} >
                오늘 뭐 먹지?
              </Text>
              <Text fontSize="24px">
                고민을 덜어 드릴게요
              </Text>
            </Flex>

            <VStack spacing="10px" pr="10px" pl="10px">
              <Box w="100%" >
                {/* <Img src={require("./images/kakao.png").default} position="absolute" w="22px" h='22px' /> */}
                <Link href='/home'>
                  <Flex bg="#FFFFFF" alignItems="center" justifyContent="center" w="100%" borderRadius="10px" h="40px" >
                    <Box ml="43px" mt="6px">
                      <Image src={kakao}/>
                    </Box>
                    <Spacer/>
                    <Text position="absolute" >
                      카카오 로그인
                    </Text>
                  </Flex>
                </Link>
              </Box>
              <Flex bg="#FFFFFF" alignItems="center" justifyContent="center" w="100%" borderRadius="10px" h="40px">
                  <Box ml="44px" mt="6px">
                    <Image src={naver}/>
                  </Box>
                  <Spacer/>
                <Text  position="absolute">
                  NAVER 로그인
                </Text>
              </Flex>
              <Flex bg="#FFFFFF" alignItems="center" justifyContent="center" w="100%" borderRadius="10px" h="40px">
                  <Box ml="43px" mt="6px">
                    <Image src={facebook}/>
                  </Box>
                  <Spacer/>
                <Text position="absolute">
                  페이스북 로그인
                </Text>
              </Flex>
              <Flex bg="#FFFFFF" alignItems="center" justifyContent="center" w="100%" borderRadius="10px" h="40px">
                  <Box ml="49px" mt="6px">
                    <Image src={apple}/>
                  </Box>
                  <Spacer/>
                <Text position="absolute">
                  Apple 로그인
                </Text>
              </Flex>
              <Flex bg="#FFFFFF" alignItems="center" justifyContent="center" w="100%" borderRadius="10px" h="40px">
                  <Box ml="48px" mt="6px">
                    <Image src={mail}/>
                  </Box>
                  <Spacer/>
                <Text position="absolute">
                  이메일 로그인
                </Text>
              </Flex>
            </VStack>

            <VStack mt="26px" mb="30px" spacing={0}>
              <Text fontSize={f3}>
                회원이 아니신가요?
              </Text>

              <Link href='/signIn'>
                <Text textDecoration="underline" fontSize={f3} >
                  회원가입
                </Text>
              </Link>
            </VStack>
            
          </Flex>
        </Box>
      </div>

  )
}
