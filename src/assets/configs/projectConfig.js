import { BiGitRepoForked } from "react-icons/bi";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { ImBook } from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png";
import kafkaMl from "../images/kafkaml.png";
import portfolio from "../images/portfolio.png";

import React from 'react';

const projectConfig = [
  {
    id: "project-7",
    title: "Conducting Priceing/Promotion Optimization Experiments",
    category: { en: "Tutorial", kr: "튜토리얼" },
    description_i18n: {
      en: "Tutorial:Iteratively Testing Multi-Dimensional Variations Around Estimated Optima to Identify the Most Effective Price-Promotion Mix.",
      kr: "튜토리얼: 추정된 최적값 주변의 다차원 변동을 반복적으로 테스트하여 가장 효과적인 가격-프로모션 조합을 식별하기."
    },
    links: [
      { name: "repo", url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt", icon: <AiFillGithub/> },
      { name: "fork", url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/fork", icon: <BiGitRepoForked/> },
      { name: "subscription", url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/subscription", icon: <AiFillEye/> },
      { name: "docs", url: "https://sklearn-genetic-opt.readthedocs.io/en/stable/", icon: <ImBook/> }
    ],
    image: sklearnGenetic,
    target: "_blank"
  },
  {
    id: "project-6",
    title: "Targetging Audiences in Paid Advertising Platforms",
    category: { en: "Tutorial", kr: "튜토리얼" },
    description_i18n: {
      en: "Tutorial: Understanding Platform-Level Targeting Capabilities, Hash Mapping lookalike audiences, and How to Interpret Platform Reporting.",
      kr: "튜토리얼: 플랫폼 수준의 타겟팅 기능 이해, 해시 매핑(Hash Mapping)과 같은 고급 기법, 그리고 플랫폼 리포팅 해석 방법"
    },
    links: [
      { name: "repo", url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt", icon: <AiFillGithub/> },
      { name: "fork", url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/fork", icon: <BiGitRepoForked/> },
      { name: "subscription", url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/subscription", icon: <AiFillEye/> },
      { name: "docs", url: "https://sklearn-genetic-opt.readthedocs.io/en/stable/", icon: <ImBook/> }
    ],
    image: sklearnGenetic,
    target: "_blank"
  },
  {
    id: "project-5",
    title: "Hiarchaical Bayesian MMM Framework",
    category: { en: "Tutorial", kr: "튜토리얼" },
    description_i18n: {
      en: "Tutorial: hierarchical Bayesian framework for Marketing Mix Modeling; when to use it, how to implement it with PyMC3, and how to interpret the results.",
      kr: "튜토리얼: 마케팅 믹스 모델링(MMM) 하이어컬 베이지언 프레임워크: 적용이 조건, PyMC3를 이용한 구현 방법, 그리고 결과 해석"
    },
    links: [
      { name: "repo", url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt", icon: <AiFillGithub/> },
      { name: "fork", url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/fork", icon: <BiGitRepoForked/> },
      { name: "subscription", url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt/subscription", icon: <AiFillEye/> },
      { name: "docs", url: "https://sklearn-genetic-opt.readthedocs.io/en/stable/", icon: <ImBook/> }
    ],
    image: sklearnGenetic,
    target: "_blank"
  },
  {
    id: "project-3",
    title: "Incrementality Testing Framework",
    category: { en: "Tutorial", kr: "튜토리얼" },
    description_i18n: {
      en: "Incrementality Testing, Synthetic Control, and Geo-Testing: Theory, Practical Implementation, and Interpreting Outcomes for Use in Marketing Mix Modeling (MMM).",
      kr: "광고의 증분효과를 측정, 합성통제, 지오테스팅: 이론, 적용 방법, 결과 해석 및 마케팅 믹스 모델링(MMM)에서의 활용법"
    },
    links: [
      { name: "repo", url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection", icon: <AiFillGithub/> },
      { name: "fork", url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/fork", icon: <BiGitRepoForked/> },
      { name: "subscription", url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/subscription", icon: <AiFillEye/> }
    ],
    image: kafkaMl,
    target: "_blank"
  },
  {
    id: "project-2",
    title: "Multi-arm Bandet Testing Framework",
    category: { en: "Tutorial", kr: "튜토리얼" },
    description_i18n: {
      en: "Multi-arm Bandet Testing: How to efficiently allocate user traffic to maximize conversions.",
      kr: "멀티암 밴딧 테스트: 전환율을 극대화하기 위한 사용자 트래픽 효율화 전략"
    },
    links: [
      { name: "repo", url: "https://github.com/rodrigo-arenas/pyworkforce", icon: <AiFillGithub/> },
      { name: "fork", url: "https://github.com/rodrigo-arenas/pyworkforce/fork", icon: <BiGitRepoForked/> },
      { name: "subscription", url: "https://github.com/rodrigo-arenas/pyworkforce/subscription", icon: <AiFillEye/> },
      { name: "docs", url: "https://pyworkforce.readthedocs.io/en/stable/", icon: <ImBook/> }
    ],
    image: "https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",
    target: "_blank"
  },
  {
    id: "project-1",
    title: "Customer Segmentation Framework",
    category: { en: "Tutorial", kr: "튜토리얼" },
    description_i18n: {
      en: "Customer Segmentation: Foundations from Cohort and Behavioral Analysis, Feature Design, and Unsupervised Learning Methods.",
      kr: "고객 세분화: 코호트·행동 분석의 기초부터 특성 설계와 비 지도 학습 기법."
    },
    links: [
      { name: "repo", url: "https://github.com/rodrigo-arenas/portfolio", icon: <AiFillGithub/> },
      { name: "fork", url: "https://github.com/rodrigo-arenas/portfolio/fork", icon: <BiGitRepoForked/> },
      { name: "subscription", url: "https://github.com/rodrigo-arenas/portfolio/subscription", icon: <AiFillEye/> }
    ],
    image: portfolio,
    target: "_blank"
  }
];

export default projectConfig;

