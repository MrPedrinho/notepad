<template>
  <div class="w-screen min-h-screen flex flex-col items-center py-20 bg-gray-100">
    <div class="shadow-lg rounded-2xl font-poppins w-2/5 px-20 bg-white flex flex-col items-center">
      <h1 class="text-4xl opacity-80 font-semibold pt-10 pb-2">Create new note</h1>

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
            v-model="note"
            id="note"
            name="note"
            class="whitespace-pre-wrap rounded-md p-2 border-green-500 focus:border-green-500 focus:ring-green-500"
            rows="15"
          />
        </div>

        <button type="submit" class="ml-auto border border-solid px-10 py-2 mb-5 rounded-full border-green-500 bg-green-500 text-white transition duration-300 hover:bg-white hover:text-green-500">Create</button>
      </form>


    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  methods: {
    onsubmit: (e) => {
      const data = new FormData(e.target)
      const title = data.get("title")
      const note = data.get("note")

      let currentNotes, id
      const curr = JSON.parse(localStorage.getItem("notes"))
      if (curr) {
        currentNotes = curr
        id = currentNotes[currentNotes.length - 1].id + 1
      } else {
        currentNotes = []
        id = 1
      }

      localStorage.setItem("notes", JSON.stringify(currentNotes.concat({title, note, id})))

      router.push("/")
    }
  },
  data: () => ({
    title: "",
    note: "",
  })
}
</script>
