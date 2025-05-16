import React from 'react'
import { Table } from 'react-bootstrap'
import { FaRegHeart } from "react-icons/fa6";

export default function StoreTable() {
    return (
        <>
            <Table responsive>
                <thead>
                    <tr>
                        <th className='t-heading store-name'>Store Name</th>
                        <th className='t-heading'>Revenue</th>
                        <th className='t-heading'>Visitors</th>
                        <th className='t-heading'>Current Users</th>
                        <th className='t-heading'>Products</th>
                        <th className='t-heading'>Plan</th>
                        <th className='t-heading'>Likes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='table-content store-name'>Zara Collection</td>
                        <td className='table-content'>$1515</td>
                        <td className='table-content'>150</td>
                        <td className='table-content'> <span className='green-dot'></span> 25</td>
                        <td className='table-content'>400</td>
                        <td className='table-content'>Super Efficient <span>(Demigod Mode)</span> </td>
                        <td className='table-content'><FaRegHeart className='red-heart' />222</td>
                    </tr>
                    <tr>
                        <td className='table-content store-name'>Raymond</td>
                        <td className='table-content'>$1515</td>
                        <td className='table-content'>150</td>
                        <td className='table-content'> <span className='green-dot'></span> 25</td>
                        <td className='table-content'>400</td>
                        <td className='table-content'>Super Efficient <span>(Demigod Mode)</span> </td>
                        <td className='table-content'><FaRegHeart className='red-heart' />222</td>
                    </tr>
                    <tr className='puma-nike-bg'>
                        <td className='table-content store-name'>Puma</td>
                        <td className='table-content'>$1515</td>
                        <td className='table-content'>150</td>
                        <td className='table-content'> <span className='green-dot'></span> 25</td>
                        <td className='table-content'>400</td>
                        <td className='table-content'>Super Efficient <span>(Demigod Mode)</span> </td>
                        <td className='table-content'><FaRegHeart className='red-heart' />222</td>
                    </tr>
                    <tr className='puma-nike-bg'>
                        <td className='table-content store-name'>Nike</td>
                        <td className='table-content'>$1515</td>
                        <td className='table-content'>150</td>
                        <td className='table-content'> <span className='green-dot'></span> 25</td>
                        <td className='table-content'>400</td>
                        <td className='table-content'>Super Efficient <span>(Demigod Mode)</span> </td>
                        <td className='table-content'><FaRegHeart className='red-heart' />222</td>
                    </tr>
                    <tr>
                        <td className='table-content store-name'>H&M</td>
                        <td className='table-content'>$1515</td>
                        <td className='table-content'>150</td>
                        <td className='table-content'> <span className='green-dot'></span> 25</td>
                        <td className='table-content'>400</td>
                        <td className='table-content'>Super Efficient <span>(Demigod Mode)</span> </td>
                        <td className='table-content'><FaRegHeart className='red-heart' />222</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}