import React, { useEffect, useState } from 'react'
import ProtectedRoute from '../ProtectedRoute'
import Title from '../../partials/Title'
import axios from 'axios';

const CareerPage = () => {
    const [data, setData] = useState([])




    const getApplliedData = async () => {
        const data = await axios.get((`${import.meta.env.VITE_EXPRESS_URL}/api/user/getAppliedDetails`));
        setData(data.data.data)

        // console.log("Applied Details", data.data.data);

    }
    useEffect(() => {
        getApplliedData()

    }, [])

    const showPdf = (pdf) => {
        window.open(`${import.meta.env.VITE_EXPRESS_URL}/files/${pdf}`, "_blank", "noreferrer");
        // setPdfFile(`http://localhost:4000/files/${pdf}`)
    };

    return (
        <ProtectedRoute>
            <Title title="See all the applied Candidate" iconClass="bi bi-building-check" />

            <h2>Career Page</h2>

            {
                data.map((d) => (
                    <div key={d._id}>
                        <h1>Name -  {d.fullName}</h1>
                        <h2> Email -  {d.email}</h2>
                        <h3>Phone - {d.phone}</h3>
                        <h4> Job Title -  {d.jobTitle}</h4>
                        <h3>  Address - {d.address}</h3>
                        {
                            <button onClick={() => showPdf(d.resume)}> Show Resume

                            </button>
                        }

                    </div>

                ))
            }

        </ProtectedRoute>
    )
}

export default CareerPage
