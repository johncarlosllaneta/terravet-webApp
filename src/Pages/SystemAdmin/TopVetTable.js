import React from 'react'
import DataTable from "react-data-table-component";
function TopVetTable() {
    const dataRatings = [
        { id: 1, vet_name: "We Are Vet - Animal Clinic", ratings: "4/5 Stars" },
        { id: 2, vet_name: "One Vet Animal Center", ratings: "2/5 Stars" },
        { id: 3, vet_name: "Pet Care Veterinary Clinic", ratings: "3/5 Stars" },
        { id: 4, vet_name: "All for One Veterinary Clinic", ratings: "4/5 Stars" },
        { id: 5, vet_name: "I Love Pet - Animal Clinic", ratings: "5/5 Stars" },
    ];
    const columnsRatings = [
        {
            name: "Vet Name",
            selector: "vet_name",
            sortable: true,
        },
        {
            name: "Ratings",
            selector: "ratings",
            sortable: true,
            right: true,
        },
    ];

    return (
        <div>
            <DataTable
                style={{ textAlign: 'left' }}
                title="Top Vet in Ratings"
                pagination={true}
                paginationPerPage={3}
                paginationRowsPerPageOptions={[5, 10, 20]}
                columns={columnsRatings}
                data={dataRatings}
                responsive={true}

            />
        </div>
    )
}

export default TopVetTable
