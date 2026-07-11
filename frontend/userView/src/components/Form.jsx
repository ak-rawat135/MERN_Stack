import { useState } from "react";
export default function Form() {
    const   [name, setName]=useState("")
  return <>
  <div>
    <form>
    <input type="text" value="firstname"/>
    </form>
  </div>
  </>;
}
