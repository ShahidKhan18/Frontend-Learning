import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  const [componentName, setComponentName] = useState("ReactTheoryHome");

  const handleCopy = async () => {
    const textToCopy = `
import { Outlet } from "react-router-dom";

const ${componentName} = () => {
  return (
    <div>
      <h1 className='text-center -mt-10 mb-4 underline uppercase text-4xl font-extrabold'>${componentName}</h1>
      <Outlet />
    </div>
  );
};
export default ${componentName};
`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert("Code copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">📄 Routing Setup Documentation</h1>
      <Separator />

      <section>
        <h2 className="text-xl font-semibold">🔧 Project Structure Overview</h2>
        <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`
src/
├─ components/
│  ├─ Layout/
│  ├─ ReactTheory/
│  ├─ ReactMachineCoding/
├─ App.tsx
`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">✅ Steps to Add a New Route</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>Create Component File:</strong> <br/>
            Inside the relevant folder. Example:<br/>
            <code>components/ReactTheory/NewTopic.tsx</code>
          </li>

          <li>
            <strong>Export Component:</strong><br/>
            <pre className="bg-gray-800 text-white p-2 rounded overflow-x-auto">
{`
const NewTopic = () => {
  return <div>New Topic Content</div>;
};
export default NewTopic;
`}
            </pre>
          </li>

          <li>
            <strong>Import in App.tsx:</strong><br/>
            <code>import NewTopic from "./components/ReactTheory/NewTopic";</code>
          </li>

          <li>
            <strong>Define Route in &lt;Routes&gt;:</strong><br/>
            Example for React Theory:
            <pre className="bg-gray-800 text-white p-2 rounded overflow-x-auto">
{`
<Route path="reactTheory" element={<ReactThroryHome />}>
  <Route path="newTopic" element={<NewTopic />} />
</Route>
`}
            </pre>
          </li>

          <li>
            <strong>Add Sidebar Navigation:</strong><br/>
            In your sidebar data:
            <pre className="bg-gray-800 text-white p-2 rounded overflow-x-auto">
{`
{
  title: "New Topic",
  url: "/reactTheory/newTopic",
}
`}
            </pre>
          </li>

          <li>
            <strong>Ensure Outlet in Parent Component:</strong><br/>
            <div className="mt-2">
              <label className="block text-sm font-medium mb-1">
                Component Name:
              </label>
              <input
                type="text"
                value={componentName}
                onChange={(e) => setComponentName(e.target.value)}
                className="border rounded px-2 py-1 text-black dark:text-white"
              />
            </div>

            <div className="relative mt-4">
              <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`
import { Outlet } from "react-router-dom";

const ${componentName} = () => {
  return (
    <div>
      <h1 className='text-center -mt-10 mb-4 underline uppercase text-4xl font-extrabold'>${componentName}</h1>
      <Outlet />
    </div>
  );
};
export default ${componentName};
`}
              </pre>
              <button
                onClick={handleCopy}
                className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Copy
              </button>
            </div>
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold">⚠️ Common Mistakes</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Using absolute paths in child routes (e.g. <code>/newTopic</code>) instead of relative paths.</li>
          <li>Missing <code>&lt;Outlet /&gt;</code> in parent components.</li>
          <li>Not importing the new component in <code>App.tsx</code>.</li>
          <li>Forgetting to add the sidebar entry for navigation.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">📌 My Opinion</h2>
        <p>
          This routing setup is clean, scalable, and maintains separation of concerns with easy sidebar integration.
        </p>
      </section>
    </div>
  );
};

export default Home;
