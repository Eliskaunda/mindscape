export default function Videos() {
  return (
    <div>
      <table className="table-fixed text-left border-collapse border border-spacing-1 border-black w-full px-2">
        <thead className="border border-black">
          <tr>
            <th>Name</th>
            <th>Posted by</th>
            <th>Type</th>
            <th>size</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>Document</td>
            <td>1.2mb</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
