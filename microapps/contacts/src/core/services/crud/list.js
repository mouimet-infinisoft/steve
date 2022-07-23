import featurelist from "@/mock/featurelist";

export const list = () =>
  new Promise((resolve, reject) => {
    /**
     * Read config to mock or call the real
     */

    resolve(featurelist());
  });
