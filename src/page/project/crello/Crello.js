import { Box, Breadcrumb, BreadcrumbItem, Tooltip } from "@chakra-ui/react";
import { useState } from "react";
import CrelloSkill from "./CrelloSkill";
import CrelloInfo from "./CrelloInfo";
import CrelloFlow from "./CrelloFlow";
import CrelloPlan from "./CrelloPlan";
import CrelloCheck from "./CrelloCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import CrelloCapture from "./CrelloCapture";
import { useNavigate } from "react-router-dom";

function Crello({ setPageName }) {
  const [nowShow, setNowShow] = useState("skill");

  const navigate = useNavigate();

  return (
    <>
      <Box className={"project-detail desktop-tablet-project-detail"}>
        {nowShow === "skill" && <CrelloSkill />}
        {nowShow === "info" && <CrelloInfo />}
        {nowShow === "flow" && <CrelloFlow />}
        {nowShow === "plan" && <CrelloPlan />}
        {nowShow === "capture" && <CrelloCapture />}
        {nowShow === "check" && <CrelloCheck />}
        <Breadcrumb separator="-" className={"project-detail-nav"}>
          <BreadcrumbItem>
            <Tooltip label={"홈으로"} placement={"top"}>
              <Box onClick={() => setPageName("home")} cursor={"pointer"}>
                🔴
              </Box>
            </Tooltip>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Tooltip label={"기술 스택"} placement={"top"}>
              <Box onClick={() => setNowShow("skill")} cursor={"pointer"}>
                {nowShow === "skill" ? "🔵" : "⚪"}
              </Box>
            </Tooltip>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Tooltip label={"프로젝트 개요"} placement={"top"}>
              <Box onClick={() => setNowShow("info")} cursor={"pointer"}>
                {nowShow === "info" ? "🔵" : "⚪"}
              </Box>
            </Tooltip>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Tooltip label={"아키택쳐"} placement={"top"}>
              <Box onClick={() => setNowShow("flow")} cursor={"pointer"}>
                {nowShow === "flow" ? "🔵" : "⚪"}
              </Box>
            </Tooltip>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Tooltip label={"기획"} placement={"top"}>
              <Box onClick={() => setNowShow("plan")} cursor={"pointer"}>
                {nowShow === "plan" ? "🔵" : "⚪"}
              </Box>
            </Tooltip>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Tooltip label={"Crello"} placement={"top"}>
              <Box onClick={() => setNowShow("capture")} cursor={"pointer"}>
                {nowShow === "capture" ? "🔵" : "⚪"}
              </Box>
            </Tooltip>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Tooltip label={"자체 평가"} placement={"top"}>
              <Box onClick={() => setNowShow("check")} cursor={"pointer"}>
                {nowShow === "check" ? "🔵" : "⚪"}
              </Box>
            </Tooltip>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box className={"project-detail mobile-project-detail"}>
        <Box
          position={"fixed"}
          top={"3%"}
          right={"6%"}
          zIndex={2}
          onClick={() => {
            setPageName("home");
            navigate("/portfolio");
          }}
        >
          <FontAwesomeIcon icon={faHouse} />
        </Box>
        <CrelloSkill />
        <CrelloInfo />
        <CrelloFlow />
        <CrelloPlan />
        <CrelloCapture />
        <CrelloCheck />
      </Box>
    </>
  );
}

export default Crello;
