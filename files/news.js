(function () {
  // Add new items at the top. The text field may contain small HTML snippets
  // such as links, bold text, or red highlights.
  // Template:
  // {
  //   date: "1 Jan 2026",
  //   text: "News content."
  // },
  var newsItems = [
    {
      date: "24 May 2026",
      text: "Our VenusBench-Mobile is selected as a <b><font color=\"red\">Oral (0.7%)</font></b> presentation at ICML 2026."
    },
    {
      date: "17 May 2026",
      text: "Two papers about reasoning for industrial ranking systems and unified multi-task ranking architecture are accepted by KDD 2026 Ads track."
    },
    {
      date: "16 May 2026",
      text: "One paper about interactive recommendation agents is accepted by KDD 2026. Congratulations to Jiakai!"
    },
    {
      date: "14 May 2026",
      text: "Our paper about latent reasoning for sequential recommendation is accepted by TKDE 2026. Congratulations to Jiakai!"
    },
    {
      date: "1 May 2026",
      text: "One paper about mobile GUI agents is accepted by ICML 2026 and selected as a <b><font color=\"black\">Spotlight Paper (2.2%)</font></b>."
    },
    {
      date: "6 April 2026",
      text: "One paper about tool-integrated reasoning is accepted by ACL 2026. Congratulations to Changle!"
    },
    {
      date: "3 April 2026",
      text: "Two papers are accepted by SIGIR 2026 (1 Main and 1 Resource), about agent native search and live recommendation dataset. Congratulations to Yuqi and Changle!"
    },
    {
      date: "26 Jan 2026",
      text: "One paper about agentic RL in search agent is accepted by ICLR 2026. Congratulations to Guoqing!"
    },
    {
      date: "24 Nov 2025",
      text: "I am honored to receive the <b><font color=\"red\">ByteDance Scholarship</font></b> 2025 (20 students in China and Singapore)!"
    },
    {
      date: "19 Sep 2025",
      text: "One paper about GUI-Agent is accepted by NeurIPS 2025. Congratulations to Yuqi!"
    },
    {
      date: "21 Aug 2025",
      text: "Two papers are accepted by EMNLP 2025 (1 Main and 1 Findings), about LLM citation bias and reranking for RAG."
    },
    {
      date: "15 May 2025",
      text: "Two papers are accepted by ACL 2025 (1 Main and 1 Findings), about length collapse in embedding models and LLM citation in legal domain."
    },
    {
      date: "14 May 2025",
      text: "One paper about clustering of neural bandits is accepted by KDD 2025. Congratulations to Zhiyuan (third-year undergraduate) on his first first-author paper!"
    },
    {
      date: "5 April 2025",
      text: "Three papers are accepted by SIGIR 2025 (2 Full and 1 Perspectives), about source bias and generative AI search. Congratulations to Yuqi on his first first-author paper!"
    },
    {
      date: "28 Mar 2025",
      text: "Check out our <a href=\"https://arxiv.org/abs/2503.22675\" target=\"_blank\">new work</a> about reasoning for sequential recommendation, which can potentially lift performance ceilings by 30%-50%."
    },
    {
      date: "11 Feb 2025",
      text: "Our ICLR 2025 paper about LLM tool learning is selected as an <b><font color=\"red\">Oral</font></b> presentation (1.8%). Congratulations to Changle!"
    },
    {
      date: "23 Jan 2025",
      text: "Two papers are accepted by ICLR 2025, about LLM tool learning and perplexity trap in PLM-based retrieval. Congratulations to Haoyu on his first first-author paper!"
    },
    {
      date: "23 Jan 2025",
      text: "One paper about synthetic data generation with LLMs is accepted by WWW 2025 Industry Track."
    },
    {
      date: "10 Dec 2024",
      text: "One paper about online to batch conversion for out-of-distribution generalization is accepted by AAAI 2025."
    },
    {
      date: "25 Sep 2024",
      text: "One survey about tool learning with LLMs is accepted by Frontiers of Computer Science."
    },
    {
      date: "16 July 2024",
      text: "Two papers are accepted by CIKM 2024, about tool retrieval and user satisfaction-oriented recommender systems. Congratulations to Changle and Kepu on their first first-author paper!"
    },
    {
      date: "15 July 2024",
      text: "Our short paper on repeated consumption modeling is honored as a <b><font color=\"red\">Best Short Paper Nominee</font></b> at SIGIR 2024. Thanks to all co-authors."
    },
    {
      date: "25 May 2024",
      text: "One tutorial about bias and unfairness in information retrieval systems is accepted by KDD 2024."
    },
    {
      date: "17 May 2024",
      text: "Three papers are accepted by KDD 2024, about source bias, reciprocal recommender systems, and robust graph recommendation."
    },
    {
      date: "16 May 2024",
      text: "One paper about retrieval benchmark with LLM-generated documents is accepted by Findings of ACL 2024."
    },
    {
      date: "26 Mar 2024",
      text: "Two papers are accepted by SIGIR 2024, one full paper about user-oriented exploration and one short paper on repeat consumption modeling."
    },
    {
      date: "8 Dec 2023",
      text: "One paper about user attention modeling in music recommendation is accepted by ICDE 2024."
    },
    {
      date: "5 Aug 2023",
      text: "One paper about delay feedback in CVR prediction is accepted by CIKM 2023."
    },
    {
      date: "22 July 2023",
      text: "One paper about LLM for recommendation is accepted by RecSys 2023 LBR Track."
    },
    {
      date: "19 May 2022",
      text: "One paper about user attention bias in music recommendation is accepted by KDD 2022."
    }
  ];

  function renderNewsItem(item) {
    return [
      "<b>" + item.date + "</b><br>",
      "<span class=\"easylink\">" + item.text + "</span><br><br>"
    ].join("\n");
  }

  function initNews() {
    var list = document.getElementById("news-list");
    if (!list) {
      return;
    }

    var html = [];
    for (var i = 0; i < newsItems.length; i += 1) {
      html.push(renderNewsItem(newsItems[i]));
    }
    list.innerHTML = html.join("\n");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNews);
  } else {
    initNews();
  }
}());
