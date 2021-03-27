<template>
  <div class="about">
   
    <FormUploadComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import FormUploadComponent from '@/components/Tournaments/FormUploadComponent.vue'

export default {
  name: 'Home',
  components: {
    FormUploadComponent
  }
}
</script>