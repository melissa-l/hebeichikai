/**
 * Created by qoder on 16-7-24.
 */
import React, {Component} from 'react';

class Annotation extends Component {
  render() {
    return (
      <dl>
        <dt><span className="icon"></span>注：</dt>
        <dd>1.&nbsp;&nbsp;附件、赠品，退换货时请一并退回，如有破损或丢失，将无法办理退换货。</dd>
        <dd>2.&nbsp;&nbsp;.客户违反以下条约时，将无法办理退换货。</dd>
        <dd className="blank">1）超过规定时限</dd>
        <dd className="blank">2）产品序列号被涂改、删除</dd>
        <dd className="blank">3）未经授权的修理、误用、疏忽、滥用、事故、改动、不正确的安装，或因个人使用不当造成的商品故障</dd>
        <dd className="blank">4）无法提供商品的购买凭证</dd>
        <dd className="blank">5）商品的外包装、附件、赠品、说明书不完整</dd>
        <dd className="blank">6）因捆绑销售或属于赠品的情况</dd>
        <dd className="blank">7）产品因意外因素或人为而损坏的，如输入不合适的电压、遭受雷击、高温、进水、机械破坏、摔坏、产品严重氧化或生锈等</dd>
        <dd className="blank">8）产品因不可抗拒的自然力量如地震、火灾等造成的损坏</dd>
        <dd className="blank">9）其他依法不应办理退换货的</dd>
      </dl>
    )
  }
}
export  default  Annotation;
