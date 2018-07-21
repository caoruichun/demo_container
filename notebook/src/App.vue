<template>
  <div id="app" class="app">
    <Toolbar/>
    <NoteList></NoteList>
    <Editor></Editor>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
import NoteList from './components/NoteList'
import Editor from './components/Editor'

export default {
  name: 'App',
  components: {
    Toolbar,
    NoteList,
    Editor
  }
}
</script>

<style>
html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    border: 0;
    height: 100%;
    max-height: 100%;
    position: relative;
  }
  .app {
    display: flex;
    align-items: stretch;
    height: 100vh;
  }
</style>
