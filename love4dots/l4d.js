function lover(n) {
  let cs = n.childNodes;
  for (let i = 0; i < cs.length; i++) {
    let c = cs[i];
    if (c.nodeType == Node.TEXT_NODE) {
      c.textContent = c.textContent.replace(/…/g, "♡♡♡").replace(/・{3,}/g, "♥♥♥").replace(/\.\.{2,}/g, "♡♡♡").replace(/点リーダー/g, "点ハート");
    }
    else {
      lover(c);
    }
  }
}

lover(document.body);