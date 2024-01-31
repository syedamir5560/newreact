

// {
//     "id": 1,
//     "first_name": "Isador",
//     "last_name": "Kruger",
//     "email": "ikruger0@huffingtonpost.com",
//     "gender": "Male",
//     "dob": "2023-04-28T11:19:35Z"
//   },

import { createColumnHelper } from "@tanstack/react-table"
import moment from "moment"

const columnHelper = createColumnHelper()

export const columnDef = [

columnHelper.accessor("id",{header:'ID'}),
{
    accessorFn:(row)=>`${row.first_name} ${row.last_name}`,
    header:'Full Name'
},
    // {
    //     accessorKey:'id',
    //     header:'ID'
    // },
    // {
    //     accessorKey:'first_name',
    //     header:'First-Name'
    // },
    // {
    //     accessorKey:'last_name',
    //     header:'Last-Name'
    // },
    {
        accessorKey:'email',
        header:'Email'
    },
    {
        accessorKey:'gender',
        header:'Gender'
    },
    {
        accessorKey:'dob',
        header:'Date-Of-Birth',
        cell:({getValue})=>moment(new Date(getValue())).format
        ('YYYY-MM-DD')
    }
]