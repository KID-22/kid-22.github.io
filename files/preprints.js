(function () {
  var preprints = [
    {
      paperUrl: "https://arxiv.org/abs/2604.19859",
      title: "DR-Venus: Towards Frontier Edge-Scale Deep Research Agents with Only 10K Open Data",
      authors: "Venus Team, <b>Sunhao Dai</b> <b>(Project Leader)</b>, Yong Deng, Jinzhen Lin, Yusheng Song, Guoqing Wang, Xiaofeng Wu, Yuqi Zhou, Shuo Yang, Zhenzhe Ying, Zhanwei Zhang, Changhua Meng, Weiqiang Wang",
      note: "Technical Report (<b>SOTA Deep Research Agent under 10B parameters trained with only 10K open-source data, BrowseComp 29.1, BrowseComp-ZH 37.7</b>)"
    },
    {
      paperUrl: "https://arxiv.org/abs/2507.22879",
      title: "RecGPT Technical Report",
      authors: "Chao Yi#, Dian Chen#, Gaoyang Guo#, Jiakai Tang#, Jian Wu#, Jing Yu#, Mao Zhang#, <b>Sunhao Dai#</b>, Wen Chen#, Wenjun Yang#, Yuning Jiang#, Zhujin Gao#, Bo Zheng, Chi Li, Dimin Wang, Dixuan Wang, Fan Li, Fan Zhang, Haibin Chen, Haozhuang Liu, Jialin Zhu, Jiamang Wang, Jiawei Wu, Jin Cui, Ju Huang, Kai Zhang, Kan Liu, Lang Tian, Liang Rao, Longbin Li, Lulu Zhao, Na He, Peiyang Wang, Qiqi Huang, Tao Luo, Wenbo Su, Xiaoxiao He, Xin Tong, Xu Chen, Xunke Xi, Yang Li, Yaxuan Wu, Yeqiu Yang, Yi Hu, Yinnan Song, Yuchen Li, Yujie Luo, Yujin Yuan, Yuliang Yan, Zhengyang Wang, Zhibo Xiao, Zhixin Ma, Zile Zhou, Ziqi Zhang",
      note: "Technical Report # Core Contributors <b><font color=\"black\">(Fully Applied in Taobao)</font></b>"
    }
  ];

  function renderLink(url) {
    if (!url) {
      return "";
    }

    return "<a href=\"" + url + "\" target=\"_blank\"><img src=\"./images/pdf.png\" width=\"25\" height=\"25\"><br>pdf</a>";
  }

  function renderItem(item) {
    return [
      "<table><tbody><tr>",
      "  <td class=\"left\">" + renderLink(item.paperUrl) + "</td>",
      "  <td>",
      "    <span class=\"title\">" + item.title + "</span>",
      "    <br>" + item.authors,
      "    <br>" + item.note,
      "  </td>",
      "</tr></tbody></table>"
    ].join("\n");
  }

  function initPreprints() {
    var list = document.getElementById("preprints-list");
    if (!list) {
      return;
    }

    var html = ["<h2 style=\"CLEAR: both;\">Preprints</h2>"];
    for (var i = 0; i < preprints.length; i += 1) {
      html.push(renderItem(preprints[i]));
    }
    list.innerHTML = html.join("\n");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPreprints);
  } else {
    initPreprints();
  }
}());
