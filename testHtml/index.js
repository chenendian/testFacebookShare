function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
  let index = window.location.href.indexOf('?')
  let searchStr =  window.location.href.substring(index, window.location.href.length)
  var r = searchStr.substr(1).match(reg); 
  if (r != null) return unescape(r[2]); return null; 
}

let arr = [
  {
    property: 'og:url',
    content: getQueryString('Link')
  },
  {
    property: 'og:type',
    content: 'website'
  },
  {
    property: 'og:title',
    content: getQueryString('Title')
  },
  {
    property: 'og:description',
    content: getQueryString('SubTitle')
  },
  {
    property: 'og:image',
    content: getQueryString('ImageUrl')
  },
  {
    property: 'og:image:type',
    content: 'image/jpeg'
  },
]
arr.forEach(item => {
  // 插入 meta 标签
  let html = '<meta property="' + item.property + '" content="' + item.content + '" />'
  console.log(html)
  document.getElementsByTagName('head')[0].insertAdjacentHTML('afterbegin' , html);
})