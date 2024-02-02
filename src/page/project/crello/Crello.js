import { Box, Breadcrumb, BreadcrumbItem, Tooltip } from "@chakra-ui/react";
import { useState } from "react";
import CrelloSkill from "./CrelloSkill";
import CrelloInfo from "./CrelloInfo";
import CrelloFlow from "./CrelloFlow";
import CrelloPlan from "./CrelloPlan";
import CrelloCheck from "./CrelloCheck";

function Crello() {
  const [nowShow, setNowShow] = useState("skill");

  return (
    <>
      <Box className={"project-detail desktop-tablet-project-detail"}>
        {nowShow === "skill" && <CrelloSkill />}
        {nowShow === "info" && <CrelloInfo />}
        {nowShow === "flow" && <CrelloFlow />}
        {nowShow === "plan" && <CrelloPlan />}
        {nowShow === "check" && <CrelloCheck />}
        <Breadcrumb separator="-" className={"project-detail-nav"}>
          <BreadcrumbItem>
            <Tooltip label={"기술 스택"} placement={"top"}>
              <Box onClick={() => setNowShow("skill")} cursor={"pointer"}>
                {nowShow === "skill" ? "🔵" : "⚪"}
              </Box>
            </Tooltip>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Tooltip label={"프로젝트"} placement={"top"}>
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
            <Tooltip label={"자체 평가"} placement={"top"}>
              <Box onClick={() => setNowShow("check")} cursor={"pointer"}>
                {nowShow === "check" ? "🔵" : "⚪"}
              </Box>
            </Tooltip>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box className={"project-detail mobile-project-detail"}>
        <CrelloSkill />
        <CrelloInfo />
        <CrelloFlow />
        <CrelloPlan />
        <CrelloCheck />
      </Box>
    </>
  );
}

export default Crello;
