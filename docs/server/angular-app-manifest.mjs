
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: new Map([
['index.csr.html', {size: 190, hash: 'c0259dbd568fb5db44a4e0483f66132b7aae1ee90f3eb5143715c461cbfc2a21', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 190, hash: 'c0259dbd568fb5db44a4e0483f66132b7aae1ee90f3eb5143715c461cbfc2a21', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 7992, hash: 'fd6bebc4c0c4f9174235a82010d9404b85f0f3ed71543d29d84196f2ca425338', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
