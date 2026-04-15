(function () {
  // Add each paper once. Set selected: true for the default Selected view;
  // set selected: false for papers that should only appear in Full view.
  // Template:
  // {
  //   year: "2026",
  //   selected: true,
  //   paperUrl: "https://...",
  //   title: "Paper Title",
  //   authors: "<b>Sunhao Dai</b>, Coauthor",
  //   venue: "Conference 2026"
  // },
  var publications = [
    {
      year: "2026",
      selected: true,
      paperUrl: "https://arxiv.org/abs/2604.04949",
      title: "Learning to Retrieve from Agent Trajectories",
      authors: "Yuqi Zhou#, <b>Sunhao Dai#*</b>, Changle Qu, Liang Pang, Jun Xu, Ji-Rong Wen",
      venue: "SIGIR 2026 (Full, Accepted Rate: 18.4%) # Equal Contribution <b>* Project Leader</b>"
    },
    {
      year: "2026",
      selected: false,
      paperUrl: "https://arxiv.org/abs/2508.05633?",
      title: "KuaiLive: A Real-time Interactive Dataset for Live Streaming Recommendation",
      authors: "Changle Qu, <b>Sunhao Dai</b>, Ke Guo, Liqin Zhao, Yanan Niu, Xiao Zhang, Jun Xu",
      venue: "SIGIR 2026 (Resource, Accepted Rate: 43.0%)"
    },
    {
      year: "2026",
      selected: false,
      paperUrl: "https://arxiv.org/abs/2601.10712",
      title: "MatchTIR: Fine-Grained Supervision for Tool-Integrated Reasoning via Bipartite Matching",
      authors: "Changle Qu, <b>Sunhao Dai</b>, Hengyi Cai, Jun Xu, Shuaiqiang Wang, Dawei Yin",
      venue: "ACL 2026 (Full, Accepted Rate: 19.0%)"
    },
    {
      year: "2026",
      selected: true,
      paperUrl: "https://arxiv.org/abs/2510.14967",
      title: "Information Gain-based Policy Optimization: A Simple and Effective Approach for Multi-Turn Search Agents",
      authors: "Guoqing Wang#, <b>Sunhao Dai#</b>, Guangze Ye#, Zeyu Gan, Wei Yao, Yong Deng, Xiaofeng Wu, Zhenzhe Ying",
      venue: "ICLR 2026 (Full, Accepted Rate: 27.4%) # Equal Contribution"
    },
    {
      year: "2025",
      selected: false,
      paperUrl: "https://arxiv.org/abs/2505.15810",
      title: "GUI-G1: Understanding R1-Zero-Like Training for Visual Grounding in GUI Agents",
      authors: "Yuqi Zhou, <b>Sunhao Dai</b>, Shuai Wang, Kaiwen Zhou, Qinglin Jia, Jun Xu",
      venue: "NeurIPS 2025 (Full, Accepted Rate: 24.5%)"
    },
    {
      year: "2025",
      selected: false,
      paperUrl: "https://aclanthology.org/2025.findings-emnlp.511/",
      title: "Uplift-RAG: Uplift-Driven Knowledge Preference Alignment for Retrieval-Augmented Generation",
      authors: "Changle Qu, <b>Sunhao Dai</b>, Hengyi Cai, Yiyang Cheng, Jun Xu, Shuaiqiang Wang, Dawei Yin",
      venue: "EMNLP 2025 (Findings)"
    },
    {
      year: "2025",
      selected: true,
      paperUrl: "https://aclanthology.org/2025.emnlp-main.872/",
      title: "Media Source Matters More Than Content: Unveiling Political Bias in LLM-Generated Citations",
      authors: "<b>Sunhao Dai</b>, Zhanshuo Cao, Wenjie Wang, Liang Pang, Jun Xu, See-Kiong Ng, Tat-Seng Chua",
      venue: "EMNLP 2025 (Full, Accepted Rate: 22.2%)"
    },
    {
      year: "2025",
      selected: false,
      paperUrl: "https://aclanthology.org/2025.acl-long.1396/",
      title: "Length-Induced Embedding Collapse in PLM-based Models",
      authors: "Yuqi Zhou, <b>Sunhao Dai</b>, Zhanshuo Cao, Xiao Zhang, Jun Xu",
      venue: "ACL 2025 (Full, Accepted Rate: 20.3%)"
    },
    {
      year: "2025",
      selected: false,
      paperUrl: "https://aclanthology.org/2025.findings-acl.583/",
      title: "CitaLaw: Enhancing LLM with Citations in Legal Domain",
      authors: "Kepu Zhang, Weijie Yu, <b>Sunhao Dai</b>, Jun Xu",
      venue: "ACL 2025 (Findings)"
    },
    {
      year: "2025",
      selected: false,
      paperUrl: "https://dl.acm.org/doi/10.1145/3711896.3737105",
      title: "Revisiting Clustering of Neural Bandits: Selective Reinitialization for Mitigating Loss of Plasticity",
      authors: "Zhiyuan Su, <b>Sunhao Dai</b>, Xiao Zhang",
      venue: "KDD 2025 (Full, Accepted Rate: 18.4%)"
    },
    {
      year: "2025",
      selected: true,
      paperUrl: "https://dl.acm.org/doi/10.1145/3726302.3730353",
      title: "NExT-Search: Rebuilding User Feedback Ecosystem for Generative AI Search",
      authors: "<b>Sunhao Dai</b>, Wenjie Wang, Liang Pang, Jun Xu, See-Kiong Ng, Ji-Rong Wen, Tat-Seng Chua",
      venue: "SIGIR 2025 (Perspectives, Accepted Rate: 23.8%)"
    },
    {
      year: "2025",
      selected: true,
      paperUrl: "https://dl.acm.org/doi/10.1145/3726302.3730038",
      title: "Mitigating Source Bias with LLM Alignment",
      authors: "<b>Sunhao Dai</b>, Yuqi Zhou, Liang Pang, Zhuoyang Li, Zhaocheng Du, Gang Wang, Jun Xu",
      venue: "SIGIR 2025 (Full, Accepted Rate: 21.5%)"
    },
    {
      year: "2025",
      selected: false,
      paperUrl: "https://dl.acm.org/doi/10.1145/3726302.3729972",
      title: "Exploring the Escalation of Source Bias in User, Data, and Recommender System Feedback Loop",
      authors: "Yuqi Zhou, <b>Sunhao Dai</b>, Liang Pang, Gang Wang, Zhenhua Dong, Jun Xu, Ji-Rong Wen",
      venue: "SIGIR 2025 (Full, Accepted Rate: 21.5%)"
    },
    {
      year: "2025",
      selected: true,
      paperUrl: "https://openreview.net/forum?id=U1T6sq12uj",
      title: "Perplexity Trap: PLM-Based Retrievers Overrate Low-Perplexity Documents",
      authors: "Haoyu Wang#, <b>Sunhao Dai#</b>, Haiyuan Zhao, Liang Pang, Xiao Zhang, Gang Wang, Zhenhua Dong, Jun Xu, Ji-Rong Wen",
      venue: "ICLR 2025 (Full, Accepted Rate: 32.1%) &nbsp;&nbsp; # Equal Contribution"
    },
    {
      year: "2025",
      selected: true,
      paperUrl: "https://openreview.net/forum?id=QKBu1BOAwd",
      title: "From Exploration to Mastery: Enabling LLMs to Master Tools via Self-Driven Interactions",
      authors: "Changle Qu, <b>Sunhao Dai</b>, Xiaochi Wei, Hengyi Cai, Shuaiqiang Wang, Dawei Yin, Jun Xu, Ji-Rong Wen",
      venue: "ICLR 2025 (Full, Accepted Rate: 32.1%) &nbsp;&nbsp; <b><font color=\"red\">(Oral, 1.8%)</font></b>"
    },
    {
      year: "2025",
      selected: false,
      paperUrl: "https://doi.org/10.1145/3701716.3715245",
      title: "Few-shot LLM Synthetic Data with Distribution Matching",
      authors: "Jiyuan Ren, Zhaocheng Du, Zhihao Wen, Qinglin Jia, <b>Sunhao Dai</b>, Chuhan Wu, Zhenhua Dong",
      venue: "WWW 2025 (Industry Track, Accepted Rate: 22.4%)"
    },
    {
      year: "2025",
      selected: false,
      paperUrl: "https://ojs.aaai.org/index.php/AAAI/article/view/34418",
      title: "AdaO2B: Adaptive Online-to-Batch Conversion for Out-of-Distribution Generalization",
      authors: "Xiao Zhang, <b>Sunhao Dai</b>, Jun Xu, Yong Liu, Zhenhua Dong",
      venue: "AAAI 2025 (Full, Accepted Rate: 23.4%)"
    },
    {
      year: "2024",
      selected: false,
      paperUrl: "https://dl.acm.org/doi/10.1145/3627673.3679847",
      title: "Towards Completeness-Oriented Tool Retrieval for Large Language Models",
      authors: "Changle Qu, <b>Sunhao Dai</b>, Xiaochi Wei, Hengyi Cai, Shuaiqiang Wang, Dawei Yin, Jun Xu, Ji-Rong Wen",
      venue: "CIKM 2024 (Full, Accepted Rate: 22.7%)"
    },
    {
      year: "2024",
      selected: false,
      paperUrl: "https://dl.acm.org/doi/10.1145/3627673.3679643",
      title: "SAQRec: Aligning Recommender Systems to User Satisfaction via Questionnaire Feedback",
      authors: "Kepu Zhang, Teng Shi, <b>Sunhao Dai</b>, Xiao Zhang, Yinfeng Li, Jing Lu, Xiaoxue Zang, Yang Song, Jun Xu",
      venue: "CIKM 2024 (Full, Accepted Rate: 22.7%)"
    },
    {
      year: "2024",
      selected: true,
      paperUrl: "https://dl.acm.org/doi/10.1145/3637528.3671882",
      title: "Neural Retrievers are Biased Towards LLM-Generated Content",
      authors: "<b>Sunhao Dai</b>, Yuqi Zhou, Liang Pang, Weihao Liu, Xiaolin Hu, Yong Liu, Xiao Zhang, Gang Wang, Jun Xu",
      venue: "KDD 2024 (Full, Accepted Rate: 20.1%)"
    },
    {
      year: "2024",
      selected: false,
      paperUrl: "https://dl.acm.org/doi/10.1145/3637528.3671661",
      title: "Towards Robust Recommendation via Decision Boundary-Aware Graph Contrastive Learning",
      authors: "Jiakai Tang, <b>Sunhao Dai</b>, Zexu Sun, Xu Chen, Jun Xu, Wenhui Yu, Lantao Hu, Peng Jiang, Han Li",
      venue: "KDD 2024 (Full, Accepted Rate: 20.1%)"
    },
    {
      year: "2024",
      selected: false,
      paperUrl: "https://dl.acm.org/doi/10.1145/3637528.3671734",
      title: "Revisiting Reciprocal Recommender Systems: Metrics, Formulation, and Method",
      authors: "Chen Yang, <b>Sunhao Dai</b>, Yupeng Hou, Xin Zhao, Jun Xu, Yang Song, Hengshu Zhu",
      venue: "KDD 2024 (Full, Accepted Rate: 20.1%)"
    },
    {
      year: "2024",
      selected: true,
      paperUrl: "https://aclanthology.org/2024.findings-acl.421/",
      title: "Cocktail: A Comprehensive Information Retrieval Benchmark with LLM-Generated Documents Integration",
      authors: "<b>Sunhao Dai</b>, Weihao Liu, Yuqi Zhou, Liang Pang, Rongju Ruan, Gang Wang, Zhenhua Dong, Jun Xu, Ji-Rong Wen",
      venue: "ACL 2024 (Findings)"
    },
    {
      year: "2024",
      selected: false,
      paperUrl: "https://dl.acm.org/doi/10.1145/3626772.3657714",
      title: "Reinforcing Long-Term Performance in Recommender Systems with User-Oriented Exploration Policy",
      authors: "Changshuo Zhang, Sirui Chen, Xiao Zhang, <b>Sunhao Dai</b>, Weijie Yu, Jun Xu",
      venue: "SIGIR 2024 (Full, Accepted Rate: 20.2%)"
    },
    {
      year: "2024",
      selected: true,
      paperUrl: "https://dl.acm.org/doi/10.1145/3626772.3657936",
      title: "ReCODE: Modeling Repeat Consumption with Neural ODE",
      authors: "<b>Sunhao Dai</b>, Changle Qu, Sirui Chen, Xiao Zhang, Jun Xu",
      venue: "SIGIR 2024 (Short, Accepted Rate: 24.0%) &nbsp;&nbsp; <b><font color=\"red\">(Best Short Paper Nominee)</font></b>"
    },
    {
      year: "2024",
      selected: true,
      paperUrl: "https://ieeexplore.ieee.org/document/10598060/",
      title: "Modeling User Attention in Music Recommendation",
      authors: "<b>Sunhao Dai</b>, Ninglu Shao, Jieming Zhu, Xiao Zhang, Zhenhua Dong, Jun Xu, Quanyu Dai, Ji-Rong Wen",
      venue: "ICDE 2024 (Full, Accepted Rate: 22.8%)"
    },
    {
      year: "2023",
      selected: true,
      paperUrl: "https://dl.acm.org/doi/10.1145/3583780.3614856",
      title: "Dually Enhanced Delayed Feedback Modeling for Streaming Conversion Rate Prediction",
      authors: "<b>Sunhao Dai</b>, Yuqi Zhou, Jun Xu, Ji-Rong Wen",
      venue: "CIKM 2023 (Full, Accepted Rate: 24.0%)"
    },
    {
      year: "2023",
      selected: true,
      paperUrl: "https://dl.acm.org/doi/10.1145/3604915.3610646",
      title: "Uncovering ChatGPT's Capabilities in Recommender Systems",
      authors: "<b>Sunhao Dai#</b>, Ninglu Shao#, Haiyuan Zhao#, Weijie Yu, Zihua Si, Chen Xu, Zhongxiang Sun, Xiao Zhang, Jun Xu",
      venue: "RecSys 2023 (LBR Track) &nbsp;&nbsp; # Equal Contribution &nbsp;&nbsp; <b><font color=\"red\">(Top-2 Most Cited in RecSys 2023, 2/195)</font></b>"
    },
    {
      year: "2022",
      selected: false,
      paperUrl: "https://dl.acm.org/doi/10.1145/3534678.3539393",
      title: "Counteracting User Attention Bias in Music Streaming Recommendation via Reward Modification",
      authors: "Xiao Zhang#, <b>Sunhao Dai#</b>, Jun Xu, Zhenhua Dong, Quanyu Dai, Ji-Rong Wen",
      venue: "KDD 2022 (Full, Accepted Rate: 15.0%) &nbsp;&nbsp; # Equal Contribution"
    }
  ];

  function renderPaper(paper) {
    return [
      "<table class=\"publication\" data-selected=\"" + (paper.selected ? "true" : "false") + "\"><tbody><tr>",
      "  <td class=\"left\"><a href=\"" + paper.paperUrl + "\" target=\"_blank\"><img src=\"./images/pdf.png\" width=\"25\" height=\"25\"><br>pdf</a></td>",
      "  <td>",
      "    <span class=\"title\">" + paper.title + "</span>",
      "    <br>" + paper.authors,
      "    <br>" + paper.venue,
      "  </td>",
      "</tr></tbody></table>"
    ].join("\n");
  }

  function renderHeading(view) {
    if (view === "full") {
      return [
        "<div class=\"publication-heading\">",
        "  <h2 style=\"CLEAR: both;\">Full Publication <span class=\"publication-link\">[<a href=\"./index.html#papers\">Selected</a>]</span></h2>",
        "</div>"
      ].join("\n");
    }

    return [
      "<div class=\"publication-heading\">",
      "  <h2 style=\"CLEAR: both;\">Selected Publication <span class=\"publication-link\">[<a href=\"./full_pub.html#papers\">Full</a>]</span></h2>",
      "</div>"
    ].join("\n");
  }

  function renderPublications(view) {
    var html = [
      renderHeading(view),
      "",
      "<!-- Maintain each paper in files/publications.js. selected: true appears on index.html and full_pub.html; false appears only on full_pub.html. -->"
    ];
    var currentYear = "";

    for (var i = 0; i < publications.length; i += 1) {
      var paper = publications[i];
      if (view === "selected" && !paper.selected) {
        continue;
      }

      if (paper.year !== currentYear) {
        currentYear = paper.year;
        html.push("");
        html.push("<!-- =========================  " + currentYear + "  ========================= -->");
        html.push("<h3 class=\"pub-year\">In the Year of " + currentYear + ":</h3>");
      }
      html.push(renderPaper(paper));
    }

    return html.join("\n");
  }

  function initPublications() {
    var papers = document.getElementById("papers");
    var list = document.getElementById("publication-list");
    if (!papers || !list) {
      return;
    }

    var view = getRequestedPublicationView(papers);
    papers.setAttribute("data-publication-view", view);
    if (view === "full") {
      document.title = "Sunhao Dai's Full Publication";
    }
    list.innerHTML = renderPublications(view);
    normalizeFullPublicationUrl(view);
  }

  function getRequestedPublicationView(papers) {
    if (window.location.search && /[?&](publication|view)=full(&|$)/.test(window.location.search)) {
      return "full";
    }

    return papers.getAttribute("data-publication-view") === "full" ? "full" : "selected";
  }

  function normalizeFullPublicationUrl(view) {
    if (view !== "full" || !window.location.search || !/[?&](publication|view)=full(&|$)/.test(window.location.search)) {
      return;
    }

    if (!window.history || !window.history.replaceState) {
      return;
    }

    var fullPath = window.location.pathname.replace(/[^\/]*$/, "full_pub.html");
    try {
      window.history.replaceState(null, document.title, fullPath + (window.location.hash || "#papers"));
    } catch (error) {
      return;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPublications);
  } else {
    initPublications();
  }
}());
