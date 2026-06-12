/* ============================================================
   YOUR RESEARCH & WORKING PAPERS LIVE IN THIS FILE.
   To add a new paper, copy one of the blocks between { ... },
   paste it at the TOP of the list (papers show in this order),
   and edit the fields. See HOW_TO_UPDATE.md for a walkthrough.

   Fields:
     title       - paper title (required)
     status      - badge text, e.g. "In Progress", "Working Paper",
                   "Writing Sample", "Research Assistant"
     period      - time range shown under the title
     people      - advisors / coauthors line; you may use
                   <a href="...">links</a> inside it
     description - 1-4 sentences; <a> links are allowed too
     pdf         - path or URL to the paper PDF, or null if none
     pdfLabel    - optional text for the PDF button (default "PDF")
     note        - optional highlighted line (e.g. an award); or null

   There are TWO lists in this file:
     papers     - the "Research & Working Papers" section
     coursework - the "Coursework" section (same fields)
   ============================================================ */

const papers = [
  {
    title: "Learning about the Turnover in Ethiopia",
    status: "In Progress",
    period: "Jun 2024 – present",
    people: 'with <a href="https://www.qihangwu.com/" target="_blank" rel="noopener">David Qihang Wu</a> (Harvard University)',
    description: "The turnover rate has consistently remained at a high level in the manufacturing industry in Ethiopia. We study whether temporary income shocks lead to an increase in early turnover. My work includes constructing the datasets, preliminary regression analysis, and initial GIS analysis, making extensive use of string processing and large language models (LLMs).",
    pdf: null,
    note: null,
  },
  {
    title: "Introducing Capital Friction to Spatial DSGE Model",
    status: "In Progress",
    period: "Feb 2024 – present",
    people: 'advised by Professor <a href="https://xuzhiwei09.wixsite.com/econ" target="_blank" rel="noopener">Zhiwei Xu</a> (Fudan University)',
    description: "Building on the dynamic spatial general equilibrium model of Kleinman, Liu and Redding (2023), I incorporate capital frictions — liquidity constraints and monetary assets — into landlord decisions and construct a DSGE model to examine the impact and impulse responses of the spatial distribution of trade and migration. Methods include dynamic exact hat algebra and spectral analysis.",
    pdf: null,
    note: null,
  },
  {
    title: "Developing Two Chapters in a Textbook of Labor Economics",
    status: "Research Assistant",
    period: "Jan 2024 – Feb 2024",
    people: 'RA for Professor <a href="https://econ.fudan.edu.cn/info/1028/14229.htm" target="_blank" rel="noopener">Hong Song</a> (Fudan University)',
    description: "I developed two textbook chapters on the impact of AI and automation on the labor market: a detailed literature review, plus an undergraduate-accessible version of the Acemoglu and Restrepo (2018) model that simplifies the general-equilibrium discussion and emphasizes economic intuition over mathematical derivation.",
    pdf: null,
    note: null,
  },
  {
    title: "The Effect of Releasing the Only-Child Policy on Household Saving in China: Evidence and Mechanisms",
    status: "Writing Sample",
    period: "Aug 2023 – Dec 2023 · UC Berkeley",
    people: "independent research at UC Berkeley, with guidance from Gerard Roland and David Wu",
    description: "Using the 2016 universal two-child policy as an exogenous shock, I build a 2012–2018 panel from original CFPS data and apply a difference-in-differences design. Relaxing the one-child policy raised the household savings rate by 5.5%, with effects concentrated among low-income families — suggesting saving in preparation for future childbirth as the key mechanism.",
    pdf: "assets/OCP.pdf",
    note: "Outstanding paper, National Training Base Conference for Foundational Talent in Economics (Ministry of Education); Second prize for Outstanding Undergraduate Academic Paper (best among junior students), School of Economics, Fudan University.",
  },
  {
    title: "How does Education Affect Income Inequality?",
    status: "Writing Sample",
    period: "May 2023",
    people: "independent research (paper in Chinese)",
    description: "I develop a household-level OLG model with the choice of continuing high-school education, capturing how family education decisions perpetuate social immobility. A simultaneous-equation model estimated by 3SLS confirms that education exacerbated income inequality through several channels against the backdrop of income growth.",
    pdf: "assets/Edu&Income.pdf",
    note: null,
  },
];

const coursework = [
  {
    title: "Report on Industrial Economics",
    status: "Coursework",
    period: "May 2024",
    people: "with Shan Huang",
    description: "A case study of Laplace New Energy Technology Co., Ltd. and the dynamics of China's photovoltaic cell industry. I was responsible for the sections on the photovoltaic equipment manufacturing industry, the company, and the models, as well as all figures and charts. (Report in Chinese.)",
    pdf: "assets/IO_Project.pdf",
    pdfLabel: "Report",
    note: null,
  },
  {
    title: "Presentation on Labor Economics",
    status: "Coursework",
    period: "Apr 2024",
    people: "with Guanxi Li",
    description: "A detailed literature review on the impact of US–China trade on the US labor market, covering the progression from Autor, Dorn and Hanson (2013) through Caliendo, Dvorkin and Parro (2019) to Kleinman, Liu and Redding (2023). I was responsible for all the theoretical parts.",
    pdf: "assets/Labor_Pre_Slides.pdf",
    pdfLabel: "Slides",
    note: null,
  },
];
