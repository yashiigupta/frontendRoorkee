import Tabs from "@/components/Tabs";
import Schemes from "@/components/Schemes";
import Scholarships from "@/components/Scholarships";
import JobOpenings from "@/components/JobOpenings";
import { useState, useEffect } from 'react';

export default function Home() {
  const [component, setComponent] = useState("Schemes");
  const [componentToRender, setComponentToRender] = useState(<Schemes />);

  useEffect(() => {
    if (component === "Schemes") setComponentToRender(<Schemes />);
    else if (component === "Job Openings") setComponentToRender(<JobOpenings />);
    else if (component === "Scholarships") setComponentToRender(<Scholarships />);
  }, [component]);

  return (
    <div style={{ maxWidth: '90%', margin: '0 auto' }}>
      <div>
        <div>
          <Tabs setComponent={setComponent} />
        </div>
        <div>
          {componentToRender}
        </div>
      </div>
    </div>
  );
}
