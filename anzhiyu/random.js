var posts=["2026/10/18/hello-world/","2026/10/26/world/","2026/10/26/one/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };