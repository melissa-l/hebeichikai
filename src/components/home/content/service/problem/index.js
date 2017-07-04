/**
 * Created by qoder on 16/7/22.
 */
import React, {Component} from 'react';
import './index.css';


const problems = [
  {
    title: '常见问题',
    problem: [
      {
        question: "在哪些渠道可以购买智能锁?",
        answer: "您好，目前官方在京东商城，淘宝均有售卖。具体售卖详情请关注官方微博与微信。"
      },
      {
        question: "智能锁的安装是否免费？",
        answer: "您好，智能锁在签收后24小时内将免费上门安装"
      },
      {
        question: "智能锁使用什么供电，功耗怎么样?",
        answer: "智能锁采用4节5号干电池供电，可使用2年。"
      },
      {
        question: "智能锁需不需要换锁体?",
        answer: "我们公司提供各种标准的锁体，但有几款离合面板结构的智能锁安装时无需更换锁体。"
      },
      {
        question: "蓝牙智能锁的售后服务有哪些?",
        answer: "智能锁7天包退，一年包换，三年保修，具体参考售后服务条款。"
      }
    ]
  }
];

const problemElement = problems.map((problem, index)=> {
  return (
    <div key={index}>
      <div className="problem-main">
        {
          problem.problem.map((each, index)=> {
            return (
              <dl key={index}>
                <dt><span className="icon"></span>{each.question}</dt>
                <dd>答:{each.answer}</dd>
              </dl>
            )
          })
        }
      </div>
    </div>
  )
});


class Problem extends Component {
  render() {
    return (
      <div className="common-problem">
        <div className="common-problem-banner"></div>
        {problemElement}
      </div>
    )
  }
}

export  default Problem;
