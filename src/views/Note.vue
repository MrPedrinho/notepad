<template>
  <div class="flex flex-col items-center align-center p-5 w-screen px-32 min-h-screen">
    <div class="top-0 left-0 py-2 px-2 flex flex-row justify-center fixed z-10 bg-white shadow-lg rounded-br-xl">

      <router-link to="/">
        <a class="shadow-md flex flex-row items-center justify-center px-5 py-2 text-white font-semibold rounded-full bg-green-500 transition hover:bg-green-600">
          <ArrowLeftIcon />
          <p class="ml-2">Go Back</p>
        </a>
      </router-link>

      <router-link :to="`/note/${note.id}/edit`">
        <a @click="editing = true" class="cursor-pointer flex py-2 ml-5 text-yellow-500 hover:text-yellow-600 font-semibold">
          <EditIcon />
          <p class="ml-2">Edit</p>
        </a>
      </router-link>

      <div @click="deleteNote" class="cursor-pointer flex px-5 py-2 text-red-500 hover:text-red-600 font-semibold">
        <TrashIcon />
        <p class="ml-2">Delete</p>
      </div>
    </div>
    <h1 class="h-20 flex items-center justify-center w-screen text-green-500 font-poppins text-4xl font-semibold rounded-sm opacity-80">{{note.title}}</h1>

    <div class="whitespace-pre-wrap w-full mt-5 border border-solid border-green-500 rounded-lg shadow-lg p-5 font-poppins">
      {{note.note}}
    </div>

  </div>
</template>

<script>
import { ArrowLeftIcon, TrashIcon, EditIcon } from "@iconicicons/vue3";

export default {
  components: {
    ArrowLeftIcon,
    TrashIcon,
    EditIcon
  },
  methods: {
    deleteNote() {
      const newNotes = JSON.parse(localStorage.getItem("notes")).filter(n => n.id.toString() !== this.$route.params.id.toString())
      localStorage.setItem("notes", JSON.stringify(newNotes))
      this.$router.push("/")
    },
    editNote() {

    },
  },
  data: () => ({
    editing: false,
  }),
  computed: {
    note() {
      const noteId = this.$route.params.id
      const notes = JSON.parse(localStorage.getItem("notes"))
      return notes.filter(n => n.id.toString() === noteId)[0]
    }
  }
}
</script>