import React, { useEffect, useState } from "react";
import axios from "axios";
import cheerio from "cheerio";

interface CompanyLogoProps {
    companyName: string;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ companyName }) => {
    const [logoUrl, setLogoUrl] = useState<string>("");

    useEffect(() => {
        const getLogoUrlFromWebsite = async () => {
            try {
                const searchQuery = companyName.toLowerCase().replace(" ", "+");
                const searchUrl = `https://www.google.com/search?q=${searchQuery}&tbm=isch`;

                const response = await axios.get(searchUrl, {
                    headers: {
                        "User-Agent":
                            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    },
                });

                const $ = cheerio.load(response.data);
                const imageResults = $("img");

                for (let i = 0; i < imageResults.length; i++) {
                    const imageUrl = $(imageResults[i]).attr("src");

                    if (imageUrl?.startsWith("http")) {
                        setLogoUrl(imageUrl);
                        return;
                    }
                }
            } catch (error) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                console.error("An error occurred:", error.message);
            }
        };

        getLogoUrlFromWebsite();
    }, [companyName]);
    console.log('logo url ' + logoUrl);
    return (
        <div>
            <h2>{companyName}</h2>
            {logoUrl && <img src={logoUrl} alt="Company Logo" />}
        </div>
    );
};

export default CompanyLogo;
