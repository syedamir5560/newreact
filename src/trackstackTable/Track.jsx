import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import React, { useState } from 'react'
import { columnDef } from './columns'
import tabledata from './table.json'
import { Container } from 'react-bootstrap'
import styles from './container.module.css'




function Track() {

    let [filteringData, setFilteringData] = useState('')
    let [sortingData, setSortingData] = useState([])


    const tableInstance = useReactTable({
        columns: columnDef,
        data: tabledata,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            globalFilter: filteringData,
            sorting: sortingData

        },
        onGlobalFilterChange: setFilteringData,
        onSortingChange: setSortingData
    })

    // console.log(tableInstance.getHeaderGroups());
    console.log(tableInstance.getRowModel().rows);
    return (


        <div>
            <input type='text' name=''
                className='form-control'
                value={filteringData}
                onChange={(e) => setFilteringData(e.target.value)}
            />


            <table className="table">
                <thead>
                    {
                        tableInstance.getHeaderGroups().map(ele1 => (
                            <tr key={ele1.id}>
                                {
                                    ele1.headers.map(ele2 => (
                                        <th colSpan={ele2.colSpan} key={ele2.id}
                                            onClick={ele2.column.getToggleSortingHandler()}
                                        >

                                            {
                                                flexRender(
                                                    ele2.column.columnDef.header,
                                                    ele2.getContext()
                                                )
                                            }
                                            {
                                                { asc: '⬆️', dec: '⬇️' }[ele2.column.getIsSorted() ?? null]
                                            }
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody>
                    {
                        tableInstance.getRowModel().rows.map(ele1 => {
                            return <tr key={ele1.id}>
                                {
                                    // console.log(ele1.getVisibleCells())
                                    ele1.getVisibleCells().map(ele2 => {
                                        return <td key={ele2.id}>
                                            {
                                                flexRender(
                                                    ele2.column.columnDef.cell,
                                                    ele2.getContext()
                                                )
                                            }

                                        </td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>

            <hr />
            {/* <button className='btn btn-primary' onClick={() => tableInstance.setPageIndex(0)}>

                First Page
            </button>

            <button className='btn btn-primary' onClick={() => tableInstance.previousPage()}>
                Previuos Page
            </button>
            <button className='btn btn-primary' onClick={() => tableInstance.nextPage()}>
                Next Page
            </button>

            <button className='btn btn-primary' onClick={() => tableInstance.setPageIndex(tableInstance.getPageCount() - 1)}>
                last Page
            </button> */}


       <Container className={styles.container}>
       <a href="" onClick={(e) => e.preventDefault(tableInstance.previousPage())} disabled={!tableInstance.getCanPreviousPage()} className={styles.containera}>previos Page</a>
        <a href="" onClick={(e) => e.preventDefault(tableInstance.setPageIndex(0))}  className={styles.containera}>1</a>
        <a href=""onClick={(e) => e.preventDefault(tableInstance.setPageIndex(1))} className={styles.containera}>2</a>
        <a href="" onClick={(e) => e.preventDefault(tableInstance.nextPage())} className={styles.containera }  >Next page</a>
        <a href="" onClick={(e) => e.preventDefault(tableInstance.setPageIndex(tableInstance.getPageCount()-1))} className={styles.containera }  >Last page</a>
       </Container>
    

            <hr />
        </div>
    )
}

export default Track