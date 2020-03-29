<template>
  <div class="container">
    <FinalForm :submit="submit">
      <form slot-scope="props" @submit="props.handleSubmit">
        <div class="form-group">
          <FinalField
            name="photoURL"
            :validate="v => v && v.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi) ? null : 'this field is required to be URL'"
          >
            <div slot-scope="props">
              <label for="exampleInputEmail1">Cat photo url</label>
              <input class="form-control" v-on="props.events" :name="props.name" />
              <div v-if="props.meta.error && props.meta.touched">{{ props.meta.error }}</div>
            </div>
          </FinalField>
        </div>
        <div class="form-group">
          <FinalField name="description" :validate="v => v ? null : 'this field is required'">
            <div slot-scope="props">
              <label for="exampleInputEmail1">Post description</label>
              <input class="form-control" v-on="props.events" :name="props.name" />
              <div v-if="props.meta.error && props.meta.touched">{{ props.meta.error }}</div>
            </div>
          </FinalField>
        </div>
        <b-button type="submit">Submit</b-button>
      </form>
    </FinalForm>
  </div>
</template>

<style>
</style>

<script>
import { FinalForm, FinalField } from "vue-final-form";

export default {
  name: "PostForm",
  components: {
    FinalForm,
    FinalField
  },
  methods: {
    submit(values) {
      console.log(JSON.stringify(values));
    }
  }
};
</script>