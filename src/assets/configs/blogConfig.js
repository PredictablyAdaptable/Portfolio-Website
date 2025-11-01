import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { SiMedium } from "react-icons/si";
import fastapiSklearn from "../images/fastapi_sklearn.png";

const blogConfig = [
  {
    id: "blog-5",
    title: "Growth & Marketing Data Science Fundamentals",
    category: { en: "Marketing Science", kr: "마케팅 사이언스" },
    description_i18n: {
      en: "Three Approaches to Measuring Paid Advertising: Incrementality Testing, Marketing Mix Modeling (MMM), and Attribution Analysis.",
      kr: "유료 광고 효과 측정의 세 가지 접근법: 인크리멘털리티 테스트, 마케팅 믹스 모델링(MMM), 그리고 기여도 분석."
    },
    links: [{ name: "article", url: "https://towardsdatascience.com/how-to-solve-scheduling-problems-in-python-36a9af8de451", icon: <SiMedium/> }],
    image: "https://miro.medium.com/max/700/1*VKIGzmJrYBzcPlB6USx8OA.jpeg",
    target: "_blank",
    date: "2020-07-01"
  },
  {
    id: "blog-4",
    title: "Building Causal MMMs: Making Regression Models as Credible as Randomized Experiments",
    category: { en: "Marketing Science", kr: "마케팅 사이언스" },
    description_i18n: {
      en: "A practical guide to enhancing Marketing Mix Models using experimental results as Bayesian priors—bridging regression and real-world causality.",
      kr: "실험 결과를 베이지안 사전분포로 활용; MMM 인과성을 강화하는 가이드."
    },
    links: [{ name: "article", url: "https://towardsdatascience.com/evolutionary-feature-selection-for-machine-learning-7f61af2a8c12", icon: <SiMedium/> }],
    image: "https://miro.medium.com/max/1400/1*hgFe2YFnwzt_K2TfE7aSrQ.jpeg",
    target: "_blank",
    date: "2020-03-10"
  },
  {
    id: "blog-3",
    title: "Lifecycle Marketing: Translating Customer Data into Business Growth",
    category: { en: "Marketing Science", kr: "마케팅 사이언스" },
    description_i18n: {
      en: "Lifecycle Marketing: From Customer Funnels to Industry-Specific KPI Frameworks.",
      kr: "라이프사이클 마케팅: 고객 퍼널의 기본 구조부터 산업별 KPI 프레임워크."
    },
    links: [{ name: "article", url: "https://towardsdatascience.com/adaptive-parameters-methods-for-machine-learning-6f7101a9a71", icon: <SiMedium/> }],
    image: "https://miro.medium.com/max/700/1*DeZYSLcMdF58BeqemGhUhg.jpeg",
    target: "_blank",
    date: "2020-05-15"
  },
  {
    id: "blog-2",
    title: "Experimentating in Multi-Sided Platforms: Designing Safe Tests and Balancing Cross-Side Effects",
    category: { en: "Business Theory", kr: "비즈니스 이론" },
    description_i18n: {
      en: "Optimizing across platform effects. This post explains how to design safe experiments, set guardrails, and interpret results amid cross-side interactions.",
      kr: "플랫폼 간 효과를 최적화하기 위한 접근. 이 글에서는 안전한 실험 설계, 가드레일 설정, 그리고 교차 상호작용 속 결과 해석 방법."
    },
    links: [
      { name: "article", url: "https://towardsdatascience.com/real-time-anomaly-detection-with-apache-kafka-and-python-3a40281c01c9", icon: <SiMedium/> },
      { name: "repo", url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection", icon: <AiFillGithub/> }
    ],
    image: "https://miro.medium.com/max/1400/1*Xem1rbG0Fa8DAhtez7mvsA.jpeg",
    target: "_blank",
    date: "2019-12-05"
  },
  {
    id: "blog-1",
    title: "CUPED, Stratification, and Beyond: Modern Ways to Shrink Variance in Experiments",
    category: { en: "Marketing Science", kr: "마케팅 사이언스" },
    description_i18n: {
      en: "Reducing variance is key to faster, more reliable experimentation. This post explores modern techniques like CUPED and stratification to improve test sensitivity and precision.",
      kr: "분산 축소는 빠르고 신뢰성 있는 실험을 위한 핵심이다. 이 글에서는 CUPED와 층화 기법 등 현대적 방법을 통해 테스트의 민감도와 정밀도를 높이는 방법"
    },
    links: [
      { name: "article", url: "https://medium.com/analytics-vidhya/manage-your-machine-learning-lifecycle-with-mlflow-in-python-d678d5f3c682", icon: <SiMedium/> },
      { name: "repo", url: "https://github.com/rodrigo-arenas/mlflow-basics", icon: <AiFillGithub/> }
    ],
    image: "https://miro.medium.com/max/1400/1*FhKrMpcUPeZxNsZpKNv4BA.png",
    target: "_blank",
    date: "2019-05-12"
  },
  {
    id: "blog-0",
    title: "AA/BB Testing? It's not a typo!",
    category: { en: "Research Methodologies", kr: "실험 설계" },
    description_i18n: {
      en: "AA/BB testing is a free guardrail for your experiments. It checks randomization and bias before real A/B tests.",
      kr: "AA/BB 테스트는 실험의 무작위화와 편향을 점검하는 무료 가드레일."
    },
    links: [{ name: "article", url: "https://towardsdatascience.com/workforce-planning-optimization-using-python-69af0ef9011a", icon: <SiMedium/> }],
    image: "https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",
    target: "_blank",
    date: "2019-03-07"
  }
];

export default blogConfig;

