export default function Table() {
  return (
    <div class="flex flex-col w-[60%] ">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-300">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Age
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Address
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-100">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    John Brown
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    45
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    New York No. 1 Lake Park
                  </td>
                </tr>

                <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-100">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    Jim Green
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    27
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    London No. 1 Lake Park
                  </td>
                </tr>

                <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-100">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    Joe Black
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    31
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    Sidney No. 1 Lake Park
                  </td>
                </tr>

                <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-100">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    Edward King
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    16
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    LA No. 1 Lake Park
                  </td>
                </tr>

                <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-100">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    Jim Red
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    45
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    Melbourne No. 1 Lake Park
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
