import cat1 from "./assets/cat1.gif";

const featurelist = () => ({
  klhlojassasssaso897y9: {
    id: "klhlojassasssaso897y9",
    name: "Martin Ouimet",
    avatar: cat1,
    address: "3649 rue Notre-Dame, Candiax, H72D92",
    telephones: [
      { key: 111976, label: "514-777-5555", tag: "Work" },
      { key: 567222, label: "540-789-2121", tag: "Mobile" }
    ],
    email: "dog@pound.net",
    tags: ["person"],
    state: "active",
    __meta__: {
      timestamp: "1657479142",
      createdAt: "1657479142",
      updatedAt: "1657479142",
      username: "Jean Dupuis",
      email: "jena@dupuis.com",
      avatar: "https://i.pravatar.cc/48?" + Math.random()
    },
    __relation__: [
      { id: "121313424", key: "employer", value: "pfizer" },
      { id: "fdas54ff54", key: "father", value: "case32423" }
    ],
    __extra__: [{ id: "@212131", key: "Allergy", value: "Peannuts" }]
  }
});

export default featurelist;
