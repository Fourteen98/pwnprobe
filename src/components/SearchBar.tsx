import React from "react";
import { Input } from 'antd';
const { Search } = Input;

interface SearchBarProps {
    handleOnSearch: (value: string) => void;
    loading: boolean;
}
const SearchBar: React.FC<SearchBarProps> = ({handleOnSearch, loading}) => {

    return (
        <>
            <Search
                placeholder="enter your email address"
                enterButton={<span className={"text-red-700 font-extrabold"}>pwned?</span>}
                onSearch={handleOnSearch}
                loading={loading}
                allowClear
                className="w-1/2 border-4 rounded-xl"
            />
        </>
    )
}

export default SearchBar;
