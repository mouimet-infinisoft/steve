const { v4 } = require("uuid");

const item = () => ({
  id: "klhlojassasssaso897y9",
  reference: "custom reference #",
  state: "active", // todo - inprogress - blocked - waiting - suspended - complete
  step: "request", // request - case - service - closed

  __request__: {
    services: [{ key: 111976, label: "Plumber Bronze", tag: "Service" }],
    location: [],
    origin: [],
    motives: [],
    __extra__: [
      { id: "customId1323", key: "customfield", value: "customvalue" }
    ]
  },

  tags: ["person"],

  __meta__: {
    // mutation:"full",// partial - full (create=full) update=full or partial
    operation: "update", // create - update - delete
    timestamp: "1657479142",
    createdAt: "1657479142",
    updatedAt: "1657479142",
    username: "Jean Dupuis",
    email: "jena@dupuis.com",
    avatar: "https://i.pravatar.cc/48?" + Math.random()
  },
  __relation__: [
    {
      id: "121313424",
      key: "referent",
      value: "personUUID",
      authorizedTransport: true, //Extra attributes concerned by (subject / relation)
      flattenedNestedAttribute: { dog: 1, dogette: 2 } // Avoiid deeply nested objects
    },
    { id: "fdas54ff54", key: "father", value: "personUUID" }
  ],
  __extra__: [{ id: "@212131", key: "Allergy", value: "Peannuts" }]
});

const sourceobj = item();

console.log(sourceobj);

const flatVector = {};

const recursive = (initial) => {
  return Object.entries(initial).reduce((acc, [k, v], index, originalList) => {
    if (Array.isArray(v)) {
      v.forEach((i) => {
        recursive(i);
      });
    }

    if (typeof v === "object") {
      const uuid = v4();
      flatVector[uuid] = { type: k, v };
      recursive(v);

      return { ...acc, [k]: uuid };
    }

    return { ...acc, [k]: v };
  }, {});
};

const flattenedObj = recursive(sourceobj);

console.log(flatVector, sourceobj, flattenedObj);
