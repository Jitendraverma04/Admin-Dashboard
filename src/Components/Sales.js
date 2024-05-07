import React from 'react'
import "./Sales.css"
export default function Sales() {

  return (
    <div>
      <div className="Sales">
        <h3>Recent Sells</h3>
        <br/>
        <div className="Sale-content" >
            
<table style={{width:"100",borderCollapse:"collapse"}}>
  <tr>
    <th>Date</th>
    <th>Invoice</th>
    <th>Customer</th>
    <th>Amount</th>
    <th>Status</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>10/03/2024</td>
    <td>INV-0123</td>
    <td>Moris</td>
    <td>$100</td>
    <td>Paid</td>
    <td><button>Detail</button></td>
  </tr>
  <tr>
    <td>14/03/2024</td>
    <td>INV-0114</td>
    <td>Alex</td>
    <td>$300</td>
    <td>Paid</td>
    <td><button>Detail</button></td>
  </tr>
  <tr>
   <td>17/03/2024</td>
    <td>INV-0171</td>
    <td>David</td>
    <td>$300</td>
    <td>Pending</td>
    <td><button>Detail</button></td>
  </tr>
  <tr>
    <td>18/03/2024</td>
    <td>INV-0113</td>
    <td>Diana</td>
    <td>$500</td>
    <td>Paid</td>
    <td><button>Detail</button></td>
  </tr>
  <tr>
   <td>26/03/2024</td>
    <td>INV-0163</td>
    <td>Viana</td>
    <td>$50</td>
    <td>Pending</td>
    <td><button>Detail</button></td>
  </tr>
  <tr>
   <td>10/04/2024</td>
    <td>INV-0143</td>
    <td>Mike</td>
    <td>$420</td>
    <td>Paid</td>
    <td><button>Detail</button></td>
  </tr>
</table>
        </div>
      </div>
    </div>
  )
}
