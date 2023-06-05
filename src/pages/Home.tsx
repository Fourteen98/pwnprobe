import React, { useState, useEffect } from "react";
import axios from "axios";
import useCustomFetch from "../customHooks/useCustomFetch.ts";
import SearchBar from "../components/SearchBar.tsx";
import DisplayBreachedAccount from "../components/DisplayBreachedAccount.tsx";

const Home: React.FC = () => {
    const [searchValue, setSearchValue] = React.useState<string>("");
    const [shouldFetch, setShouldFetch] = useState<boolean>(false);
    const [breachedAccounts, setBreachedAccounts] = useState<any>([]);
    const fetchBreachedAccounts = useCustomFetch(
        async () => axios.get('http://localhost:8000/probe_proxy/breached/' + searchValue),
        false,
        (data) => {
            console.log(data)
            setBreachedAccounts(data);
        }
    );

    const handleOnSearch = (value: string) => {
        setSearchValue(value);
        setShouldFetch(true);
    }

    useEffect(() => {
        if (shouldFetch) {
            fetchBreachedAccounts.triggerFetch();
            setShouldFetch(false);
        }
    }, [shouldFetch]);

    return (
        <>
            <div className={"flex flex-col gap-8 p-4 items-center"}>
                <div className="p-10 grey border-4 rounded-xl">
                    <h1 className="text-4xl font-bold text-center">'; have i been pwnprobe?'</h1>
                </div>
                <div className="w-full h-full p-6 flex items-center justify-center border-4">
                    <SearchBar handleOnSearch={handleOnSearch} loading={fetchBreachedAccounts.loading} />
                </div>
                <div className="w-full h-full p-6 flex items-center justify-center border-4">
                    <DisplayBreachedAccount breachedAccounts={breachedAccounts} />
                </div>
            </div>
        </>
    )
}

export default Home;