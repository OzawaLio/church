<template>
  <div class="sample">
    <h1>{{message}}</h1>

    <hr>

    <span v-bind:title="message2">
      여기에 마우스를 올려두고 잠시 기다리면 제목이 동적으로 바뀝니다.
    </span>

    <hr>

    <p> {{message3}} </p>
    <button v-on:click="reverseMessage">ReverseMessage</button>

    <hr>

    <input v-model="message4" />
    <p>{{message4}}</p>

    <hr>

    <button v-on:click="seeMessage">Show/Hide</button><br>
    <span v-if="seen"> You can see me now</span>

    <hr>

    <ol>
      <li v-for="todo in todos" :key="todo">
        {{todo.text}}
      </li>
    </ol>

    <hr>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message : "this is an sample page",
      message2 : 'you opened this pasge at ' + new Date().toLocaleString(),
      message3 : 'Hello vue.js!',
      message4 : 'Hello vue!',

      seen : true,

      todos: [
        {text : 'learn javascript'},
        {text : 'learn vuejs'},
        {text : 'build church web'}
      ]

    }
  },
  methods: {
    reverseMessage() {
      this.message3 = this.message3.split('').reverse()
    },
    seeMessage(){
      this.seen = !this.seen;
    }
  }
}
</script>