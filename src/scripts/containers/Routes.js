import { Routes as ReactRoutes, Route } from "react-router-dom"

import { Engagement, SaleAmbition, Section } from "./Engagement"

export function Routes() {
  return (
    <ReactRoutes>
      <Route path="engagement">
        <Route index element={<Engagement />} />
        <Route path="section" element={<Section />} />
        <Route path="sale-ambition" element={<SaleAmbition />} />
      </Route>
    </ReactRoutes>
  )
}
