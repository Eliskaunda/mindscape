export default function AllResources() {
  const TABLE_HEAD = ["Name", "Posted by", "Type", ""];
  return (
    <div className="">
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
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>Video</td>
            <td>10mb</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
