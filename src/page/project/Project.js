import { Box, Button, Image, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ColorStrong from "../../util/csscomp/ColorStrong";

function Project({ handleScroll }) {
  const [dref, dinView] = useInView();
  const [tref, tinView] = useInView();
  const [mref, minView] = useInView();

  useEffect(() => {
    if (dinView || tref || mref) handleScroll("project");
  }, [dinView, tinView, minView]);

  const handleButton = (path) => {
    window.open(`/portfolio/${path}`, "_blank");
  };

  return (
    <>
      <Box position={"relative"} className={"desktop-project"}>
        <motion.div
          ref={dref}
          initial={{ opacity: 0, x: "5%" }}
          whileInView={{ opacity: 1, x: "15%" }}
          transition={{ duration: 1 }}
          style={{
            fontWeight: "bolder",
          }}
          className={"project-header"}
        >
          <Box
            letterSpacing={"5px"}
            fontSize={"1rem"}
            color={"#8a8989"}
            mb={"10px"}
          >
            PROJECT
          </Box>
          🖥 저의 프로젝트들입니다.
        </motion.div>
        <Box className={"project-body-title"}>
          팀원들과 함께 고민하고 오류를 해결해 나아가는 과정이 즐거웠습니다.
          서로의 강점을 살려 문제를 해결하는 과정은 저에게 큰 자신감을
          부여했습니다. 팀 프로젝트를 통해 팀과 함께 일하는 것에 즐거움을
          느끼고, 서로에게 의존하며 결속력을 다졌습니다.
          <br />
          <br />
          앞으로의 프로젝트들도 꾸준히 진행하여 협업에 대한 이해를 높이고 제
          개인의 역량을 높이는데 최선을 다하겠습니다. 클라우드 기술에 대해
          심층적인 이해를 위해 AWS에 대해 깊게 학습하고, 이를 활용한 프로젝트를
          기획하고자 합니다.
          <br />
          <br />
          이러한 프로젝트들을 통해 팀원들과의 협업은 물론 다양한 기술 스택과
          도구에 대한 경험을 쌓고자 합니다. 또한, 새로운 도전을 두려워하지 않고
          문제에 대한 해결책을 모색하는 과정에서 저의 역량을 지속적으로 강화해
          나갈 것입니다.
        </Box>
        <Box className={"project-body-projects"}>
          <SimpleGrid columns={2} spacing={10}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className={"project-block"}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                src={`${process.env.PUBLIC_URL}/img/crello.png`}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className={"project-block"}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                src={`${process.env.PUBLIC_URL}/img/relieve.png`}
              />
            </motion.div>
          </SimpleGrid>
        </Box>
        <Box position={"absolute"} bottom={0} className={"project-body-cover"}>
          <SimpleGrid columns={2} spacing={10}>
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
              className={"project-block"}
            >
              <Box className={"project-block-content"}>
                현재 운영 중인 웹사이트 trello에 대한{" "}
                <ColorStrong color={"rgb(117,169,191)"}>
                  clone coding
                </ColorStrong>
                을 진행했습니다. Trello의 여러 기능 중 가장 기본이라 생각하는
                todo list 기능을 구현했습니다. 팀원들의 조기취업으로{" "}
                <ColorStrong color={"rgb(117,169,191)"}>
                  1인 프로젝트
                </ColorStrong>
                로 진행했지만 초기 기획에서 벗어나지 않고 프로젝트를
                완성했습니다.
              </Box>
              <Button
                ml={"85%"}
                mb={"3%"}
                size={"xs"}
                colorScheme={"blue"}
                onClick={() => handleButton("crello")}
              >
                자세히
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
              className={"project-block"}
            >
              <Box className={"project-block-content"}>
                음악을 좋아하는 5명이 모여 프로젝트를 진행했습니다. 음악을 듣는
                것이 주가 아닌{" "}
                <ColorStrong color={"rgb(98,63,161)"}>
                  음악에 대한 추억을 공유
                </ColorStrong>
                하고 소통하는 sns의 느낌이 강한 사이트를 만들고 싶었습니다.
                각자의 추억이 담긴 playlist를 공유하고 소통하는 relieve입니다.
              </Box>
              <Button ml={"85%"} mb={"3%"} size={"xs"} colorScheme={"blue"}>
                자세히
              </Button>
            </motion.div>
          </SimpleGrid>
        </Box>
      </Box>
      <Box position={"relative"} className={"tablet-project"}>
        <motion.div
          ref={tref}
          initial={{ opacity: 0, x: "5%" }}
          whileInView={{ opacity: 1, x: "15%" }}
          transition={{ duration: 1 }}
          style={{
            fontWeight: "bolder",
          }}
          className={"project-header"}
        >
          <Box
            letterSpacing={"5px"}
            fontSize={"1rem"}
            color={"#8a8989"}
            mb={"10px"}
          >
            PROJECT
          </Box>
          🖥 저의 프로젝트들입니다.
        </motion.div>
        <Box className={"project-body-title"}>
          팀원들과 함께 고민하고 오류를 해결해 나아가는 과정이 즐거웠습니다.
          서로의 강점을 살려 문제를 해결하는 과정은 저에게 큰 자신감을
          부여했습니다. 팀 프로젝트를 통해 팀과 함께 일하는 것에 즐거움을
          느끼고, 서로에게 의존하며 결속력을 다졌습니다.
          <br />
          <br />
          앞으로의 프로젝트들도 꾸준히 진행하여 협업에 대한 이해를 높이고 제
          개인의 역량을 높이는데 최선을 다하겠습니다. 클라우드 기술에 대해
          심층적인 이해를 위해 AWS에 대해 깊게 학습하고, 이를 활용한 프로젝트를
          기획하고자 합니다.
          <br />
          <br />
          이러한 프로젝트들을 통해 팀원들과의 협업은 물론 다양한 기술 스택과
          도구에 대한 경험을 쌓고자 합니다. 또한, 새로운 도전을 두려워하지 않고
          문제에 대한 해결책을 모색하는 과정에서 저의 역량을 지속적으로 강화해
          나갈 것입니다.
        </Box>
        <Box className={"project-body-projects"}>
          <SimpleGrid columns={2} spacing={10}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className={"project-block"}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                src={`${process.env.PUBLIC_URL}/img/crello.png`}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className={"project-block"}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                src={`${process.env.PUBLIC_URL}/img/relieve.png`}
              />
            </motion.div>
          </SimpleGrid>
        </Box>
        <Box position={"absolute"} bottom={0} className={"project-body-cover"}>
          <SimpleGrid columns={2} spacing={10}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
              className={"project-block"}
            >
              <Box className={"project-block-content"}>
                현재 운영 중인 웹사이트 trello에 대한{" "}
                <ColorStrong color={"rgb(117,169,191)"}>
                  clone coding
                </ColorStrong>
                을 진행했습니다. Trello의 여러 기능 중 가장 기본이라 생각하는
                todo list 기능을 구현했습니다. 팀원들의 조기취업으로{" "}
                <ColorStrong color={"rgb(117,169,191)"}>
                  1인 프로젝트
                </ColorStrong>
                로 진행했지만 초기 기획에서 벗어나지 않고 프로젝트를
                완성했습니다.
              </Box>
              <Button
                ml={"70%"}
                mb={"3%"}
                size={"xs"}
                colorScheme={"blue"}
                onClick={() => handleButton("crello")}
              >
                자세히
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
              className={"project-block"}
            >
              <Box className={"project-block-content"}>
                음악을 좋아하는 5명이 모여 프로젝트를 진행했습니다. 음악을 듣는
                것이 주가 아닌{" "}
                <ColorStrong color={"rgb(98,63,161)"}>
                  음악에 대한 추억을 공유
                </ColorStrong>
                하고 소통하는 sns의 느낌이 강한 사이트를 만들고 싶었습니다.
                각자의 추억이 담긴 playlist를 공유하고 소통하는 relieve입니다.
              </Box>
              <Button ml={"70%"} mb={"3%"} size={"xs"} colorScheme={"blue"}>
                자세히
              </Button>
            </motion.div>
          </SimpleGrid>
        </Box>
      </Box>
      <Box position={"relative"} className={"mobile-project"}>
        <motion.div
          ref={mref}
          initial={{ opacity: 0, x: "5%" }}
          whileInView={{ opacity: 1, x: "15%" }}
          transition={{ duration: 1 }}
          style={{
            fontWeight: "bolder",
          }}
          className={"project-header"}
        >
          <Box
            letterSpacing={"5px"}
            fontSize={"1rem"}
            color={"#8a8989"}
            mb={"10px"}
          >
            PROJECT
          </Box>
          🖥 저의 프로젝트들입니다.
        </motion.div>
        <Box className={"project-body-title"}>
          팀원들과 함께 고민하고 오류를 해결해 나아가는 과정이 즐거웠습니다.
          서로의 강점을 살려 문제를 해결하는 과정은 저에게 큰 자신감을
          부여했습니다. 팀 프로젝트를 통해 팀과 함께 일하는 것에 즐거움을
          느끼고, 서로에게 의존하며 결속력을 다졌습니다.
          <br />
          <br />
          앞으로의 프로젝트들도 꾸준히 진행하여 협업에 대한 이해를 높이고 제
          개인의 역량을 높이는데 최선을 다하겠습니다. 클라우드 기술에 대해
          심층적인 이해를 위해 AWS에 대해 깊게 학습하고, 이를 활용한 프로젝트를
          기획하고자 합니다.
          <br />
          <br />
          이러한 프로젝트들을 통해 팀원들과의 협업은 물론 다양한 기술 스택과
          도구에 대한 경험을 쌓고자 합니다. 또한, 새로운 도전을 두려워하지 않고
          문제에 대한 해결책을 모색하는 과정에서 저의 역량을 지속적으로 강화해
          나갈 것입니다.
        </Box>
        <Box className={"project-body-projects"}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className={"project-block"}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              src={`${process.env.PUBLIC_URL}/img/crello.png`}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className={"project-block"}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              src={`${process.env.PUBLIC_URL}/img/relieve.png`}
            />
          </motion.div>
        </Box>
        <Box position={"absolute"} bottom={0} className={"project-body-cover"}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
            className={"project-block"}
          >
            <Box className={"project-block-content"}>
              현재 운영 중인 웹사이트 trello에 대한{" "}
              <ColorStrong color={"rgb(117,169,191)"}>clone coding</ColorStrong>
              을 진행했습니다. Trello의 여러 기능 중 가장 기본이라 생각하는 todo
              list 기능을 구현했습니다. 팀원들의 조기취업으로{" "}
              <ColorStrong color={"rgb(117,169,191)"}>1인 프로젝트</ColorStrong>
              로 진행했지만 초기 기획에서 벗어나지 않고 프로젝트를 완성했습니다.
            </Box>
            <Button
              ml={"75%"}
              mb={"3%"}
              size={"xs"}
              colorScheme={"blue"}
              onClick={() => handleButton("crello")}
            >
              자세히
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
            className={"project-block"}
          >
            <Box className={"project-block-content"}>
              음악을 좋아하는 5명이 모여 프로젝트를 진행했습니다. 음악을 듣는
              것이 주가 아닌{" "}
              <ColorStrong color={"rgb(98,63,161)"}>
                음악에 대한 추억을 공유
              </ColorStrong>
              하고 소통하는 sns의 느낌이 강한 사이트를 만들고 싶었습니다. 각자의
              추억이 담긴 playlist를 공유하고 소통하는 relieve입니다.
            </Box>
            <Button ml={"75%"} mb={"3%"} size={"xs"} colorScheme={"blue"}>
              자세히
            </Button>
          </motion.div>
        </Box>
      </Box>
    </>
  );
}

export default Project;
