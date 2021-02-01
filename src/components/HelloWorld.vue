<template>
  <div>
    <input type="button" value="get请求" class="get">
    <input type="button" value="post请求" class="post">
  </div>

</template>

<script>
  document.querySelector(".get").onClick=function(){
    axios({
      url:'http://localhost:8081/student/selectByNickName?nickname=test'
    }).then(res =>{
      console.log(res);
    })
    // axios.get("http://localhost:8081/student/selectByNickName?nickname=test")
    // .then(function(response){
    //     console.log(response)
    // })
  }
</script>

