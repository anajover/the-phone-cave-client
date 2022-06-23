import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { getAllPhonesService } from "../services/phones.services";

function PhonesList() {

    const [allPhones, setAllPhones] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        getAllPhones()
    }, [])

    const getAllPhones = async () => {

        try {

            const response = await axios.get("https://github.com/anajover/technical_challenge_WD/tree/main/data")

            setAllPhones(response.data)
            console.log(response.data)
        } catch(error) {
            navigate("/error")
        }
    }

    return (
        <div>
            <h3>Phone List</h3>

            {/* {allPhones === null && <h3>... Loading</h3>}

            {allPhones.map((eachPhone) => {
                return(
                <div>
                    {eachPhone.name}
                </div>
                )
                
            })} */}

        </div>
    )
}

export default PhonesList;