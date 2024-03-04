import { Box, Breadcrumb, BreadcrumbItem, Tooltip } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import RelieveSkill from "./RelieveSkill";
import RelieveInfo from "./RelieveInfo";
import RelieveFlow from "./RelieveFlow";
import RelievePlan from "./RelievePlan";
import RelieveCapture from "./RelieveCapture";
import RelieveCheck from "./RelieveCheck";
import { useNavigate } from "react-router-dom";

function Relieve({ setPageName }) {
  const [nowShow, setNowShow] = useState("skill");

  const navigate = useNavigate();

  return (
    <>
      <Box className={"project-detail desktop-tablet-project-detail"}>
        {nowShow === "skill" && <RelieveSkill />}
        {nowShow === "info" && <RelieveInfo />}
        {nowShow === "flow" && <RelieveFlow />}
        {nowShow === "plan" && <RelievePlan />}
        {nowShow === "capture" && <RelieveCapture />}
        {nowShow === "check" && <RelieveCheck />}
        <Breadcrumb separator="-" className={"project-detail-nav"}>
          <BreadcrumbItem>
            <Tooltip label={"홈으로"} placement={"top"}>
              <Box
                onClick={() => {
                  setPageName("home");
                  navigate("/portfolio");
                }}
                cursor={"pointer"}
              >
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
            <Tooltip label={"Relieve"} placement={"top"}>
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
        <RelieveSkill />
        <RelieveInfo />
        <RelieveFlow />
        <RelievePlan />
        <RelieveCapture />
        <RelieveCheck />
      </Box>
    </>
  );
}

export default Relieve;
