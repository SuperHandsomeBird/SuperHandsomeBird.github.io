var posts=["2026/10/26/world/","2026/10/26/one/","2026/10/18/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };