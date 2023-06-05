import React, {useState, useEffect} from "react";
import {Pagination} from "antd";
import security_breach from "../assets/security_breach.jpg";

interface DisplayBreachedAccountProps {
    breachedAccounts: [];
}
const DisplayBreachedAccount: React.FC<DisplayBreachedAccountProps> = ({breachedAccounts}) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [totalItems, setTotalItems] = useState<number>(0);

    useEffect(() => {
        setTotalItems(breachedAccounts.length);

    }, [breachedAccounts]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = breachedAccounts.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const displayBreached = () => {
        return currentItems.map((breach: any, index: number) => (
            <div key={index.toString()} className="flex gap-4">
                <img
                    src={security_breach}
                    alt={breach.Name}
                    className="w-6/12 h-5/12"
                />
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-xl text-red-500 font-bold">{breach.Name}</h1>
                </div>
            </div>
        ));
    };


    return(
        <>
            <div className="flex flex-col gap-10">
                <div>
                    {
                        totalItems > 0 ?
                            (<h1 className={"text-4xl text-red-700 font-bold"}>oh no -- pwned in {totalItems} data breaches !!</h1>)
                            :
                            (<h1 className={"text-2xl text-green-800 font-bold"}>no breaches found</h1>)
                    }
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {displayBreached()}
                </div>
                <div className="flex flex-row gap-4">
                    <Pagination
                        current={currentPage}
                        pageSize={itemsPerPage}
                        total={totalItems}
                        onChange={handlePageChange}
                        className="mt-4"
                    />
                </div>
            </div>
        </>
    )
}

export default DisplayBreachedAccount;