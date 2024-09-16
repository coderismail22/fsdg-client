const AdminWhoAreWe = () => {
    return (
        <div>
            {/* <!-- Table responsive wrapper --> */}
            <div className="overflow-x-auto bg-white dark:bg-neutral-700">

                {/* <!-- Table --> */}
                <table className="min-w-full text-left text-sm whitespace-nowrap">

                    {/* <!-- Table head --> */}
                    <thead className="uppercase tracking-wider border-b-2 dark:border-neutral-600 border-t">
                        <tr>
                            <th scope="col" className="px-6 py-4 border-x dark:border-neutral-600">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-4 border-x dark:border-neutral-600">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-4 border-x dark:border-neutral-600">
                                Stock
                            </th>
                            <th scope="col" className="px-6 py-4 border-x dark:border-neutral-600">
                                Status
                            </th>
                        </tr>
                    </thead>

                    {/* <!-- Table body --> */}
                    <tbody>

                        <tr className="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
                            <th scope="row" className="px-6 py-4 border-x dark:border-neutral-600">
                                Handbag
                            </th>
                            <td className="px-6 py-4 border-x dark:border-neutral-600">$129.99</td>
                            <td className="px-6 py-4 border-x dark:border-neutral-600">30</td>
                            <td className="px-6 py-4 border-x dark:border-neutral-600">In Stock</td>
                        </tr>

                        <tr className="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
                            <th scope="row" className="px-6 py-4 border-x dark:border-neutral-600">
                                Shoes
                            </th>
                            <td className="px-6 py-4 border-x dark:border-neutral-600">$89.50</td>
                            <td className="px-6 py-4 border-x dark:border-neutral-600">25</td>
                            <td className="px-6 py-4 border-x dark:border-neutral-600">In Stock</td>
                        </tr>

                        <tr className="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
                            <th scope="row" className="px-6 py-4 border-x dark:border-neutral-600">
                                Bedding Set
                            </th>
                            <td className="px-6 py-4 border-x dark:border-neutral-600">$69.99</td>
                            <td className="px-6 py-4 border-x dark:border-neutral-600">40</td>
                            <td className="px-6 py-4 border-x dark:border-neutral-600">In Stock</td>
                        </tr>

                        <tr className="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
                            <th scope="row" className="px-6 py-4 border-x dark:border-neutral-600">
                                Dining Table
                            </th>
                            <td className="px-6 py-4 border-x dark:border-neutral-600">$449.99</td>
                            <td className="px-6 py-4 border-x dark:border-neutral-600">5</td>
                            <td className="px-6 py-4 border-x dark:border-neutral-600">In Stock</td>
                        </tr>

                        <tr className="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
                            <th scope="row" className="px-6 py-4 border-x dark:border-neutral-600">
                                Soap Set
                            </th>
                            <td className="px-6 py-4 border-x dark:border-neutral-600">$24.95</td>
                            <td className="px-6 py-4 border-x dark:border-neutral-600">50</td>
                            <td className="px-6 py-4 border-x dark:border-neutral-600">In Stock</td>
                        </tr>

                    </tbody>

                </table>

            </div></div>
    )
}

export default AdminWhoAreWe