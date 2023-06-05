import React from "react";
interface DisplayBreachedAccountProps {
    breachedAccounts: [];
}
const DisplayBreachedAccount: React.FC<DisplayBreachedAccountProps> = ({breachedAccounts}) => {
    const countBreaches = breachedAccounts.length;
    return(
        <>
            {
                countBreaches > 0 ?
                    (<h1 className={"text-2xl text-red-700 font-bold"}>oh no -- pwned in {countBreaches} data breaches !!</h1>)
                    :
                    (<h1 className={"text-2xl text-green-800 font-bold"}>no breaches found</h1>)
            }


        </>
    )
}

export default DisplayBreachedAccount;