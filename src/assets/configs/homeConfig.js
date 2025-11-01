import React from "react";
import { BsClipboardData } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { BiRocket } from "react-icons/bi"
import { FaGraduationCap } from "react-icons/fa";

const homeConfig = {
  greeting_i18n: {
    en: (
      <h1 className="heading">
        Hi! I'm <strong className="main-name"> Andy Seo</strong>
      </h1>
    ),
    kr: (
      <h1 className="heading">
        안녕하세요! 제 이름은 <strong className="main-name"> 서형민 (Andy Seo) 입니다</strong>
      </h1>
    ),
  },

  titles_i18n: {
    en: [
      "BI Analyst",
      "Open Source Contributor",
      "Data Analyst",
      "Data Scientist",
      "Marketing Scientist",
      "Korean",
      "Canadian"
    ],
    kr: [
      "데이터 스토리텔링",
      "데이터 분석",
      "모델링",
      "데이터 사이선스",
      "마케팅 사이언스"
    ],
  },

  about_i18n: {
    en: {
      start:
        "I have over five years of experience in data science and analytics, and a Masters in Behavioural Science — from leading measurement projects at Omnicom to driving business insights for an investment fund. I love learning, sharing ideas, and using data to make smarter decisions",
      exit:
        "I'm fluent at Python, R, SQL, dbt, BI tools, and more, with a deep interest in applying Data Science to grow businesses.",
    },
    kr: {
      start:
        "5년간 데이터 사이언스와 분석 분야에서 근무했으며, 경제심리학 석사 학위를 보유하고 있습니다. 오므니콤에서 마케팅 측정 프로젝트를 수행했고, 투자 펀드에서 비즈니스 인사이트를 도출했습니다. 데이터 분석을 기반으로 비즈니스 전략을 지원하는 데에 관심이 많습니다.",
      exit:
        "Python, R, SQL, dbt, BI 도구 등에 능숙하며, 데이터 사이언스를 비즈니스 성장에 적용하는 데 깊은 관심을 가지고 있습니다.",
    },
  },


  workTimeline: [
    {
      id: "work-5",
      title: "Marketing Data Science Consultant",
      title_i18n: { en: "Marketing Data Science Consultant", kr: "마케팅 데이터 컨설턴트" },
      company: "Realestate Solution",
      description_i18n: {
        en: "Optimize paid advertising through MMM & incrementality testing.",
        kr: "MMM과 인크리멘털리티 테스트 기반으로 유료 광고 효율 향상.",
      },
      date: "2025-Present",
      icon: <BiRocket />,
      tags: ["Marketing Science", "Incrementality Testing", "Audience Analytics", "Lifecycle Modeling"],
    },
    {
      id: "work-4",
      title: "Data Scientist",
      title_i18n: { en: "Data Scientist", kr: "데이터 과학" },
      company: "Omnicom Media Group",
      description_i18n: {
        en: "Built and executed multiple modeling cycles for MMM, incrementality testing, sentiment analysis, customer segmentation, and attribution analysis.",
        kr: "MMM, 인크리멘털리티 테스트, 감성 분석, 고객 세분화, 어트리뷰션 분석 등 다양한 모델링 사이클을 구축 및 수행함.",
      },
      date: "2022-2024",
      icon: <DiCodeigniter />,
      tags: ["Marketing Science", "Bayesian Statistics", "Unsupervised Clustering", "Causal Inference", "Geo-Experimentation"],
    },
    {
      id: "work-3",
      title: "Msc. Behavioural Science",
      title_i18n: { en: "Masters in Science", kr: "석사" },
      company: "London School of Economics",
      description_i18n: {
        en: "LSE Behavioural Lab 2nd Place, Research Assistant: Behavioural Lab, Graduate Merit Award.",
        kr: "LSE 행동연구소 2위, 연구조교: 행동연구소, 석사 우수 성적 수상",
      },
      date: "2020-2021",
      icon: <FaGraduationCap />,
      tags: ["Python", "Predictive Modeling", "Academic Research", "Emperical Research"],
    },
    {
      id: "work-2",
      title: "Research Data Analyst",
      title_i18n: { en: "Research Data Analyst", kr: "리서치 애널리스트" },
      company: "Cunningham Investment Group",
      description_i18n: {
        en: "Led end-to-end data modeling, dbt transformation workflows, BI dashboard reporting, and stakeholder reporting & communcation cycles.",
        kr: "dbt를 활용해 데이터 모델링과 분석 구조를 설계하고, BI 리포팅을 위한 표준화된 데이터셋을 구축했으며, 이해관계자 보고 및 커뮤니케이션 사이클을 end-to-end로 주도함.",
      },
      date: "2017-2020",
      icon: <FaMobileAlt />,
      tags: ["python", "SQL", "dbt", "dashbording", "snowflake", "postgres", "azure"],
    },
    {
      id: "work-1",
      title: "Product Data Analyst",
      title_i18n: { en: "Product Data Analyst", kr: "프로덕트 애널리스트" },
      company: "Scotiabank",
      description_i18n: {
        en: "Conducted consumer segmentation, product A/B testing, and hypothesis-driven experimentation to evaluate feature impact and optimize user engagement.",
        kr: "소비자 세분화, 프로덕트 A/B 테스트 및 가설 기반 실험 분석을 수행하여 기능 영향 평가와 사용자 참여도 향상을 추진함.",
      },
      date: "2016",
      icon: <BsClipboardData />,
      tags: ["R", "Product Experimentation", "Customer Segmentation", "excel"],
    },
    {
      id: "work-0",
      title: "Honors Business Administration",
      title_i18n: { en: "Undergraduates Degree", kr: "학사" },
      company: "Ivey Business School",
      description_i18n: {
        en: "Research Assistant: Dr. Yaqi Shi, Teaching Assistant: Dr. Athanassakos, Ivey Fund Fellow, 2nd place Robotti Co. Award, 1st place Fairfax award, Dean's List.",
        kr: "연구 조교: Dr. Shi, 강의 조교: Dr. Athanassakos, Ivey Fund 펠로우, Robotti Co. Award 2위, Fairfax award 1위, 학장 명예 리스트",
      },
      date: "2014-2018",
      icon: <FaGraduationCap />,
      tags: ["R", "SQL", "Academic Research", "Emperical Research"],
    },
  ],
};

export default homeConfig;
