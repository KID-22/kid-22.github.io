(function () {
  var surveys = [
    {
      paperUrl: "https://llm-ir-bias-fairness.github.io/",
      title: "Bias and Unfairness in Information Retrieval Systems: New Challenges in the LLM Era",
      authors: "<b>Sunhao Dai</b>, Chen Xu, Shicheng Xu, Liang Pang, Jun Xu, Zhenhua Dong",
      note: "KDD 2024, WSDM 2025, SIGIR-AP 2025 &nbsp;&nbsp; <a href=\"https://llm-ir-bias-fairness.github.io/\" target=\"_blank\">Website</a> &nbsp;&nbsp; <a href=\"https://llm-ir-bias-fairness.github.io/assets/files/survey.pdf\" target=\"_blank\">Survey</a> &nbsp;&nbsp; <a href=\"https://llm-ir-bias-fairness.github.io/assets/files/slides.pdf\" target=\"_blank\">Slides</a>"
    },
    {
      paperUrl: "https://link.springer.com/article/10.1007/s11704-024-40678-2",
      title: "Tool Learning with Large Language Models: A Survey",
      authors: "Changle Qu, <b>Sunhao Dai</b>, Xiaochi Wei, Hengyi Cai, Shuaiqiang Wang, Dawei Yin, Jun Xu, Ji-Rong Wen",
      note: "Frontiers of Computer Science (FCS) &nbsp;&nbsp; <a href=\"https://arxiv.org/abs/2405.17935\" target=\"_blank\">Survey</a>"
    },
    {
      paperUrl: "https://link.springer.com/article/10.1007/s11704-024-40678-2",
      title: "Large Language Model Sourcing: A Survey",
      authors: "Liang Pang, Jia Gu, <b>Sunhao Dai</b>, Zihao Wei, Zenghao Duan, Kangxi Wu, Zhiyi Yin, Jun Xu, Huawei Shen, Xueqi Cheng",
      note: "<a href=\"https://arxiv.org/pdf/2510.10161\" target=\"_blank\">Survey</a>"
    }
  ];

  function renderItem(item) {
    return [
      "<table><tbody><tr>",
      "  <td class=\"left\"><a href=\"" + item.paperUrl + "\" target=\"_blank\"><img src=\"./images/pdf.png\" width=\"25\" height=\"25\"><br>pdf</a></td>",
      "  <td>",
      "    <span class=\"title\">" + item.title + "</span>",
      "    <br>" + item.authors,
      "    <br>" + item.note,
      "  </td>",
      "</tr></tbody></table>"
    ].join("\n");
  }

  function initSurveys() {
    var list = document.getElementById("surveys-and-tutorials-list");
    if (!list) {
      return;
    }

    var html = ["<h2 style=\"CLEAR: both;\">Surveys and Tutorials</h2>"];
    for (var i = 0; i < surveys.length; i += 1) {
      html.push(renderItem(surveys[i]));
    }
    list.innerHTML = html.join("\n");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSurveys);
  } else {
    initSurveys();
  }
}());
