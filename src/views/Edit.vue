<template>
  <div class="w-screen min-h-screen flex flex-col items-center py-20 bg-gray-100">
    <div class="shadow-lg rounded-2xl font-poppins w-2/5 px-20 bg-white flex flex-col items-center">
      <h1 class="text-4xl opacity-80 font-semibold pt-10 pb-2">Edit note</h1>

      <hr class="bg-green-500 w-2/5 h-0.5 rounded-full"/>

      <form id="new-note" class="w-3/5 flex flex-col items-center" autocomplete="off" @submit.prevent="onsubmit">
        <div class="w-full flex flex-col py-5">
          <label for="title" class="text-lg text-lg">Title:</label>
          <input
            required
            type="text"
            class="border-solid rounded-md border border-green-500 p-2 focus:border-green-500 focus:ring-green-500"
            v-model="title"
            id="title"
            name="title"
            placeholder="An interesting note"
          >
        </div>

        <div class="w-full flex flex-col py-5">
          <label for="note" class="text-lg text-lg">Note content:</label>
          <textarea
            required
            v-model="noteContent"
            id="note"
            name="note"
            class="whitespace-pre-wrap rounded-md p-2 border-green-500 focus:border-green-500 focus:ring-green-500"
            rows="15"
          />
        </div>

        <div class="flex flex-row justify-center w-full">
          <button type="submit" class="mr-auto border border-solid px-10 py-2 mb-5 rounded-full border-green-500 bg-green-500 text-white transition duration-300 hover:bg-white hover:text-green-500">Create</button>
          <router-link :to="`/note/${note.id}`">
            <button type="button" class="border border-solid px-10 py-2 mb-5 rounded-full border-red-500 bg-red-500 text-white transition duration-300 hover:bg-white hover:text-red-500">Cancel</button>
          </router-link>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "",
    noteContent: ""
  }),
  methods: {
    onsubmit() {
      let notes = JSON.parse(localStorage.getItem("notes"))

      notes = notes.map(n => {
        if (n.id.toString() === this.note.id.toString()) return {title: this.title, note: this.noteContent, id: this.note.id}
        else return n
      })

      console.log(notes)
      localStorage.setItem("notes", JSON.stringify(notes))

      this.$router.push("/note/" + this.note.id)
    },
  },
  computed: {
    note() {
      const noteId = this.$route.params.id
      const notes = JSON.parse(localStorage.getItem("notes"))
      return notes.filter(n => n.id.toString() === noteId)[0]
    },
  },
  mounted() {
    const noteId = this.$route.params.id
    const notes = JSON.parse(localStorage.getItem("notes"))
    const note = notes.filter(n => n.id.toString() === noteId)[0]

    this.title = note.title
    this.noteContent = note.note
  },
}
</script>