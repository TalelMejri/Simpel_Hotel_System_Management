<template>
  <div id="comments">
    <button
      class="btn btn-outline-primary"
      :disabled="tabcomments == ''"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
    >
      All comments
    </button>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Comments</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div
          class="desc mb-4"
          v-for="tabcomment in tabcomments"
          :key="tabcomment.id"
        >
          <div class="details card shadow p-2 text-center">
            <p>
              <muted>{{ tabcomment.name }}</muted>
              <br />
              <a href="#">{{ tabcomment.email }}</a> <br />
              {{ tabcomment.message }}<br />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "listcomments",
  props: {
    tabcomments: Array,
  },
};
</script>

<style scoped>
#comments {
  position: absolute;
  margin-top: -44rem;
  margin-left: 46rem;
}
</style>