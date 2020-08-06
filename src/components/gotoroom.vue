<template>
  <div>
    <b-card
      bg-variant="info"
      text-variant="light"
      header="Go To The Your Room"
      class="text-center mt-5 offset-3 col-6"
    >
      <b-card-text>
        <div>
          <h3>{{ $store.state.receiveCalls.length}} Calls</h3>
          <h3>{{ $store.state.receiveConnections.length}} Connections</h3>
        </div>
        <b-button block variant="secondary" class="mt-3" :to="`/chat`">GO</b-button>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>