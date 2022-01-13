<template>
  <section>
    <header><h1>My Friends</h1></header>
    <ul>
      <friend-contact
        name="Manuel Lorenz"
        phone-number="213 486 6000"
        email-address="LorenzM@gmail.com"
        is-favorite="1"
      ></friend-contact>
      <friend-contact
        name="Julie Jones"
        phone-number="213 486 5000"
        email-address="JulieJ@gmail.com"
        is-favorite="0"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "noway",
          name: "Noway Jose",
          phone: "213 485 1212",
          email: "noway@email.com",
        },
        {
          id: "siguey",
          name: "Siguey Magey",
          phone: "213 853 1212",
          email: "siguey@email.com",
        },
      ],
    };
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #0f2940;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #0f2940;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #7e9eb1;
  background-color: #7e9eb1;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #345567;
  border-color: #345567;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
