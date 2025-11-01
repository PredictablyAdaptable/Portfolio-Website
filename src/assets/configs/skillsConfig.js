import {
  SiPython,
  SiR,
  SiPostgresql,
  SiSnowflake,
  SiDatabricks,
  SiGooglecloud,
  SiTableau,
  SiGoogleads,
  SiMeta,
  SiMicrosoft,
  SiChartdotjs,
  SiLooker,
  SiDbt
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { BiBarChartAlt2 } from "react-icons/bi";
import React from "react";
import StorageIcon from "@mui/icons-material/Storage";

const ICON_SIZE = 50;

const skillsConfig = {
  mainSkills: [
    { id: "skills-main-python", className: "skill-icon", icon: <SiPython size={ICON_SIZE} />, text: "Python" },
    { id: "skills-main-postgres", className: "skill-icon", icon: <SiR size={ICON_SIZE} />, text: "R" },
    { id: "skills-main-mssql", className: "skill-icon", icon: <SiPostgresql size={ICON_SIZE} />, text: "Postgres" },
    { id: "skills-main-docker", className: "skill-icon", icon: <GrMysql size={ICON_SIZE} />, text: "MySQL" },
    { id: "skills-main-azure", className: "skill-icon", icon: <SiDbt size={ICON_SIZE} />, text: "dbt" },
    { id: "skills-main-git", className: "skill-icon", icon: <FaGitAlt size={ICON_SIZE} />, text: "Git" }
  ],
  complementarySkills: [
    { id: "skills-comp-mysql", className: "skill-icon", icon: <StorageIcon sx={{ fontSize: ICON_SIZE }} />, text: "MSSQL" },
    { id: "skills-comp-redis", className: "skill-icon", icon: <SiSnowflake size={ICON_SIZE} />, text: "Snowflake" },
    { id: "skills-comp-bash", className: "skill-icon", icon: <SiDatabricks size={ICON_SIZE} />, text: "Databricks" },
    { id: "skills-comp-snowflake", className: "skill-icon", icon: <SiGooglecloud size={ICON_SIZE} />, text: "BigQuery" },
    { id: "skills-comp-airflow", className: "skill-icon", icon: <SiMeta size={ICON_SIZE} />, text: "Meta Ads Manager" },
    { id: "skills-comp-js", className: "skill-icon", icon: <SiGoogleads size={ICON_SIZE} />, text: "Google Ads" },
    { id: "skills-comp-css", className: "skill-icon", icon: <SiTableau size={ICON_SIZE} />, text: "Tableau" },
    { id: "skills-comp-html", className: "skill-icon", icon: <BiBarChartAlt2 size={ICON_SIZE} />, text: "PowerBi" },
    { id: "skills-comp-react", className: "skill-icon", icon: <SiLooker size={ICON_SIZE} />, text: "Looker" },
    { id: "skills-comp-kafka", className: "skill-icon", icon: <SiMicrosoft size={ICON_SIZE} />, text: "Azure" },
    { id: "skills-comp-powerbi", className: "skill-icon", icon: <SiChartdotjs size={ICON_SIZE} />, text: "Amplitude" }
  ]
};

export default skillsConfig;





