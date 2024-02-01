import { motion } from "framer-motion";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import Progress from "../util/Progress";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Skills({ handleScroll }) {
  const [dbref, dbinView] = useInView();
  const [mref, minView] = useInView();

  useEffect(() => {
    if (dbinView || minView) handleScroll("skills");
  }, [dbinView, minView]);

  return (
    <>
      <Box position={"relative"} className={"desktop-tablet-skills"}>
        <motion.div
          ref={dbref}
          initial={{ opacity: 0, x: "5%" }}
          whileInView={{ opacity: 1, x: "15%" }}
          transition={{ duration: 1 }}
          style={{
            fontWeight: "bolder",
          }}
          className={"skills-header"}
        >
          <Box
            letterSpacing={"5px"}
            fontSize={"1rem"}
            color={"#8a8989"}
            mb={"10px"}
          >
            SKILLS
          </Box>
          ❕ 저는 이런걸 할 수 있습니다.
        </motion.div>
        <Box className={"skills-body-title1"}>
          중앙정보처리학원에서 Java 기반 풀스택 강의를 들의며 프로그래밍에 대한
          기초 기식을 쌓았습니다. 6개월의 짧은 기간동안 java, springboot,
          javascript, html, css, react 등 다양한 기술들을 배워 그 깊이가 깊진
          않지만 제 스스로 깊이 학습하기 위해 노력했습니다. 특히, 학원에서
          학습하지 않은 다른 기술들을 스스로 학습하는 과정에서 다양한 언어와
          기술들에 관심이 생겼고 새로운 지식을 습득하는 즐거움을 발견했습니다.
        </Box>
        <Box className={"skills-body-title2"}>
          프로그래머스 코딩 테스트를 해결할 때{" "}
          <strong>jdk 17 api document</strong>를 많이 살펴보았고, 학습 장벽이
          높은 react를 보다 잘 사용하기 위해 <strong>chat gpt</strong>를 적극
          활용했습니다.
        </Box>
        <Box className={"skills-body-progress"}>
          <SimpleGrid columns={2} spacing={10}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className={"skills-block"}
            >
              <Box className={"skills-block-title"} color={"#0073bc"}>
                JAVA
              </Box>
              <Progress color={"#0073bc"} progress={"60%"} />
              <Box className={"skills-block-content"}>
                앞으로 출시할 jdk lts 버전과의 원활한 마이그레이션과 jdk 8 이후
                추가된 기능들을 사용하고자 jdk 17을 사용했고 코딩테스트로 java에
                익숙해졌습니다.
              </Box>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className={"skills-block"}
            >
              <Box className={"skills-block-title"} color={"#69bc4d"}>
                SPRING BOOT
              </Box>
              <Progress color={"#69bc4d"} progress={"50%"} />
              <Box className={"skills-block-content"}>
                spring을 사용하기 위해 was를 설정해야 하지만 학습해야 할 양이
                방대하기에 spring boot를 사용했습니다. jdk 17 이후 버전과
                호환되는 3.x 버전을 사용했습니다. spring에 대한 학습을 꾸준히
                진행할 예정입니다.
              </Box>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className={"skills-block"}
            >
              <Box className={"skills-block-title"} color={"#f0db4e"}>
                JAVASCRIPT
              </Box>
              <Progress color={"#f0db4e"} progress={"30%"} />
              <Box className={"skills-block-content"}>
                학원 교육과정 중 처음으로 학습한 언어가 javascript입니다. 비교적
                학습 장벽이 낮고 다양한 프레임워크와 호환되는 언어입니다. 백엔드
                개발자가 되기 위해 java에 더 많은 투자를 했지만 node.js를 통해
                서버의 개발도 가능하다는 것을 인지하고 있어 추후 더 학습할
                예정입니다.
              </Box>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className={"skills-block"}
            >
              <Box className={"skills-block-title"} color={"#00d8fe"}>
                REACT
              </Box>
              <Progress color={"#00d8fe"} progress={"40%"} />
              <Box className={"skills-block-content"}>
                spa 프레임워크인 react는 초기 구동 속도는 느리지만 프로젝트의
                복잡도를 줄이고 부드러운 사이트를 만들기 위해 프로젝트에
                채택했습니다. 여러 라이브러리를 사용하기 쉽게 관리해주는 npm을
                활용했습니다.
              </Box>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className={"skills-block"}
            >
              <Box className={"skills-block-title"} color={"#f05030"}>
                GIT
              </Box>
              <Progress color={"#f05030"} progress={"35%"} />
              <Box className={"skills-block-content"}>
                프로젝트의 형상 관리를 위해 git을 사용했습니다. git을 기반으로
                코드를 관리해 주는 github을 활용하여 협업을 진행하였습니다. 팀
                프로젝트를 진행하면서 github내의 기능을 온전히 활용하지 못 했던
                아쉬움이 있어 추후에는 적극 활용할 예정입니다.
              </Box>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className={"skills-block"}
            >
              <Box className={"skills-block-title"} color={"#f68e09"}>
                AWS
              </Box>
              <Progress color={"#f68e09"} progress={"20%"} />
              <Box className={"skills-block-content"}>
                aws의 ec2를 이용해 프로젝트 배포 중에 있습니다. 프로젝트에는
                rds(mariadb), s3를 이용했습니다. aws의 방대한 기능과 설정을
                이해하고 사용하기 위해 꾸준히 학습하겠습니다.
              </Box>
            </motion.div>
          </SimpleGrid>
        </Box>
        <Box position={"absolute"} bottom={0} className={"skills-body-cover"}>
          <SimpleGrid columns={2} spacing={10}>
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 0, x: "-10%" }}
              transition={{ duration: 1, delay: 1 }}
              style={{ background: "white" }}
              className={"skills-block"}
            >
              <Image
                w={"100%"}
                h={"100%"}
                src={`${process.env.PUBLIC_URL}/img/javalogo.png`}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 0, x: "10%" }}
              transition={{ duration: 1, delay: 1 }}
              style={{ background: "white" }}
              className={"skills-block"}
            >
              <Image
                w={"100%"}
                h={"100%"}
                src={`${process.env.PUBLIC_URL}/img/springbootlogo.png`}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 0, x: "-10%" }}
              transition={{ duration: 1, delay: 1 }}
              style={{ background: "white" }}
              className={"skills-block"}
            >
              <Image
                w={"100%"}
                h={"100%"}
                src={`${process.env.PUBLIC_URL}/img/javascriptlogo.png`}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 0, x: "10%" }}
              transition={{ duration: 1, delay: 1 }}
              style={{ background: "white" }}
              className={"skills-block"}
            >
              <Image
                w={"100%"}
                h={"100%"}
                src={`${process.env.PUBLIC_URL}/img/reactlogo.png`}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 0, x: "-10%" }}
              transition={{ duration: 1, delay: 1 }}
              style={{ background: "white" }}
              className={"skills-block"}
            >
              <Image
                w={"100%"}
                h={"100%"}
                src={`${process.env.PUBLIC_URL}/img/gitlogo.png`}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 0, x: "10%" }}
              transition={{ duration: 1, delay: 1 }}
              style={{ background: "white" }}
              className={"skills-block"}
            >
              <Image
                w={"100%"}
                h={"100%"}
                src={`${process.env.PUBLIC_URL}/img/awslogo.png`}
              />
            </motion.div>
          </SimpleGrid>
        </Box>
      </Box>
      <Box className={"mobile-skills"}>
        <motion.div
          ref={mref}
          initial={{ opacity: 0, x: "5%" }}
          whileInView={{ opacity: 1, x: "15%" }}
          transition={{ duration: 1 }}
          style={{
            fontWeight: "bolder",
          }}
          className={"skills-header"}
        >
          <Box
            letterSpacing={"5px"}
            fontSize={"1rem"}
            color={"#8a8989"}
            mb={"10px"}
          >
            SKILLS
          </Box>
          ❕ 저는 이런걸 할 수 있습니다.
        </motion.div>
        <Box className={"skills-body-title1"}>
          Java 기반 풀스택 강의를 들의며 프로그래밍에 대한 기초 기식을
          쌓았습니다. 여러 기술들을 스스로 학습하는 과정에서 다양한 언어와
          기술들에 관심이 생겼고 새로운 지식을 습득하는 즐거움을 발견했습니다.
        </Box>
        <Box className={"skills-body-title2"}>
          <strong>jdk 17 api document</strong>와 <strong>chat gpt</strong>를
          적극 활용해 문제를 해결했습니다.
        </Box>
        <Box className={"skills-body-progress"}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={"skills-block"}
          >
            <Box className={"skills-block-title"} color={"#0073bc"}>
              JAVA
            </Box>
            <Progress color={"#0073bc"} progress={"60%"} />
            <Box className={"skills-block-content"}>
              앞으로 출시할 jdk lts 버전과의 원활한 마이그레이션과 jdk 8 이후
              추가된 기능들을 사용하고자 jdk 17을 사용했고 코딩테스트로 java에
              익숙해졌습니다.
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={"skills-block"}
          >
            <Box className={"skills-block-title"} color={"#69bc4d"}>
              SPRING BOOT
            </Box>
            <Progress color={"#69bc4d"} progress={"50%"} />
            <Box className={"skills-block-content"}>
              spring을 사용하기 위해 was를 설정해야 하지만 학습해야 할 양이
              방대하기에 spring boot를 사용했습니다. jdk 17 이후 버전과 호환되는
              3.x 버전을 사용했습니다. spring에 대한 학습을 꾸준히 진행할
              예정입니다.
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={"skills-block"}
          >
            <Box className={"skills-block-title"} color={"#f0db4e"}>
              JAVASCRIPT
            </Box>
            <Progress color={"#f0db4e"} progress={"30%"} />
            <Box className={"skills-block-content"}>
              백엔드 개발자가 되기 위해 java에 더 많은 투자를 했지만 node.js를
              통해 서버의 개발도 가능하다는 것을 인지하고 있어 추후 더 학습할
              예정입니다.
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={"skills-block"}
          >
            <Box className={"skills-block-title"} color={"#00d8fe"}>
              REACT
            </Box>
            <Progress color={"#00d8fe"} progress={"40%"} />
            <Box className={"skills-block-content"}>
              spa 프레임워크인 react는 초기 구동 속도는 느리지만 프로젝트의
              복잡도를 줄이고 부드러운 사이트를 만들기 위해 프로젝트에
              채택했습니다. 여러 라이브러리를 사용하기 쉽게 관리해주는 npm을
              활용했습니다.
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={"skills-block"}
          >
            <Box className={"skills-block-title"} color={"#f05030"}>
              GIT
            </Box>
            <Progress color={"#f05030"} progress={"35%"} />
            <Box className={"skills-block-content"}>
              프로젝트의 형상 관리를 위해 git을 사용했습니다. github을 활용하여
              협업을 진행하였습니다. 팀 프로젝트를 진행하면서 github내의 기능을
              온전히 활용하지 못 했지만 추후에는 적극 활용할 예정입니다.
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={"skills-block"}
          >
            <Box className={"skills-block-title"} color={"#f68e09"}>
              AWS
            </Box>
            <Progress color={"#f68e09"} progress={"20%"} />
            <Box className={"skills-block-content"}>
              aws의 ec2를 이용해 프로젝트 배포 중에 있습니다. 프로젝트에는
              rds(mariadb), s3를 이용했습니다. aws의 방대한 기능과 설정을
              이해하고 사용하기 위해 꾸준히 학습하겠습니다.
            </Box>
          </motion.div>
        </Box>
      </Box>
    </>
  );
}

export default Skills;
