import {
  Box,
  Button,
  Heading,
  ListItem,
  OrderedList,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const IntroHowTo = () => {
  return (
    <>
      <Box position="relative" w="80%" ml="10%" mt="60px">
        <Box bgColor="yellow.50" p="6" position="relative">
          <Heading
            position="absolute"
            top="-20px"
            left="20px"
            bg="white"
            px={4}
            transform="rotate(-3deg)"
            bgColor="teal.100"
            borderRadius={10}
            bgGradient="linear(to-r, teal.300, blue.200,gray.100)"
            fontWeight="none"
            size={["md", "lg", "xl"]}
          >
            どんなサイトか？
          </Heading>
          <Text w="100%" ml="2%">
            <br />
            世界地図を使ったSNS風webサイトです
            <br />
            国ごとのおすすめスポットや食べ物、その国に実際に行って感動したこと、「行ってみたい！」などの投稿をすることができます
          </Text>
        </Box>
      </Box>
      <Box
        position="relative"
        w={["90%", "80%", "70%"]}
        ml={["5%", "10%", "15%"]}
        mt="40px"
        mb="5%"
      >
        <Box p={[4, 6, 8]} position="relative" bgColor="yellow.50">
          <Heading
            position="absolute"
            top="-20px"
            left="20px"
            bg="white"
            px={[2, 4, 6]}
            transform="rotate(-3deg)"
            bgColor="teal.100"
            borderRadius={10}
            size={["md", "lg", "xl"]}
            bgGradient="linear(to-r, teal.300, blue.200,gray.100)"
            fontWeight="none"
          >
            使い方
          </Heading>
          <VStack>
            <OrderedList w="100%" ml="2%">
              <ListItem w="100%" ml="2%">
                好きな国や行ったことがある国をクリック
              </ListItem>
              <Box px={[0, "10%", "240px"]}>
                <Image
                  src="/sample/スクリーンショット 2024-09-30 20.28.38.jpeg"
                  alt="Top Image"
                  width={900}
                  height={800}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
              <br />
              <ListItem w="100%" ml="2%">
                その国の地図が表示されたら、右上にある「投稿一覧」ボタンをクリック
              </ListItem>
              <Box px="240px">
                <Image
                  src="/sample/スクリーンショット 2024-09-30 20.28.54.jpeg"
                  alt="Top Image"
                  width={900}
                  height={800}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
              <br />
              <ListItem w="100%" ml="2%">
                「投稿一覧」が表示されたら、実際に投稿してみましょう！
              </ListItem>
              <Box px="240px">
                <Image
                  src="/sample/スクリーンショット 2024-11-22 21.51.17.jpeg"
                  alt="Top Image"
                  width={900}
                  height={800}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            </OrderedList>
          </VStack>
        </Box>
        <Box position="relative" ml="20%" mt="40px">
          <Link href="/login">
            <Button
              w={["90%", "70%", "650px"]}
              bg="cyan.400"
              // color="black"
              boxShadow="xl"
              overflow="hidden"
              _before={{
                content: `""`,
                display: "inline-block",
                position: "absolute",
                top: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "cyan.100",
                transition: "0.7s",
                right: "100%",
              }}
              _hover={{ _before: { right: "0" } }}
            >
              ログインして投稿してみる
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default IntroHowTo;
