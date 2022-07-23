import * as React from "react";
import { useMicroContext, useMicroState } from "@/core/state";
import { config } from "@/config";

const ContactCard = React.lazy(() => import(/* webpackChunkName: 'ContactCard' */ '@/components/contact-card'))

export default function Cards({ list = [] }) {
  const { store } = useMicroContext();
  const selectedId = useMicroState((s) => s[config.feature.name].selectedId);

  const handleClick = (id) => () => {
    store.mutate((s) => ({
      ...s,
      [config.feature.name]: { ...s[config.feature.name], selectedId: id }
    }));
    store.emit(`${config.feature.name}.click`, { id });
  };

  return list
    ?.filter((i) => i?.state === "active")
    ?.map((item) => (
      <ContactCard
        {...item}
        key={item?.id}
        handleClick={handleClick(item?.id)}
        isSelected={selectedId === item?.id}
      />
    ));
}


