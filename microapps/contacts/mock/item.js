import cat1 from "./assets/cat1.gif";

const item = () => ({
  id: "klhlojassasssaso897y9",
  reference: "custom reference #",
  state: "active", // todo - inprogress - blocked - waiting - suspended - complete
  step: "request", // request - case - service - closed
  tags: ["person"],

  // Request
  services: [{ key: 111976, label: "Plumber Bronze", tag: "Service" }],
  location: ["spread contact#org#uuid"], // ordered list by  priority
  origin: "Court of Quebec", // dpj , court, volunteer
  motives: ["violence"],

  // Meta Operation

  operation: "update", // create - update - delete
  // mutation:"full",// partial - full (create=full) update=full or partial
  timestamp: "1657479142",
  createdAt: "1657479142",
  updatedAt: "1657479142",
  username: "Jean Dupuis",
  email: "jena@dupuis.com",
  avatar: "https://i.pravatar.cc/48?" + Math.random(),

  // Meta Data
  __extra__: [{ id: "customId1323", key: "customfield", value: "customvalue" }],
  __relation__: [
    {
      id: "121313424",
      key: "referent",
      value: "personUUID",
      authorizedTransport: true //Extra attributes concerned by (subject / relation)
    },
    { id: "fdas54ff54", key: "father", value: "personUUID" }
  ]
});

export default item;
