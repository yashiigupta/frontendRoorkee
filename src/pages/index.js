import Tabs from "@/components/Tabs";
import Schemes from "@/components/Schemes";
import Scholarships from "@/components/Scholarships";
import JobOpenings from "@/components/JobOpenings";
import { useState, useEffect } from 'react';
import ShowDetails from "@/pages/about";

export default function Home() {
  const [component, setComponent] = useState("Schemes");
  const [componentToRender, setComponentToRender] = useState(<Schemes />);

  useEffect(() => {
    if(component === "Schemes") setComponentToRender(<Schemes />);
    else if(component === "Job Openings") setComponentToRender(<JobOpenings />);
    else if(component === "Scholarships") setComponentToRender(<Scholarships />);
  }, [component]);

  return (
    <div style={{"display": "flex", "justifyContent": "center", "flexDirection": "column"}}>
      <div><Tabs setComponent={setComponent} /></div>
      <div style={{"width": "100vw", "display": "flex", "justifyContent": "center"}}>
        <div style={{"width": "85vw"}}>{componentToRender}</div>
      </div>
    </div>
  );
}