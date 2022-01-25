<template>
<div id="contents">
  <div id="nav">
    <ul>
      <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/aboutCh">교회안내</router-link></li>
      <li><router-link to="/worship">예배</router-link></li>
      <li><router-link to="/gallery">새샘갤러리</router-link></li>
      <li><router-link to="/schoolCh">교회학교</router-link></li>
      <li><router-link to="/meetings">교제</router-link></li>
      
      <li><router-link to="/sample">샘플</router-link></li>
    </ul>   
  </div>
</div>
</template>

<script>
const content = {

}
export default {
  
};

createApp(content).mount('#contents')

</script>

<style scoped>
#nav {
  background: #5161ce;
	float: left;
	overflow: hidden;
	position: relative;
	padding: 10px 0px;
  width: 100%;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav ul{
	padding: 0px;
	margin: 0px;
  
}

#nav ul li a i{
	margin-right: 10px;
}

#nav li {
	list-style-type: none;
	float: left;
}

#nav ul li a{
	color: rgba(255,255,255,0.5);
    text-decoration: none;
    font-size: 15px;
    line-height: 45px;
    display: block;
    padding: 0px 20px;
    transition-duration:0.6s;
	transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
}

#nav>ul>li.active>a{
	color: #5161ce;
	background-color: transparent;
	transition: all 0.7s;
}


#nav a:not(:only-child):after {
	content: "\f105";
	position: absolute;
	right: 20px;
	top: 10%;
	font-size: 14px;
	font-family: "Font Awesome 5 Free";
	display: inline-block;
	padding-right: 3px;
	vertical-align: middle;
	font-weight: 900;
	transition: 0.5s;
}

#nav .active>a:not(:only-child):after {
	transform: rotate(90deg);
}

.hori-selector{
	display:inline-block;
	position:absolute;
	height: 100%;
	top: 10px;
	left: 0px;
	transition-duration:0.6s;
	transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
	background-color: #fff;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
}
.hori-selector .right,
.hori-selector .left{
	position: absolute;
	width: 25px;
	height: 25px;
	background-color: #fff;
	bottom: 10px;
}
.hori-selector .right{
	right: -25px;
}
.hori-selector .left{
	left: -25px;
}
.hori-selector .right:before,
.hori-selector .left:before{
	content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #5161ce;
}
.hori-selector .right:before{
	bottom: 0;
    right: -25px;
}
.hori-selector .left:before{
	bottom: 0;
    left: -25px;
}

</style>