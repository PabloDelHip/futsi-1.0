<template>
  <div class="about">
    <h1>This is an about page</h1>
    <FormUploadComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import FormUploadComponent from '@/components/Tournaments/FormUploadComponent.vue'

export default {
  name: 'FormUploadComponent',
  components: {
    FormUploadComponent
  }
}
</script>