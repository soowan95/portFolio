import {
  Box,
  Button,
  Flex,
  Input,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import * as emailjs from "@emailjs/browser";

function Contact({ handleScroll }) {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [contents, setContents] = useState("회신 바람");

  const toast = useToast();

  const [ref, inView] = useInView();

  const { onCopy } = useClipboard("010-5321-9565");

  useEffect(() => {
    if (inView) handleScroll("contact");
  }, [inView]);

  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        `${process.env.REACT_APP_EMAILJS_SERTICEID}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATEID}`,
        {
          name: name,
          email: email,
          contents: contents === "" ? "회신 바람" : contents,
        },
        `${process.env.REACT_APP_EMAILJS_PUBLICKEY}`,
      )
      .then(() => {
        toast({
          description: "메일을 전송했습니다.",
          status: "success",
        });
      })
      .catch(() => {
        toast({
          description: "메일전송에 실패했습니다.",
          status: "warning",
        });
      });
  };

  return (
    <>
      <Box className={"desktop-contact"}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: "5%" }}
          whileInView={{ opacity: 1, x: "15%" }}
          transition={{ duration: 1 }}
          style={{
            fontWeight: "bolder",
          }}
          className={"contact-header"}
        >
          <Box
            letterSpacing={"5px"}
            fontSize={"1rem"}
            color={"#8a8989"}
            mb={"10px"}
          >
            CONTACT
          </Box>
          📫 최대한 빨리 회신하겠습니다.
        </motion.div>
        <Flex className={"contact-body"} gap={"5%"}>
          <Box className={"contact-body-left"}>
            <Input
              placeholder={"회신 받으실 이메일"}
              onChange={(e) => setEmail(e.target.value)}
              className={"contact-body-input"}
              onKeyDown={(e) => {
                if (e.code === "Enter" || e.code === "numpadEnter") sendMail();
              }}
            />
            <Input
              placeholder={"이름"}
              onChange={(e) => setName(e.target.value)}
              className={"contact-body-input"}
              onKeyDown={(e) => {
                if (e.code === "Enter" || e.code === "numpadEnter") sendMail();
              }}
            />
            <Input
              placeholder={"내용"}
              onChange={(e) => setContents(e.target.value)}
              className={"contact-body-input"}
              onKeyDown={(e) => {
                if (e.code === "Enter" || e.code === "numpadEnter") sendMail();
              }}
            />
            <Button
              onClick={sendMail}
              className={"contact-body-input"}
              size={"sm"}
              isDisabled={!email || email === "" || !name || name === ""}
            >
              Send
            </Button>
          </Box>
          <Box className={"contact-body-right"}>
            <Box className={"contact-body-box"}>Phone. </Box>
            <Box
              className={"contact-body-box"}
              textDecor={"underline"}
              onClick={() => {
                onCopy();
                toast({
                  description: "클립보드에 복사됐습니다.",
                  status: "success",
                });
              }}
              cursor={"pointer"}
            >
              010-5321-9565
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box className={"tablet-mobile-contact"}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: "5%" }}
          whileInView={{ opacity: 1, x: "15%" }}
          transition={{ duration: 1 }}
          style={{
            fontWeight: "bolder",
          }}
          className={"contact-header"}
        >
          <Box
            letterSpacing={"5px"}
            fontSize={"1rem"}
            color={"#8a8989"}
            mb={"10px"}
          >
            CONTACT
          </Box>
          📫 최대한 빨리 회신하겠습니다.
        </motion.div>
        <Box className={"contact-body"}>
          <Box className={"contact-body-left"}>
            <Input
              placeholder={"회신 받으실 이메일"}
              onChange={(e) => setEmail(e.target.value)}
              className={"contact-body-input"}
              onKeyDown={(e) => {
                if (e.code === "Enter" || e.code === "numpadEnter") sendMail();
              }}
            />
            <Input
              placeholder={"이름"}
              onChange={(e) => setName(e.target.value)}
              className={"contact-body-input"}
              onKeyDown={(e) => {
                if (e.code === "Enter" || e.code === "numpadEnter") sendMail();
              }}
            />
            <Input
              placeholder={"내용"}
              onChange={(e) => setContents(e.target.value)}
              className={"contact-body-input"}
              onKeyDown={(e) => {
                if (e.code === "Enter" || e.code === "numpadEnter") sendMail();
              }}
            />
            <Button
              onClick={sendMail}
              className={"contact-body-input"}
              size={"sm"}
              isDisabled={!email || email === "" || !name || name === ""}
              position={"absolute"}
              right={0}
              bottom={0}
            >
              Send
            </Button>
          </Box>
          <Box className={"contact-body-right"}>
            <Box className={"contact-body-box"}>Phone. </Box>
            <Box
              className={"contact-body-box"}
              textDecor={"underline"}
              onClick={() => {
                onCopy();
                toast({
                  description: "클립보드에 복사됐습니다.",
                  status: "success",
                });
              }}
              cursor={"pointer"}
            >
              010-5321-9565
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Contact;
