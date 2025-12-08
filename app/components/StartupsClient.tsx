// components/StartupsClient.tsx
"use client";

import React, { useEffect, useState } from "react";
// import { generateClient } from "aws-amplify/data";
// import type { Schema } from "@/amplify/data/resource";

export default function StartupsClient() {
  const [startups, setStartups] = useState<Array<any>>([]);

  useEffect(() => {
    // Uncomment & replace with your Gen2 client:
    // const client = generateClient<Schema>();
    // const load = async () => {
    //  const res = await client.models.Startup.list();
    //  setStartups(res);
    // };
    // load();

    // demo items
    setStartups([
      { id: "1", name: "BlueOcean", sector: "AgriTech" },
      { id: "2", name: "Kokoda Labs", sector: "HealthTech" },
    ]);
  }, []);

  return (
    <section>
      <div className="panel">
        <div className="panel-header">My Startups</div>
        <div className="panel-body">
          <button className="primary" style={{ marginBottom: 12 }}>+ Add Startup</button>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ textAlign: "left", color: "#9fb0c8" }}>
              <tr>
                <th>Name</th>
                <th>Sector</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {startups.map((s) => (
                <tr key={s.id}>
                  <td style={{ padding: "8px 0" }}>{s.name}</td>
                  <td style={{ padding: "8px 0" }}>{s.sector}</td>
                  <td style={{ padding: "8px 0" }}>
                    <button className="top-btn" style={{ marginRight: 8 }}>Edit</button>
                    <button className="top-btn">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
