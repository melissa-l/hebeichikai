/**
 *
 * Created by qoder on 16-10-13.
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import Test from './test';

const store = createStore();

function renderFullPage(html) {
  return `<!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>河北驰凯科技有限公司</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="description"
          content="河北驰凯科技有限公司创建于2016年，是一家集研发、生产、销售、服务为一体的现代化高新技术物联网企业。公司致力于打造中国手机智能门锁第一品牌，完成对中国传统锁具的改造，让每一个中国人都拥有“时尚、安全、便捷”的智能锁是我们不变的追求。驰凯科技专注于软件及硬件的研发，涵盖移动互联网、智能手机APP、光学密码、近场通信技术 (NFC)等市场领域，为客户提供安全便捷的智能家居安防产品">
    <meta name="keywords" content="河北驰凯,智能锁,蓝牙锁,光控锁,智能家电,河北驰凯官网,安全,智能"/>
  </head>
  <body>
  <div id="app">${html}</div>
  <!-- inject:js -->
  <script src='http://odr4tn94d.bkt.clouddn.com/assets/vendor.4cb70a59addab4cc91a6.js'></script>
  <script src='http://odr4tn94d.bkt.clouddn.com/assets/app.4cb70a59addab4cc91a6.js'></script>
  <!-- endinject -->
  </body>
  </html>
`
}

export default function render(req, res) {
  // const initialView = (
    {/*<Test/>*/}
  // );
  // const html = renderFullPage(renderToString(initialView));
  res.render('index');
}
