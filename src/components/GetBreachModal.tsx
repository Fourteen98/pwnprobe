import React from "react";
import {Modal} from "antd";


interface GetBreachModalProps {
    setBreachModalOpen: (value: (((prevState: boolean) => boolean) | boolean)) => void,
    getBreachModal: boolean
}

const GetBreachModal: React.FC<GetBreachModalProps> = ({ setBreachModalOpen, getBreachModal }: GetBreachModalProps) => {

    return(
        <>
            <Modal
                title="Notify Me"
                style={{ top: 20 }}
                open={getBreachModal}
                onOk={() => setBreachModalOpen(false)}
                onCancel={() => setBreachModalOpen(false)}
            >
                <div className={"flex flex-col gap-5"}>
                    <p>Get notified when future pwnage occurs and your account is compromised.</p>
                    <input type="text" placeholder="Enter your email" className={"w-full border-2 border-gray-200"} />
                </div>
            </Modal>
        </>
    )
}

export default GetBreachModal;