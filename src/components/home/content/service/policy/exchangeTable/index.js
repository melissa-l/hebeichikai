/**
 * Created by qoder on 16-7-24.
 */
import React, {Component} from 'react';
import './index.css';

class ExchangeTable extends Component {
  render() {
    return (
      <table border="1" cellSpacing="0" summary="" cellPadding="0" align="center">
        <thead>
        <tr>
          <th width="5%" noWrap="nowrap">
            <div align="center"><strong>退换类别</strong></div>
          </th>
          <th width="5%" noWrap="nowrap">
            <div align="center"><strong>期限</strong></div>
          </th>
          <th width="60%" noWrap="nowrap">
            <div align="center"><strong>具体描述</strong></div>
          </th>
          <th width="10%" noWrap="nowrap">
            <div align="center"><strong>备注</strong></div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td rowSpan="3" noWrap="nowrap">
            <div align="center">退机</div>
          </td>
          <td rowSpan="3" noWrap="nowrap">
            <div align="center">7天</div>
          </td>
          <td>
            <div align="left">商品功能性故障或商品质量问题 （经售后鉴定人员鉴定确认属于商品质量问题。）</div>
          </td>

          <td>
            <div align="center">以实际签收日期为准</div>
          </td>
        </tr>
        <tr>
          <td>
            <div align="left">因物流运输导致商品损坏、残缺，无法正常使用；实际收到的商品附件与网页介绍包装清单中的内容不符；实际收到的商品实物与网页介绍规格参数中的内容不符。</div>
          </td>

          <td>
            <div align="center">以实际签收日期为准</div>
          </td>
        </tr>
        <tr>
          <td>
            <div align="left">除以上两种原因之外，如个人原因（不喜欢、买错型号、达不到预期效果）导致的退货，需保持商品及包装为出售时原状、配件齐全、证件齐全，且不影响二次销售</div>
          </td>
          <td>
            <div align="center">以实际签收日期为准</div>
          </td>
        </tr>
        <tr>
          <td rowSpan="2">
            <div align="center">换货</div>
          </td>
          <td rowSpan="2">
            <div align="center">一年</div>
          </td>
          <td>
            <div align="left">商品功能性故障或商品质量问题 （经售后鉴定人员鉴定确认属于商品质量问题。）</div>
          </td>
          <td>
            <div align="center">以实际签收日期为准</div>
          </td>
        </tr>
        <tr>
          <td>
            <div align="left">个人原因产生的换货，需保持商品及包装为出售时原状、配件齐全、证件齐全，且不影响二次销售</div>
          </td>
          <td>
            <div align="center">以实际签收日期为准</div>
          </td>
        </tr>
        <tr>
          <td rowSpan="2">
            <div align="center">保修</div>
          </td>
          <td rowSpan="2">
            <div align="center">三年</div>
          </td>
          <td>
            <div align="left">商品功能性故障或商品质量问题</div>
          </td>
          <td>
            <div align="center">以实际签收日期为准</div>
          </td>
        </tr>

        </tbody>
      </table>
    )
  }
}

export default ExchangeTable;
