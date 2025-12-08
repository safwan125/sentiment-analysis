import CustomCursor from "./components/CustomCursor";
import { Button } from "@/components/animate-ui/components/buttons/button";

export default function App() {
  return (
    <>
      <CustomCursor />

      <div className="flex flex-col gap-6 items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Custom Cursor Working 🎯</h1>

        {/* This button auto-triggers cursor text because it's a <button> */}
        <Button className="ui-button ui-button-primary">
          Click Me
        </Button>

        {/* Example custom hover zone */}
        <div className="hover-target text-lg border p-3 rounded-md">
          Hover me
        </div>
      </div>
    </>
  );
}
