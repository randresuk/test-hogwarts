<template>
  <div>
    <p class="greenDec">Hogwarts</p>

    <ul>
      <li v-for="data in this.charactersRequest.response" :key="data.id">
        <p>{{ data.name }}</p>
      </li>
    </ul>

    <!-- <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item active>Active action</b-dropdown-item>
      <b-dropdown-item disabled>Disabled action</b-dropdown-item>
    </b-dropdown> -->



  </div>
</template>

<script>
// import axios from "axios";
import charactersRequest from '../../http/requests/characters/CharactersRequest';
// import { toast } from '../lib/ui.js';

export default {
  data() {
    return {
      charactersRequest,
      dataResponse: "",
    };
  },
  methods: {
    async loadGridItems() {
      // this.request.onError(message => toast.error(this, message));
      this.charactersRequest.onData((listData, 
      // paging
      ) => {
        this.gridList = listData;
        // this.totalPages = paging.totalPages;
      });
      await this.charactersRequest.list();
    },
  },
  // mounted() {
  //   axios.get("http://hp-api.herokuapp.com/api/characters").then((response) => {
  //     this.dataResponse = response.data;
  //   });
  // },
  async mounted() {
    // this.request = charactersRequest;
    console.log('aca deberia estar la data', this.charactersRequest.response);
    // this.request.setFilters(this.filter);
    await this.loadGridItems();
  },
};
</script>

<style lang="scss">
    // .redDecoration {
    //     color: red;
    //     font-size: xx-large;
    // }
</style>
