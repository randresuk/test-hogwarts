<template>
  <div class="wrapper-auto">
    <div>
      <b-row>
        <b-col>
          <h3 class="m-3 pt-5 title-home--font">Characters</h3>
          <p class="--description-use">Select hogwarts house to list.</p>
        </b-col>
      </b-row>
      <b-row class="p-4">
        <b-col>
          <button
            v-for="house in houses"
            :key="house.id"
            :class="`m-1 btn btn--decorator-${house.color}`"
            @click="sendEvent(house)"
          >
            <img
              :src="house.srcImg"
              class="p-1 img-houses--border-decorator img-houses"
            />
          </button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p style="color: white">Sorting by:</p>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col id="sort-bar">
          <select class="pl-2 ml-2" name="sortBy" id="select" v-model="sortBy">
            <option value="">Select</option>
            <option value="name">Name</option>
            <option value="lastName">LastName</option>
          </select>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-table
            class="ml-2 mt-2 mb-5 table--coustom"
            sticky-header="500px"
            style="background: white"
            striped
            hover
            :items="charactersList"
            :fields="fields"
            :busy.sync="isBusy"
          ></b-table>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import charactersRequest from "../../http/requests/characters/CharactersRequest";

export default {
  name: "Characters",
  data() {
    return {
      charactersRequest,
      dataResponse: "",
      firstName: "",
      lastName: "",
      sortBy: "",
      searchValue: "",
      isBusy: false,
      charactersList: [],
      houses: [
        {
          id: 0,
          srcImg: require("@/assets/images/gryffindor.png"),
          color: "red",
          house: "/house/gryffindor",
        },
        {
          id: 1,
          srcImg: require("@/assets/images/slytherin.jpg"),
          color: "green",
          house: "/house/slytherin",
        },
        {
          id: 2,
          srcImg: require("@/assets/images/hufflepuff.png"),
          color: "blue",
          house: "/house/hufflepuff",
        },
        {
          id: 3,
          srcImg: require("@/assets/images/ravenclaw.jpg"),
          color: "yellow",
          house: "/house/ravenclaw",
        },
      ],
      fields: ["first_name", "last_name", "blood"],
      types: ["Name", "Last Name"],
    };
  },
  watch: {
    sortBy() {
      this.sortNames();
    },
  },
  methods: {
    sortNames() {
      let tempCharacters = this.charactersList;
      tempCharacters = tempCharacters.sort((a, b) => {
        if (this.sortBy === "name") {
          let fa = a.first_name.toLowerCase(),
            fb = b.first_name.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        } else if (this.sortBy === "lastName") {
          let fa = a.last_name.toLowerCase(),
            fb = b.last_name.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        }
      });
      this.charactersList = tempCharacters;
    },
    async loadGridItems() {
      this.charactersRequest.onLoad(() => {
        this.dataResponse = this.charactersRequest.response;
        this.fillGrid(this.dataResponse);
      });
      await this.charactersRequest.list();
    },
    async loadGridByHouse(house) {
      const houseData = this.charactersRequest.response;
      this.isBusy = true;
      this.fillGrid(houseData);
      this.isBusy = false;
      await this.charactersRequest.find(house);
    },

    fillGrid(data) {
      this.charactersList = [];
      data.forEach((editElements) => {
        this.splitNames(editElements.name);
        const characters = {
          first_name: this.firstName,
          last_name: this.lastName,
          blood: editElements.ancestry === "" ? "None" : editElements.ancestry,
        };
        this.charactersList.push(characters);
      });
    },
    splitNames(fullName) {
      this.firstName = fullName
        .split(" ")
        .slice(0, -1)
        .join(" ");
      this.lastName = fullName
        .split(" ")
        .slice(-1)
        .join(" ");
    },
    sendEvent(e) {
      switch (e.id) {
        case 0:
          this.loadGridByHouse(e.house);
          break;
        case 1:
          this.loadGridByHouse(e.house);
          break;
        case 2:
          this.loadGridByHouse(e.house);
          break;
        case 3:
          this.loadGridByHouse(e.house);
          break;

        default:
          break;
      }
    },
  },

  async mounted() {
    await this.loadGridItems();
  },
};
</script>
