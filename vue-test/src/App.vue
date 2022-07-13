
<template>
  <div id="app">
    <h1>test</h1> 
  </div>
</template>

<script>


export default {

}
</script>

<style>
body {
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

a.router-link-active {
  text-decoration: underline;
}

/* Router Transition */
.routing-fade-enter-active,
.routing-fade-leave-active {
  transition: opacity .3s ease;
}

.routing-fade-enter,
.routing-fade-leave-to

/* .routing-fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}
</style>
