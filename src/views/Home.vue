<template>
  <div class="w-screen min-h-screen flex flex-row bg-gray-100">
    <div>
      <router-link to="/new">
        <a class="shadow-md flex flex-row items-center justify-center absolute top-5 left-14 px-5 py-2 text-white font-semibold rounded-full bg-green-500 transition hover:bg-green-600">
          New Note
          <PlusIcon/>
        </a>
      </router-link>
    </div>
    <div class="w-screen pl-60 flex flex-row">
      <div v-for="note in notes">
        <router-link :to="`/note/${note.id}`">
          <div class="flex bg-white flex-col group items-center w-96 h-72 shadow-lg rounded-md m-5 transition-transform hover:scale-105">
            <div class="flex flex-row items-center w-full p-2">
              <h1 class="font-semibold text-xl w-3/4 opacity-80 truncate">{{note.title}}</h1>
            </div>
            <hr class="w-full"/>
              <p class="overflow-clip overflow-hidden p-2 w-96 h-48 whitespace-pre-wrap">{{note.note}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { PlusIcon, TrashIcon } from "@iconicicons/vue3";

export default {
  name: "Home",
  data: () => ({
    notes:[]
  }),
  components: {
    PlusIcon,
    TrashIcon
  },
  methods: {
    deleteNote(id) {
      const newNotes = JSON.parse(localStorage.getItem("notes")).filter(n => n.id !== id)
      localStorage.setItem("notes", JSON.stringify(newNotes))
      this.notes = newNotes
    }
  },
  mounted() {
    this.notes = JSON.parse(localStorage.getItem("notes")) || []
  }
};
</script>
