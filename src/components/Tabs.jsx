export default function Tabs(props) {
  return (
    <div className="mt-5 flex justify-center items-center mb-5">
      <button className="flex-grow text-center font-sm py-3 px-7 rounded-md border-none text-sm bg-gray-100 cursor-pointer hover:bg-button-blue hover:text-white font-sans" onClick={() => props.setComponent("Schemes")}>Schemes</button>
      <button className="flex-grow text-center font-sm py-3 px-7 rounded-md border-none text-sm bg-gray-100 cursor-pointer hover:bg-button-blue hover:text-white font-sans" onClick={() => props.setComponent("Job Openings")}>Job Openings</button>
      <button className="flex-grow text-center font-sm py-3 px-7 rounded-md border-none text-sm bg-gray-100 cursor-pointer hover:bg-button-blue hover:text-white font-sans" onClick={() => props.setComponent("Scholarships")}>Scholarships</button>
    </div>
  )
}