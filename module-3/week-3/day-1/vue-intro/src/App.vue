<template>
  <div id="app">
    <UserList />
    <h1 class="title">Template interpolation</h1>
    <p>{{10 * 2}}</p>
    <p>{{ false && true }}</p>
    <p>{{ JSON.stringify({name: "gui"}) }}</p>
    <p>Encore un mot compliqué pour dire ...</p>
    <p>Dans les fichiers .vue, on peut interpréter des expressions JS qui se resolvent en String entre les "{{ }}" doubles moustaches</p>
    <HelloWorld msg="Hello Simplon p4" />
    <HelloWorld msg="Welcome @ Vue" />
    <HelloWorld msg="C'est beau code quand même :D" />
    <hr />
    <p>
      <b>D.I.Y</b> : FooBar qui prend 0 props et affiche Toujours foo bar dans un p. Afficher le dans l'app
    </p>
    <hr />
    <p>
      <b>D.I.Y</b> : MyButton : un component button qui accepte 2 props :
      <br />text et le background.
      <br />check la doc de Vue pour appliquer un style dynamique et changer la couleur du bg en fonction de la prop
    </p>
    <hr />
    <FooBar />
    <FooBar />
    <FooBar />
    <p class="foo-bar">je suis un faux FooBar</p>
    <hr />
    <MyButton background="firebrick" text="VueJS" />
    <MyButton background="teal" text="is..." />
    <MyButton background="darkorange" text="Awesome" />
    <hr />
    <Loops :usernames="['foo', 'bar', 'baz', 'nil', 'gui']" />
    <hr />
    <Conditions v-bind:score="0" />
    <Conditions :score="10" />
    <Conditions :score="100" />
    <hr />
    <EventsSimple />
    <hr />
    <p>
      <b>D.I.Y</b>: Créer un component DisplaUserNameLength.
      <br />Il prend une prop: un Array d'usernames(String).
      <br />Afficher chaque username avec une boucle vue.
      <br />Au click sur chaque username, afficher, grâce à une méthode, la longueur du name clické dans la console.
    </p>
    <hr />
    <DisplayUserNameLength :usernames="['adlane', 'muram', 'aïline', 'vincent', 'hamidou']" />
    <hr />
    <TwoWayBinding />
    <hr />
    <LikesSimple />
    <LikesSimple />
    <LikesSimple />
    <hr />
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
import FooBar from "@/components/FooBar.vue";
import MyButton from "@/components/MyButton.vue";
import Loops from "@/components/Loops.vue";
import Conditions from "@/components/Conditions.vue";
import EventsSimple from "@/components/EventsSimple.vue";
import ComponentData from "@/components/ComponentData.vue";
import TwoWayBinding from "@/components/TwoWayBinding.vue";
import LikesSimple from "@/components/LikesSimple.vue";
import UserList from "@/components/UserList.vue";

export default {
  data() {
    return {
      currentValue: 50,
    };
  },
  methods: {
    setCurrentValue(x) {
      console.log("yes !", x);
      this.currentValue = Number(x);
    },
  },
  name: "App",
  components: {
    HelloWorld,
    FooBar,
    MyButton,
    Loops,
    Conditions,
    EventsSimple,
    TwoWayBinding,
    LikesSimple,
    UserList,
    DisplayUserNameLength: ComponentData, // utilise ComponentData sous le nom (as) DisplaUserNameLength
    // EventsCallback,
  },
};
</script>

    <!-- <h2 class="title">Remonter aux parents via events/callback</h2>
    <EventsCallback v-on:messageDuChild="setCurrentValue" /> -->
    <!-- {{currentValue}} -->
    <!-- 
      <ClickCounter />
      <TwoWayBinding />
      <EventsCallback />
    -->
    
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
